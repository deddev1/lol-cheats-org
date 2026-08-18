#!/usr/bin/env node
/** Bulk-fix known i18n corruption patterns in source data files. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sanitizeI18nText, mapsForLocale } from './i18n-data/text-sanitize.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const I18N_DIR = path.join(ROOT, 'scripts', 'i18n-data');

const FILES = [
	'phrases.mjs',
	'pages-i18n.mjs',
	'pages-en.mjs',
	'ui-strings-part1.mjs',
	'ui-strings-part2.mjs',
	'focus-i18n.mjs',
	'legal-i18n.mjs',
	'image-alts.mjs',
];

function fixPhrasesMaps(content) {
	return content.replace(/maps: "Summoner's Rift, lanes, and jungle"/g, (match, offset, full) => {
		const before = full.slice(Math.max(0, offset - 120), offset);
		const localeMatch = before.match(/\b([a-z]{2}):\s*\{[^}]*$/);
		const locale = localeMatch?.[1] ?? 'en';
		if (locale === 'en') return match;
		return `maps: ${JSON.stringify(mapsForLocale(locale))}`;
	});
}

async function fixFile(name) {
	const filePath = path.join(I18N_DIR, name);
	let content = await readFile(filePath, 'utf8');

	if (name === 'phrases.mjs') {
		content = content.replace(/cheats: 'lol cheats',\n\tcheats: 'lol cheats',/, "cheats: 'lol cheats',");
		content = content.replace(/checkout: 'Zadeyo'/, "checkout: 'secure checkout'");
		content = fixPhrasesMaps(content);
	}

	for (const locale of ['es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv']) {
		content = content.replace(
			new RegExp(sanitizeI18nText('BR y ARAM game', locale).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
			() => sanitizeI18nText('BR y ARAM game', locale),
		);
	}

	// Apply global sanitization line-by-line for string literals in mjs files
	content = content.replace(/'([^'\\]|\\.)*'/g, (literal) => {
		const inner = literal.slice(1, -1);
		if (inner.length < 4) return literal;
		const fixed = sanitizeI18nText(inner);
		return fixed === inner ? literal : `'${fixed.replace(/'/g, "\\'")}'`;
	});

	content = content.replace(/"([^"\\]|\\.)*"/g, (literal) => {
		const inner = literal.slice(1, -1);
		if (inner.length < 4) return literal;
		const fixed = sanitizeI18nText(inner);
		return fixed === inner ? literal : `"${fixed.replace(/"/g, '\\"')}"`;
	});

	await writeFile(filePath, content, 'utf8');
	console.log('Fixed', name);
}

// Fix locales.ts blogUi
const localesPath = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
let localesTs = await readFile(localesPath, 'utf8');
localesTs = sanitizeI18nText(localesTs.replace(/\\/g, '\\\\')).replace(/\\\\/g, '\\');
// Re-read and apply targeted fix
localesTs = await readFile(localesPath, 'utf8');
localesTs = localesTs.replace(/dlLeague of Legends/g, 'dla League of Legends');
await writeFile(localesPath, localesTs, 'utf8');
console.log('Fixed locales.ts');

for (const file of FILES) {
	await fixFile(file);
}

// Fix public locale JSON (en/es hand-maintained, sanitize known issues)
for (const locale of ['en', 'es']) {
	const jsonPath = path.join(ROOT, 'public', 'locales', locale, 'translation.json');
	const raw = JSON.parse(await readFile(jsonPath, 'utf8'));
	const fixed = JSON.parse(JSON.stringify(raw, (_, v) => (typeof v === 'string' ? sanitizeI18nText(v, locale) : v)));
	await writeFile(jsonPath, `${JSON.stringify(fixed, null, 2)}\n`, 'utf8');
	console.log('Fixed public/locales/' + locale + '/translation.json');
}

console.log('Done fixing i18n quality.');
