import { mkdirSync, writeFileSync } from "node:fs";

// One fixed string, no randomness, no input, no network: every run
// writes exactly the same bytes to /output/entry.txt.
const JOKE =
  "Monday morning, my bed promoted me: from lying down to lying to myself about getting up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
