import { brand } from './brand';
import type { PageId } from './i18n/routing';

export type ExternalResource = {
	label: string;
	href: string;
	note?: string;
};

export type GuideCta = {
	label: string;
	href: string;
};

/** Canonical outbound URLs — single source for CTAs and resource blocks. */
export const externalUrls = {
	riotClient: brand.gameUrl,
	patchNotes: 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/',
	officialSite: 'https://www.leagueoflegends.com/',
	wiki: 'https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki',
	community: 'https://www.reddit.com/r/leagueoflegends/',
} as const;

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		label: 'League of Legends on Riot Client',
		href: externalUrls.riotClient,
		note: 'Download the game, check system requirements, and create a Riot account.',
	},
	{
		label: 'Official patch notes',
		href: externalUrls.patchNotes,
		note: 'Read official balance and update posts before you change your loadout.',
	},
	{
		label: 'Official League of Legends website',
		href: externalUrls.officialSite,
		note: 'Game overview, news, and esports from Riot Games.',
	},
	{
		label: 'League of Legends Wiki (Fandom)',
		href: externalUrls.wiki,
		note: 'Champion stats, items, maps, and ability details.',
	},
	{
		label: 'League of Legends community (Reddit)',
		href: externalUrls.community,
		note: 'Announcements, patch discussion, and player guides.',
	},
];

/**
 * Secondary banner buttons that should point to official guides — not internal sales pages.
 * Keeps primary Buy CTAs while giving Google clear outbound citations.
 */
export const externalSecondaryByPageId: Partial<Record<PageId, GuideCta>> = {
	features: { label: 'Official patch notes', href: externalUrls.patchNotes },
	updates: { label: 'Official patch notes', href: externalUrls.patchNotes },
	cheats: { label: 'League of Legends Wiki', href: externalUrls.wiki },
	'lol-esp': { label: 'League of Legends Wiki', href: externalUrls.wiki },
	'lol-aimbot': { label: 'League of Legends Wiki', href: externalUrls.wiki },
	radar: { label: 'League of Legends Wiki', href: externalUrls.wiki },
	setup: { label: 'Official game site', href: externalUrls.officialSite },
	support: { label: 'LoL community', href: externalUrls.community },
	faq: { label: 'League of Legends Wiki', href: externalUrls.wiki },
	undetected: { label: 'Official patch notes', href: externalUrls.patchNotes },
	wallhack: { label: 'League of Legends Wiki', href: externalUrls.wiki },
	vanguard: { label: 'Official patch notes', href: externalUrls.patchNotes },
	'cheats-2026': { label: 'League of Legends on Riot Client', href: externalUrls.riotClient },
	'cheat-download': { label: 'Official game site', href: externalUrls.officialSite },
	'mod-menu': { label: 'League of Legends Wiki', href: externalUrls.wiki },
	'soft-aim': { label: 'League of Legends Wiki', href: externalUrls.wiki },
	'best-cheats': { label: 'LoL community', href: externalUrls.community },
	'aimbot-cheat': { label: 'League of Legends Wiki', href: externalUrls.wiki },
	'esp-cheat': { label: 'League of Legends Wiki', href: externalUrls.wiki },
	'unlock-all': { label: 'Official game site', href: externalUrls.officialSite },
	pricing: { label: 'League of Legends on Riot Client', href: externalUrls.riotClient },
};

export function getExternalSecondaryCta(pageId: PageId): GuideCta | undefined {
	return externalSecondaryByPageId[pageId];
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http');
}
