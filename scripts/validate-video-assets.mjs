#!/usr/bin/env node
/** Ensure homepage preview video assets ship in public/ and dist/ after build. */
import { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REQUIRED = [
	'public/videos/lol-cheats-preview.mp4',
	'public/videos/lol-cheats-poster.jpg',
	'dist/videos/lol-cheats-preview.mp4',
	'dist/videos/lol-cheats-poster.jpg',
];

const missing = [];
for (const rel of REQUIRED) {
	try {
		await access(path.join(ROOT, rel));
	} catch {
		missing.push(rel);
	}
}

if (missing.length > 0) {
	console.error('Missing homepage video assets:\n' + missing.map((p) => `  - ${p}`).join('\n'));
	process.exit(1);
}

console.log('✓ Homepage preview video assets present in public/ and dist/');
