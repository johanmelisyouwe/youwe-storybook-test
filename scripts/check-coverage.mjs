#!/usr/bin/env node
// Checks that what figma-sync.json calls "complete" or "partial" really covers Figma:
// every variant axis and option is an arg, there is an "All variants" story, and
// template stories exist for each device. Run at the end of every sync, after check-legacy.
//
//   node scripts/check-coverage.mjs
//
// Exit code 1 when a component or template claims more than its stories show.
// (This catches the first-run problem where e.g. Card grid had 3 of its 9 layouts.)

import { readFileSync, existsSync } from 'node:fs';

if (!existsSync('figma-sync.json')) { console.error('check-coverage: figma-sync.json not found'); process.exit(1); }
const sync = JSON.parse(readFileSync('figma-sync.json', 'utf8'));
const problems = [];
const counts = { complete: 0, partial: 0, missing: 0, internal: 0, other: 0 };

const read = (paths) => (paths || []).filter((p) => existsSync(p)).map((p) => readFileSync(p, 'utf8')).join('\n');
const storyFiles = (code) => (Array.isArray(code) ? code : code ? [code] : []).filter((p) => /\.stories\.(tsx|ts|jsx|js|mdx)$/.test(p));
const allFiles = (code) => (Array.isArray(code) ? code : code ? [code] : []);

for (const c of sync.components) {
  counts[c.status] !== undefined ? counts[c.status]++ : counts.other++;
  if (!['complete', 'partial'].includes(c.status)) continue;
  const name = c.figma.name;
  const missingFiles = allFiles(c.code).filter((p) => !existsSync(p));
  if (missingFiles.length) problems.push(`${name}: code path(s) do not exist: ${missingFiles.join(', ')}`);
  const stories = read(storyFiles(c.code));
  if (!stories) { problems.push(`${name}: no story file listed in "code"`); continue; }
  if (c.status === 'complete' && !/export\s+const\s+AllVariants\b/.test(stories)) problems.push(`${name}: no "AllVariants" story (FIGMA-SYNC.md rule 5)`);
  // args and options may also live in shared story helpers listed in "code"
  const all = read(allFiles(c.code));

  // Axes: prefer the full option lists (figma.axes, written by the sync), else axis names.
  const axes = c.figma.axes || Object.fromEntries((c.figma.variantAxes || []).map((a) => [a.replace(/\(\d+\)$/, ''), null]));
  for (const [axis, options] of Object.entries(axes)) {
    if (!new RegExp(`['"\`]?${axis}['"\`]?\\s*:`).test(all)) { problems.push(`${name}: variant axis "${axis}" is not an arg`); continue; }
    if (c.status !== 'complete' || !options) continue;
    const missing = options.filter((o) => !all.includes(`'${o}'`) && !all.includes(`"${o}"`) && !all.includes(`\`${o}\``));
    if (missing.length) problems.push(`${name}: ${axis} options missing from the stories: ${missing.join(', ')}`);
  }
}

const tplCounts = { complete: 0, partial: 0, missing: 0 };
for (const t of sync.templates || []) {
  tplCounts[t.status] = (tplCounts[t.status] || 0) + 1;
  if (!['complete', 'partial'].includes(t.status)) continue;
  const label = `${t.storybook.title} (${t.figma.device})`;
  const files = storyFiles(t.code);
  if (!files.length || files.some((p) => !existsSync(p))) { problems.push(`${label}: story file missing (set "code" in figma-sync.json)`); continue; }
  const src = read(files);
  if (!new RegExp(`export\\s+const\\s+${t.storybook.story}\\b`).test(src)) problems.push(`${label}: no "${t.storybook.story}" story export`);
  if (/Not a component yet/.test(src) && !(t.placeholders || []).length) problems.push(`${label}: has placeholders in the story but none listed in figma-sync.json`);
}

console.log(`components: ${counts.complete} complete, ${counts.partial} partial, ${counts.missing} missing, ${counts.internal} internal`);
console.log(`templates:  ${tplCounts.complete || 0} complete, ${tplCounts.partial || 0} partial, ${tplCounts.missing || 0} missing`);
if (!problems.length) { console.log('check-coverage: clean. Every synced component and template covers what Figma has.'); process.exit(0); }
console.log(`\ncheck-coverage: ${problems.length} problem(s)`);
for (const p of problems) console.log(`- ${p}`);
process.exit(1);
