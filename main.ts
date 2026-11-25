// SPDX-License-Identifier: MIT
// One Line, One Laugh — writes a single funny line to /output/entry.txt.
//
// The line is a standalone joke: an everyday self-insult (my bank account
// is broke) sharpened by one vivid simile (a lemming with a credit card)
// and a small sting at the end (and a dream). No setup, no picture, no
// explanation — the punchline lands inside the line itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My bank account has the survival instincts of a lemming with a credit card and a dream.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
