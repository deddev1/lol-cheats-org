/**
 * Canonical LoL cheat screenshot URLs — descriptive paths for Google image search.
 * Hero images are excluded; see brand.heroImage.
 */
export const siteImages = {
	modMenuEvade: '/images/lol-cheat-mod-menu-evade.webp',
	evadeEspWallhack: '/images/lol-evade-esp-wallhack.webp',
	scriptTeamfight: '/images/lol-script-teamfight.webp',
	hexEvadeMenu: '/images/lol-hexevade-script-menu.webp',
} as const;

export type SiteImageKey = keyof typeof siteImages;

/** Pool for FAQ/review rotation and sitemap extras. */
export const crawlImagePool = Object.values(siteImages);

export const siteImageMeta: Record<
	SiteImageKey,
	{ title: string; caption: string; alt: string }
> = {
	modMenuEvade: {
		title: 'League of Legends cheat mod menu with EvadePlus settings',
		caption: 'In-game mod menu showing EvadePlus dodge settings for League of Legends on Windows PC',
		alt: 'League of Legends cheat mod menu with EvadePlus skillshot dodge settings',
	},
	evadeEspWallhack: {
		title: 'League of Legends evade and ESP wallhack overlay',
		caption: 'Evade ON indicator with off-screen enemy ESP distance tracking in League of Legends',
		alt: 'League of Legends evade script with ESP wallhack distance line to enemy champion',
	},
	scriptTeamfight: {
		title: 'League of Legends script overlays in teamfight',
		caption: 'Script range circles, target lines, and evade overlays during a League of Legends teamfight',
		alt: 'League of Legends scripting overlays during a Vayne teamfight on Summoner\'s Rift',
	},
	hexEvadeMenu: {
		title: 'League of Legends HexEvade script menu',
		caption: 'HexEvade menu with orbwalker, prediction, and evade toggles in League of Legends',
		alt: 'League of Legends HexEvade script menu with evade status enabled on Jinx',
	},
};

/** Page banners and OG images — mapped to the closest screenshot. */
export const pageHeroImageById = {
	home: siteImages.evadeEspWallhack,
	'lol-esp': siteImages.evadeEspWallhack,
	'lol-aimbot': siteImages.scriptTeamfight,
	features: siteImages.modMenuEvade,
	pricing: siteImages.scriptTeamfight,
	setup: siteImages.hexEvadeMenu,
	updates: siteImages.hexEvadeMenu,
	faq: siteImages.modMenuEvade,
	support: siteImages.hexEvadeMenu,
	undetected: siteImages.hexEvadeMenu,
	wallhack: siteImages.evadeEspWallhack,
	radar: siteImages.hexEvadeMenu,
	vanguard: siteImages.hexEvadeMenu,
	'cheats-2026': siteImages.modMenuEvade,
	cheats: siteImages.modMenuEvade,
	'cheat-download': siteImages.modMenuEvade,
	'mod-menu': siteImages.modMenuEvade,
	'soft-aim': siteImages.scriptTeamfight,
	'best-cheats': siteImages.evadeEspWallhack,
	'aimbot-cheat': siteImages.scriptTeamfight,
	'esp-cheat': siteImages.evadeEspWallhack,
	'unlock-all': siteImages.scriptTeamfight,
	privacy: siteImages.hexEvadeMenu,
	refund: siteImages.scriptTeamfight,
	terms: siteImages.modMenuEvade,
} as const;
