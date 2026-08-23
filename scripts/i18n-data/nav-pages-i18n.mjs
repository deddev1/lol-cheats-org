/**
 * Apply native nav-page copy so non-English locales read naturally, not like translated English.
 */
import { getNativePage } from './native-nav-copy.mjs';

const NAV_PAGE_IDS = ['features', 'pricing', 'setup', 'updates', 'faq', 'support', 'cheats'];

/** Merge native intro + sections into generated locale pages. */
export function applyNavPageOverrides(locale, pages) {
	if (locale === 'en') return pages;

	for (const pageId of NAV_PAGE_IDS) {
		const native = getNativePage(locale, pageId);
		if (!native || !pages[pageId]) continue;

		pages[pageId] = {
			...pages[pageId],
			...(native.intro ? { intro: native.intro } : {}),
			sections: native.sections,
		};
	}

	return pages;
}
