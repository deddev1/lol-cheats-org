#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['League of Legends Hacks', 'League of Legends Hacks'],
	['lol cheats', 'lol cheats'],
	['League of Legends Hacks', 'League of Legends Hacks'],
	['League of Legends', 'League of Legends'],
	['League of Legends', 'League of Legends'],
	['Call of Duty', 'League of Legends'],
	['League of Legends PC', 'League of Legends PC'],
	['for League of Legends', 'for League of Legends'],
	['League of Legends ', 'League of Legends '],
	['lol ', 'lol '],
	['Vanguard maintenance', 'Vanguard maintenance'],
	['Vanguard', 'Vanguard'],
	['Vanguard', 'Vanguard'],
	['operatorEsp', 'champEsp'],
	['extractFight', 'teamfight'],
	['alMazrah', 'summonersRift'],
	['champions', 'champions'],
	['operator', 'player'],
	['champions', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['ARAM game', 'ARAM game'],
	['extract', 'extract'],
	['lolcheats.org', 'lolcheats.org'],
	['Trucos League of Legends', 'Trucos League of Legends'],
	['Triches League of Legends', 'Triches League of Legends'],
	['Cheats League of Legends', 'Cheats League of Legends'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en vanguard key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tvanguard: \{/, "\t'vanguard': {");
pagesEn = pagesEn.replace(/League of Legends League of Legends/g, 'League of Legends');
pagesEn = pagesEn.replace(/for League of Legends League of Legends/g, 'for League of Legends');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'vanguard'/g, "'vanguard'");
pagesI18n = pagesI18n.replace(/vanguard:/g, "'vanguard':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
