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
		slug: 'what-is',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'LoL Cheats explained: undetected ESP, radar, and aimbot for League of Legends on Windows PC with Vanguard maintenance, digital delivery, and setup support.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. {antiCheat} monitors Windows PC clients — check the Status page before you queue. No cheat can guarantee permanent undetected status; maintenance and responsible use matter.',
		slug: 'undetected',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How LoL Cheats stays maintained after Vanguard patches in 2026 — and why no cheat can promise permanent undetected status on Windows PC after updates.',
	}),
	faq({
		question: 'Does this work in ranked and normal games?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} match flow — reading enemy champions and minions, spotting wards, and staying aware near objectives and river.',
		slug: 'ranked',
		seoTitle: 'Ranked and Normal Games Support | FAQ',
		seoDescription:
			'LoL Cheats works in ranked and normal games on Windows PC — ESP, radar, and aimbot built for Summoners Rift match flow, objectives, and river awareness.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack (enemy champions, minions, and wards through walls with distance readouts), ward markers, 2D radar overlays for nearby threats outside your view, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'included',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One LoL Cheats license includes ESP wallhack, ward markers, 2D radar overlays, and configurable Aimbot for Windows PC — see Features for the full control list.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. For setup or billing help, use the Support page or email {email}.',
		slug: 'delivery',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'LoL Cheats licenses are delivered digitally after payment confirmation on Windows PC. Timing varies by payment method, and support can help with order lookup.',
	}),
	faq({
		question: 'Where do I check updates after League of Legends or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when League of Legends or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'status',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the LoL Cheats Status page after League of Legends or Vanguard patches to confirm the latest ESP, radar, and Aimbot build before you queue.',
	}),
	faq({
		question: 'How do I install {brand} on Windows PC?',
		answer:
			'After delivery, run the installer on Windows 10 or 11, activate your license, and load ESP, radar, and aimbot from the in-game menu. Step-by-step screenshots live on the <a href="/setup/">Setup</a> page.',
		slug: 'install',
		seoTitle: 'How to Install {brand} on Windows PC | FAQ',
		seoDescription:
			'Install LoL Cheats on Windows 10 or 11 after purchase — activate your license, load ESP and aimbot, and confirm Status before your first queue.',
	}),
	faq({
		question: 'Monthly or lifetime license — which plan should I pick?',
		answer:
			'Monthly fits short seasons or testing the full stack. Lifetime is one payment for the same ESP, radar, and aimbot features with ongoing {antiCheat} maintenance. Compare both on the <a href="/pricing/">Store</a> page.',
		slug: 'plans',
		seoTitle: 'Monthly vs Lifetime {brand} License | FAQ',
		seoDescription:
			'Compare LoL Cheats monthly and lifetime plans — same ESP, radar, and aimbot license with Vanguard maintenance on Windows PC.',
	}),
	faq({
		question: 'Can I get a refund?',
		answer:
			'Refunds follow the policy on the <a href="/refund-policy/">Refund Policy</a> page. Email {email} with your order ID if delivery failed or the license never activated.',
		slug: 'refund',
		seoTitle: 'Can I Get a Refund? | {brand} FAQ',
		seoDescription:
			'LoL Cheats refund rules for digital licenses on Windows PC — when refunds apply and how to contact support with your order ID.',
	}),
	faq({
		question: 'Will {brand} get my account banned?',
		answer:
			'Any third-party tool carries ban risk on {game}. {brand} is maintained after {antiCheat} patches, but no cheat can guarantee a ban-free account. Check <a href="/updates/">Status</a> before ranked games and use settings you can control.',
		slug: 'ban-risk',
		seoTitle: 'Ban Risk & Account Safety | {brand} FAQ',
		seoDescription:
			'Understand ban risk with LoL Cheats on Windows PC — Vanguard maintenance, Status checks, and why no cheat guarantees a safe account.',
	}),
] as const;

/** Homepage FAQ schema — same six pillars as seoFaqs. */
export const homeFaqs: readonly FaqItem[] = seoFaqs;

export type { CustomerReview } from './customer-reviews';
export { customerReviews, customerReviewStats } from './customer-reviews';
