#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const duos = [
	["Activision's", "Riot Games'"],
	['Activision\u2019', "Riot Games'"],
	['Activision services', 'Riot Games services'],
	['Activision service', 'Riot Games service'],
	['Activision platform', 'Riot Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Riot Games bans'],
	['Activision security', 'Vanguard security'],
	['Activision Status', 'League of Legends on Riot Client'],
	['Activision League of Legends', 'League of Legends'],
	['Activision Support', 'League of Legends on Riot Client'],
	['Activision', 'Riot Games'],
	['EAC guide', 'Vanguard guide'],
	['undetected EAC notes', 'undetected Vanguard notes'],
	['status.epicgames.com', 'www.leagueoflegends.com'],
	['www.epicgames.com/lol', 'www.leagueoflegends.com'],
	['www.lol.com/ranked server', 'www.leagueoflegends.com'],
	['https://www.lol.com/', 'https://www.leagueoflegends.com/'],
	['League of Legends.com', 'League of Legends'],
	['League of Legends Competitive', 'League of Legends'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of duos) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
