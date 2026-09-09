#!/usr/bin/env node
/**
 * Merge blog + FAQ slug 301s into functions/path-redirects.json and functions/_middleware.js
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BLOG_SLUG_RENAMES, FAQ_SLUG_RENAMES, LEGACY_BLOG_REDIRECTS } from './slug-renames.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JSON_PATH = path.join(ROOT, 'functions/path-redirects.json');
const MIDDLEWARE_PATH = path.join(ROOT, 'functions/_middleware.js');

function blogPath(slug) {
	return `/blog/${slug}/`;
}

function faqPath(slug) {
	return `/faq/${slug}/`;
}

function addPair(map, from, to) {
	map[from] = to;
	map[`${from}/`] = to;
}

/** @param {Record<string, string>} map */
function buildSlugRedirects(map) {
	for (const [oldSlug, newSlug] of Object.entries(BLOG_SLUG_RENAMES)) {
		addPair(map, `/blog/${oldSlug}`, blogPath(newSlug));
	}
	for (const [oldSlug, newSlug] of Object.entries(FAQ_SLUG_RENAMES)) {
		addPair(map, `/faq/${oldSlug}`, faqPath(newSlug));
	}
}

function rewriteTargets(map) {
	for (const [key, value] of Object.entries(map)) {
		for (const [oldSlug, newSlug] of Object.entries(BLOG_SLUG_RENAMES)) {
			if (value === blogPath(oldSlug)) map[key] = blogPath(newSlug);
		}
		for (const [oldSlug, newSlug] of Object.entries(FAQ_SLUG_RENAMES)) {
			if (value === faqPath(oldSlug)) map[key] = faqPath(newSlug);
		}
	}
}

const redirects = JSON.parse(readFileSync(JSON_PATH, 'utf8'));
rewriteTargets(redirects);
buildSlugRedirects(redirects);
writeFileSync(JSON_PATH, `${JSON.stringify(redirects, null, 2)}\n`);

const middleware = readFileSync(MIDDLEWARE_PATH, 'utf8');
const start = middleware.indexOf('const PATH_REDIRECTS = {');
const end = middleware.indexOf('};', start) + 2;
if (start < 0 || end <= start) throw new Error('PATH_REDIRECTS block not found in _middleware.js');

const lines = ['const PATH_REDIRECTS = {'];
for (const [from, to] of Object.entries(redirects)) {
	lines.push(`\t'${from}': '${to}',`);
}
lines.push('};');
writeFileSync(MIDDLEWARE_PATH, `${middleware.slice(0, start)}${lines.join('\n')}${middleware.slice(end)}`);

console.log(`Synced ${Object.keys(redirects).length} path redirects → path-redirects.json + _middleware.js`);
