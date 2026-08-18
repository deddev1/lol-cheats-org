#!/usr/bin/env node
/**
 * Validates hreflang in built HTML:
 * - Every hreflang target has a static HTML file (200 equivalent)
 * - No hreflang target is a redirect source URL
 * - Reciprocal tags within each i18n cluster
 * - Redirect stub pages must not emit hreflang
 */
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const I18N_CLUSTER_MIN = 20;

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

function readCannibalSources() {
	const src = readFileSync(path.join(ROOT, 'src/data/seo-cannibal-map.ts'), 'utf8');
	const block = src.match(/cannibalRedirectTargets\s*=\s*\{([\s\S]*?)\}\s*as const/);
	if (!block) throw new Error('cannibalRedirectTargets missing');
	const englishPaths = readEnglishPaths();
	const sources = new Set();
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*['"]([\w-]+)['"]/g)) {
		const fromPath = englishPaths[row[1]];
		if (fromPath) sources.add(normalizePath(fromPath));
	}
	return sources;
}

function readEnglishPaths() {
	const src = readFileSync(path.join(ROOT, 'src/data/i18n/routing.ts'), 'utf8');
	const block = src.match(/export const englishPaths[^=]*=\s*\{([\s\S]*?)\n\};/);
	if (!block) throw new Error('englishPaths missing');
	const paths = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*'([^']+)'/g)) {
		paths[row[1]] = row[2];
	}
	return paths;
}

const SITE = readBrandUrl();
const REDIRECT_STUB_PATHS = readCannibalSources();

const REDIRECT_MAP = (() => {
	const map = new Map();
	for (const file of ['functions/path-redirects.json', 'functions/cannibal-redirects.json']) {
		try {
			const json = JSON.parse(readFileSync(path.join(ROOT, file), 'utf8'));
			for (const [from, to] of Object.entries(json)) map.set(normalizePath(from), normalizePath(to));
		} catch {
			/* optional */
		}
	}
	return map;
})();

function normalizePath(p) {
	if (!p || p === '/') return '/';
	const withSlash = p.endsWith('/') ? p : `${p}/`;
	return withSlash.replace(/\/{2,}/g, '/');
}

function pathFromUrl(url) {
	return normalizePath(url.replace(SITE, '') || '/');
}

function urlPathFromHtmlRel(rel) {
	if (rel === 'index.html') return '/';
	const normalized = rel.replace(/\\/g, '/');
	if (normalized.endsWith('.html') && !normalized.endsWith('/index.html')) {
		return normalizePath(`/${normalized}`);
	}
	return normalizePath(`/${normalized.replace(/\/index\.html$/, '')}/`);
}

async function htmlExistsForUrlPath(dist, urlPath) {
	const candidates = [];
	if (urlPath === '/') {
		candidates.push('index.html');
	} else {
		const trimmed = urlPath.replace(/^\//, '').replace(/\/$/, '');
		candidates.push(`${trimmed}/index.html`, `${trimmed}.html`);
	}
	for (const rel of candidates) {
		try {
			await access(path.join(dist, rel));
			return rel;
		} catch {
			/* next */
		}
	}
	return null;
}

function extractHreflang(html) {
	return [...html.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/gi)].map(
		([, hreflang, href]) => ({ hreflang, href: href.replace(/&amp;/g, '&') }),
	);
}

function extractCanonical(html) {
	const m = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
	return m ? m[1].replace(/&amp;/g, '&') : null;
}

function pageLocaleFromAlternates(pagePath, alternates) {
	for (const alt of alternates) {
		if (alt.hreflang === 'x-default') continue;
		if (pathFromUrl(alt.href) === pagePath) return alt.hreflang;
	}
	return null;
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

let errors = 0;
const fail = (msg) => {
	console.error(`✗ ${msg}`);
	errors += 1;
};
const ok = (msg) => console.log(`✓ ${msg}`);

async function main() {
	const DIST = await resolveDist();
	console.log(`Hreflang audit (${path.relative(ROOT, DIST)})\n`);

	const htmlFiles = await walkHtmlFiles(DIST);
	const pageHreflang = new Map();

	for (const rel of htmlFiles) {
		const html = await readFile(path.join(DIST, rel), 'utf8');
		const urlPath = urlPathFromHtmlRel(rel);
		const alternates = extractHreflang(html);
		const canonical = extractCanonical(html);

		pageHreflang.set(urlPath, alternates);

		if (REDIRECT_STUB_PATHS.has(urlPath) && alternates.length > 0) {
			fail(`Redirect stub ${urlPath} emits ${alternates.length} hreflang tag(s) — should emit none`);
		}

		if (REDIRECT_STUB_PATHS.has(urlPath) && canonical) {
			const canonicalPath = pathFromUrl(canonical);
			if (canonicalPath === urlPath) {
				fail(`Redirect stub ${urlPath} canonical points to itself — should point at pillar URL`);
			}
			if (REDIRECT_MAP.has(canonicalPath)) {
				fail(`Redirect stub ${urlPath} canonical ${canonicalPath} is itself a redirect source`);
			}
		}
	}

	let checkedTargets = 0;
	let checkedReciprocity = 0;
	const seenClusterChecks = new Set();

	for (const [pagePath, alternates] of pageHreflang) {
		if (alternates.length === 0) continue;
		if (REDIRECT_STUB_PATHS.has(pagePath)) continue;

		const nonDefault = alternates.filter((a) => a.hreflang !== 'x-default');
		const isI18nCluster = nonDefault.length >= I18N_CLUSTER_MIN;
		const pageLocale = pageLocaleFromAlternates(pagePath, alternates);

		for (const alt of alternates) {
			const targetPath = pathFromUrl(alt.href);
			checkedTargets += 1;

			if (!alt.href.startsWith(SITE)) {
				fail(`${pagePath} hreflang=${alt.hreflang} non-apex target ${alt.href}`);
				continue;
			}

			if (REDIRECT_MAP.has(targetPath)) {
				fail(
					`${pagePath} hreflang=${alt.hreflang} → redirect source ${alt.href} (→ ${REDIRECT_MAP.get(targetPath)})`,
				);
				continue;
			}

			if (alt.hreflang === 'x-default') continue;

			const htmlRel = await htmlExistsForUrlPath(DIST, targetPath);
			if (!htmlRel) {
				fail(`${pagePath} hreflang=${alt.hreflang} → missing HTML for ${alt.href}`);
				continue;
			}

			if (!isI18nCluster || !pageLocale) continue;

			const targetAlts = pageHreflang.get(targetPath) ?? [];
			const reciprocal = targetAlts.find((t) => t.hreflang === pageLocale);
			if (!reciprocal) {
				fail(`${pagePath} [${pageLocale}] → ${alt.href} missing reciprocal hreflang=${pageLocale} on target`);
				continue;
			}
			if (pathFromUrl(reciprocal.href) !== pagePath) {
				fail(
					`${pagePath} [${pageLocale}] → ${alt.href} reciprocal mismatch: target declares hreflang=${pageLocale} → ${reciprocal.href}`,
				);
				continue;
			}
			checkedReciprocity += 1;
		}

		if (isI18nCluster && pageLocale) {
			const clusterKey = nonDefault
				.map((a) => `${a.hreflang}:${pathFromUrl(a.href)}`)
				.sort()
				.join('|');
			if (seenClusterChecks.has(clusterKey)) continue;
			seenClusterChecks.add(clusterKey);

			for (const alt of nonDefault) {
				const targetPath = pathFromUrl(alt.href);
				const targetAlts = pageHreflang.get(targetPath);
				if (!targetAlts?.length) continue;
				const targetNonDefault = targetAlts.filter((a) => a.hreflang !== 'x-default');
				const targetClusterKey = targetNonDefault
					.map((a) => `${a.hreflang}:${pathFromUrl(a.href)}`)
					.sort()
					.join('|');
				if (targetClusterKey !== clusterKey) {
					fail(`${pagePath} hreflang cluster mismatch with ${targetPath}`);
					break;
				}
			}
		}
	}

	ok(`Scanned ${htmlFiles.length} HTML files`);
	ok(`Checked ${checkedTargets} hreflang targets (${checkedReciprocity} reciprocal pairs in i18n clusters)`);
	ok(`${REDIRECT_STUB_PATHS.size} redirect stub paths tracked`);

	console.log('');
	if (errors) {
		console.error(`${errors} hreflang issue(s) found`);
		process.exit(1);
	}
	console.log('Hreflang audit passed.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
