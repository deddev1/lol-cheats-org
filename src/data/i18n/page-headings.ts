import type { PageId } from './content.generated';

/** Short EN H1 + breadcrumb labels — match nav IA; avoid triple repetition in page banners. */
export const pageNavLabels: Partial<Record<PageId, { h1: string; crumb: string }>> = {
	features: { h1: 'Features', crumb: 'Features' },
	pricing: { h1: 'Store', crumb: 'Store' },
	updates: { h1: 'Status', crumb: 'Status' },
	cheats: { h1: 'LoL Cheats', crumb: 'Cheats' },
	'lol-esp': { h1: 'ESP', crumb: 'ESP' },
	'lol-aimbot': { h1: 'Aimbot', crumb: 'Aimbot' },
	radar: { h1: 'Radar', crumb: 'Radar' },
	setup: { h1: 'Setup', crumb: 'Setup' },
	support: { h1: 'Support', crumb: 'Support' },
	faq: { h1: 'FAQ', crumb: 'FAQ' },
	privacy: { h1: 'Privacy', crumb: 'Privacy' },
	refund: { h1: 'Refunds', crumb: 'Refunds' },
	terms: { h1: 'Terms', crumb: 'Terms' },
	undetected: { h1: 'Undetected', crumb: 'Undetected' },
	wallhack: { h1: 'Wallhack', crumb: 'Wallhack' },
	vanguard: { h1: 'Vanguard', crumb: 'Vanguard' },
	'cheats-2026': { h1: 'LoL Cheats 2026', crumb: 'LoL Cheats 2026' },
	'best-cheats': { h1: 'Best Cheats', crumb: 'Best Cheats' },
	'cheat-download': { h1: 'Download', crumb: 'Download' },
	'mod-menu': { h1: 'Mod Menu', crumb: 'Mod Menu' },
	'soft-aim': { h1: 'Soft Aim', crumb: 'Soft Aim' },
	'aimbot-cheat': { h1: 'Aimbot', crumb: 'Aimbot' },
	'esp-cheat': { h1: 'ESP', crumb: 'ESP' },
	'unlock-all': { h1: 'Unlock All', crumb: 'Unlock All' },
};

export function getPageNavLabel(pageId: PageId): { h1: string; crumb: string } | undefined {
	return pageNavLabels[pageId];
}
