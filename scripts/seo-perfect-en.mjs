#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromlol.com)
	['published by ${EXT.activision}', 'published by Riot Games (${EXT.lol})'],
	['from ${EXT.activision}', 'from ${EXT.lol}'],
	['via ${EXT.activision}', 'via ${EXT.lol}'],
	['belong with ${EXT.activision}', 'belong with Riot Games'],
	['${EXT.activision} terms', 'Riot Games terms'],
	['${EXT.activision} season updates', '${EXT.lol} patch cycle and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → League of Legends
	['vehicles, wards', 'enemy champions, minions, wards'],
	['notice vehicles before they push your position', 'spot enemy champions and minions before they push your angle'],
	['Player, boss, and wards', 'Player, apex, and ward'],
	['boss and extract awareness cues', 'apex and nest awareness cues'],
	['boss threat cues', 'apex threat cues'],
	['bosses, and wards', 'apex champions, and wards'],
	['track apex champions and wards', 'track apex champions and wards'],
	['ARs, SMGs, and skillshots', 'carnivores, ambush builds, and skillshot champions'],
	['skillshot DMR fights and dorms clears', 'skillshot ambush ganks and high-traffic zone clears'],
	['Save separate Aimbot profiles for ARs, SMGs, and skillshots', 'Save separate Aimbot profiles for carnivores, ambush builds, and skillshot champions'],
	['building and rooftop fights', 'forest and river bank ambushes'],
	['weapons, and Vanguard', 'champions balance, and Vanguard'],
	['major weapon updates', 'major champions balance updates'],
	['boss threat cues, wards and ward markers', 'apex threat cues, ward and water markers'],
	['wards, wards, and bosses', 'wards, water sources, and apex champions'],
	['weapons, camos, skins, or battle pass tiers', 'champions, skins, or rank tiers'],
	['instant access to weapons', 'instant access to champions'],
	['enemy teams, bosses, and low-health targets', 'enemy teams, apex champions, and low-health targets'],
	[
		'vehicle threat cues, supply-drop awareness markers, and wards or chest pins so only BR-critical',
		'baron markers, objective cues, and ward pins so only match-critical',
	],
	['Vehicle and supply-drop threat cues', 'Baron and objective awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'ward and ward pins'],
	['Ward and chest markers', 'Ward and ward markers'],
	['ward and chest markers', 'ward and ward markers'],
	['chests worth the detour', 'low-health targets worth the detour'],
	['vehicles, and chests', 'bosses, and wards'],
	['loot, vehicles, and chests', 'loot, bosses, and wards'],
	['champions, wards, and vehicles', 'enemy champions, minions, and wards'],
	['champions, wards, vehicles', 'enemy champions, minions, wards'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track apex champions and wards'],
	['full BR loop', 'full match loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'match-critical'],
	['endgame circles', 'objective zones'],
	['final circles', 'late-match objectives'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first match'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range team fights'],
	['Battle Pass', 'patch cycle account progression'],
	[
		'skillshot AR beams and close-quarters room clears without reopening menus every spawn',
		'skillshot DMR fights and dorms clears without reopening menus every match',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and skillshots'],
	['AR / SMG / sniper', 'AR / SMG / skillshot'],
	['champions, wards, and vehicles', 'enemy champions, minions, and wards'],
	['for champions, wards, and vehicles', 'for champions, wards, and objectives'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['RVanguard out for', 'Reach out for'],
	['an Vanguard', 'a Vanguard'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['lol cheats & lol cheats', 'lol cheats'],
	[
		'covering both lol cheats and lol cheats search intent',
		'covering both “lol cheats” and “lol cheats” search intent',
	],
	[
		'also searched as lol cheats and lol cheat.',
		'built for League of Legends on Windows PC.',
	],
	[
		'lol cheats vs lol cheats — same stack, clear pages',
		'How this League of Legends Hacks pillar fits nearby pages',
	],
	[
		'Searchers use lol cheats and lol cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/lol-esp-hack/', '/lol-esp/'],
	['/lol-aimbot-hack/', '/lol-aimbot/'],
	['/best-lol-cheats/', '/'],
	['best lol cheats guide', 'League of Legends Hacks pillar'],
	['best lol cheats checklist', 'lol cheats checklist'],
	['best lol cheats', 'lol cheats'],
	[
		'Prefer softer tracking? Read the <a href="/lol-soft-aim/">soft aim guide</a>. Want the search term most champions use? See <a href="/lol-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/lol-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/lol-cheat-download/">cheat download</a>, <a href="/lol-mod-menu/">mod menu</a>, <a href="/lol-aimbot/">aimbot hack</a>, <a href="/lol-esp/">ESP hack</a>.',
		'Related landings: <a href="/lol-cheat-download/">cheat download</a>, <a href="/lol-mod-menu/">mod menu</a>, <a href="/lol-aimbot/">aimbot</a>, <a href="/lol-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
