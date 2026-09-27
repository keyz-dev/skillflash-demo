import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsFile = path.join(root, "src/lib/data/skills.ts");
const dataFiles = [
  "src/lib/data/articles.ts",
  "src/lib/data/events.ts",
  "src/lib/data/experts.ts",
  "src/lib/data/media.ts",
  "src/lib/data/teams.ts",
  "src/lib/data/search-results.ts",
];

const skillsText = fs.readFileSync(skillsFile, "utf8");
const validIds = new Set(
  [...skillsText.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]),
);

const invalid = [];

for (const file of dataFiles) {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  const ids = [
    ...text.matchAll(/\[\s*"([^"]+)"\s*\]|mainSkillIds:\s*\[(.*?)\]/gs),
  ].flatMap((match) => {
    if (match[1]) return [match[1]];
    return [...(match[2] || "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  });

  for (const id of ids) {
    if (!validIds.has(id)) {
      invalid.push(`${file}: ${id}`);
    }
  }
}

if (invalid.length) {
  console.error("Invalid skill ids found:");
  for (const item of invalid) console.error(` - ${item}`);
  process.exit(1);
}

console.log("All data files use valid canonical skill ids.");
