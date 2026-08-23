import type { LocaleCode } from './locales';
import { defaultLocale } from './locales';
import { getLocalizedPath } from './routing';

/** Localized internal paths for nav, home SEO blocks, and inline links in React islands. */
export function getNavPaths(locale: LocaleCode) {
	return {
		home: getLocalizedPath('home', locale),
		features: getLocalizedPath('features', locale),
		lolEsp: getLocalizedPath('lol-esp', locale),
		lolAimbot: getLocalizedPath('lol-aimbot', locale),
		radar: getLocalizedPath('radar', locale),
		updates: getLocalizedPath('updates', locale),
		setup: getLocalizedPath('setup', locale),
		faq: getLocalizedPath('faq', locale),
		pricing: getLocalizedPath('pricing', locale),
		support: getLocalizedPath('support', locale),
		refund: getLocalizedPath('refund', locale),
		blog: defaultLocale === locale ? '/blog/' : `/${locale}/blog/`,
		reviews: '/reviews/',
	};
}

export type NavPaths = ReturnType<typeof getNavPaths>;
