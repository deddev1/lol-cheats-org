#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from cleLeague of Legends source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['lol-esp', 'lol-esp'],
	['lol-aimbot', 'lol-aimbot'],
	['vanguard', 'vanguard'],
	['undetected-lol-cheats', 'undetected-lol-cheats'],
	['lol-wallhack', 'lol-wallhack'],
	['lol-radar-hack', 'lol-radar-hack'],
	['lol-cheats-2026', 'lol-cheats-2026'],
	['vanguard-bypass', 'vanguard-bypass'],
	['lolcheats.org', 'lolcheats.org'],
	['trucos-lol', 'trucos-lol'],
	['triche-lol', 'triche-lol'],
	['lol-cheats', 'lol-cheats'],
	['cheats-lol', 'cheats-lol'],
	['trucchi-lol', 'trucchi-lol'],
	['cheaty-lol', 'cheaty-lol'],
	['chity-lol', 'chity-lol'],
	['chitov-lol', 'chitov-lol'],
	['chitiv-lol', 'chitiv-lol'],
	['cheatow-lol', 'cheatow-lol'],
	['hile-lol', 'hile-lol'],
	['lol-hile', 'lol-hile'],
	['lol-esp-chity', 'lol-esp-chity'],
	['lol-aimbot-chity', 'lol-aimbot-chity'],
	['unentdeckte-lol-cheats', 'unentdeckte-lol-cheats'],
	['cheats-lol-indetectaveis', 'cheats-lol-indetectaveis'],
	['trucchi-lol-indetectabili', 'trucchi-lol-indetectabili'],
	['niewykrywalne-cheats-lol', 'niewykrywalne-cheats-lol'],
	['nedecektiruemye-chity-lol', 'nedecektiruemye-chity-lol'],
	['tespit-edilemeyen-lol-hileleri', 'tespit-edilemeyen-lol-hileleri'],
	['nedecektovani-chity-lol', 'nedecektovani-chity-lol'],
	['cheats-lol-nedetectabile', 'cheats-lol-nedetectabile'],
	['basta-lol-cheats', 'basta-lol-cheats'],
	['vanguard-bypass-trucos-lol', 'vanguard-bypass-trucos-lol'],
	['vanguard-bypass-triche-lol', 'vanguard-bypass-triche-lol'],
	['vanguard-bypass-cheats-lol', 'vanguard-bypass-cheats-lol'],
	['vanguard-bypass-chity-lol', 'vanguard-bypass-chity-lol'],
	['vanguard-bypass-lol', 'vanguard-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix vanguard key in englishPaths
	content = content.replace(/\tvanguard: '/, "\t'vanguard': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich lol-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/the-lol-cheats-hero.webp',
	'lol-esp': '/images/the-lol-cheats-esp-wallhack.webp',
	'lol-aimbot': '/images/the-lol-cheats-aimbot-combat.webp',
	features: '/images/lol-cheats-teamage.webp',
	pricing: '/images/lol-cheats-cover.webp',
	setup: '/images/lol-loadout-builder.webp',
	updates: '/images/lol-header-art.webp',
	faq: '/images/lol-team-fight.webp',
	support: '/images/lol-cheats-teamage.webp',
	undetected: '/images/lol-moba-combat.webp',
	wallhack: '/images/the-lol-cheats-esp-wallhack.webp',
	radar: '/images/lol-player-esp.webp',
	'vanguard': '/images/lol-reboot-van-fight.webp',
	'cheats-2026': '/images/the-lol-cheats-hero.webp',
	privacy: '/images/the-lol-cheats-aimbot-combat.webp',
	refund: '/images/lol-cheats-cover.webp',
	terms: '/images/lol-cheats-teamage.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'lol-esp', 'lol-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'vanguard',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'lol-esp' | 'lol-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'vanguard' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'champEsp');
	content = content.replace(/extractFight/g, 'teamfight');
	content = content.replace(/alMazrah/g, 'summonersRift');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
