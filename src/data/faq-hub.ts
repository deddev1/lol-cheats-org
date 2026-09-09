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
		slugs: ['what-is', 'delivery', 'install'],
	},
	{
		id: 'safety',
		title: 'Undetected & Vanguard',
		description: 'Status after patches, ban risk, and when to check before you queue.',
		slugs: ['undetected', 'status', 'ban-risk'],
	},
	{
		id: 'features',
		title: 'ESP, radar & aimbot',
		description: 'What one license includes and where ranked / normal games fit.',
		slugs: ['included', 'ranked'],
	},
	{
		id: 'billing',
		title: 'Plans & refunds',
		description: 'Monthly vs lifetime and refund rules before checkout.',
		slugs: ['plans', 'refund'],
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
