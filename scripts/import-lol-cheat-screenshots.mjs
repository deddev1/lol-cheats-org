/**
 * Import 4 League of Legends cheat screenshots with SEO-friendly URLs.
 *
 * Place source PNG/JPG files in assets/lol-cheats-screenshots/ OR pass URLs:
 *   npm run import:cheat-screenshots -- \
 *     --url mod-menu=https://... \
 *     --url evade-esp=https://... \
 *     --url teamfight=https://... \
 *     --url hex-evade=https://...
 */
import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const assetsDir = path.join(root, 'assets/lol-cheats-screenshots');
const imagesDir = path.join(root, 'public/images');
const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 82, effort: 6, smartSubsample: true };

const SHOTS = [
	{
		key: 'mod-menu',
		base: 'lol-cheat-mod-menu-evade',
		localNames: ['lol-cheat-mod-menu-evade.png', 'lol-cheat-mod-menu-evade.jpg', '01-mod-menu.png'],
		legacy: ['lol-cheats-esp.webp', 'lol-cheats-aimbot-view.webp'],
	},
	{
		key: 'evade-esp',
		base: 'lol-evade-esp-wallhack',
		localNames: ['lol-evade-esp-wallhack.png', 'lol-evade-esp-wallhack.jpg', '02-evade-esp.png'],
		legacy: ['lol-cheats-wallhack.webp', 'lol-esp-player-tags.webp', 'lol-esp-radar.webp'],
	},
	{
		key: 'teamfight',
		base: 'lol-script-teamfight',
		localNames: ['lol-script-teamfight.png', 'lol-script-teamfight.jpg', '03-teamfight.png'],
		legacy: ['lol-cheats-aimbot.webp', 'lol-cheats-combat.webp', 'lol-cheats-match.webp', 'lol-cheats-session.webp'],
	},
	{
		key: 'hex-evade',
		base: 'lol-hexevade-script-menu',
		localNames: ['lol-hexevade-script-menu.png', 'lol-hexevade-script-menu.jpg', '04-hex-evade.png'],
		legacy: ['lol-cheats-radar.webp', 'lol-aimbot-skeleton.webp', 'lol-aimbot-sniper.webp'],
	},
];

const REMOVE_PREFIXES = [
	'lol-screenshot-',
	'lol-extract-fight',
	'lol-growth-run-combat',
	'lol-growth-run-mode',
	'lol-verdansk-map',
	'lol-wallhack-skeleton',
	'hero-banner',
	'lol-hero-banner',
];

function parseUrlArgs(argv) {
	const urls = {};
	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		const inline = arg.match(/^--url ([^=]+)=(.+)$/);
		if (inline) {
			urls[inline[1]] = inline[2];
			continue;
		}
		if (arg === '--url' && argv[i + 1]) {
			const next = argv[i + 1];
			const split = next.match(/^([^=]+)=(.+)$/);
			if (split) {
				urls[split[1]] = split[2];
				i += 1;
			}
		}
	}
	return urls;
}

async function loadSource(shot, urlArgs) {
	const fromUrl = urlArgs[shot.key];
	if (fromUrl) {
		const res = await fetch(fromUrl, { headers: { 'User-Agent': 'LoLCheatsSiteImport/1.0' } });
		if (!res.ok) throw new Error(`Download failed for ${shot.key}: HTTP ${res.status}`);
		return Buffer.from(await res.arrayBuffer());
	}
	for (const name of shot.localNames) {
		const candidate = path.join(assetsDir, name);
		try {
			return await sharp(candidate).toBuffer();
		} catch {
			// try next name
		}
	}
	throw new Error(
		`Missing source for ${shot.key}. Add ${shot.localNames[0]} to assets/lol-cheats-screenshots/ or pass --url ${shot.key}=https://...`,
	);
}

async function writeSet(sourceBuffer, baseName) {
	let canonical = null;
	for (const width of CONTENT_WIDTHS) {
		const file = `${baseName}-${width}w.webp`;
		const webp = await sharp(sourceBuffer)
			.resize(width, null, { fit: 'inside', withoutEnlargement: true })
			.webp(WEBP)
			.toBuffer();
		await writeFile(path.join(imagesDir, file), webp);
		console.log(`  ✓ ${file} (${Math.round(webp.length / 1024)}KB)`);
	}

	canonical = await sharp(sourceBuffer)
		.resize(960, null, { fit: 'inside', withoutEnlargement: true })
		.webp(WEBP)
		.toBuffer();
	await writeFile(path.join(imagesDir, `${baseName}.webp`), canonical);
	console.log(`  ✓ ${baseName}.webp (${Math.round(canonical.length / 1024)}KB)`);
	return canonical;
}

async function removeOldScreenshots() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		if (file.includes('lol-cheats-hero') || file.includes('lol-cheats-logo')) continue;
		const base = file.replace(/(-\d+w)?\.webp$/i, '');
		if (REMOVE_PREFIXES.some((prefix) => base.startsWith(prefix) || base === prefix)) {
			await unlink(path.join(imagesDir, file));
			console.log(`  removed ${file}`);
		}
	}
}

await mkdir(assetsDir, { recursive: true });
await mkdir(imagesDir, { recursive: true });

const urlArgs = parseUrlArgs(process.argv.slice(2));
console.log('Importing LoL cheat screenshots…');

for (const shot of SHOTS) {
	console.log(`\n${shot.base}`);
	const source = await loadSource(shot, urlArgs);
	const canonical = await writeSet(source, shot.base);
	for (const legacy of shot.legacy) {
		await writeFile(path.join(imagesDir, legacy), canonical);
		console.log(`  ↪ legacy alias ${legacy}`);
	}
}

console.log('\nCleaning old numbered screenshot files…');
await removeOldScreenshots();
console.log('\nDone — 4 SEO image URLs live under /images/lol-*');
