#!/usr/bin/env node
/**
 * Second-pass cleanup: fix broken partial replacements after adapt-lol.mjs
 * Run: node scripts/fix-lol-content.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	['lol-growth-run-aggressive-strategies', 'lol-aram-aggressive-strategies'],
	['lol-growth-run-meta', 'lol-aram-meta'],
	['lol-growth run', 'lol-aram'],
	['escape from lol', 'league of legends'],
	['escape-from-lol', 'league-of-legends'],
	['escape from the lol', 'league of legends'],
	['escape-from-league-of-legends', 'league-of-legends'],
	['eft cheats', 'lol cheats'],
	['eft hacks', 'lol cheats'],
	['eft esp', 'lol esp'],
	['eft undetected', 'lol undetected'],
	['budget eft', 'budget lol'],
	['EFT Cheat', 'LoL Cheat'],
	['EFT cheat', 'lol cheat'],
	['EFT shops', 'lol cheat shops'],
	['EFT Shop', 'LoL Cheat Shop'],
	['EFT ', 'LoL '],
	[' eft', ' lol'],
	['"eft', '"lol'],
	['eft"', 'lol"'],

	['Streets of League of Legends', "Summoner's Rift river zones"],
	['Interchange', 'Mid lane'],
	['Factory', 'teamfight zones'],
	['forests, and river zones', 'lanes, and jungle'],
	['forests and river zones', 'lanes and jungle'],
	['in lane brushes or near river banks', 'in lane brushes or near river objectives'],
	['in lane brushes or dense river cover', 'in lane brushes or dense jungle cover'],

	['dinosaur builds', 'champion builds'],
	['dinosaur build', 'champion build'],
	['herbivore and carnivore', 'laner and jungler'],
	['player hunts', 'ganks'],
	['player hunt', 'gank'],
	['survival queues', 'matchmaking queues'],
	['survival queue', 'matchmaking queue'],
	['session block', 'queue block'],
	['grown dinosaur', 'fed champion'],
	['grown dinosaurs', 'fed champions'],
	['Survival Session', 'Ranked Match'],
	['Survival Sessions', 'Ranked Matches'],
	['survival session', 'ranked match'],
	['survival sessions', 'ranked matches'],
	['Growth Runs', 'ARAM Games'],
	['Growth Run', 'ARAM Game'],
	['growth runs', 'ARAM games'],
	['growth run', 'ARAM game'],
	['growth strategies', 'macro strategies'],
	['juvenile player', 'early-game player'],
	['juvenile players', 'early-game players'],
	['juvenile builds', 'early-game builds'],
	['juvenile build', 'early-game build'],
	['growth aggression', 'lane aggression'],
	['AI dinosaur', 'AI minion'],
	['juvenile ', 'early-game '],
	[' juvenile', ' early-game'],
	['juveniles', 'early-game players'],
	['juvenile', 'early-game'],
	['pack fights', 'team fights'],
	['pack fight', 'team fight'],

	['dinosaur tier list', 'champion tier list'],
	['Dinosaur Tier List', 'Champion Tier List'],
	['dinosaur tier', 'champion tier'],
	['Best Dinosaurs for Survival', 'Best Champions for Ranked'],
	['What Wins Sessions', 'What Wins Matches'],
	['carnivores, ambush builds, long-range species', 'assassins, mages, and marksmen'],
	['mid-size hunts', 'mid-lane trades'],
	['ambush rushes', 'all-in engages'],
	['long-range ambush hunts', 'long-range skillshot picks'],
	['Per-species', 'Per-champion'],
	['per-species', 'per-champion'],
	['Growth stat tables', 'Champion stat tables'],
	['growth economy', 'gold economy'],
	['stats that win', 'stats that win'],
	['damage output', 'damage output'],
	['growth tiers', 'rank tiers'],
	['adult carnivores', 'fed carries'],
	['mid-tier species looks boring', 'off-meta picks look boring'],
	['rex lol', 'jinx lol'],
	['in-game store', 'in-game shop'],
	['growth points', 'gold'],
	['progress', 'account progress'],
	['stamina recovery', 'health regeneration'],
	['ability cooldowns', 'ability cooldowns'],
	['attack timing', 'attack timing'],
	['kill speed', 'kill speed'],
	['practice server', 'practice tool'],
	['AI dinosaurs', 'practice dummies'],
	['practice server sessions', 'practice tool sessions'],
	['ambush practice', 'combo practice'],
	['bite height', 'hitbox height'],
	['dinosaur calls', 'champion abilities'],
	['species', 'champions'],
	['fresh carcasses', 'low-health targets'],
	['growth path', 'item build path'],
	['species comparison', 'champion comparison'],
	['survival-game', 'moba'],
	['unlock all species', 'unlock all champions'],

	['apex spawn rates', 'baron spawn rates'],
	['Apex and juvenile filters', 'Baron and minion filters'],
	['Apex and nest', 'Baron and objective'],
	['apex markers', 'baron markers'],
	['apex and player', 'baron and player'],
	['carcass highlights', 'ward highlights'],
	['carcasses', 'wards'],
	['carcass', 'ward'],
	['Corpse and carcass', 'Champion and ward'],
	['Player growth stage', 'Champion level'],
	['third-player', 'third-party'],
	['third-players', 'third-parties'],
	['pack spawns', 'wave spawns'],
	['pack', 'team'],
	['pairs', 'duos'],
	['official servers', 'ranked servers'],
	['official server', 'ranked server'],
	['community event', 'esports event'],
	['stream replay', 'VOD'],
	['spawn with growth advantage', 'spawn with item advantage'],
	['nest plans', 'lane plans'],
	['spawn as a juvenile', 'start in lane'],
	['spawn in anyway', 'queue anyway'],
	['spawning in', 'queueing'],
	['spawn in', 'queue up'],
	['a League of Legends', 'League of Legends'],
	['what-are-lol-cheats', 'what-are-lol-cheats'],
	['are-lol-cheats-undetected', 'are-lol-cheats-undetected'],
	['what-is-a-lol-wallhack', 'what-is-a-lol-wallhack'],
	['ranked-and-normal-games', 'ranked-and-normal-games'],
	['Herbivore and Carnivore Support', 'Ranked and Normal Support'],
	['vanlifeisle', 'vanlifelol'],
	['vanLifeLoL', 'vanLifeLoL'],
	['Vanguard Anti-Cheat', 'Vanguard'],
	['Vanguard bypass maintenance guide', 'Vanguard maintenance guide'],
	['patched', 'patched'],
	['patch cycle update', 'major patch'],
	['growth-run-aggressive', 'aram-aggressive'],
	['growth-run strategies', 'macro strategies'],
	['growth-run player', 'macro player'],
	['carcass filters', 'ward filters'],
	['carcass pins', 'ward pins'],
	['carcasses are worth hunting', 'objectives are worth contesting'],
	['ward ESP', 'ward ESP'],
	['gank routes', 'gank routes'],
	['carcass worth', 'objective worth'],
	[' carcasses', ' objectives'],
	['Carcass and', 'Ward and'],
	['carcass and', 'ward and'],
	['enemy champions and carcasses', 'enemy champions and wards'],
	['spotting carcasses', 'spotting wards'],
	['Find Carcasses', 'Clear Wards'],
	['low growth', 'low gold'],
	['growth instead', 'gold instead'],
	['Leave With Growth', 'Leave With Gold'],
	['skin appearance', 'champion appearance'],
	['skins', 'skins'],
	['in-game cosmetics', 'in-game cosmetics'],
	['skin previews', 'skin previews'],
	['Skin Previews', 'Skin Previews'],
	['patch notes change dinosaur stats', 'patch notes change champion stats'],
	['Matches in 2026', 'Matches in 2026'],
	['for Matches', 'for Matches'],
	['before you spawn as a juvenile', 'before you start laning'],
	['LoL Cheats pillar', 'LoL Cheats pillar'],
	['lol cheats pillar', 'LoL Cheats pillar'],
	['"lol cheats"', '"lol cheats"'],
	['"escape from lol cheats"', '"lol cheats"'],
	['LoL Cheats package', 'LoL Cheats package'],
	['lol cheats package', 'LoL Cheats package'],
	['undetected lol cheats', 'undetected lol cheats'],
	['LoL cheats', 'LoL Cheats'],
	['lol cheats', 'lol cheats'],
	['LoL cheat', 'LoL cheat'],
	['lol cheat', 'lol cheat'],
	['LoL Intel', 'LoL Intel'],
	['LoL esp', 'LoL ESP'],
	['lol esp', 'LoL ESP'],
	['LoL aimbot', 'LoL Aimbot'],
	['lol aimbot', 'LoL Aimbot'],
	['LoL wallhack', 'LoL wallhack'],
	['LoL radar', 'LoL radar'],
	['LoL Cheats vs Typical Budget LoL', 'LoL Cheats vs Typical Budget LoL'],
	['Budget LoL Cheat Shops', 'Budget LoL Cheat Shops'],
	['Budget LoL', 'Budget LoL'],
	['against budget lol', 'against budget lol'],
	['LoL Cheat Shops', 'LoL Cheat Shops'],
	['growthRunCombat', 'aramCombat'],
	['growthRunMode', 'aramMode'],
	['survivalCombat', 'rankedCombat'],
	['survivalIsland', 'summonersRift'],
	['ambushFight', 'teamfight'],
	['packFight', 'teamfight'],
	['nestBuilder', 'buildPlanner'],
	['hacksCombat', 'cheatsCombat'],
	['hacksPackage', 'cheatsPackage'],
	['dinoEsp', 'champEsp'],
	['Undetected LoL Cheats for PC.', 'Undetected LoL Cheats for PC.'],
	['theislehacks.org', 'lolcheats.org'],
	['www.theislehacks.org', 'www.lolcheats.org'],
	['Isle ', 'LoL '],
	[' isle', ' lol'],
	['The Isle', 'League of Legends'],
	['the isle', 'league of legends'],
	['dinosaur', 'champion'],
	['Dinosaur', 'Champion'],
	['Easy Anti-Cheat', 'Vanguard'],
	['easy anti-cheat', 'vanguard'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt']);
const TARGET_DIRS = ['src', 'scripts', 'public', 'functions'];
const SKIP_FILES = new Set(['adapt-theisle.mjs', 'adapt-lol.mjs', 'fix-isle-content.mjs', 'fix-lol-content.mjs']);

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
			}
		}
	}
	console.log(`Fixed ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
