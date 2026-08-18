/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'LoL Cheats',
	/** Short product label if needed */
	shortName: 'LoL Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://lolcheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@lolcheats.org',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fleague-of-legends',
	gameUrl: 'https://www.leagueoflegends.com/en-us/download/',

	/** Game this template instance targets */
	game: 'League of Legends',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Vanguard',

	logo: '/images/lol-cheats-logo.webp',
	logoRaster: '/images/lol-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'LoL Cheats logo',
	defaultOgImage: '/images/lol-cheats-hero-1024w.webp',
	heroImage: '/images/lol-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#00A8D8',
		bg: '#060A10',
		soft: '#16384A',
		deep: '#080D14',
		hover: '#22D3EE',
		panel: '#101A26',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'lol cheats',
		list: [
			'lol cheats',
			'league of legends cheats',
			'LoL ESP',
			'LoL Aimbot',
			'lol wallhack',
			'lol cheat',
			'undetected lol cheats',
			'best lol cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'LoL Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
		homeDescription:
			'LoL cheats for League of Legends on Windows PC with aimbot, ESP, and wallhack. Compare features, pricing, setup steps, and Vanguard update notes before you buy.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Full LoL Cheats feature list for Windows PC: ESP boxes, soft aim, radar, and toggle controls. Review everything included before you buy a monthly or lifetime license.',
		storeTitle: '{game} Pricing | {brand}',
		storeDescription:
			'LoL Cheats pricing: $35 per month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Same features on both plans with instant digital delivery after checkout.',
		statusTitle: '{game} Updates | {brand}',
		statusDescription:
			'LoL Cheats update log with Vanguard rebuild notes for ESP, soft aim, and radar on Windows PC. Check maintenance status here before queueing after League of Legends patches.',
		previewTitle: 'LoL Cheats | Undetected ESP & Aimbot',
		previewDescription:
			'Undetected LoL Cheats for League of Legends on Windows PC with ESP, soft aim, and radar in one license. Instant digital delivery and Vanguard maintenance after major patches.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Set up LoL Cheats on Windows PC after purchase. Activate ESP boxes, soft aim profiles, and radar, then confirm Vanguard status on Updates before your first queue.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Contact LoL Cheats support for license delivery, ESP setup, soft aim profiles, and billing on Windows PC. Email with your order ID so replies can start faster.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'LoL Cheats FAQ covers ESP, soft aim, radar, Vanguard maintenance, pricing, and delivery on Windows PC. Clear answers about licenses, setup, and updates before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for LoL Cheats on Windows PC — ESP, soft aim, radar, and Vanguard update feedback from real license holders after ranked and ARAM matches.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'LoL Intel guides for League of Legends on Windows PC — macro tips, ESP, aimbot settings, jungle routes, and Vanguard update coverage for competitive players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for League of Legends on Windows PC.',
		blogLabel: 'LoL Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: '{brand} for League of Legends — ESP wallhack, soft aim, 2D radar, and Vanguard rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-17',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/lol-cheat-mod-menu-evade.webp',
				title: 'League of Legends cheat mod menu with EvadePlus settings',
				caption: 'In-game mod menu showing EvadePlus dodge settings for League of Legends on Windows PC',
			},
			{
				src: '/images/lol-evade-esp-wallhack.webp',
				title: 'League of Legends evade and ESP wallhack overlay',
				caption: 'Evade ON indicator with off-screen enemy ESP distance tracking in League of Legends',
			},
			{
				src: '/images/lol-script-teamfight.webp',
				title: 'League of Legends script overlays in teamfight',
				caption: 'Script range circles, target lines, and evade overlays during a League of Legends teamfight',
			},
			{
				src: '/images/lol-hexevade-script-menu.webp',
				title: 'League of Legends HexEvade script menu',
				caption: 'HexEvade menu with orbwalker, prediction, and evade toggles in League of Legends',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions at 140–160 chars with complete sentences. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	if (text.length >= 140 && text.length <= 160) return text;
	if (text.length > 160) {
		const trimmed = text.slice(0, 160);
		const lastPeriod = trimmed.lastIndexOf('.');
		if (lastPeriod >= 130) return trimmed.slice(0, lastPeriod + 1);
		const lastSpace = trimmed.lastIndexOf(' ');
		const cut = lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed;
		return cut.endsWith('.') ? cut : `${cut}.`;
	}
	return text;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
