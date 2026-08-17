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
	// Broken slugs / URLs
	['lol-growth-run-aggressive-strategies', 'lol-growth-run-aggressive-strategies'],
	['lol-growth-run-meta', 'lol-growth-run-meta'],
	['lol-ARAM game', 'lol-growth-run'],
	['escape from lol', 'the lol'],
	['escape-from-lol', 'the-lol'],
	['escape from the lol', 'the lol'],
	['escape-from-the-lol', 'the-lol'],
	['eft cheats', 'lol cheats'],
	['eft hacks', 'lol cheats'],
	['eft esp', 'lol esp'],
	['eft undetected', 'lol undetected'],
	['budget eft', 'budget lol'],
	['EFT Cheat', 'LoL Hack'],
	['EFT cheat', 'lol hack'],
	['EFT shops', 'lol hack shops'],
	['EFT Shop', 'LoL Hack Shop'],
	['EFT ', 'LoL '],
	[' eft', ' lol'],
	['"eft', '"lol'],
	['eft"', 'lol"'],

	// Tarkov maps → LoL locations
	['Streets of League of Legends', "Summoner's Rift river zones'],
	['Interchange', 'Gateway'],
	['Factory', 'high-traffic zones'],
	['Woods, and Interchange', 'forests, and river zones'],
	['Woods and Interchange', 'forests and river zones'],
	['in lane brushes or in dark Gateway hallways', 'in lane brushes or near river banks'],
	['in lane brushes or dark Gateway interiors', 'in lane brushes or dense river cover'],

	// Tarkov mechanics → LoL mechanics
	['PMC loadouts', 'dinosaur builds'],
	['PMC loadout', 'dinosaur build'],
	['PMC and Scav', 'herbivore and carnivore'],
	['PMC and ARAM games', 'herbivore and carnivore'],
	['PMC fights', 'player ganks'],
	['PMC fight', 'player gank'],
	['PMC queues', 'survival queues'],
	['PMC queue', 'survival queue'],
	['PMC block', 'match block'],
	['PMC kit', 'grown dinosaur'],
	['PMC kits', 'grown dinosaurs'],
	['PMC Raid', 'Survival Session'],
	['PMC Raids', 'Survival Sessions'],
	['PMC raid', 'match'],
	['PMC raids', 'matches'],
	['PMC ', 'player '],
	[' PMC', ' player'],
	['PMCs', 'champions'],
	['PMC', 'player'],
	['Scav Runs', 'Growth Runs'],
	['Scav Run', 'Growth Run'],
	['Scav runs', 'ARAM games'],
	['Scav run', 'ARAM game'],
	['Scav strategies', 'growth strategies'],
	['Scav player', 'juvenile player'],
	['Scav champions', 'juvenile champions'],
	['Scav kits', 'juvenile builds'],
	['Scav kit', 'juvenile build'],
	['Scav aggression', 'growth aggression'],
	['Scav strategies', 'growth strategies'],
	['Scav AI', 'AI dinosaur'],
	['Scav ', 'juvenile '],
	[' Scav', ' juvenile'],
	['Scavs', 'juveniles'],
	['Scav', 'juvenile'],
	['scav fights', 'pack fights'],
	['scav fight', 'pack fight'],
	['scav AI', 'AI dinosaur'],
	['scav strategies', 'growth strategies'],
	['scav run', 'ARAM game'],
	['scav runs', 'ARAM games'],

	// Weapons / loadout terms
	['weapon tier list', 'dinosaur tier list'],
	['Weapon Tier List', 'Dinosaur Tier List'],
	['weapon tier', 'dinosaur tier'],
	['Best Guns for Raids', 'Best Dinosaurs for Survival'],
	['What Wins Raids', 'What Wins Sessions'],
	['ARs, SMGs, skillshots', 'carnivores, ambush builds, skillshot species'],
	['AR fights', 'mid-size ganks'],
	['SMG pushes', 'ambush rushes'],
	['skillshot AR fights', 'skillshot ambush ganks'],
	['Per-weapon', 'Per-species'],
	['per-weapon', 'per-species'],
	['Ammo tables', 'Growth stat tables'],
	['ammo economy', 'growth economy'],
	['ammo that win', 'stats that win'],
	['armor pen', 'damage output'],
	['armor classes', 'growth tiers'],
	['class-five plates', 'adult carnivores'],
	['M4 looks boring', 'mid-tier species looks boring'],
	['m4a1 lol', 'rex lol'],
	['Flea Market', 'in-game store'],
	['flea market', 'in-game store'],
	['flea money', 'in-game currency'],
	['roubles', 'growth points'],
	['growth stat tables', 'growth stat tables'],
	['stash', 'progress'],
	['meds', 'stamina recovery'],
	['healing items', 'stamina recovery'],
	['magazine reloads', 'ability cooldowns'],
	['mag ', 'ability '],
	['recoil', 'attack timing'],
	['TTK', 'kill speed'],
	['time-to-kill', 'kill speed'],
	['shooting range', 'practice server'],
	['offline mode', 'practice server'],
	['offline bots', 'AI dinosaurs'],
	['offline practice', 'practice server matches'],
	['peek practice', 'ambush practice'],
	['head height', 'bite height'],
	['sensitivity', 'aim smoothing'],
	['footsteps', 'dinosaur calls'],
	['Operators', 'species'],
	['loadout drops', 'low-health targets'],
	['loadout spine', 'growth path'],
	['loadout comparison', 'species comparison'],
	['Battle Royale', 'survival'],
	['battle-royale', 'survival-game'],
	['unlock all', 'unlock all species'],

	// Misc game terms
	['boss spawn rates', 'apex spawn rates'],
	['Boss and Scav filters', 'Apex and juvenile filters'],
	['Boss and extract', 'Apex and nest'],
	['boss markers', 'apex markers'],
	['boss and player', 'apex and player'],
	['container highlights', 'carcass highlights'],
	['containers', 'carcasses'],
	['container', 'carcass'],
	['Corpse and container', 'Corpse and carcass'],
	['Player gear', 'Player growth stage'],
	['third-party', 'third-player'],
	['third-parties', 'third-champions'],
	['squad fights', 'pack fights'],
	['squad fight', 'pack fight'],
	['squad drops', 'pack spawns'],
	['squad', 'pack'],
	['duos', 'pairs'],
	['competitive lobbies', 'official servers'],
	['competitive', 'official server'],
	['tournament', 'community event'],
	['VOD', 'stream replay'],
	['spawn rich', 'spawn with growth advantage'],
	['spawn plans', 'nest plans'],
	['queue up a juvenile', 'spawn as a juvenile'],
	['queue anyway', 'queue up anyway'],
	['queueing', 'spawning in'],
	['queue', 'queue up'],
	['an League of Legends', 'a League of Legends'],
	['what-are-lol-cheats', 'what-are-lol-cheats'],
	['are-lol-cheats-undetected', 'are-lol-hacks-undetected'],
	['what-is-a-lol-wallhack', 'what-is-an-lol-wallhack'],
	['pmc-matches-and-ARAM games', 'herbivore-and-carnivore-matches'],
	['PMC Raid and Scav Support', 'Herbivore and Carnivore Support'],
	['vanlifeeft', 'vanlifelol'],
	['vanLifeLoL', 'vanLifeLoL'],
	['Vanguard Anti-Cheat', 'Vanguard'],
	['Vanguard bypass maintenance guide', 'Vanguard maintenance guide'],
	['Vanguard updates', 'Vanguard updates'],
	['patch cycled', 'patched'],
	['patch cycle update', 'major update'],
	['patch cycle', 'patch cycle'],
	['ARAM game-aggressive', 'growth-run-aggressive'],
	['ARAM game strategies', 'growth-run strategies'],
	['ARAM game player', 'growth-run player'],
	['ARAM game,', 'ARAM game,'],
	['ARAM game.', 'ARAM game.'],
	['ARAM game ', 'ARAM game '],
	['ARAM games', 'ARAM games'],
	['ARAM game', 'ARAM game'],
	['loot filters', 'carcass filters'],
	['loot pins', 'carcass pins'],
	['loot is worth looting', 'carcasses are worth ganking'],
	['loot ESP', 'ward ESP'],
	['loot routes', 'gank routes'],
	['loot worth', 'carcass worth'],
	[' loot', ' carcasses'],
	['Loot and', 'Carcass and'],
	['loot and', 'carcass and'],
	['enemy champions and loot', 'enemy champions and carcasses'],
	['spotting loot', 'spotting carcasses'],
	['Print Loot', 'Find Carcasses'],
	['empty pockets', 'low growth'],
	['gear instead', 'growth instead'],
	['Leave With Gear', 'Leave With Growth'],
	['gear appearance', 'skin appearance'],
	['apparel', 'skins'],
	['cosmetic shop', 'in-game cosmetics'],
	['skin leaks', 'skin previews'],
	['Skin Leaks', 'Skin Previews'],
	['patch notes change player loadouts', 'patch notes change dinosaur stats'],
	['Raids in 2026', 'Sessions in 2026'],
	['for Raids', 'for Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['Raids', 'Sessions'],
	['before you queue a juvenile', 'before you spawn as a juvenile'],
	['LoL cheats pillar', 'League of Legends Hacks pillar'],
	['lol cheats pillar', 'League of Legends Hacks pillar'],
	['"lol cheats"', '"lol cheats"'],
	['"escape from lol cheats"', '"lol cheats"'],
	['LoL cheats package', 'League of Legends Hacks package'],
	['lol cheats package', 'League of Legends Hacks package'],
	['undetected lol cheats', 'undetected lol cheats'],
	['LoL cheats', 'League of Legends Hacks'],
	['lol cheats', 'lol cheats'],
	['LoL cheat', 'League of Legends hack'],
	['lol cheat', 'lol cheat'],
	['LoL Intel', 'LoL Intel'],
	['LoL esp', 'LoL ESP'],
	['lol esp', 'LoL ESP'],
	['LoL aimbot', 'LoL Aimbot'],
	['lol aimbot', 'LoL Aimbot'],
	['LoL wallhack', 'LoL wallhack'],
	['LoL radar', 'LoL radar'],
	['LoL Cheats vs Typical Budget EFT', 'League of Legends Hacks vs Typical Budget LoL'],
	['Budget EFT Cheat Shops', 'Budget LoL Hack Shops'],
	['Budget EFT', 'Budget LoL'],
	['against budget EFT', 'against budget lol'],
	['EFT Cheat Shops', 'LoL Hack Shops'],
	['scavRunCombat', 'growthRunCombat'],
	['scavRunMode', 'growthRunMode'],
	['battleRoyaleCombat', 'survivalCombat'],
	['battleRoyaleIsland', 'survivalIsland'],
	['rebootFight', 'ambushFight'],
	['squadFight', 'packFight'],
	['loadoutBuilder', 'nestBuilder'],
	['cheatsCombat', 'hacksCombat'],
	['cheatsPackage', 'hacksPackage'],
	['headerArt', 'headerArt'],
	['playerEsp', 'dinoEsp'],
	['aimbotCombat', 'aimbotCombat'],
	['espWallhack', 'espWallhack'],
	['heroImage', 'heroImage'],
	['Undetected EFT cheats for PC.', 'Undetected League of Legends Hacks for PC.'],
	['besttarkovcheats.com', 'lolcheats.org'],
	['www.besttarkovcheats.com', 'www.lolcheats.org'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt']);
const TARGET_DIRS = ['src', 'scripts', 'public', 'functions'];
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-lol.mjs', 'fix-lol-content.mjs']);

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
