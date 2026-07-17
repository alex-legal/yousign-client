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
const expected = [
  "SignatureRequestEmailNotification",
  "SignatureRequestEmailNotificationSender",
  "SignatureRequestEmailNotificationResponse",
  "SignatureRequestEmailNotificationResponseSender",
];
for (const name of expected) {
  const c = counts.get(name) || 0;
  if (c !== 1) errors.push(`Expected '${name}' declared exactly once, found ${c}`);
}

// 3. $ref wiring: write model uses the base type, read model uses the Response type.
if (!/email_notification\?: SignatureRequestEmailNotification;/.test(src))
  errors.push("Write wiring missing: email_notification?: SignatureRequestEmailNotification;");
if (!/email_notification: SignatureRequestEmailNotificationResponse;/.test(src))
  errors.push("Read wiring missing: email_notification: SignatureRequestEmailNotificationResponse;");

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
const resp = extractBody(src, "SignatureRequestEmailNotificationResponse");
if (resp !== null) {
  if (!/custom_note: string \| null;/.test(resp))
    errors.push("Response type should have required `custom_note: string | null;`");
  if (/custom_text/.test(resp)) errors.push("Response type must NOT contain custom_text");
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
