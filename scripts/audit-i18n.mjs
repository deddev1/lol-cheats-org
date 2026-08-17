#!/usr/bin/env node
/**
 * Audit i18n quality across all locales: missing files, English fallbacks, known corruption patterns.
 */
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { sanitizeI18nText } from './i18n-data/text-sanitize.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const en = JSON.parse(await readFile(path.join(ROOT, 'public/locales/en/translation.json'), 'utf8'));

const BAD_PATTERNS = [
	/Zadeyo/i,
	/\bBR y ARAM game\b/i,
	/\bBR und ARAM game\b/i,
	/\bARAM game\b/i,
	/parLeague/,
	/dlLeague/,
	/GaleríLoL/,
	/GaleriLoL/,
	/GalleriLoL/,
	/AcquistLoL/,
	/MuLoL/,
	/MengapLoL/,
	/eteamrões/,
	/teamre nemiche/,
	/linkLeague of LegendsCheats/,
];

function collectKeys(obj, prefix = '') {
	const keys = [];
	for (const [k, v] of Object.entries(obj)) {
		const p = prefix ? `${prefix}.${k}` : k;
		if (v && typeof v === 'object' && !Array.isArray(v)) keys.push(...collectKeys(v, p));
		else keys.push(p);
	}
	return keys;
}

const enKeys = collectKeys(en);
let errors = 0;
let warnings = 0;

for (const locale of LOCALES) {
	const file = path.join(ROOT, 'public/locales', locale, 'translation.json');
	try {
		await access(file);
	} catch {
		console.error(`FAIL [${locale}] missing translation.json`);
		errors++;
		continue;
	}

	const data = JSON.parse(await readFile(file, 'utf8'));
	const keys = new Set(collectKeys(data));
	for (const k of enKeys) {
		if (!keys.has(k)) {
			console.error(`FAIL [${locale}] missing key: ${k}`);
			errors++;
		}
	}

	function walk(obj, prefix = '') {
		for (const [k, v] of Object.entries(obj)) {
			const p = prefix ? `${prefix}.${k}` : k;
			if (typeof v === 'string') {
				for (const pat of BAD_PATTERNS) {
					if (pat.test(v)) {
						console.error(`FAIL [${locale}] ${p}: "${v.slice(0, 80)}" matches ${pat}`);
						errors++;
					}
				}
				if (locale !== 'en' && v === lookup(en, p)) {
					console.warn(`WARN [${locale}] ${p} still English`);
					warnings++;
				}
			} else if (v && typeof v === 'object') {
				walk(v, p);
			}
		}
	}
	walk(data);
}

function lookup(obj, dotPath) {
	const parts = dotPath.split('.');
	let cur = obj;
	for (const part of parts) {
		if (!cur || typeof cur !== 'object') return undefined;
		cur = cur[part];
	}
	return typeof cur === 'string' ? cur : undefined;
}

console.log(`\nAudit complete: ${errors} errors, ${warnings} English-fallback warnings`);
if (errors > 0) process.exit(1);
