import { siteConfig } from '../data/site';

/** Default descriptive alt when page or image copy is missing. */
export function defaultBrandImageAlt(context?: string): string {
	const base = `${siteConfig.name} — League of Legends ESP and aimbot`;
	const trimmed = context?.trim();
	return trimmed ? `${base} — ${trimmed}` : base;
}

/** Non-empty alt text for `<img>` — prefers the first trimmed candidate. */
export function resolveImageAlt(...candidates: Array<string | null | undefined>): string {
	for (const candidate of candidates) {
		const trimmed = candidate?.trim();
		if (trimmed) return trimmed;
	}
	return defaultBrandImageAlt();
}
