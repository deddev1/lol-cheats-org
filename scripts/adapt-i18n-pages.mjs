#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from League of Legends source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'cheats', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-cheat', 'esp-cheat', 'unlock-all',
];

const REPLACEMENTS = [
	['lol-esp', 'lol-esp'],
	['lol-aimbot', 'lol-aimbot'],
	["'vanguard'", "'vanguard'"],
	['vanguard-bypass', 'vanguard-bypass'],
	['undetected-lol-cheats', 'undetected-lol-cheats'],
	['lol-wallhack', 'lol-wallhack'],
	['lol-radar-cheat', 'lol-radar-cheat'],
	['lol-cheats-2026', 'lol-cheats-2026'],
	['lol-cheats', 'lol-cheats'],
	['the-lol', 'lol'],
	['League of Legends', 'League of Legends'],
	['League of Legends', 'League of Legends'],
	['LoL Cheats', 'LoL Cheats'],
	['lol cheats', 'lol cheats'],
	['lol cheat', 'lol cheat'],
	['LoL ESP', 'League of Legends ESP'],
	['LoL Aimbot', 'League of Legends Aimbot'],
	['lol wallhack', 'League of Legends wallhack'],
	['lol radar', 'League of Legends radar'],
	['League of Legends ganks', 'League of Legends ganks'],
	['League of Legends combat', 'League of Legends combat'],
	['League of Legends patches', 'League of Legends patches'],
	['League of Legends updates', 'League of Legends updates'],
	['League of Legends setup', 'League of Legends setup'],
	['League of Legends license', 'League of Legends license'],
	['League of Legends licenses', 'League of Legends licenses'],
	['League of Legends matches', 'League of Legends matches'],
	['in League of Legends', 'in League of Legends'],
	['for League of Legends', 'for League of Legends'],
	['League of Legends on', 'League of Legends on'],
	['League of Legends or', 'League of Legends or'],
	['League of Legends\'s', 'League of Legends\'s'],
	['League of Legends ', 'League of Legends '],
	['Vanguard', 'Vanguard'],
	['Vanguard maintenance', 'Vanguard maintenance'],
	['Vanguard bypass', 'Vanguard bypass'],
	['Vanguard Bypass', 'Vanguard Bypass'],
	['Vanguard', 'Vanguard'],
	['vanguard', 'vanguard'],
	['support@lolcheats.org', 'support@lolcheats.org'],
	["Summoner's Rift", lanes, and jungle', "Summoner's Rift", lanes, and jungle'],
	["Summoner's Rift", lanes and jungle', "Summoner's Rift", lanes and jungle'],
	['objective fights', 'objective fights'],
	['objective fight', 'objective fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['champions', 'champions'],
	['operator', 'player'],
	['champions', 'Players'],
	['Operator', 'Player'],
	['respawn timer', 'respawn timer'],
	['ranked and normal games', 'ranked and normal games'],
	['ranked and normal games', 'ranked and normal games'],
	['laners & junglers', 'laners & junglers'],
	['low-health targets', 'low-health targets'],
	['low-health targets', 'low-health targets'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'League of Legends combat pace'],
	['COD', 'League of Legends'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'LoL Cheats',
	game: 'League of Legends',
	checkout: 'Zadeyo',
	vanguard: 'Vanguard',
};`,
);
phrases = phrases.replace(/KW\.vanguard/g, 'KW.vanguard');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: "Summoner's Rift", lanes, and jungle'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
