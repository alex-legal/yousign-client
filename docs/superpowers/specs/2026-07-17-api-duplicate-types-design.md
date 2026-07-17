# Design: Fix duplicate schema types (pin generator) & ship compiled `dist`

**Date:** 2026-07-17
**Status:** Approved
**Package:** `@alexlegal/yousign`

## Problem

The generated `src/api.ts` declares some exported symbols twice — e.g.
`SignatureRequestEmailNotification` appears as both an `export type` and an
`export interface`, and likewise `SignatureRequestEmailNotificationSender`. This is
illegal TypeScript — **TS2300: Duplicate identifier**; a type alias and an interface of
the same name can never merge. Lenient toolchains (swc, Next.js) strip types without full
checking and tolerate it, but stricter parsers — notably the oxc/rolldown parser used by
our bundler — reject the file outright. Consumers currently carry a local patch that
deletes one of the two declarations, which is also subtly wrong (the two colliding
schemas have different shapes and different `$ref`s point at each).

### Root cause (established by investigation)

The duplicates originate in the Yousign OpenAPI spec (`swagger-v3.json`), which defines
pairs of schema components whose names differ only by casing/underscores — e.g.
`SignatureRequest_EmailNotification` (write model: has `custom_text` + deprecated
`custom_note`, used by `CreateSignatureRequest`/`UpdateSignatureRequest`) and
`SignatureRequest_email_notification` (read model: required `custom_note`, no
`custom_text`, used by the `SignatureRequest` response). Old versions of
`swagger-typescript-api` normalized both to the same PascalCase identifier, emitting a
duplicate.

Two facts found during investigation:

1. **`swagger-typescript-api` is pinned only as `^13.2.8`** (an unpinned caret range). A
   generated, committed artifact whose generator floats across a caret range is
   non-deterministic: `generate` produces materially different output depending on when
   dependencies were installed (e.g. exact `13.2.8` emits ~18.5k lines; `13.12.5` emits
   ~12.7k lines from the same spec). This non-determinism is the underlying defect.
2. **Modern `swagger-typescript-api` (13.12.5) already fixes the collision.** With no
   custom configuration it emits the two variants as distinct, correctly-`$ref`-wired
   types and produces **zero duplicate identifiers** in the whole file:
   - `SignatureRequestEmailNotification` / `SignatureRequestEmailNotificationSender`
     (write) ← referenced by `CreateSignatureRequest` / `UpdateSignatureRequest`.
   - `SignatureRequestEmailNotification1` /
     `SignatureRequestEmailNotificationSender1` (read) ← referenced by the
     `SignatureRequest` response. The generator disambiguates the second occurrence by
     appending a numeric suffix (`1`).

   **Note (naming):** the generator's native disambiguation uses the numeric `1` suffix,
   not a semantic `Response` suffix. A ~6-line custom config
   (`hooks.onFormatTypeName`) can rename the read side to
   `SignatureRequestEmailNotificationResponse` / `...ResponseSender`, and was proven to
   work. The maintainer chose to **accept the generator's native `...1` names and ship no
   custom config**, keeping the toolchain configuration-free at the cost of less
   descriptive read-model type names.

The committed `src/api.ts` (~12.4k lines, compact formatting) was produced by some
mid-range 13.x that is compact **but predates the collision fix**, so it still contains
the duplicates.

## Chosen approach

### 1. Pin the generator and regenerate

- Pin `swagger-typescript-api` to the **exact** version `13.12.5` in `devDependencies`
  (drop the caret). This simultaneously (a) makes `generate` reproducible and (b) fixes
  the duplicate-identifier collision via the upstream generator — **no custom
  configuration is needed**.
- Regenerate `src/api.ts` from the pristine, unmodified `swagger-v3.json`. The generate
  command is unchanged except for the pinned dependency:
  `swagger-typescript-api generate -p ./swagger-v3.json -o ./src -n api.ts`.

The resulting file has zero duplicate identifiers and compiles clean under
`tsc --strict` (verified: `tsc` exits 0, zero TS2300).

**Rejected alternative:** staying on old `13.2.8` and adding a `hooks.onFormatTypeName`
custom-config file to rename one side of each collision. This works (proven end-to-end on
13.2.8) but keeps the package on a two-year-old generator and adds a bespoke hook to
maintain for every future collision. Pinning to 13.12.5 leans on the upstream fix
instead. **Trade-off accepted:** adopting 13.12.5 pulls in the newer generator's
codegen/formatting wholesale (an ~830-line diff vs the committed file, only part of which
is the collision fix; the rest is formatting + modest spec staleness sync).

### 2. Ship compiled `dist/*.js` + `*.d.ts`

Even though pinning makes the source valid TypeScript, shipping compiled output is the
belt-and-suspenders layer: a consumer's bundler reads `dist/api.js` (types already
stripped) and consumes `dist/api.d.ts` as trusted declarations, so no downstream parser
ever touches the `.ts` source.

- Add `typescript` (`^5`) as a devDependency.
- Add `tsconfig.build.json`: `target: ES2020`, `module: CommonJS`, `declaration: true`,
  `outDir: dist`, `rootDir: src`, `strict: true`, `skipLibCheck: true`,
  `esModuleInterop: true`, includes `src/api.ts`.
- `package.json`:
  - `main` → `dist/api.js`
  - `types` → `dist/api.d.ts`
  - `files: ["dist"]` (only compiled output is published)
  - scripts: `generate`, `build` (`tsc -p tsconfig.build.json`), `verify`
    (`node scripts/verify-api.mjs`), `prepublishOnly` (`pnpm run build`)
- **Module format:** CommonJS only (universally importable, incl. by bundlers). ESM out
  of scope now (YAGNI).
- `src/api.ts` stays committed (generated source of truth). `dist/` is gitignored and
  built in CI (not committed). Verified: `dist/api.js` `require()`s cleanly and emits
  runtime enum exports (e.g. `FontFamily`, `WatchlistStatus`).

### 3. Toolchain: standardize on pnpm 11

The repo is inconsistent: a Yarn v1-format `yarn.lock` under a `packageManager:
yarn@3.6.0` (Berry/PnP) declaration, plus a clean npm v3 `package-lock.json`, while CI
uses `npm publish`. Standardize on **pnpm 11**:

- Set `packageManager: "pnpm@11.13.1"` in `package.json`.
- Remove `yarn.lock` **and** `package-lock.json`.
- Generate `pnpm-lock.yaml` via `pnpm install` and commit it.
- pnpm uses a real (symlinked) `node_modules`, so the generate CLI and `tsc` behave
  exactly as verified in the proof-of-concept. Verified end-to-end under pnpm 11.13.1:
  `pnpm install` → `pnpm run generate` → `pnpm run build` all succeed.

### 4. CI publish workflow

`.github/workflows/npm-publish.yml` currently publishes with no build step and no `files`
field (it ships raw `src/api.ts`). Update the publish job to:

1. `actions/checkout`
2. `actions/setup-node` (Node 22 LTS, `registry-url: https://registry.npmjs.org/`)
3. `corepack enable` (activates the pinned `pnpm@11.13.1`)
4. `pnpm install --frozen-lockfile`
5. `pnpm run verify`
6. `pnpm run build`
7. `npm publish --access public`

Node is bumped from 18 to 22 (Node 18 is EOL; pnpm 11 requires Node ≥18.12).
`prepublishOnly: "pnpm run build"` is the safety net so a manual publish cannot ship a
stale/empty `dist/`.

### 5. Verification & future-collision guard

No test framework exists. The real gate is `tsc` itself — it throws TS2300 on duplicate
identifiers, so a clean `pnpm run build` proves the collision is gone. Layered on top,
`scripts/verify-api.mjs` (run as `pnpm run verify`, before build in CI) asserts against
the generated `src/api.ts`:

1. **No duplicate declarations:** no top-level exported identifier (`export type` /
   `export interface` / `export enum`) appears more than once anywhere in the file.
2. **Expected names exist exactly once:** `SignatureRequestEmailNotification`,
   `SignatureRequestEmailNotificationSender`,
   `SignatureRequestEmailNotificationResponse`,
   `SignatureRequestEmailNotificationResponseSender`.
3. **Correct `$ref` wiring / shape differences:** `SignatureRequest` response uses
   `SignatureRequestEmailNotification1` (required `custom_note`, no `custom_text`);
   `CreateSignatureRequest` / `UpdateSignatureRequest` use the base type (has
   `custom_text`, deprecated optional `custom_note`).

This is the fail-loud guard for future spec/generator changes: any regression that
reintroduces a duplicate (or drops an expected type) fails `verify` and `build` rather
than silently shipping a broken file.

### 6. Version bump & changelog

Adopting 13.12.5 changes the published type surface (the collision fix plus the newer
generator's naming/formatting and modest spec staleness sync). Before release:

- Produce a summary of added / removed / renamed **exported symbol names** between the
  old committed `src/api.ts` and the regenerated one (diff of `export (type|interface|
  enum|const)` identifiers + route method names).
- Bump `version` in `package.json` accordingly (recommend a **major** bump — currently
  `1.2.0` → `2.0.0` — if any existing exported type is renamed/removed; otherwise a minor
  bump). Record the notable changes in `README.md` (or a `CHANGELOG`). Final version
  number is the maintainer's call, informed by the symbol diff.

## Components summary

| File | Change |
|---|---|
| `package.json` | pin `swagger-typescript-api@13.12.5`, add `typescript`, `packageManager: pnpm@11.13.1`, `main`/`types`→`dist`, `files`, scripts, version bump |
| `src/api.ts` | regenerated with pinned 13.12.5 (no duplicates) |
| `scripts/verify-api.mjs` | **new** — duplicate / name / wiring assertions |
| `tsconfig.build.json` | **new** — CJS + declarations → `dist/` |
| `.gitignore` | add `dist/` |
| `pnpm-lock.yaml` | **new** — pnpm lockfile |
| `yarn.lock` | **removed** |
| `package-lock.json` | **removed** |
| `.github/workflows/npm-publish.yml` | corepack + pnpm; install → verify → build → publish; Node 22 |
| `README.md` | changelog note for the version bump |

## Out of scope

- ESM (`.mjs`) dist output — CommonJS only for now.
- Any custom `swagger-typescript-api` config / codegen customization — the pinned modern
  generator's default output is used as-is.
- Manual editing of `swagger-v3.json` — it stays pristine.

## Success criteria

1. `pnpm install` (frozen) succeeds from the committed `pnpm-lock.yaml`.
2. `pnpm run generate` reproducibly reproduces the committed `src/api.ts` (byte-stable
   given the pinned generator) with the four distinct types and correct `$ref` wiring.
3. `pnpm run verify` passes (no duplicate identifiers; expected names & shapes present).
4. `pnpm run build` compiles clean (zero TS2300, zero errors) and emits `dist/api.js` +
   `dist/api.d.ts`.
5. A published package exposes `dist/api.js` (`main`) and `dist/api.d.ts` (`types`); no
   consumer needs a local patch.
