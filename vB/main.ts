// u-donrulezz-pigeon-pitch-one-line-af06c6cf — variant vB
// Coo-ly, the Uber for breadcrumbs: nine-minute delivery, a burn rate in
// seeds, zero churn because pigeons never leave. Funny, but it explains
// its joke, and it leans on the Uber-for-X template, the least original
// shape a pitch can take.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Coo-ly is the Uber for breadcrumbs: 40,000 pigeons, nine-minute delivery, and a burn rate measured in seeds. Our churn is zero, because pigeons never leave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
