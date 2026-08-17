/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'lol-esp', 'lol-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'vanguard',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — simple lol cheats keyword filenames. */
export const HERO_IMAGES = {
	home: '/images/lol-cheats-esp.webp',
	'lol-esp': '/images/lol-cheats-radar.webp',
	'lol-aimbot': '/images/lol-cheats-aimbot.webp',
	features: '/images/lol-cheats-aimbot-view.webp',
	pricing: '/images/lol-cheats-match.webp',
	setup: '/images/lol-cheats-radar.webp',
	updates: '/images/lol-cheats-esp.webp',
	faq: '/images/lol-cheats-aimbot-view.webp',
	support: '/images/lol-cheats-match.webp',
	undetected: '/images/lol-cheats-wallhack.webp',
	wallhack: '/images/lol-cheats-wallhack.webp',
	radar: '/images/lol-cheats-radar.webp',
	vanguard: '/images/lol-cheats-aimbot.webp',
	'cheats-2026': '/images/lol-cheats-esp.webp',
	hacks: '/images/lol-cheats-match.webp',
	'cheat-download': '/images/lol-cheats-match.webp',
	'mod-menu': '/images/lol-cheats-radar.webp',
	'soft-aim': '/images/lol-cheats-aimbot-view.webp',
	'best-cheats': '/images/lol-cheats-esp.webp',
	'aimbot-hack': '/images/lol-cheats-aimbot-view.webp',
	'esp-hack': '/images/lol-cheats-wallhack.webp',
	'unlock-all': '/images/lol-cheats-radar.webp',
	privacy: '/images/lol-cheats-aimbot.webp',
	refund: '/images/lol-cheats-match.webp',
	terms: '/images/lol-cheats-aimbot-view.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; teamFight: string; champEsp: string;
\t\theaderArt: string; cheatsPackage: string; teamfight: string; battleRoyale: string; summonersRift: string;
\t};
};
export type PageId = 'home' | 'lol-esp' | 'lol-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'vanguard' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy League of Legends Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://www.leagueoflegends.com/" target="_blank" rel="noopener noreferrer">League of Legends</a>',
	lol:
		'<a href="https://www.leagueoflegends.com/" target="_blank" rel="noopener noreferrer">League of Legends</a>',
	status:
		'<a href="https://www.leagueoflegends.com/" target="_blank" rel="noopener noreferrer">League of Legends on Riot Client</a>',
	vanguard:
		'<a href="https://www.riotgames.com/en/anti-cheat" target="_blank" rel="noopener noreferrer">Vanguard</a>',
};
