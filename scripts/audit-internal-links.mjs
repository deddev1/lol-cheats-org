#!/usr/bin/env node
/**
 * Validates internal hrefs in built HTML point at live pillar URLs,
 * not redirect-only cannibal or retired FAQ paths.
 */
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Paths that 301 away — must not appear as internal link targets. */
const REDIRECT_SOURCES = (() => {
	const map = new Map();
	for (const file of ['functions/path-redirects.json', 'functions/cannibal-redirects.json']) {
		try {
			const json = JSON.parse(readFileSync(path.join(ROOT, file), 'utf8'));
			for (const from of Object.keys(json)) map.set(normalizePath(from), json[from]);
		} catch {
			/* optional */
		}
	}
	// Trailing-slash normalization only — not a cannibal URL.
	map.delete('/sitemap.xml/');
	map.delete('/sitemap-en.xml/');
	map.delete('/sitemap-i18n.xml/');
	map.delete('/sitemap-images.xml/');
	return map;
})();

function normalizePath(p) {
	if (!p || p === '/') return '/';
	return p.endsWith('/') ? p : `${p}/`;
}

async function resolveDist() {
	for (const dir of [path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'client')]) {
		try {
			await access(path.join(dir, 'index.html'));
			return dir;
		} catch {
			/* next */
		}
	}
	throw new Error('dist/index.html missing — run build first');
}

async function walkHtmlFiles(dir, base = dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await walkHtmlFiles(full, base)));
		} else if (entry.name.endsWith('.html')) {
			files.push(path.relative(base, full));
		}
	}
	return files;
}

function urlPathFromHtmlRel(rel) {
	if (rel === 'index.html') return '/';
	const normalized = rel.replace(/\\/g, '/');
	if (normalized.endsWith('.html') && !normalized.endsWith('/index.html')) {
		return normalizePath(`/${normalized}`);
	}
	return normalizePath(`/${normalized.replace(/\/index\.html$/, '')}/`);
}

function extractInternalHrefs(html) {
	return [...html.matchAll(/<a[^>]+href="(\/[^"#?]*)"[^>]*>/gi)].map(([, href]) =>
		normalizePath(href.replace(/&amp;/g, '&')),
	);
}

let errors = 0;
const issues = [];

function fail(pagePath, href, redirectTo) {
	issues.push({ pagePath, href, redirectTo });
	errors += 1;
}

async function main() {
	const DIST = await resolveDist();
	console.log(`Internal link audit (${path.relative(ROOT, DIST)})\n`);

	const htmlFiles = await walkHtmlFiles(DIST);
	let checked = 0;

	for (const rel of htmlFiles) {
		const html = await readFile(path.join(DIST, rel), 'utf8');
		const pagePath = urlPathFromHtmlRel(rel);

		for (const href of extractInternalHrefs(html)) {
			checked += 1;
			if (!REDIRECT_SOURCES.has(href)) continue;
			fail(pagePath, href, REDIRECT_SOURCES.get(href));
		}
	}

	if (issues.length) {
		const byHref = new Map();
		for (const issue of issues) {
			const key = issue.href;
			if (!byHref.has(key)) byHref.set(key, { redirectTo: issue.redirectTo, pages: new Set() });
			byHref.get(key).pages.add(issue.pagePath);
		}
		for (const [href, { redirectTo, pages }] of [...byHref.entries()].sort((a, b) => b[1].pages.size - a[1].pages.size)) {
			console.error(`✗ ${href} → ${redirectTo} (${pages.size} pages, e.g. ${[...pages].slice(0, 3).join(', ')})`);
		}
	} else {
		console.log('✓ No internal links point at redirect-only URLs');
	}

	console.log(`✓ Checked ${checked} internal hrefs across ${htmlFiles.length} HTML files`);
	console.log(`✓ ${REDIRECT_SOURCES.size} redirect source paths tracked`);

	console.log('');
	if (errors) {
		console.error(`${errors} internal link issue(s) found`);
		process.exit(1);
	}
	console.log('Internal link audit passed.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
