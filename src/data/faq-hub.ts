import type { FaqItem } from './site';

/** Search-intent groupings for the FAQ hub — matches how buyers query this niche. */
export type FaqHubCluster = {
	id: string;
	title: string;
	description: string;
	slugs: string[];
};

export const faqHubClusters: FaqHubCluster[] = [
	{
		id: 'start',
		title: 'Getting started',
		description: 'What the package is, delivery, and first install on Windows PC.',
		slugs: ['what-are-lol-cheats', 'how-are-licenses-delivered', 'how-to-install-lol-cheats'],
	},
	{
		id: 'safety',
		title: 'Undetected & Vanguard',
		description: 'Status after patches, ban risk, and when to check before you queue.',
		slugs: [
			'are-lol-cheats-undetected-in-2026',
			'where-to-check-updates',
			'will-lol-cheats-get-me-banned',
		],
	},
	{
		id: 'features',
		title: 'ESP, radar & aimbot',
		description: 'What one license includes and where ranked / normal games fit.',
		slugs: ['esp-wallhack-radar-or-aimbot', 'ranked-and-normal-games'],
	},
	{
		id: 'billing',
		title: 'Plans & refunds',
		description: 'Monthly vs lifetime and refund rules before checkout.',
		slugs: ['monthly-vs-lifetime-license', 'can-i-get-a-refund'],
	},
];

export type FaqHubClusterWithItems = FaqHubCluster & { items: FaqItem[] };

export function clusterFaqs(all: readonly FaqItem[]): FaqHubClusterWithItems[] {
	const bySlug = new Map(all.map((item) => [item.slug, item]));
	return faqHubClusters
		.map((cluster) => ({
			...cluster,
			items: cluster.slugs.map((slug) => bySlug.get(slug)).filter(Boolean) as FaqItem[],
		}))
		.filter((cluster) => cluster.items.length > 0);
}
