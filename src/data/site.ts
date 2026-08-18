export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} cheats'), href: '/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('{game} esp'), href: '/lol-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/lol-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/lol-esp/' },
	{ label: fillBrandTokens('{game} radar cheat'), href: '/lol-radar-cheat/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/' },
	{ label: 'Aimbot', href: '/lol-aimbot/' },
	{ label: 'ESP', href: '/lol-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} cheats pillar'), href: '/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/lol-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/lol-aimbot/' },
	{ label: fillBrandTokens('{game} radar cheat'), href: '/lol-radar-cheat/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} cheats FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

/** Six pillar FAQ answers — thin or duplicate slugs 301 to these (see path-redirects.json). */
export const seoFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for League of Legends on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-lol-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'LoL Cheats explained: undetected ESP, radar, and aimbot for League of Legends on Windows PC with Vanguard maintenance, digital delivery, and setup support.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. {antiCheat} monitors Windows PC clients — check the Status page before you queue. No cheat can guarantee permanent undetected status; maintenance and responsible use matter.',
		slug: 'are-lol-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How LoL Cheats stays maintained after Vanguard patches in 2026 — and why no cheat can promise permanent undetected status on Windows PC after updates.',
	}),
	faq({
		question: 'Does this work in ranked and normal games?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} match flow — reading enemy champions and minions, spotting wards, and staying aware near objectives and river.',
		slug: 'ranked-and-normal-games',
		seoTitle: 'Ranked and Normal Games Support | FAQ',
		seoDescription:
			'LoL Cheats works in ranked and normal games on Windows PC — ESP, radar, and aimbot built for Summoners Rift match flow, objectives, and river awareness.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack (enemy champions, minions, and wards through walls with distance readouts), ward markers, 2D radar overlays for nearby threats outside your view, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One LoL Cheats license includes ESP wallhack, ward markers, 2D radar overlays, and configurable Aimbot for Windows PC — see Features for the full control list.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. For setup or billing help, use the Support page or email {email}.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'LoL Cheats licenses are delivered digitally after payment confirmation on Windows PC. Timing varies by payment method, and support can help with order lookup.',
	}),
	faq({
		question: 'Where do I check updates after League of Legends or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when League of Legends or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the LoL Cheats Status page after League of Legends or Vanguard patches to confirm the latest ESP, radar, and Aimbot build before you queue.',
	}),
] as const;

/** Homepage FAQ schema — same six pillars as seoFaqs. */
export const homeFaqs: readonly FaqItem[] = seoFaqs;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_LoL',
		rating: 5,
		text: "Soft aim in LoL Cheats feels smooth on Summoner's Rift. The menu took a few minutes to learn. After that, matches felt easy.",
		short: "Soft aim in LoL Cheats feels smooth on Summoner's Rift.",
		slug: 'lol-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_LoL — 5/5 | {brand}',
		seoDescription: "@xKrypt0_LoL rates LoL Cheats soft aim 5/5 for Summoner's Rift on Windows PC — smooth tracking, clear menu, and strong ESP support during ranked matches.",
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes help on ARAM games. You can see who is stalking a river bank before you push. Still worth the price for LoL Cheats.',
		short: 'ESP boxes help on ARAM games. Still worth the price for LoL Cheats.',
		slug: 'lol-esp-aram-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates LoL Cheats ESP 4/5 for ARAM games on Windows PC — readable boxes, useful river awareness, and solid value for the monthly plan.',
		date: '2026-07-19',
		tag: 'ARAM game',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to LoL Cheats this patch cycle. Setup was simple. It stayed up after the last Vanguard update when my old cheat failed. Lifetime was a good buy.',
		short: 'LoL Cheats stayed up after the last Vanguard update. Lifetime was a good buy.',
		slug: 'lol-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates LoL Cheats 5/5 after a Vanguard update on Windows PC — fast setup, stable rebuilds, and lifetime access that outlasted a failing old cheat.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Soft aim in LoL Cheats is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Soft aim in LoL Cheats is easy to tune on PC.',
		slug: 'lol-soft-aim-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates LoL Cheats soft aim 4/5 on Windows PC — easy FOV tuning, natural feel in teamfights, and a menu clear enough for quick profile swaps.',
		date: '2026-07-11',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'LoL Cheats works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP in lane brushes is solid.',
		short: 'ESP in lane brushes is solid. Support helped after a slow first launch.',
		slug: 'lol-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates LoL Cheats setup 3/5 on Windows PC. ESP in lane bushes is solid after support helped with a slow first launch and Defender warning.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Ward ESP in LoL Cheats pays for the monthly plan. Objective markers and distance make early matches faster.',
		short: 'Ward ESP in LoL Cheats pays for the monthly plan.',
		slug: 'lol-ward-esp-review-lootgoblinx',
		seoTitle: 'Ward ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates LoL Cheats ward ESP 5/5 for early matches on Windows PC — objective markers and distance readouts that speed up the first minutes.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used LoL Cheats since last patch. Soft aim per champions helps in teamfight zones. Status updates after Vanguard patches could be clearer, but it came back the next day.',
		short: 'Soft aim per champions in LoL Cheats helps in teamfight zones.',
		slug: 'lol-soft-aim-match-review-rankedgrind42',
		seoTitle: 'Ranked Soft Aim by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates LoL Cheats soft aim 4/5 for ranked matches on Windows PC — per-champion profiles help in teamfights after Vanguard patches.',
		date: '2026-07-07',
		tag: 'Ranked',
	}),
	reviewMeta({
		handle: 'vanLifeLoL',
		rating: 5,
		text: 'Radar in LoL Cheats saved me near objectives and river. Seeing the third player early in duos is huge. Boxes plus radar look clean.',
		short: 'Radar in LoL Cheats saved me near objectives and river.',
		slug: 'lol-radar-cheat-review-vanlifelol',
		seoTitle: 'Radar Review by @vanLifeLoL — 5/5 | {brand}',
		seoDescription: '@vanLifeLoL rates LoL Cheats radar 5/5 near objectives and river on Windows PC — early third-player reads in duos plus clean boxes with the radar overlay.',
		date: '2026-07-28',
		tag: 'Objectives',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. LoL Cheats posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'LoL Cheats was back the next morning after a patch.',
		slug: 'lol-vanguard-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates LoL Cheats status updates 4/5 after Vanguard patches on Windows PC — faster rebuild notes than his previous tool on patch day.',
		date: '2026-06-09',
		tag: 'Vanguard updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Skillshot soft aim plus ESP in LoL Cheats is excellent for long shots. Simple and strong.',
		short: 'Skillshot soft aim plus ESP in LoL Cheats is excellent.',
		slug: 'lol-skillshot-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates LoL Cheats sniper soft aim 5/5 with ESP on Windows PC — excellent long-range skillshot assist paired with readable player boxes.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
