#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'lol cheats', espWallhack: 'lol cheats wallhack', aimbotCombat: 'lol cheats aimbot', teamFight: 'lol cheats', champEsp: 'lol cheats esp', headerArt: 'lol cheats aimbot', cheatsPackage: 'lol cheats radar', teamfight: 'lol cheats aimbot', battleRoyale: 'lol cheats', summonersRift: 'lol cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', teamFight: '[^']+', champEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', teamfight: '[^']+', battleRoyale: '[^']+', summonersRift: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'LoL ESP player tags hack'", "imageAlt: 'lol cheats esp'"],
	["imageAlt: 'LoL ESP radar hack'", "imageAlt: 'lol cheats radar'"],
	["imageAlt: 'LoL Aimbot sniper kill'", "imageAlt: 'lol cheats aimbot'"],
	["imageAlt: 'LoL Aimbot skeleton targeting'", "imageAlt: 'lol cheats aimbot'"],
	["imageAlt: 'lol cheats ADS combat'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheats setup PC activation'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheats updates Vanguard maintenance'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheats FAQ ESP aimbot'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheats support license help'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'Undetected lol cheats ESP wallhack'", "imageAlt: 'undetected lol cheats'"],
	["imageAlt: 'lol wallhack skeleton ESP'", "imageAlt: 'lol cheats wallhack'"],
	["imageAlt: 'Vanguard bypass lol ESP aimbot'", "imageAlt: 'lol cheats vanguard'"],
	["imageAlt: 'lol cheats 2026 ESP aimbot'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheats combat aimbot'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheat download ESP aimbot'", "imageAlt: 'lol cheats download'"],
	["imageAlt: 'League of Legends mod menu ESP aimbot'", "imageAlt: 'lol cheats mod menu'"],
	["imageAlt: 'League of Legends soft aim aimbot settings'", "imageAlt: 'lol cheats soft aim'"],
	["imageAlt: 'Best lol cheats 2026 ESP'", "imageAlt: 'best lol cheats'"],
	["imageAlt: 'LoL Aimbot hack combat'", "imageAlt: 'lol cheats aimbot'"],
	["imageAlt: 'LoL ESP hack wallhack'", "imageAlt: 'lol cheats esp'"],
	["imageAlt: 'League of Legends unlock all champions ESP aimbot guide'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheats privacy policy'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheats refund policy'", "imageAlt: 'lol cheats'"],
	["imageAlt: 'lol cheats terms of use'", "imageAlt: 'lol cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `League of Legends ${meta.altKeyword}`")
	.join("imageAlt: 'lol cheats'")
	.split("galleryTitle: `League of Legends Hacks ${topicName}`")
	.join("galleryTitle: 'lol cheats'")
	.split("imageAlt: `lol cheats ${kind} policy`")
	.join("imageAlt: 'lol cheats'")
	.split("galleryTitle: `League of Legends Hacks ${kind} resources`")
	.join("galleryTitle: 'lol cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
