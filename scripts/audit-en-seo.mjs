#!/usr/bin/env node
/** Audit EN title/description lengths. Run: node scripts/audit-en-seo.mjs */
import { finalizePages, enPages } from './i18n-data/pages-en.mjs';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let errors = 0;
function check(label, title, description) {
	if (title && title.length > 60) {
		console.error(`TITLE ${label} (${title.length}): ${title}`);
		errors++;
	}
	if (description.length < 140 || description.length > 160) {
		console.error(`DESC ${label} (${description.length}): ${description}`);
		errors++;
	}
	if (!/[.!?]$/.test(description.trim())) {
		console.error(`PUNCT ${label}: ${description}`);
		errors++;
	}
}

for (const [id, p] of Object.entries(finalizePages(enPages))) {
	check(`page:${id}`, p.title, p.description);
}

const posts = readFileSync(path.join(ROOT, 'src/data/blog/posts.generated.ts'), 'utf8');
const titles = [...posts.matchAll(/title: "([^"]+)"/g)].map((m) => m[1]);
const descs = [...posts.matchAll(/metaDescription: "([^"]+)"/g)].map((m) => m[1]);
titles.forEach((t, i) => check(`blog:${i}`, t, descs[i] ?? ''));

const site = readFileSync(path.join(ROOT, 'src/data/site.ts'), 'utf8');
[...site.matchAll(/seoDescription:\s*'([^']+)'/g)].map((m) => m[1]).forEach((d, i) => check(`faq:${i}`, null, d));
[...site.matchAll(/seoDescription:\s*"([^"]+)"/g)].map((m) => m[1]).forEach((d, i) => check(`review:${i}`, null, d));

console.log(errors ? `\n${errors} SEO issue(s)` : '\nAll EN SEO meta within limits');
process.exit(errors ? 1 : 0);
