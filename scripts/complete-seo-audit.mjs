#!/usr/bin/env node
/**
 * Completes lol-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'cheats', dir: 'lol-cheats', pageId: 'cheats' },
	{ id: 'cheat-download', dir: 'lol-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'lol-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'lol-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-lol-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-cheat', dir: 'lol-aimbot-cheat', pageId: 'aimbot-cheat' },
	{ id: 'esp-cheat', dir: 'lol-esp-cheat', pageId: 'esp-cheat' },
	{ id: 'unlock-all', dir: 'lol-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/lol-lol/g, 'lol'],
	[/vanguard-bypass-lol/g, 'vanguard-bypass'],
	[/League of Legends/g, 'League of Legends'],
	[/League of Legends/g, 'League of Legends'],
	[/Call of Duty/g, 'League of Legends'],
	[/League of Legends Wallhack/g, 'League of Legends Wallhack'],
	[/League of Legends Radar Hack/g, 'League of Legends Radar Hack'],
	[/League of Legends Cheat Features/g, 'League of Legends Cheat Features'],
	[/League of Legends Cheat Pricing/g, 'League of Legends Cheat Pricing'],
	[/League of Legends Cheat Setup/g, 'League of Legends Cheat Setup'],
	[/League of Legends Cheat Status/g, 'League of Legends Cheat Status'],
	[/League of Legends Cheat Support/g, 'League of Legends Cheat Support'],
	[/League of Legends team fight/g, 'League of Legends team fight'],
	[/League of Legends team builder/g, 'League of Legends loadout builder'],
	[/League of Legends store header/g, 'League of Legends header'],
	[/League of Legends wasteland combat/g, 'League of Legends battle royale combat'],
	[/League of Legends loadout builder/g, 'League of Legends loadout builder'],
	[/League of Legends pricing/g, 'League of Legends pricing'],
	[/League of Legends Vanguard/g, 'League of Legends Vanguard'],
	[/on League of Legends/g, 'on League of Legends'],
	[/for League of Legends/g, 'for League of Legends'],
	[/League of Legends guides/g, 'League of Legends guides'],
	[/League of Legends guide/g, 'League of Legends guide'],
	[/League of Legends hileleri/g, 'League of Legends hileleri'],
	[/League of Legends hile/g, 'League of Legends hile'],
	[/League of Legends hileleri/g, 'League of Legends hileleri'],
	[/cheatów League of Legends/g, 'cheatów League of Legends'],
	[/cheat League of Legends/g, 'cheat League of Legends'],
	[/cheats League of Legends/g, 'cheats League of Legends'],
	[/trucos League of Legends/g, 'trucos League of Legends'],
	[/triche League of Legends/g, 'triche League of Legends'],
	[/trucchi League of Legends/g, 'trucchi League of Legends'],
	[/Wallhack League of Legends/g, 'League of Legends Wallhack'],
	[/cheat League of Legends undetected/g, 'cheat League of Legends undetected'],
	[/cheats League of Legends undetected/g, 'cheats League of Legends undetected'],
	[/Verdansk beams/g, 'skillshot AR beams'],
	[/ARAM game room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and ARAM game'],
	[/Verdansk, Urzikstan/g, 'Verdansk, ARAM game'],
	[/match and ARAM game/g, 'match and ARAM game'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/vanguard/gi, 'vanguard'],
	[/Vanguard/g, 'Vanguard'],
	[/lol-cheats/g, 'lol-cheats'],
	[/the-lol/g, 'lol'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for League of Legends'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after League of Legends anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy LoL Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/League of Legends guides/g, 'League of Legends guides');
	content = content.replace(/League of Legends guide/g, 'League of Legends guide');
	content = content.replace(/League of Legends hileleri/g, 'League of Legends hileleri');
	content = content.replace(/League of Legends hile/g, 'League of Legends hile');
	content = content.replace(/cheat League of Legends/g, 'cheat League of Legends');
	content = content.replace(/cheats League of Legends/g, 'cheats League of Legends');
	content = content.replace(/trucos League of Legends/g, 'trucos League of Legends');
	content = content.replace(/triche League of Legends/g, 'triche League of Legends');
	content = content.replace(/trucchi League of Legends/g, 'trucchi League of Legends');
	content = content.replace(/cheatów League of Legends/g, 'cheatów League of Legends');
	content = content.replace(/читов League of Legends/g, 'читов League of Legends');
	content = content.replace(/читів League of Legends/g, 'читів League of Legends');
	content = content.replace(/League of Legendsチート/g, 'League of Legendsチート');
	content = content.replace(/League of Legends 치트/g, 'League of Legends 치트');
	content = content.replace(/League of Legends作弊/g, 'League of Legends作弊');
	content = content.replace(/League of Legends rehberleri/g, 'League of Legends rehberleri');
	content = content.replace(/League of Legends gidsen/g, 'League of Legends gidsen');
	content = content.replace(/League of Legends průvodce/g, 'League of Legends průvodce');
	content = content.replace(/League of Legends guider/g, 'League of Legends guider');
	content = content.replace(/League of Legends related/g, 'League of Legends related');
	content = content.replace(/League of Legends ガイド/g, 'League of Legends ガイド');
	content = content.replace(/League of Legends 가이드/g, 'League of Legends 가이드');
	content = content.replace(/League of Legends指南/g, 'League of Legends指南');
	content = content.replace(/League of Legends गाइड/g, 'League of Legends गाइड');
	content = content.replace(/League of Legends panduan/g, 'League of Legends panduan');
	content = content.replace(/League of Legends คู่มือ/g, 'League of Legends คู่มือ');
	content = content.replace(/League of Legends hướng dẫn/g, 'League of Legends hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== LoL Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
