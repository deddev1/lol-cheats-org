export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global League of Legends Hacks blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'League of Legends Hacks Blog | Raid Guides',
		blogDescription:
			'League of Legends guides — macro tips, ESP, aimbot notes, gank routes, and Vanguard update coverage. English blog at lolcheats.org/blog/.',
		blogH1: 'League of Legends Hacks Intel',
		blogIntro:
			'Short League of Legends guides for ranked and normal games. Pair these tips with League of Legends Hacks product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'League of Legends Hacks home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de League of Legends Hacks con guías de trucos indetectables, ESP wallhack, radar y Aimbot parLeague of Legends en PC Windows.',
		blogH1: 'Blog League of Legends Hacks — Guías globales',
		blogIntro:
			'Guías SEO de trucos League of Legends indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Vanguard en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías League of Legends relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio League of Legends Hacks',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Guides en 22 langues',
		blogDescription:
			'Blog League of Legends Hacks : triches indétectables, ESP wallhack, radar et Aimbot pour League of Legends sur PC Windows.',
		blogH1: 'Blog League of Legends Hacks — Guides mondiaux',
		blogIntro:
			'Guides SEO triches League of Legends indétectables, ESP wallhack, radar hack, Aimbot et Vanguard en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides League of Legends associés',
		allPosts: 'Tous les articles',
		home: 'Accueil League of Legends Hacks',
		language: 'Langue',
	},
	de: {
		blogTitle: 'League of Legends Hacks Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'League of Legends Hacks Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für League of Legends auf Windows PC.',
		blogH1: 'League of Legends Hacks Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected League of Legends Hacks, ESP Wallhack, Radar Hack, Aimbot und Vanguard in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte League of Legends Guides',
		allPosts: 'Alle Beiträge',
		home: 'League of Legends Hacks Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog League of Legends Hacks com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot parLeague of Legends no PC.',
		blogH1: 'Blog League of Legends Hacks — Guias globais',
		blogIntro:
			'Guias SEO de cheats League of Legends indetectáveis, ESP wallhack, radar hack, Aimbot e Vanguard em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias League of Legends relacionados',
		allPosts: 'Todos os posts',
		home: 'Início League of Legends Hacks',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog League of Legends Hacks con guide cheat indetectable, ESP wallhack, radar e Aimbot per League of Legends su PC Windows.',
		blogH1: 'Blog League of Legends Hacks — Guide globali',
		blogIntro:
			'Guide SEO cheat League of Legends indetectable, ESP wallhack, radar hack, Aimbot e Vanguard in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide League of Legends correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home League of Legends Hacks',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'League of Legends Hacks Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'League of Legends Hacks blog met undetected ESP, wallhack, radar en Aimbot gidsen voor League of Legends op Windows PC.',
		blogH1: 'League of Legends Hacks Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected lol cheats, ESP wallhack, radar hack, Aimbot en Vanguard in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde League of Legends gidsen',
		allPosts: 'Alle posts',
		home: 'League of Legends Hacks home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog League of Legends Hacks z poradnikami undetected ESP, wallhack, radar i Aimbot dlLeague of Legends na PC.',
		blogH1: 'Blog League of Legends Hacks — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów League of Legends, ESP wallhack, radar hack, Aimbot i Vanguard w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki League of Legends',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona głównLeague of Legends Hacks',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог League of Legends Hacks 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог League of Legends Hacks: undetected ESP, wallhack, radar и Aimbot для League of Legends на Windows PC.',
		blogH1: 'Блог League of Legends Hacks — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам League of Legends, ESP wallhack, radar hack, Aimbot и Vanguard на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды League of Legends',
		allPosts: 'Все статьи',
		home: 'Главная League of Legends Hacks',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'League of Legends Hacks Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'League of Legends Hacks blog: undetected ESP, wallhack, radar ve Aimbot rehberleri League of Legends Windows PC.',
		blogH1: 'League of Legends Hacks Blog — Küresel rehberler',
		blogIntro:
			'Undetected League of Legends hileleri, ESP wallhack, radar hack, Aimbot ve Vanguard SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili League of Legends rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'League of Legends Hacks ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة League of Legends Hacks 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة League of Legends Hacks: غش undetected وESP wallhack ورadar وAimbot لـ League of Legends على Windows PC.',
		blogH1: 'مدونة League of Legends Hacks — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش League of Legends undetected وESP wallhack ورadar hack وAimbot وVanguard بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة League of Legends ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية League of Legends Hacks',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'League of Legends Hacks ブログ 2026 | 22言語ガイド',
		blogDescription:
			'League of Legends Hacksブログ：undetected ESP、wallhack、radar、Aimbotガイド。League of Legends Windows PC向け。',
		blogH1: 'League of Legends Hacks ブログ — グローバルガイド',
		blogIntro:
			'undetected League of Legendsチート、ESP wallhack、radar hack、Aimbot、VanguardのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連League of Legendsガイド',
		allPosts: 'すべての記事',
		home: 'League of Legends Hacks ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'League of Legends Hacks 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'League of Legends Hacks 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. League of Legends Windows PC.',
		blogH1: 'League of Legends Hacks 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected League of Legends 치트, ESP wallhack, radar hack, Aimbot, Vanguard SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 League of Legends 가이드',
		allPosts: '모든 게시물',
		home: 'League of Legends Hacks 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'League of Legends Hacks 博客 2026 | 22种语言指南',
		blogDescription:
			'League of Legends Hacks博客：undetected ESP、wallhack、radar和Aimbot指南，适用于League of Legends Windows PC。',
		blogH1: 'League of Legends Hacks 博客 — 全球指南',
		blogIntro:
			'undetected League of Legends作弊、ESP wallhack、radar hack、Aimbot和Vanguard的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关League of Legends指南',
		allPosts: '所有文章',
		home: 'League of Legends Hacks 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'League of Legends Hacks ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'League of Legends Hacks ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड League of Legends Windows PC के लिए।',
		blogH1: 'League of Legends Hacks ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected lol cheats, ESP wallhack, radar hack, Aimbot और Vanguard SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित League of Legends गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'League of Legends Hacks होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog League of Legends Hacks: panduan undetected ESP, wallhack, radar dan Aimbot untuk League of Legends di PC Windows.',
		blogH1: 'Blog League of Legends Hacks — Panduan global',
		blogIntro:
			'Panduan SEO cheat League of Legends undetected, ESP wallhack, radar hack, Aimbot dan Vanguard dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'PanduLeague of Legends terkait',
		allPosts: 'Semua artikel',
		home: 'BerandLeague of Legends Hacks',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก League of Legends Hacks 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก League of Legends Hacks: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ League of Legends บน PC',
		blogH1: 'บล็อก League of Legends Hacks — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat League of Legends undetected, ESP wallhack, radar hack, Aimbot และ Vanguard 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ League of Legends ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก League of Legends Hacks',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog League of Legends Hacks: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho League of Legends trên PC.',
		blogH1: 'Blog League of Legends Hacks — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat League of Legends undetected, ESP wallhack, radar hack, Aimbot và Vanguard bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn League of Legends liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ League of Legends Hacks',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог League of Legends Hacks 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог League of Legends Hacks: undetected ESP, wallhack, radar та Aimbot для League of Legends на Windows PC.',
		blogH1: 'Блог League of Legends Hacks — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів League of Legends, ESP wallhack, radar hack, Aimbot та Vanguard 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди League of Legends",
		allPosts: 'Усі статті',
		home: 'Головна League of Legends Hacks',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog League of Legends Hacks: undetected ESP, wallhack, radar a Aimbot pro League of Legends na Windows PC.',
		blogH1: 'Blog League of Legends Hacks — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected lol cheaty, ESP wallhack, radar hack, Aimbot a Vanguard ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související League of Legends průvodce',
		allPosts: 'Všechny články',
		home: 'Domů League of Legends Hacks',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog League of Legends Hacks 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog League of Legends Hacks: ghiduri undetected ESP, wallhack, radar și Aimbot pentru League of Legends pe PC.',
		blogH1: 'Blog League of Legends Hacks — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri League of Legends undetected, ESP wallhack, radar hack, Aimbot și Vanguard în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri League of Legends related',
		allPosts: 'Toate articolele',
		home: 'Acasă League of Legends Hacks',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'League of Legends Hacks Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'League of Legends Hacks blogg med undetected ESP, wallhack, radar och Aimbot guider för League of Legends på PC.',
		blogH1: 'League of Legends Hacks Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected lol cheats, ESP wallhack, radar hack, Aimbot och Vanguard på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade League of Legends guider',
		allPosts: 'Alla inlägg',
		home: 'League of Legends Hacks hem',
		language: 'Språk',
	},
};
