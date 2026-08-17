import { siteConfig } from './site';
import { crawlImagePool, siteImageMeta, siteImages } from './site-images';

/** Screenshots used across product pages. */
export const lolImages = {
	hero: siteConfig.heroImage,
	espWallhack: siteImages.evadeEspWallhack,
	aimbotCombat: siteImages.scriptTeamfight,
	aimbotSkeleton: siteImages.scriptTeamfight,
	champEsp: siteImages.evadeEspWallhack,
	cheatsCombat: siteImages.scriptTeamfight,
	logo: siteConfig.logo,
	cover: siteImages.scriptTeamfight,
	buildPlanner: siteImages.hexEvadeMenu,
	teamFight: siteImages.scriptTeamfight,
	cheatsPackage: siteImages.hexEvadeMenu,
	headerArt: siteImages.modMenuEvade,
	rankedCombat: siteImages.scriptTeamfight,
	extractFight: siteImages.scriptTeamfight,
	teamfight: siteImages.scriptTeamfight,
	aramCombat: siteImages.evadeEspWallhack,
	aramMode: siteImages.evadeEspWallhack,
	summonersRift: siteImages.evadeEspWallhack,
	matchMap: siteImages.evadeEspWallhack,
	product: [
		{ src: siteImages.evadeEspWallhack, alt: siteImageMeta.evadeEspWallhack.alt },
		{ src: siteImages.modMenuEvade, alt: siteImageMeta.modMenuEvade.alt },
		{ src: siteImages.scriptTeamfight, alt: siteImageMeta.scriptTeamfight.alt },
		{ src: siteImages.hexEvadeMenu, alt: siteImageMeta.hexEvadeMenu.alt },
	],
	gallery: [
		{ src: siteImages.evadeEspWallhack, alt: siteImageMeta.evadeEspWallhack.alt, featured: true },
		{ src: siteImages.modMenuEvade, alt: siteImageMeta.modMenuEvade.alt },
		{ src: siteImages.scriptTeamfight, alt: siteImageMeta.scriptTeamfight.alt },
		{ src: siteImages.hexEvadeMenu, alt: siteImageMeta.hexEvadeMenu.alt },
	],
	sitemap: (Object.keys(siteImageMeta) as Array<keyof typeof siteImageMeta>).map((key) => ({
		src: siteImages[key],
		title: siteImageMeta[key].title,
		caption: siteImageMeta[key].caption,
	})),
} as const;

export { siteImages, crawlImagePool as lolScreenshotPool };
