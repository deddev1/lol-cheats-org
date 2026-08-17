#!/usr/bin/env node
/**
 * Rewrites hardcoded EN internal hrefs in generated content to live pillar URLs.
 * Safe to re-run after i18n/blog generation.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	['/faq/herbivore-and-carnivore-matches/', '/faq/ranked-and-normal-games/'],
	['/faq/how-to-contact-support/', '/support/'],
	['/faq/what-is-an-lol-wallhack/', '/faq/esp-wallhack-radar-or-aimbot/'],
	['/faq/does-lol-cheats-include-radar-cheat/', '/faq/esp-wallhack-radar-or-aimbot/'],
	['/faq/vanguard-anti-cheat-and-lol-cheats/', '/faq/are-lol-cheats-undetected-in-2026/'],
	['/faq/buy-undetected-lol-cheats-windows-pc/', '/pricing/'],
	['/undetected-lol-cheats/', '/'],
	['/best-lol-cheats/', '/'],
	['/lol-cheats-2026/', '/'],
	['/lol-mod-menu/', '/'],
	['/lol-unlock-all/', '/'],
	['/lol-wallhack/', '/lol-esp/'],
	['/lol-soft-aim/', '/lol-aimbot/'],
	['/lol-esp-cheat/', '/lol-esp/'],
	['/lol-aimbot-cheat/', '/lol-aimbot/'],
	['/lol-cheat-download/', '/setup/'],
	['/vanguard-bypass/', '/updates/'],
	['/lol-cheats/', '/'],
	['/lol-hacks/', '/'],
];

const TARGETS = [
	path.join(ROOT, 'src/data/i18n/content.generated.ts'),
	path.join(ROOT, 'src/data/blog/posts.generated.ts'),
];

let total = 0;

for (const file of TARGETS) {
	let src = readFileSync(file, 'utf8');
	let fileCount = 0;
	for (const [from, to] of REPLACEMENTS) {
		const re = new RegExp(`href=\\\\"${from.replace(/\//g, '\\/')}\\\\"`, 'g');
		const matches = src.match(re);
		if (matches?.length) {
			src = src.replace(re, `href=\\"${to}\\"`);
			fileCount += matches.length;
		}
	}
	if (fileCount) {
		writeFileSync(file, src);
		console.log(`${path.relative(ROOT, file)}: ${fileCount} href(s) updated`);
		total += fileCount;
	}
}

console.log(total ? `Fixed ${total} internal href(s) in generated content.` : 'No internal href fixes needed.');
