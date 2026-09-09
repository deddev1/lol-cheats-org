#!/usr/bin/env node
/**
 * Ensure every <img> has non-empty alt text in source and built HTML.
 * Run after build: node scripts/audit-img-alts.mjs
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(ROOT, 'dist');
const issues = [];

function rel(file) {
	return path.relative(ROOT, file);
}

function auditImgTag(tag, file, line) {
	const hasAlt = /\balt\s*=/.test(tag);
	if (!hasAlt) {
		issues.push({ file, line, kind: 'missing-alt', snippet: tag.slice(0, 120) });
		return;
	}

	const staticAlt = tag.match(/\balt=("([^"]*)"|'([^']*)')/i);
	if (staticAlt) {
		const val = staticAlt[2] ?? staticAlt[3] ?? '';
		if (!val.trim()) {
			issues.push({ file, line, kind: 'empty-alt', snippet: tag.slice(0, 120) });
		}
	}
}

function walkSource(dir) {
	for (const name of readdirSync(dir)) {
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) {
			if (name === 'node_modules' || name === 'dist') continue;
			walkSource(full);
			continue;
		}
		if (!/\.(astro|tsx|jsx|html)$/.test(name)) continue;

		const text = readFileSync(full, 'utf8');
		const imgRe = /<img\b[\s\S]*?>/gi;
		let match;
		while ((match = imgRe.exec(text)) !== null) {
			const tag = match[0].replace(/\s+/g, ' ').trim();
			const line = text.slice(0, match.index).split('\n').length;
			auditImgTag(tag, full, line);
		}
	}
}

function walkDist(dir) {
	for (const name of readdirSync(dir)) {
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) {
			walkDist(full);
			continue;
		}
		if (name !== 'index.html' && !name.endsWith('.html')) continue;

		const html = readFileSync(full, 'utf8');
		const imgs = [...html.matchAll(/<img\b[^>]*>/gi)];
		for (const match of imgs) {
			const tag = match[0];
			const alt = tag.match(/\balt=("([^"]*)"|'([^']*)')/i);
			const src = tag.match(/\bsrc=("([^"]*)"|'([^']*)')/i);
			const altVal = alt ? (alt[2] ?? alt[3] ?? '') : null;
			const srcVal = src ? (src[2] ?? src[3] ?? '') : '';
			if (altVal === null) {
				issues.push({ file: full, kind: 'missing-alt', src: srcVal });
			} else if (!altVal.trim()) {
				issues.push({ file: full, kind: 'empty-alt', src: srcVal });
			}
		}
	}
}

function auditImageData() {
	const siteImages = readFileSync(path.join(ROOT, 'src/data/site-images.ts'), 'utf8');
	for (const match of siteImages.matchAll(/alt:\s*'([^']*)'/g)) {
		if (!match[1].trim()) {
			issues.push({ file: path.join(ROOT, 'src/data/site-images.ts'), kind: 'empty-alt-meta' });
		}
	}

	const lol = readFileSync(path.join(ROOT, 'src/data/lol.ts'), 'utf8');
	for (const match of lol.matchAll(/alt:\s*siteImageMeta\.\w+\.alt/g)) {
		// bound to siteImageMeta — validated above
		void match;
	}
	for (const match of lol.matchAll(/alt:\s*'([^']*)'/g)) {
		if (!match[1].trim()) {
			issues.push({ file: path.join(ROOT, 'src/data/lol.ts'), kind: 'empty-alt-meta' });
		}
	}
}

console.log('Auditing image alt text…\n');

walkSource(path.join(ROOT, 'src'));
auditImageData();

if (existsSync(dist)) {
	walkDist(dist);
	const homePath = path.join(dist, 'index.html');
	if (existsSync(homePath)) {
		const home = readFileSync(homePath, 'utf8');
		const ogAlt = home.match(/property="og:image:alt"\s+content="([^"]+)"/);
		if (!ogAlt?.[1]?.trim()) {
			issues.push({ file: homePath, kind: 'missing-og-image-alt' });
		}
	}
} else {
	console.warn('dist/ not found — skipping built HTML audit (run after astro build)\n');
}

if (issues.length === 0) {
	console.log('All images have non-empty alt text.');
	process.exit(0);
}

console.error(`${issues.length} image alt issue(s):\n`);
for (const issue of issues.slice(0, 50)) {
	const loc = issue.line ? `${rel(issue.file)}:${issue.line}` : rel(issue.file);
	const detail = issue.src ?? issue.snippet ?? issue.kind;
	console.error(`  [${issue.kind}] ${loc}${detail ? ` — ${detail}` : ''}`);
}
if (issues.length > 50) {
	console.error(`  … and ${issues.length - 50} more`);
}

process.exit(1);
