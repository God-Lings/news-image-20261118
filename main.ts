// Entry program for make.fun news-image-20261118 (Node 22, standard library
// only). The repository ships entry.png beside this file; the program copies
// it to the grader's output directory. Nothing is generated at run time and
// no network is used, so both graded runs write identical bytes.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The output file keeps the name entry.png either way: the gate tells a
// PNG from a JPEG by its first bytes, not by the extension.
copyFileSync(new URL("./entry.png", import.meta.url), join(outputDir, "entry.png"));
