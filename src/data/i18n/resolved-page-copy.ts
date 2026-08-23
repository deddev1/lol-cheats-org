import type { LocaleCode } from './locales';
import type { PageId, PageSection } from './content.generated';
import { getPageContent } from './index';
import { localizeInternalHref } from './routing';
import { simplePageCopy, type SimplePageCopy, type SimpleSection } from './simple-pages';
import { siteConfig } from '../site';

function localizeHtml(html: string, locale: LocaleCode): string {
	return html
		.replace(/\{checkout\}/g, siteConfig.checkoutUrl)
		.replace(/href="(\/[^"]+)"/g, (_, path: string) => `href="${localizeInternalHref(path, locale)}"`);
}

function localizeSimplePage(simple: SimplePageCopy, locale: LocaleCode): SimplePageCopy {
	return {
		...simple,
		sections: simple.sections.map((section) => localizeSection(section, locale)),
	};
}

function localizeSection(section: SimpleSection, locale: LocaleCode): SimpleSection {
	return {
		h2: section.h2,
		paragraphs: section.paragraphs.map((p) => localizeHtml(p, locale)),
		list: section.list?.map((item) => localizeHtml(item, locale)),
	};
}

function localizePageSection(section: PageSection, locale: LocaleCode): SimpleSection {
	return {
		h2: section.h2,
		paragraphs: section.paragraphs.map((p) => localizeHtml(p, locale)),
		list: section.list?.map((item) => localizeHtml(item, locale)),
	};
}

function mergeSections(
	simpleSections: SimpleSection[],
	pageSections: PageSection[],
	locale: LocaleCode,
): SimpleSection[] {
	return simpleSections.map((simpleSec, index) => {
		const pageSec = pageSections[index];
		if (!pageSec) return localizeSection(simpleSec, locale);

		return {
			h2: pageSec.h2,
			paragraphs: pageSec.paragraphs.map((p) => localizeHtml(p, locale)),
			list: simpleSec.list
				? pageSec.list?.map((item) => localizeHtml(item, locale)) ?? localizeSection(simpleSec, locale).list
				: pageSec.list?.map((item) => localizeHtml(item, locale)),
		};
	});
}

/** Unified page copy: same section structure as EN simple pages, with locale text and localized links. */
export function getResolvedPageCopy(locale: LocaleCode, pageId: PageId): SimplePageCopy {
	const page = getPageContent(locale, pageId);
	const simple = simplePageCopy[pageId];

	if (!simple) {
		return {
			title: page.title,
			description: page.description,
			h1: page.h1,
			intro: page.intro,
			ctaPrimary: page.ctaPrimary,
			ctaSecondary: page.ctaSecondary,
			ctaSecondaryHref: page.ctaSecondaryHref,
			galleryTitle: page.galleryTitle ?? '',
			sections: page.sections.map((section) => localizePageSection(section, locale)),
		};
	}

	const localizedSimple = localizeSimplePage(simple, locale);

	if (locale === 'en') {
		return localizedSimple;
	}

	return {
		title: page.title,
		description: page.description,
		h1: page.h1,
		intro: page.intro,
		ctaPrimary: page.ctaPrimary,
		ctaSecondary: page.ctaSecondary ?? localizedSimple.ctaSecondary,
		ctaSecondaryHref: page.ctaSecondaryHref ?? localizedSimple.ctaSecondaryHref,
		galleryTitle: page.galleryTitle ?? localizedSimple.galleryTitle,
		sections: mergeSections(localizedSimple.sections, page.sections, locale),
	};
}
