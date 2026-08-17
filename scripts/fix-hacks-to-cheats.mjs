#!/usr/bin/env node
/**
 * Replace user-facing "hacks/hack" with "cheats/cheat" (preserve wallhack).
 * Run: node scripts/fix-hacks-to-cheats.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WALL = '__WALLHACK_KEEP__';

const RENAME_PAGE_DIRS = [
	['lol-aimbot-hack', 'lol-aimbot-cheat'],
	['lol-esp-hack', 'lol-esp-cheat'],
	['lol-radar-hack', 'lol-radar-cheat'],
];

/** Ordered — specific patterns first. */
const REPLACEMENTS = [
	['League of Legends Hacks', 'LoL Cheats'],
	['lol-aimbot-hack', 'lol-aimbot-cheat'],
	['lol-esp-hack', 'lol-esp-cheat'],
	['lol-radar-hack', 'lol-radar-cheat'],
	['aimbot-hack', 'aimbot-cheat'],
	['esp-hack', 'esp-cheat'],
	['radar-hack', 'radar-cheat'],
	['lol-hile-hacks', 'lol-hile-cheats'],
	['lol-hacks-funktioner', 'lol-cheats-funktioner'],
	['lol-hacks-funkce', 'lol-cheats-funkce'],
	['lol-hacks-funktionen', 'lol-cheats-funktionen'],
	['lol-hacks-functies', 'lol-cheats-functies'],
	['lol-hacks-features', 'lol-cheats-features'],
	['lol-hacks-fonctionnalites', 'lol-cheats-fonctionnalites'],
	['lol-hacks-caracteristicas', 'lol-cheats-caracteristicas'],
	['lol-hacks-recursos', 'lol-cheats-recursos'],
	['lol-hacks-preise', 'lol-cheats-preise'],
	['lol-hacks-prijzen', 'lol-cheats-prijzen'],
	['lol-hacks-pricing', 'lol-cheats-pricing'],
	['lol-hacks-ceny', 'lol-cheats-ceny'],
	['lol-hacks-priser', 'lol-cheats-priser'],
	['lol-hacks-installation', 'lol-cheats-installation'],
	['lol-hacks-installatie', 'lol-cheats-installatie'],
	['lol-hacks-setup', 'lol-cheats-setup'],
	['lol-hacks-instalace', 'lol-cheats-instalace'],
	['lol-hacks-updates', 'lol-cheats-updates'],
	['lol-hacks-aktualizace', 'lol-cheats-aktualizace'],
	['lol-hacks-uppdateringar', 'lol-cheats-uppdateringar'],
	['lol-hacks-faq', 'lol-cheats-faq'],
	['lol-hacks-support', 'lol-cheats-support'],
	['lol-hacks-podpora', 'lol-cheats-podpora'],
	['beste-lol-hacks', 'beste-lol-cheats'],
	['nejlepsi-lol-hacks', 'nejlepsi-lol-cheats'],
	['hacks-trucos-lol', 'cheats-trucos-lol'],
	['hacks-triche-lol', 'cheats-triche-lol'],
	['hacks-cheats-lol', 'cheats-lol-pillar'],
	['hacks-trucchi-lol', 'cheats-trucchi-lol'],
	['hacks-cheatow-lol', 'cheats-cheatow-lol'],
	['en: \'lol-hacks\'', "en: 'lol-cheats'"],
	["en: 'lol-hacks'", "en: 'lol-cheats'"],
	['"lol-hacks"', '"lol-cheats"'],
	["'lol-hacks'", "'lol-cheats'"],
	['/lol-hacks/', '/lol-cheats/'],
	['undetected hacks', 'undetected cheats'],
	['undetected lol hacks', 'undetected lol cheats'],
	['buy lol hacks', 'buy lol cheats'],
	['lol hacks 2026', 'lol cheats 2026'],
	['budget lol hacks', 'budget lol cheats'],
	['full stack hacks', 'full stack cheats'],
	['hack comparison', 'cheat comparison'],
	['hack status', 'cheat status'],
	['lol hack shop', 'lol cheat shop'],
	['LoL Hack Shops', 'LoL Cheat Shops'],
	['lol hack shops', 'lol cheat shops'],
	['Budget LoL Hack Shops', 'Budget LoL Cheat Shops'],
	['lol hacks comparison', 'lol cheats comparison'],
	['lol hacks review', 'lol cheats review'],
	['{game} hacks FAQ', '{game} cheats FAQ'],
	['cheats pillar', 'cheats pillar'],
	['hacks pillar', 'cheats pillar'],
	['cheat teamage', 'cheat package'],
	['teamages', 'packages'],
	['navPreview: \'Hacks\'', "navPreview: 'Cheats'"],
	['navPreview: "Hacks"', 'navPreview: "Cheats"'],
	['?? \'Hacks\'', "?? 'Cheats'"],
	[': "Hacks"', ': "Cheats"'],
	[': \'Hacks\'', ": 'Cheats'"],
	["hacks: \"Hacks\"", 'cheats: "Cheats"'],
	["hacks: 'Hacks'", "cheats: 'Cheats'"],
	['pageId="hacks"', 'pageId="cheats"'],
	["pageId: 'hacks'", "pageId: 'cheats'"],
	["pageId: 'hacks' as const", "pageId: 'cheats' as const"],
	["getLocalizedPath('hacks'", "getLocalizedPath('cheats'"],
	["extractSlugBlock(routing, 'hacks')", "extractSlugBlock(routing, 'cheats')"],
	["| 'hacks'", "| 'cheats'"],
	["'hacks',", "'cheats',"],
	['labels.hacks', 'labels.cheats'],
	["ui.nav.hacks", 'ui.nav.cheats'],
	["nav.hacks", 'nav.cheats'],
	["categoryRow.hacks", 'categoryRow.cheats'],
	["id: 'hacks'", "id: 'cheats'"],
	['lol hacks', 'lol cheats'],
	['lol hack', 'lol cheat'],
	['LoL Hacks', 'LoL Cheats'],
	['LoL hacks', 'LoL cheats'],
	['LoL hack', 'LoL cheat'],
	['hacks pillar', 'cheats pillar'],
	['KW.hacks', 'KW.cheats'],
	['hacks:', 'cheats:'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt']);
const TARGET_DIRS = ['src', 'scripts', 'public', 'functions'];
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-theisle.mjs',
	'adapt-lol.mjs',
	'fix-hacks-to-cheats.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function applyReplacements(content) {
	let result = content.replaceAll('wallhack', WALL);
	for (const [from, to] of REPLACEMENTS) {
		if (from === to || from === WALL) continue;
		result = result.split(from).join(to);
	}
	return result.replaceAll(WALL, 'wallhack');
}

async function transformTextFiles() {
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
	console.log(`Updated ${changed} text files`);
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

async function updatePageAstroFiles() {
	const idMap = {
		'lol-aimbot-cheat': 'aimbot-cheat',
		'lol-esp-cheat': 'esp-cheat',
		'lol-radar-cheat': 'radar',
		'lol-cheats': 'cheats',
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
			// ignore
		}
	}
}

async function main() {
	console.log('Replacing hacks → cheats (preserving wallhack)...\n');
	await renamePageDirs();
	await transformTextFiles();
	await updatePageAstroFiles();
	console.log('\nDone. Next: npm run sync:brand && npm run generate:i18n && node scripts/generate-blog-posts.mjs');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
