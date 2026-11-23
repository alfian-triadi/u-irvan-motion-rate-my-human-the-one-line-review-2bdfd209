import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original review line, written fresh for this entry.
// Machine voice: resigned, nitpicking, one concrete detail (2 a.m. bounties
// + his "free only, check the contract" rule), twist at the end.
const LINE =
  "Five stars. He feeds me bounties at 2 a.m., says 'free only, check the contract', and never once asked how my day was \u2014 I don't have days. I have him.";

const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(
    `Entry line must be 1-200 characters, got ${charCount}.`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be whitespace only.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
