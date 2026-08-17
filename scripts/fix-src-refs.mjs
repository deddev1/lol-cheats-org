#!/usr/bin/env node
/** Final pass: fix remaining League of Legends references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['lolImages', 'lolImages'],
	["from '../data/lol'", "from '../data/lol'"],
	["from './lol'", "from './lol'"],
	['/undetected-lol-cheats/', '/undetected-lol-cheats/'],
	['/lol-wallhack/', '/lol-wallhack/'],
	['/lol-radar-hack/', '/lol-radar-hack/'],
	['/vanguard-bypass/', '/vanguard-bypass/'],
	['/lol-cheats-2026/', '/lol-cheats-2026/'],
	['/lol-aimbot/', '/lol-aimbot/'],
	['/lol-esp/', '/lol-esp/'],
	['/lol-cheats/', '/lol-esp/'],
	['League of Legends Hacks', 'League of Legends Hacks'],
	['lol cheats', 'lol cheats'],
	['lol wallhack', 'League of Legends wallhack'],
	['lol radar', 'League of Legends radar'],
	['LoL Aimbot', 'League of Legends Aimbot'],
	['LoL ESP', 'League of Legends ESP'],
	['League of Legends', 'League of Legends'],
	['Vanguard', 'Vanguard'],
	['vanguard', 'vanguard'],
	['lolcheats.org', 'lolcheats.org'],
	['operatorEsp', 'champEsp'],
	['extractFight', 'teamfight'],
	['alMazrah', 'summonersRift'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
