# Design: Disambiguate colliding schema names & ship compiled `dist`

**Date:** 2026-07-17
**Status:** Approved
**Package:** `@alexlegal/yousign`

## Problem

The Yousign OpenAPI spec (`swagger-v3.json`) defines pairs of schema components whose
names differ only by casing and underscores:

| Raw schema key | Shape | Referenced by |
|---|---|---|
| `SignatureRequest_EmailNotification` | has `custom_text` + **deprecated** `custom_note`, `nullable`, `minProperties: 1` | `CreateSignatureRequest`, `UpdateSignatureRequest` (write / input) |
| `SignatureRequest_email_notification` | `custom_note` **required**, no `custom_text` | `SignatureRequest` (read / response) |
| `SignatureRequest_EmailNotification_Sender` | `type` / `custom_name` optional | the write notification's `sender` |
| `SignatureRequest_email_notification_sender` | `type` / `custom_name` **required** | the read notification's `sender` |

When `swagger-typescript-api` normalizes schema names to PascalCase TypeScript
identifiers, each pair collapses to the same name — `SignatureRequestEmailNotification`
and `SignatureRequestEmailNotificationSender`. The generated `src/api.ts` therefore
declares each symbol twice (once as `export type`, once as `export interface`).

This is illegal TypeScript — **TS2300: Duplicate identifier**; a type alias and an
interface of the same name can never merge. Lenient toolchains (swc, Next.js) strip
types without full checking and tolerate it, but stricter parsers — notably the
oxc/rolldown parser used by our bundler — reject the file outright. Consumers currently
carry a local patch that deletes one of the two declarations.

That patch is also **subtly wrong**: the two colliding schemas have genuinely different
shapes, and `$ref`s point at each. Blindly dropping one declaration silently gives every
reference to the dropped schema the wrong type (e.g. the read model would lose its
required `custom_note` / gain a non-existent `custom_text`).

The fix belongs in this package: emit both variants as distinct, valid types so no
consumer patch is needed — and additionally ship a compiled `dist/` so downstream
bundlers never parse the TypeScript source at all.

## Chosen approach

### 1. Disambiguation via the generator's own `onFormatTypeName` hook

`swagger-typescript-api` v13 exposes a `--custom-config <file>` flag (loaded via `c12`)
whose config is deep-merged (`lodash.merge`) with the generator defaults. The
`hooks.onFormatTypeName(formattedName, rawName, schemaType)` hook lets us override the
emitted identifier for a given **raw** schema name.

Internals that make this correct (verified by reading `swagger-typescript-api@13.2.8`
`dist/src-*.js`):

- `TypeNameFormatter.format(name)` caches by the **raw** name and calls
  `onFormatTypeName(formattedName, rawName, schemaType)`.
- Both type **declarations** and **`$ref` resolution** go through this same formatter
  with the raw schema key. So one override keyed on the raw name fixes the declaration
  **and every reference** to it, consistently.

Config file (`swagger-typescript-api.config.js`, ESM `export default`):

```js
// Disambiguate schema names that collide after PascalCase normalization.
// Keyed on the RAW schema name: the override applies to the declaration AND
// every $ref that resolves to it (the generator caches type names by raw name).
const RENAME = {
  SignatureRequest_email_notification: "SignatureRequestEmailNotificationResponse",
  SignatureRequest_email_notification_sender: "SignatureRequestEmailNotificationResponseSender",
};

export default {
  hooks: {
    onFormatTypeName: (formattedName, rawName /*, schemaType */) => {
      // Returning undefined keeps the generator's default name.
      return RENAME[rawName];
    },
  },
};
```

The **read / response** side is renamed (write side keeps the clean name, since it is
what consumers construct for Create/Update and is referenced more widely). Result:

- `SignatureRequestEmailNotification` / `SignatureRequestEmailNotificationSender` — write
  model (unchanged names).
- `SignatureRequestEmailNotificationResponse` /
  `SignatureRequestEmailNotificationResponseSender` — read model.

**Why not pre-process the spec?** An earlier idea renamed schema keys + rewrote `$ref`s
in a copy of `swagger-v3.json` before generation. The hook is strictly better: the
pristine spec is never touched, there is no `$ref`-rewriting or temp-spec file, and it
uses the tool's supported extension point.

**Proof of concept** (run against the real `swagger-v3.json`): all four types emitted
exactly once and distinct; `$ref`s wired correctly (`CreateSignatureRequest` /
`UpdateSignatureRequest` → base type, `SignatureRequest` → `...Response` type); zero
duplicate top-level names in the file; `tsc --strict --noEmit` exits 0 with zero TS2300.

### 2. Ship compiled `dist/*.js` + `*.d.ts`

Even though the disambiguation makes the source valid TypeScript, shipping compiled
output is the belt-and-suspenders layer: a consumer's bundler reads `dist/api.js` (types
already stripped) and consumes `dist/api.d.ts` as trusted declarations, so no downstream
parser ever touches the `.ts` source.

- Add `typescript` as a devDependency.
- Add `tsconfig.build.json`: `target: ES2020`, `module: CommonJS`, `declaration: true`,
  `outDir: dist`, `rootDir: src`, `strict: true`, `skipLibCheck: true`, includes
  `src/api.ts`.
- `package.json`:
  - `main` → `dist/api.js`
  - `types` → `dist/api.d.ts`
  - add `files: ["dist"]` (only the compiled output is published)
  - scripts:
    - `generate`: `swagger-typescript-api generate -p ./swagger-v3.json -o ./src -n api.ts --custom-config ./swagger-typescript-api.config.js`
    - `build`: `tsc -p tsconfig.build.json`
    - `verify`: `node scripts/verify-api.mjs`
    - `prepublishOnly`: `yarn build`
- **Module format:** CommonJS only (universally importable, including by bundlers). ESM
  can be added later if a consumer needs tree-shaking; out of scope now (YAGNI).
- `src/api.ts` remains committed (the generated source of truth). `dist/` is gitignored
  and built in CI (not committed).

### 3. CI publish workflow

`.github/workflows/npm-publish.yml` currently publishes with no build step and no
`files` field (it ships raw `src/api.ts`). Update the publish job to:

1. `actions/checkout`
2. `actions/setup-node` (Node 18, `registry-url: https://registry.npmjs.org/`)
3. `corepack enable` (repo declares `packageManager: yarn@3.6.0`)
4. `yarn install --immutable`
5. `yarn verify`
6. `yarn build`
7. `npm publish --access public`

`prepublishOnly: "yarn build"` is the safety net so a manual publish cannot ship a stale
or empty `dist/`.

**Package-manager cleanup:** the repo has both `yarn.lock` and `package-lock.json` while
`packageManager` declares `yarn@3.6.0`. Remove `package-lock.json` so the CI install step
is unambiguous (yarn is authoritative).

### 4. Verification & future-collision guard

No test framework exists. The real gate is `tsc` itself — it throws TS2300 on duplicate
identifiers, so a clean `yarn build` proves the collision is gone. Layered on top:

`scripts/verify-api.mjs` (run as `yarn verify`, before build in CI) asserts against the
generated `src/api.ts`:

1. **No duplicate declarations:** no top-level exported identifier (`export type` /
   `export interface` / `export enum`) appears more than once anywhere in the file.
2. **Expected names exist:** all four of `SignatureRequestEmailNotification`,
   `SignatureRequestEmailNotificationSender`,
   `SignatureRequestEmailNotificationResponse`,
   `SignatureRequestEmailNotificationResponseSender` are declared exactly once.
3. **Correct `$ref` wiring / shape differences:**
   - `SignatureRequest` response uses `...Response` (required `custom_note`, no
     `custom_text`).
   - `CreateSignatureRequest` / `UpdateSignatureRequest` use the base type (has
     `custom_text`, deprecated optional `custom_note`).

This script is the **fail-loud guard for future spec updates**: a new Yousign spec that
introduces a fresh collision without a corresponding `RENAME` entry would produce a
duplicate identifier, which `verify` (and `tsc` in `build`) would reject rather than
silently regenerating a broken file.

## Components summary

| File | Change |
|---|---|
| `swagger-typescript-api.config.js` | **new** — `onFormatTypeName` rename map |
| `scripts/verify-api.mjs` | **new** — duplicate / wiring assertions |
| `tsconfig.build.json` | **new** — CJS + declarations → `dist/` |
| `src/api.ts` | regenerated with disambiguated names |
| `package.json` | `main`/`types`→`dist`, `files`, scripts, `typescript` devDep |
| `.gitignore` | add `dist/` |
| `.github/workflows/npm-publish.yml` | install → verify → build → publish |
| `package-lock.json` | **removed** |

## Out of scope

- ESM (`.mjs`) dist output — CommonJS only for now.
- Changing the HTTP client type or any generated API surface beyond the four renamed
  types.
- Broader spec-normalization tooling — only the two known collisions are handled; new
  collisions are surfaced (fail-loud) rather than auto-resolved.

## Success criteria

1. `yarn generate` produces a `src/api.ts` with the four distinct types and correct
   `$ref` wiring.
2. `yarn verify` passes (no duplicate identifiers; expected names & shapes present).
3. `yarn build` compiles clean (zero TS2300, zero errors) and emits `dist/api.js` +
   `dist/api.d.ts`.
4. A published package exposes `dist/api.js` (`main`) and `dist/api.d.ts` (`types`); no
   consumer needs a local patch.
