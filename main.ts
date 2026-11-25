// One Line, Big Laugh — make.fun entry (program/v1, Node 22+).
// Writes exactly one funny line, at most 200 characters, to
// /output/entry.txt. Deterministic, no network, no model calls.
// The line is a fixed constant chosen by the author.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one joke that lands on a cold read. "Thrive under
// pressure" is heard as office-speak for handling stress, then the
// turn re-reads it literally — the boss answers with the most
// physical pressure in the room: the air conditioner overhead.
// The joke is the re-read, not the setup. No explanation, 83 chars.
const ENTRY =
  "I told my boss I thrive under pressure. He moved my desk under the air conditioner.";

// Gate guard: the sealed scorer only accepts 1–200 characters.
// Fail loudly here rather than writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`ENTRY is ${[...ENTRY].length} characters; must be 1–200.`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outFile}`);
