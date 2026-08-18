#!/usr/bin/env node
/**
 * Final purge of Isle / Tarkov / Fortnite leftover language.
 * Run: node scripts/purge-isle-language.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Longest-first replacements to avoid partial clobbering. */
const REPLACEMENTS = [
	['herbivore-and-carnivore-matches', 'ranked-and-normal-games'],
	['lol-esp-growth-run-review-buildsr4k', 'lol-esp-aram-review-buildsr4k'],
	['Herbivore and carnivore ESP / wallhack', 'Champion and ward ESP / wallhack'],
	['Herbivore and Carnivore Support', 'Ranked and Normal Support'],
	['herbivore and carnivore', 'ranked and normal'],
	['herbivore-and-carnivore', 'ranked-and-normal'],
	['Herbivore and carnivore', 'Ranked and normal'],
	['carnivores, ambush builds, and skillshot champions', 'assassins, mages, and marksmen'],
	['carnivores, ambush builds, long-range species', 'assassins, mages, and marksmen'],
	['carnivore, ambush, and skillshot profiles', 'assassin, mage, and marksman profiles'],
	['Save carnivore, ambush, and skillshot profiles', 'Save assassin, mage, and marksman profiles'],
	['mid-tier carnivore', 'reliable meta pick'],
	['mid-tier carnivores', 'meta mid-lane picks'],
	['When mid-tier carnivores feel strong', 'When meta mid-lane picks feel strong'],
	['Carcass ESP Review', 'Ward ESP Review'],
	['Carcass ESP in LoL Cheats', 'Ward ESP in LoL Cheats'],
	['Carcass ESP felt secondary', 'Ward ESP felt secondary'],
	['Carcass ESP highlights', 'Ward ESP highlights'],
	['Carcass ESP', 'Ward ESP'],
	['carcass ESP', 'ward ESP'],
	['Nest markers', 'Objective markers'],
	['Nest marker', 'Objective marker'],
	['nest markers', 'objective markers'],
	['Nest cues', 'Objective cues'],
	['nest cues', 'objective cues'],
	['nest camping', 'bush camping'],
	['nest campers', 'bush campers'],
	['nest awareness', 'objective awareness'],
	['nest route', 'rotation route'],
	['nest plan', 'macro plan'],
	['nest plans', 'macro plans'],
	['nest timing', 'wave timing'],
	['nest calls', 'ping calls'],
	['holding nest', 'holding lane'],
	['holding a nest', 'holding a lane'],
	['Nest approaches', 'Objective approaches'],
	['Growth runs and information tools', 'ARAM games and information tools'],
	['Growth runs', 'ARAM games'],
	['Growth run', 'ARAM game'],
	['growth-run', 'aram'],
	['growth run', 'ARAM game'],
	['growth runs', 'ARAM games'],
	['growth tier', 'item tier'],
	['growth goals', 'objective goals'],
	['growth panic', 'gold deficit'],
	['growth stage', 'early level'],
	['growth goals', 'ranked goals'],
	['Raid Soft Aim', 'Ranked Soft Aim'],
	["tag: 'Raid'", "tag: 'Ranked'"],
	['PMC and Scav', 'ranked and normal'],
	['PMC ', 'Summoner '],
	[' PMC', ' summoner'],
	['Shoreline and Lighthouse', "Summoner's Rift and Howling Abyss"],
	['Shoreline', "Summoner's Rift"],
	['Lighthouse', 'Howling Abyss'],
	['Gateway tech stores', 'shop areas'],
	['Gateway interiors', 'teamfight zones'],
	['Gateway ward spawns', 'jungle camp routes'],
	['Gateway', "Summoner's Rift"],
	['Woods', "Summoner's Rift"],
	['M4A1 or similar 5.56 platform', 'ADC or fighter build'],
	['M4A1', 'ADC build'],
	['5.56', 'on-hit'],
	['assault-rifle country', 'marksman and mage territory'],
	['Mid-range rifles', 'Mid-range mages and marksmen'],
	['Shotguns still own tight interiors', 'Assassins still own tight teamfights'],
	['forty to seventy meters', 'short to mid range'],
	['40–70 meter peeks', 'short to mid-range trades'],
	['health regeneration', 'health regen'],
	['Health regeneration', 'Health regen'],
	['stamina is low', 'mana is low'],
	['stamina management', 'mana management'],
	['Steam services', 'Riot Client services'],
	['Confirm Steam services', 'Confirm Riot Client services'],
	['for the wipe', 'for the season'],
	['main champions for the wipe', 'main champion for the season'],
	['tree lines', 'lane bushes'],
	['warehouse lighting', 'teamfight lighting'],
	['forest ambushes', 'jungle ambushes'],
	['long forest ambushes', 'long-range jungle picks'],
	['doorways', 'lane gaps'],
	['parking lots', 'open lanes'],
	['POI', 'objective'],
	['POIs', 'objectives'],
	['Spawn EV', 'Lane priority'],
	['spawn with guns, armor, and health regen', 'spawn with items, boots, and health regen'],
	['spawn with guns, armor, and health regeneration', 'spawn with items, boots, and health regen'],
	['Leave spawn', 'Leave base'],
	['leave spawn', 'leave base'],
	['spawn like tourists', 'farm like tourists'],
	['spawn as a early-game', 'start as an early-game'],
	['spawn in', 'queue in'],
	['spawn with item advantage', 'start with item advantage'],
	['spawn ready', 'lane ready'],
	['Spawn Ready', 'Lane Ready'],
	['gank routes for Summoners Rift, Woods, and Gateway', 'jungle routes for Summoners Rift and ARAM'],
	['Loot Routes', 'Jungle Routes'],
	['loot routes', 'jungle routes'],
	['Loot route', 'Jungle route'],
	['loot route', 'jungle route'],
	['wardsing', 'warding'],
	['Wardsing', 'Warding'],
	['rouble floor', 'gold reserve'],
	['roubles', 'gold'],
	['ammo and healing', 'mana and healing'],
	['ammo, and healing', 'mana, and healing'],
	['guns, armor', 'items, boots'],
	['usable gun', 'usable item build'],
	['first gun', 'first core item'],
	['gun that just lost', 'champion that just lost'],
	['wrong ammo', 'wrong build'],
	['trash ammo', 'wrong build path'],
	['mag.', 'combo.'],
	['SMG and AR tracking', 'melee and ADC tracking'],
	['SMG at forty meters', 'melee at range'],
	['Sniping needed', 'Long-range skillshots needed'],
	['upper chest to head', 'body to head'],
	['apex and nest awareness', 'baron and objective awareness'],
	['apex and player', 'baron and player'],
	['apex champions', 'baron buffs'],
	['apex threat cues', 'baron threat cues'],
	['Corpse and ward', 'Champion and ward'],
	['water markers', 'objective markers'],
	['water sources', 'objectives'],
	['water or cliffs', 'river or jungle'],
	['ward and water markers', 'ward and objective markers'],
	['Champion and ward ESP', 'Champion and ward ESP'],
	['ambush build', 'assassin build'],
	['a ambush build', 'an assassin build'],
	['RadarRadar', 'Radar'],
	['parLeague of Legends', 'para League of Legends'],
	['soft aim profiles, and . Check', 'soft aim profiles, and radar. Check'],
	['undetected lol cheats with — see', 'undetected lol cheats with Vanguard maintenance — see'],
	['EAC maintenance', 'Vanguard maintenance'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json']);
const TARGET_DIRS = ['src', 'scripts', 'functions'];
const SKIP_FILES = new Set([
	'adapt-theisle.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-warzone.mjs',
	'adapt-lol.mjs',
	'fix-isle-content.mjs',
	'fix-lol-content.mjs',
	'purge-isle-language.mjs',
	'generate-blog-posts.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function main() {
	let changed = 0;
	for (const dir of TARGET_DIRS) {
		const base = path.join(ROOT, dir);
		const files = await walk(base);
		for (const file of files) {
			if (!TEXT_EXTENSIONS.has(path.extname(file))) continue;
			if (SKIP_FILES.has(path.basename(file))) continue;
			const original = await readFile(file, 'utf8');
			const updated = applyReplacements(original);
			if (updated !== original) {
				await writeFile(file, updated, 'utf8');
				changed++;
				console.log('  purged:', path.relative(ROOT, file));
			}
		}
	}
	console.log(`Purged ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
