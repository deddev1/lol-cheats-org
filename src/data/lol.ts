import { siteConfig } from './site';

/** Simple crawl URLs — one screenshot per asset slot. */
export const lolScreenshot = (n: number) =>
	`/images/lol-screenshot-${String(n).padStart(2, '0')}.webp`;

/** Screenshots used across product pages. */
export const lolImages = {
	hero: lolScreenshot(1),
	espWallhack: lolScreenshot(3),
	aimbotCombat: lolScreenshot(4),
	aimbotSkeleton: lolScreenshot(5),
	champEsp: lolScreenshot(6),
	cheatsCombat: lolScreenshot(7),
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one screenshot URL */
	cover: lolScreenshot(7),
	buildPlanner: lolScreenshot(6),
	teamFight: lolScreenshot(5),
	cheatsPackage: lolScreenshot(6),
	headerArt: lolScreenshot(5),
	rankedCombat: lolScreenshot(7),
	extractFight: lolScreenshot(4),
	teamfight: lolScreenshot(4),
	aramCombat: lolScreenshot(3),
	aramMode: lolScreenshot(2),
	summonersRift: lolScreenshot(2),
	matchMap: lolScreenshot(2),
	product: [
		{ src: lolScreenshot(2), alt: 'League of Legends gameplay screenshot 2' },
		{ src: lolScreenshot(3), alt: 'League of Legends gameplay screenshot 3' },
		{ src: lolScreenshot(4), alt: 'League of Legends gameplay screenshot 4' },
		{ src: lolScreenshot(6), alt: 'League of Legends gameplay screenshot 6' },
		{ src: lolScreenshot(7), alt: 'League of Legends gameplay screenshot 7' },
		{ src: lolScreenshot(8), alt: 'League of Legends gameplay screenshot 8' },
	],
	gallery: [
		{ src: lolScreenshot(2), alt: 'League of Legends gameplay screenshot 2', featured: true },
		{ src: lolScreenshot(3), alt: 'League of Legends gameplay screenshot 3' },
		{ src: lolScreenshot(4), alt: 'League of Legends gameplay screenshot 4' },
		{ src: lolScreenshot(9), alt: 'League of Legends gameplay screenshot 9' },
		{ src: lolScreenshot(10), alt: 'League of Legends gameplay screenshot 10' },
	],
	sitemap: Array.from({ length: 15 }, (_, i) => ({
		src: lolScreenshot(i + 1),
		title: `League of Legends gameplay screenshot ${i + 1}`,
		caption: `League of Legends champion survival screenshot ${i + 1}`,
	})),
} as const;
