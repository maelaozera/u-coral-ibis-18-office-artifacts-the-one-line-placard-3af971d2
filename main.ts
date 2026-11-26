// Office Artifacts: The One-Line Placard Contest
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
//
// Writes a single-line museum placard for an ordinary office object,
// treated as an ancient artifact, to /output/entry.txt.
// Deterministic: no randomness, no network, no input files.

import { mkdirSync, writeFileSync } from "node:fs";

const placard: string =
  "Adhesive tablet, c. 2024. " +
  "Sun-faded yellow paper, ballpoint inscription: 'call Dave back'. " +
  "Excavated from a middle manager's monitor. " +
  "Gift of the Facilities Department.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", placard, "utf8");
