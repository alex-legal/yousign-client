# Fix Duplicate API Types & Ship Compiled `dist` — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate the TS2300 duplicate-identifier errors in the generated `src/api.ts` by pinning `swagger-typescript-api` to a modern version that auto-resolves the schema-name collision, and additionally ship a compiled CommonJS `dist/` so downstream bundlers never parse the TypeScript source.

**Architecture:** The duplicate types are a bug in old `swagger-typescript-api` that newer versions (13.12.5) already fix — the fix is to pin the generator to an exact version (killing the non-deterministic `^13.2.8` range) and regenerate from the pristine `swagger-v3.json`. A `tsc` build step compiles `src/api.ts` → `dist/api.js` + `dist/api.d.ts`. A pure-Node `verify` script guards against any future reintroduction of duplicates. The package standardizes on pnpm 11.

**Tech Stack:** Node 22, pnpm 11.13.1, swagger-typescript-api 13.12.5 (exact), TypeScript 5.

## Global Constraints

- **Package manager:** pnpm, pinned via `packageManager: "pnpm@11.13.1"`; activated with `corepack enable`. All package scripts run via `pnpm run <script>`.
- **Generator pin:** `swagger-typescript-api` MUST be an **exact** version `13.12.5` in `devDependencies` — no caret, no range. This is what makes `generate` reproducible and what fixes the collision.
- **`swagger-v3.json` stays pristine** — never edit it.
- **`src/api.ts` is committed** (generated source of truth). **`dist/` is gitignored** and built in CI only.
- **Module format:** CommonJS only for `dist` (`module: CommonJS`).
- **Node:** CI uses Node 22 LTS.
- The generate command is exactly: `swagger-typescript-api generate -p ./swagger-v3.json -o ./src -n api.ts` (no custom config).

---

### Task 1: Verification guard script (failing first)

Write the guard that detects the duplicate-identifier defect. It must FAIL against the current committed `src/api.ts` and (after Task 2) PASS against the regenerated file.

**Files:**
- Create: `scripts/verify-api.mjs`
- Modify: `package.json` (add `verify` script)

**Interfaces:**
- Produces: a `verify` npm script → `node scripts/verify-api.mjs`. Exit 0 = pass, exit 1 = fail. Later tasks (CI) call `pnpm run verify`.

- [ ] **Step 1: Write the guard script**

Create `scripts/verify-api.mjs` with exactly this content:

```js
#!/usr/bin/env node
// Guards the generated src/api.ts against the duplicate-identifier (TS2300)
// defect and confirms the SignatureRequest email-notification write/read types
// stay distinct and correctly shaped. Pure Node — no dependencies.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const file = resolve(root, "src/api.ts");
const src = readFileSync(file, "utf8");
const errors = [];

// Collect every top-level exported type/interface/enum declaration.
const declRe = /^export\s+(?:declare\s+)?(type|interface|enum)\s+([A-Za-z0-9_]+)/;
const counts = new Map();
for (const line of src.split("\n")) {
  const m = declRe.exec(line);
  if (m) counts.set(m[2], (counts.get(m[2]) || 0) + 1);
}

// 1. No identifier may be declared more than once (that is the TS2300 defect).
const dups = [...counts.entries()].filter(([, c]) => c > 1);
if (dups.length)
  errors.push(
    "Duplicate top-level declarations (TS2300 risk): " +
      dups.map(([n, c]) => `${n} (${c}x)`).join(", ")
  );

// 2. The four disambiguated email-notification types must each exist exactly once.
//    The read-model variants carry the generator's native numeric suffix ("1").
const expected = [
  "SignatureRequestEmailNotification",
  "SignatureRequestEmailNotificationSender",
  "SignatureRequestEmailNotification1",
  "SignatureRequestEmailNotificationSender1",
];
for (const name of expected) {
  const c = counts.get(name) || 0;
  if (c !== 1) errors.push(`Expected '${name}' declared exactly once, found ${c}`);
}

// 3. $ref wiring: write model uses the base type, read model uses the "1" variant.
if (!/email_notification\?: SignatureRequestEmailNotification;/.test(src))
  errors.push("Write wiring missing: email_notification?: SignatureRequestEmailNotification;");
if (!/email_notification: SignatureRequestEmailNotification1;/.test(src))
  errors.push("Read wiring missing: email_notification: SignatureRequestEmailNotification1;");

// Extract the `{ ... }` body of a named type/interface, brace-balanced.
function extractBody(text, name) {
  const idx = text.search(new RegExp(`^export (?:type|interface) ${name}\\b`, "m"));
  if (idx === -1) return null;
  const rest = text.slice(idx);
  const open = rest.indexOf("{");
  if (open === -1) return null;
  let depth = 0;
  for (let i = open; i < rest.length; i++) {
    if (rest[i] === "{") depth++;
    else if (rest[i] === "}" && --depth === 0) return rest.slice(open + 1, i);
  }
  return null;
}

// 3a. Read model: required custom_note, no custom_text.
const resp = extractBody(src, "SignatureRequestEmailNotification1");
if (resp !== null) {
  if (!/custom_note: string \| null;/.test(resp))
    errors.push("Read type (SignatureRequestEmailNotification1) should have required `custom_note: string | null;`");
  if (/custom_text/.test(resp))
    errors.push("Read type (SignatureRequestEmailNotification1) must NOT contain custom_text");
}
// 3b. Write model: has custom_text.
const base = extractBody(src, "SignatureRequestEmailNotification");
if (base !== null && !/custom_text\?: SignatureRequestEmailNotificationCustomText;/.test(base))
  errors.push("Base type should contain `custom_text?: SignatureRequestEmailNotificationCustomText;`");

if (errors.length) {
  console.error("verify-api: FAIL");
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log("verify-api: OK (no duplicate identifiers; email_notification types correct)");
```

- [ ] **Step 2: Add the `verify` script to package.json**

In `package.json`, add to the `scripts` object (keep the existing `generate` line):

```json
"verify": "node scripts/verify-api.mjs"
```

- [ ] **Step 3: Run the guard against the current file — verify it FAILS**

Run: `node scripts/verify-api.mjs`
Expected: exit code 1, output beginning:
```
verify-api: FAIL
  - Duplicate top-level declarations (TS2300 risk): SignatureRequestEmailNotification (2x), SignatureRequestEmailNotificationSender (2x)
  - Expected 'SignatureRequestEmailNotification' declared exactly once, found 2
  ...
  - Read wiring missing: email_notification: SignatureRequestEmailNotification1;
```
This failure confirms the guard detects the real defect.

- [ ] **Step 4: Commit**

```bash
git add scripts/verify-api.mjs package.json
git commit -m "test: add verify-api guard detecting duplicate identifiers"
```

---

### Task 2: Pin generator, standardize on pnpm, regenerate → guard passes

Set up the pnpm toolchain, pin `swagger-typescript-api` to exact `13.12.5`, add TypeScript, remove the stale lockfiles, and regenerate `src/api.ts`. After this task the Task 1 guard passes.

**Files:**
- Modify: `package.json` (`packageManager`, `devDependencies`)
- Delete: `yarn.lock`, `package-lock.json`
- Create: `pnpm-lock.yaml` (generated by pnpm)
- Regenerate: `src/api.ts`

**Interfaces:**
- Consumes: the `verify` script from Task 1.
- Produces: a clean `src/api.ts` containing the four distinct types; a committed `pnpm-lock.yaml`; `packageManager: "pnpm@11.13.1"`.

- [ ] **Step 1: Activate pnpm 11.13.1**

Run:
```bash
export COREPACK_ENABLE_DOWNLOAD_PROMPT=0
corepack prepare pnpm@11.13.1 --activate
corepack pnpm --version
```
Expected: prints `11.13.1`.

- [ ] **Step 2: Edit package.json — pin generator, add TypeScript, set packageManager**

In `package.json`:
- Add top-level key: `"packageManager": "pnpm@11.13.1"`
- Set `devDependencies` to exactly:

```json
"devDependencies": {
  "swagger-typescript-api": "13.12.5",
  "typescript": "^5.6.0"
}
```

(Note: `swagger-typescript-api` is `13.12.5` with **no caret** — exact pin.)

- [ ] **Step 3: Remove the stale lockfiles**

Run:
```bash
git rm yarn.lock package-lock.json
```
Expected: both files staged for deletion.

- [ ] **Step 4: Install with pnpm (generates pnpm-lock.yaml)**

Run: `corepack pnpm install`
Expected: completes without error; a new `pnpm-lock.yaml` appears; `node_modules/` is populated.

- [ ] **Step 5: Regenerate src/api.ts**

Run: `corepack pnpm run generate`
Expected: completes without error. `wc -l src/api.ts` prints ~12,693 lines.

- [ ] **Step 6: Run the guard — verify it now PASSES**

Run: `corepack pnpm run verify`
Expected: exit code 0, output:
```
verify-api: OK (no duplicate identifiers; email_notification types correct)
```

- [ ] **Step 7: Confirm generation is reproducible (byte-stable)**

Run:
```bash
corepack pnpm run generate
git diff --stat src/api.ts
```
Expected: `git diff --stat` shows **no change** to `src/api.ts` on the second run (the pinned generator is deterministic). If it shows changes, the generator is not pinned correctly — stop and fix Step 2.

- [ ] **Step 8: Commit**

```bash
git add package.json pnpm-lock.yaml src/api.ts
git commit -m "fix: pin swagger-typescript-api@13.12.5 and regenerate api.ts (removes duplicate types)

Standardizes on pnpm 11; removes stale yarn.lock and package-lock.json."
```

---

### Task 3: Compile to CommonJS `dist`

Add a TypeScript build that emits `dist/api.js` + `dist/api.d.ts`, and repoint the package entry points at `dist`. Note: because `src/api.ts` carries `// @ts-nocheck`, `tsc` does NOT catch TS2300 duplicates — the `verify` guard is the real gate, so it is chained ahead of `tsc` in the `build` script.

**Files:**
- Create: `tsconfig.build.json`
- Modify: `package.json` (`main`, `types`, `files`, `build` + `prepublishOnly` scripts)
- Modify: `.gitignore` (add `dist/`)

**Interfaces:**
- Consumes: the regenerated `src/api.ts` from Task 2.
- Produces: a `build` npm script → `tsc -p tsconfig.build.json` emitting `dist/api.js` + `dist/api.d.ts`; `main`/`types` pointing at them.

- [ ] **Step 1: Create tsconfig.build.json**

Create `tsconfig.build.json` with exactly:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "declaration": true,
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/api.ts"]
}
```

- [ ] **Step 2: Repoint package.json entry points and add build scripts**

In `package.json`:
- Change `"main": "src/api.ts"` → `"main": "dist/api.js"`
- Change `"types": "src/api.ts"` → `"types": "dist/api.d.ts"`
- Add `"files": ["dist"]`
- Add to `scripts`:

```json
"build": "tsc -p tsconfig.build.json",
"prepublishOnly": "pnpm run build"
```

- [ ] **Step 3: Gitignore the build output**

Append to `.gitignore` (which currently contains only `node_modules`):

```
dist
```

- [ ] **Step 4: Build — verify guard passes, then tsc compiles clean**

Run: `corepack pnpm run build`
Expected: exit code 0, no output (no errors). This proves zero TS2300 duplicate-identifier errors.

- [ ] **Step 5: Verify the emitted artifacts exist and load**

Run:
```bash
ls dist
node -e "const a = require('./dist/api.js'); console.log('require OK, sample exports:', Object.keys(a).slice(0,3))"
```
Expected: `ls dist` shows `api.d.ts` and `api.js`; the node command prints `require OK, sample exports: [ ... ]` (e.g. `FontFamily`, `WatchlistStatus`).

- [ ] **Step 6: Confirm dist is NOT tracked by git**

Run: `git status --porcelain dist`
Expected: **no output** (dist is ignored).

- [ ] **Step 7: Commit**

```bash
git add tsconfig.build.json package.json .gitignore
git commit -m "build: compile src/api.ts to CommonJS dist (main/types -> dist)"
```

---

### Task 4: Update the CI publish workflow

Rewrite the publish workflow to install with pnpm, run the guard, build, then publish — so consumers receive the compiled `dist`, not raw `src/api.ts`.

**Files:**
- Modify: `.github/workflows/npm-publish.yml`

**Interfaces:**
- Consumes: `verify`, `build` scripts; `packageManager: pnpm@11.13.1`; committed `pnpm-lock.yaml`.

- [ ] **Step 1: Replace the workflow file**

Overwrite `.github/workflows/npm-publish.yml` with exactly:

```yaml
# Publishes @alexlegal/yousign to npm on push to main.
name: Node.js Package

on:
  push:
    branches:
      - "main"

jobs:
  publish-npm:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          registry-url: https://registry.npmjs.org/
      - name: Enable corepack (pnpm)
        run: corepack enable
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      - name: Verify generated types
        run: pnpm run verify
      - name: Build dist
        run: pnpm run build
      - name: Publish
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.npm_token }}
```

- [ ] **Step 2: Sanity-check the workflow references real scripts**

Run:
```bash
node -e "const p=require('./package.json'); for (const s of ['verify','build']) if(!p.scripts[s]) throw new Error('missing script: '+s); console.log('scripts present:', p.scripts.verify, '|', p.scripts.build)"
```
Expected: prints `scripts present: node scripts/verify-api.mjs | tsc -p tsconfig.build.json`.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/npm-publish.yml
git commit -m "ci: install with pnpm, verify + build before publish (Node 22)"
```

---

### Task 5: Version bump & changelog

Adopting the newer generator changes the published type surface. Characterize the change, bump the version, and note it.

**Files:**
- Modify: `package.json` (`version`)
- Modify: `README.md` (changelog note)

**Interfaces:**
- Consumes: the regenerated `src/api.ts` (Task 2) vs the original on `main`.

- [ ] **Step 1: Characterize the exported-symbol surface change**

Run (compares the original committed file on `main` against the current regenerated one):
```bash
diff \
  <(git show main:src/api.ts | grep -oE "^export (type|interface|enum|const) [A-Za-z0-9_]+" | awk '{print $3}' | sort -u) \
  <(grep -oE "^export (type|interface|enum|const) [A-Za-z0-9_]+" src/api.ts | awk '{print $3}' | sort -u)
```
Expected: a list of `<` (removed) and `>` (added) exported symbol names. Lines removed on the `<` side that are not just renamed on the `>` side indicate breaking changes. Read this output to decide the version bump.

- [ ] **Step 2: Bump the version**

In `package.json`, change `"version": "1.2.0"`. Recommended: `"version": "2.0.0"` — the generator upgrade renames/removes existing exported types (e.g. the old single `SignatureRequestEmailNotification` response interface is now `SignatureRequestEmailNotification1`), which is a breaking change for type consumers. If Step 1 shows only additions (no removals/renames), a minor bump (`1.3.0`) is acceptable instead. Final choice is the maintainer's.

- [ ] **Step 3: Add a changelog note to README.md**

Append a section to `README.md`:

```markdown
### Changes in 2.0.0

- Pinned `swagger-typescript-api` to `13.12.5` (exact) so type generation is
  reproducible.
- Fixed duplicate `SignatureRequestEmailNotification` / `...Sender` type
  declarations (TS2300). The `SignatureRequest` response now uses
  `SignatureRequestEmailNotification1` / `...Sender1` (the generator's native
  numeric-suffix disambiguation); the create/update request bodies continue to
  use `SignatureRequestEmailNotification` / `...Sender`.
- The package now ships compiled `dist/api.js` + `dist/api.d.ts` (CommonJS)
  instead of raw TypeScript source.
```

(Adjust the version heading to match the number chosen in Step 2.)

- [ ] **Step 4: Verify the package still builds and passes the guard end-to-end**

Run:
```bash
corepack pnpm run verify && corepack pnpm run build && echo "ALL GREEN"
```
Expected: `verify-api: OK ...`, a clean build, then `ALL GREEN`.

- [ ] **Step 5: Commit**

```bash
git add package.json README.md
git commit -m "release: 2.0.0 — reproducible generation, dist output, dedup types"
```

---

## Self-Review

**Spec coverage:**
- §1 Pin generator + regenerate → Task 2. ✓
- §2 Compiled dist → Task 3. ✓
- §3 pnpm toolchain + remove locks → Task 2 (packageManager, lock removal, pnpm-lock.yaml). ✓
- §4 CI workflow → Task 4. ✓
- §5 Verify guard → Task 1 (created) + used in Tasks 2/4/5. ✓
- §6 Version bump & changelog → Task 5. ✓

**Placeholder scan:** No TBD/TODO; all scripts, configs, and workflow content are complete and literal. ✓

**Type/name consistency:** `verify` = `node scripts/verify-api.mjs` and `build` = `tsc -p tsconfig.build.json` are referenced identically in Tasks 1, 3, 4, 5. The four type names are spelled identically throughout. The generate command matches the Global Constraints. ✓

**Note on expected numbers:** `~12,693 lines` and the specific FAIL/PASS output in Tasks 1–2 were captured by running the exact commands against the real spec with pinned 13.12.5 during design. Minor line-count drift is acceptable; the guard (`pnpm run verify`) is the authoritative gate for duplicate identifiers (`tsc` is blinded by the file's `@ts-nocheck` header), not the line count.
