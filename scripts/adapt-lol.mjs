#!/usr/bin/env node
/**
 * One-time migration: The Isle Hacks → LoL Cheats (League of Legends).
 * Domain: lolcheats.org
 * Run from project root: node scripts/adapt-lol.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['isle-aimbot', 'lol-aimbot'],
	['isle-esp', 'lol-esp'],
	['isle-wallhack', 'lol-wallhack'],
	['isle-radar-hack', 'lol-radar-hack'],
	['undetected-isle-hacks', 'undetected-lol-cheats'],
	['isle-hacks-2026', 'lol-cheats-2026'],
	['eac-bypass', 'vanguard-bypass'],
	['the-isle-hacks', 'lol-cheats'],
	['isle-hack-download', 'lol-cheat-download'],
	['isle-mod-menu', 'lol-mod-menu'],
	['isle-soft-aim', 'lol-soft-aim'],
	['best-isle-hacks', 'best-lol-cheats'],
	['isle-aimbot-hack', 'lol-aimbot-hack'],
	['isle-esp-hack', 'lol-esp-hack'],
	['isle-unlock-all', 'lol-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://www.theislehacks.org', 'https://www.lolcheats.org'],
	['https://theislehacks.org', 'https://lolcheats.org'],
	['www.theislehacks.org', 'www.lolcheats.org'],
	['theislehacks.org', 'lolcheats.org'],
	['support@theislehacks.org', 'support@lolcheats.org'],
	['https://store.steampowered.com/app/376210/The_Isle/', 'https://www.leagueoflegends.com/'],
	['https://store.steampowered.com/app/376210/The_Isle', 'https://www.leagueoflegends.com'],
	['store.steampowered.com/app/376210/The_Isle', 'www.leagueoflegends.com'],
	['https://www.easy.ac/', 'https://www.riotgames.com/en/anti-cheat'],
	['www.easy.ac', 'www.riotgames.com/en/anti-cheat'],
	['/products/the-isle-novaxware', '/products/league-of-legends'],
	['/products/the-isle', '/products/league-of-legends'],
	['project-name=theislehacks', 'project-name=lolcheats'],
	['name = "theislehacks"', 'name = "lolcheats"'],
	['"name": "the-isle-hacks"', '"name": "lol-cheats"'],
	['isle-esp-player-tags', 'lol-esp-player-tags'],
	['isle-wallhack-skeleton', 'lol-wallhack-skeleton'],
	['isle-aimbot-skeleton', 'lol-aimbot-skeleton'],
	['isle-aimbot-sniper', 'lol-aimbot-sniper'],
	['isle-esp-radar', 'lol-esp-radar'],
	['isle-hacks-combat', 'lol-cheats-combat'],
	['isle-hacks-wallhack', 'lol-cheats-wallhack'],
	['isle-hacks-aimbot-view', 'lol-cheats-aimbot-view'],
	['isle-hacks-aimbot', 'lol-cheats-aimbot'],
	['isle-hacks-radar', 'lol-cheats-radar'],
	['isle-hacks-hero', 'lol-cheats-hero'],
	['isle-hacks-logo', 'lol-cheats-logo'],
	['isle-hacks-session', 'lol-cheats-match'],
	['isle-hacks-esp', 'lol-cheats-esp'],
	['isle-hero-banner', 'lol-hero-banner'],
	['isle-hero-ghost', 'lol-hero-ghost'],
	['isle-hero-source', 'lol-hero-source'],
	['undetected-isle-hacks', 'undetected-lol-cheats'],
	['best-isle-hacks', 'best-lol-cheats'],
	['isle-hack-download', 'lol-cheat-download'],
	['isle-hacks-2026', 'lol-cheats-2026'],
	['isle-radar-hack', 'lol-radar-hack'],
	['isle-aimbot-hack', 'lol-aimbot-hack'],
	['isle-esp-hack', 'lol-esp-hack'],
	['isle-unlock-all', 'lol-unlock-all'],
	['isle-soft-aim', 'lol-soft-aim'],
	['isle-mod-menu', 'lol-mod-menu'],
	['isle-wallhack', 'lol-wallhack'],
	['the-isle-hacks', 'lol-cheats'],
	['isle-aimbot', 'lol-aimbot'],
	['isle-esp', 'lol-esp'],
	['eac-bypass', 'vanguard-bypass'],
	["'isle-esp'", "'lol-esp'"],
	['"isle-esp"', '"lol-esp"'],
	["'isle-aimbot'", "'lol-aimbot'"],
	['"isle-aimbot"', '"lol-aimbot"'],
	['pageId="eac"', 'pageId="vanguard"'],
	["pageId: 'eac'", "pageId: 'vanguard'"],
	["'eac'", "'vanguard'"],
	['"eac"', '"vanguard"'],
	['| eac', '| vanguard'],
	['isleImages', 'lolImages'],
	["from './isle'", "from './lol'"],
	["from '../data/isle'", "from '../data/lol'"],
	["from '../../data/isle'", "from '../../data/lol'"],
	['fetch-isle-images', 'fetch-lol-images'],
	['fetch-isle-hero', 'fetch-lol-hero'],
	['import-isle-screenshots', 'import-lol-screenshots'],
	['isle-hack-overlays', 'lol-hack-overlays'],
	['fix-isle-copy', 'fix-lol-copy'],
	['fix-isle-content', 'fix-lol-content'],
	['adapt-theisle', 'adapt-lol'],
	['trucos-isla', 'trucos-lol'],
	['triche-isla', 'triche-lol'],
	['cheats-isla', 'cheats-lol'],
	['trucchi-isla', 'trucchi-lol'],
	['cheaty-isla', 'cheaty-lol'],
	['chity-isla', 'chity-lol'],
	['chitov-isla', 'chitov-lol'],
	['chitiv-isla', 'chitiv-lol'],
	['cheatow-isla', 'cheatow-lol'],
	['hile-isla', 'hile-lol'],
	['isle-hile', 'lol-hile'],
	['isle-esp-chity', 'lol-esp-chity'],
	['isle-aimbot-chity', 'lol-aimbot-chity'],
	['unentdeckte-isle-hacks', 'unentdeckte-lol-cheats'],
	['cheats-isla-indetectaveis', 'cheats-lol-indetectaveis'],
	['trucchi-isla-indetectabili', 'trucchi-lol-indetectabili'],
	['niewykrywalne-cheats-isla', 'niewykrywalne-cheats-lol'],
	['nedecektiruemye-chity-isla', 'nedecektiruemye-chity-lol'],
	['tespit-edilemeyen-isle-hileleri', 'tespit-edilemeyen-lol-hileleri'],
	['nedecektovani-chity-isla', 'nedecektovani-chity-lol'],
	['cheats-isla-nedetectabile', 'cheats-lol-nedetectabile'],
	['basta-isle-hacks', 'basta-lol-cheats'],
	['isle-hacks-funktionen', 'lol-cheats-funktionen'],
	['isle-hacks-functies', 'lol-cheats-functies'],
	['caracteristicas-trucos-isla', 'caracteristicas-trucos-lol'],
	['fonctionnalites-triche-isla', 'fonctionnalites-triche-lol'],
	['recursos-cheats-isla', 'recursos-cheats-lol'],
	['Isla Spire, forests, and river zones', "Summoner's Rift", lanes, and jungle"],
	['Isla Spire, forests and river zones', "Summoner's Rift", lanes and jungle"],
	['herbivore and carnivore survival sessions', 'ranked and normal games'],
	['herbivore and carnivore survival sessions', 'ranked and normal games'],
	['herbivore & carnivore', 'laners & junglers'],
	['survival sessions', 'matches'],
	['survival session', 'match'],
	['growth runs', 'ARAM games'],
	['growth run', 'ARAM game'],
	['players and wild dinosaurs', 'enemy champions and minions'],
	['players, wild dinosaurs', 'enemy champions, minions'],
	['players', 'champions'],
	['wild dinosaurs', 'enemy minions'],
	['nest and carcass markers', 'objective and ward markers'],
	['nest markers', 'tower markers'],
	['nest cues', 'objective cues'],
	['nest zones', 'objective zones'],
	['nest fights', 'objective fights'],
	['nest fight', 'objective fight'],
	['near nests and water', 'near objectives and river'],
	['Nests', 'Objectives'],
	['nests', 'objectives'],
	['growth timer', 'respawn timer'],
	['fresh carcasses', 'low-health targets'],
	['hunting routes', 'gank routes'],
	['carcass markers', 'ward markers'],
	['carcass ESP', 'ward ESP'],
	['Carcass and water ESP', 'Champion and ward ESP'],
	['carcasses worth the detour', 'objectives worth the detour'],
	['spawn rules', 'matchmaking rules'],
	['growth tools', 'macro tools'],
	['The Isle team', 'Riot Games'],
	['Easy Anti-Cheat anti-cheat', 'Vanguard anti-cheat'],
	['Easy Anti-Cheat maintenance', 'Vanguard maintenance'],
	['Easy Anti-Cheat bypass', 'Vanguard bypass'],
	['Easy Anti-Cheat Bypass', 'Vanguard Bypass'],
	['Easy Anti-Cheat patches', 'Vanguard patches'],
	['Easy Anti-Cheat patch', 'Vanguard patch'],
	['Easy Anti-Cheat updates', 'Vanguard updates'],
	['Easy Anti-Cheat update', 'Vanguard update'],
	['after Easy Anti-Cheat', 'after Vanguard'],
	['Easy Anti-Cheat rebuilds', 'Vanguard rebuilds'],
	['Easy Anti-Cheat security', 'Vanguard security'],
	['Easy Anti-Cheat guide', 'Vanguard guide'],
	['undetected Easy Anti-Cheat notes', 'undetected Vanguard notes'],
	['Easy Anti-Cheat', 'Vanguard'],
	['eac', 'vanguard'],
	['last major update', 'last patch'],
	['this update cycle', 'this patch cycle'],
	['Long-range', 'Skillshot'],
	['long-range', 'skillshot'],
	['Isla Spire', "Summoner's Rift"],
	['in forest zones', 'in lane brushes'],
	['in high-traffic zones', 'in teamfight zones'],
	['hunt', 'gank'],
	['hunts', 'ganks'],
	['survival flow', 'match flow'],
	['session rounds', 'match rounds'],
	['survival tips', 'macro tips'],
	['island map', 'Summoner map'],
	['spawn in faster', 'queue faster'],
	['before you spawn in', 'before you queue'],
	['before you spawn in', 'before you queue'],
	['you spawn in', 'you queue'],
	['you play', 'you play'],
	['spawn in', 'queue up'],
	[' a session', ' a match'],
	[' sessions', ' matches'],
	[' session', ' match'],
	['sessions', 'matches'],
	['session', 'match'],
	['update cycle', 'patch cycle'],
	['The Isle on Steam', 'League of Legends on Riot Client'],
	['The Isle', 'League of Legends'],
	['IsleHacksSite', 'LoLCheatsSite'],
	['Isle Intel', 'LoL Intel'],
	['The Isle Hacks', 'LoL Cheats'],
	['the isle hacks', 'lol cheats'],
	['the isle cheats', 'lol cheats'],
	['the isle hack', 'lol cheat'],
	['Isle ESP', 'LoL ESP'],
	['Isle Aimbot', 'LoL Aimbot'],
	['isle esp', 'lol esp'],
	['isle aimbot', 'lol aimbot'],
	['isle wallhack', 'lol wallhack'],
	['isle radar', 'lol radar'],
	['Buy The Isle Hacks', 'Buy LoL Cheats'],
	['EXT.isle', 'EXT.lol'],
	['KW.eac', 'KW.vanguard'],
	['what-are-isle-hacks', 'what-are-lol-cheats'],
	['are-isle-hacks-undetected-in-2026', 'are-lol-cheats-undetected-in-2026'],
	['herbivore-and-carnivore-sessions', 'ranked-and-normal-games'],
	['what-is-an-isle-wallhack', 'what-is-a-lol-wallhack'],
	['does-isle-hacks-include-radar-hack', 'does-lol-cheats-include-radar-hack'],
	['eac-anti-cheat-and-isle-hacks', 'vanguard-anti-cheat-and-lol-cheats'],
	['buy-undetected-isle-hacks-windows-pc', 'buy-undetected-lol-cheats-windows-pc'],
	['isle-soft-aim-review', 'lol-soft-aim-review'],
	['isle-esp-growth-run-review', 'lol-esp-aram-review'],
	['isle-cloud-dma-review', 'lol-cloud-dma-review'],
	['isle-hack-setup-review', 'lol-cheat-setup-review'],
	['isle-carcass-esp-review', 'lol-ward-esp-review'],
	['isle-soft-aim-session-review', 'lol-soft-aim-match-review'],
	['isle-radar-hack-review', 'lol-radar-hack-review'],
	['isle-eac-update-review', 'lol-vanguard-update-review'],
	['isle-sniper-soft-aim-review', 'lol-skillshot-soft-aim-review'],
	['xKrypt0_Isle', 'xKrypt0_LoL'],
	['vanLifeIsle', 'vanLifeLoL'],
	['Isle Hacks', 'LoL Cheats'],
	['Isle hacks', 'LoL cheats'],
	['Isle hack', 'LoL cheat'],
	['Isle cheats', 'LoL cheats'],
	['Isle cheat', 'LoL cheat'],
	['Isle', 'LoL'],
	['isle', 'lol'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-theisle.mjs',
	'adapt-lol.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
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

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameIsleTs() {
	const from = path.join(ROOT, 'src', 'data', 'isle.ts');
	const to = path.join(ROOT, 'src', 'data', 'lol.ts');
	try {
		await rename(from, to);
		console.log('Renamed isle.ts → lol.ts');
	} catch (e) {
		console.warn(`isle.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-isle-images.mjs', 'fetch-lol-images.mjs'],
		['fetch-isle-hero.mjs', 'fetch-lol-hero.mjs'],
		['import-isle-screenshots.mjs', 'import-lol-screenshots.mjs'],
		['isle-hack-overlays.mjs', 'lol-hack-overlays.mjs'],
		['fix-isle-copy.mjs', 'fix-lol-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'lol-aimbot': 'lol-aimbot',
		'lol-esp': 'lol-esp',
		'lol-wallhack': 'wallhack',
		'lol-radar-hack': 'radar',
		'undetected-lol-cheats': 'undetected',
		'lol-cheats-2026': 'cheats-2026',
		'vanguard-bypass': 'vanguard',
		'lol-cheats': 'hacks',
		'lol-cheat-download': 'cheat-download',
		'lol-mod-menu': 'mod-menu',
		'lol-soft-aim': 'soft-aim',
		'best-lol-cheats': 'best-cheats',
		'lol-aimbot-hack': 'aimbot-hack',
		'lol-esp-hack': 'esp-hack',
		'lol-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('isle')) continue;
		const newName = file
			.replace(/isle-hacks/g, 'lol-cheats')
			.replace(/isle/g, 'lol');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting The Isle Hacks → LoL Cheats (lolcheats.org)...\n');
	await renamePageDirs();
	await renameIsleTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
