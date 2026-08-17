#!/usr/bin/env node
/**
 * Performance sanity checks on built HTML (run after `npm run build`).
 */
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MAX_HOME_HTML_BYTES = 90_000;
const MAX_CRITICAL_JS_BYTES = 220_000;

let errors = 0;
const fail = (msg) => {
	console.error(`✗ ${msg}`);
	errors += 1;
};
const ok = (msg) => console.log(`✓ ${msg}`);

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

async function jsBytesInDir(dir) {
	let total = 0;
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) total += await jsBytesInDir(full);
		else if (entry.name.endsWith('.js')) total += (await readFile(full)).byteLength;
	}
	return total;
}

function countMatches(html, re) {
	return (html.match(re) ?? []).length;
}

async function main() {
	const DIST = await resolveDist();
	console.log(`Performance audit (${path.relative(ROOT, DIST)})\n`);

	const home = await readFile(path.join(DIST, 'index.html'), 'utf8');
	const homeBytes = Buffer.byteLength(home, 'utf8');

	if (homeBytes > MAX_HOME_HTML_BYTES) {
		fail(`Homepage HTML ${homeBytes.toLocaleString()} bytes (max ${MAX_HOME_HTML_BYTES.toLocaleString()})`);
	} else {
		ok(`Homepage HTML ${homeBytes.toLocaleString()} bytes`);
	}

	if (!home.includes('imagesrcset') || !home.includes('fetchpriority="high"')) {
		fail('Homepage missing responsive LCP preload (imagesrcset + fetchpriority)');
	} else {
		ok('Homepage preloads responsive LCP hero');
	}

	if (home.includes('lol-cheats-hero-1024w.webp')) {
		ok('Homepage LCP uses compressed 1024w WebP');
	} else {
		fail('Homepage LCP not using lol-cheats-hero-1024w.webp');
	}

	if (home.includes('syne-latin-wght-normal.woff2') && home.includes('rel="preload"')) {
		fail('Syne display font is preloaded — competes with LCP on first paint');
	} else {
		ok('Only critical body font preloaded in head');
	}

	const loadIslands = countMatches(home, /client="load"/g);
	if (loadIslands > 0) {
		fail(`${loadIslands} client:load island(s) on homepage — defer non-critical hydration`);
	} else {
		ok('No client:load islands on homepage');
	}

	const heroIsland = /Hero\.[A-Za-z0-9_-]+\.js/.test(home);
	if (heroIsland) {
		fail('Homepage still hydrates a React Hero island — use static Astro hero');
	} else {
		ok('Homepage hero is static HTML (no Hero island)');
	}

	const astroDir = path.join(DIST, '_astro');
	let jsTotal = 0;
	try {
		jsTotal = await jsBytesInDir(astroDir);
		ok(`Total JS bundles ${jsTotal.toLocaleString()} bytes`);
	} catch {
		fail('dist/_astro missing');
	}

	const lazyImages = countMatches(home, /loading="lazy"/g);
	const espHtml = await readFile(path.join(DIST, 'lol-esp/index.html'), 'utf8').catch(() => '');
	const espLazy = countMatches(espHtml, /loading="lazy"/g);
	if (lazyImages + espLazy < 1) {
		fail('No lazy-loaded below-fold images on homepage or /lol-esp/');
	} else {
		ok(`${lazyImages + espLazy} lazy-loaded image(s) (homepage + /lol-esp/)`);
	}

	console.log('');
	if (errors) {
		console.error(`${errors} performance issue(s) found`);
		process.exit(1);
	}
	console.log('Performance audit passed.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
