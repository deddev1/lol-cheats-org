import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'lol-esp'
	| 'lol-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'vanguard'
	| 'cheats-2026'
	| 'cheats'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-cheat'
	| 'esp-cheat'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'lol-esp': '/lol-esp/',
	'lol-aimbot': '/lol-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-lol-cheats/',
	wallhack: '/lol-wallhack/',
	radar: '/lol-radar-cheat/',
	'vanguard': '/vanguard-bypass/',
	'cheats-2026': '/lol-cheats-2026/',
	cheats: '/lol-cheats/',
	'cheat-download': '/lol-cheat-download/',
	'mod-menu': '/lol-mod-menu/',
	'soft-aim': '/lol-soft-aim/',
	'best-cheats': '/best-lol-cheats/',
	'aimbot-cheat': '/lol-aimbot-cheat/',
	'esp-cheat': '/lol-esp-cheat/',
	'unlock-all': '/lol-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'lol-esp': {
		en: 'lol-esp',
		es: 'trucos-lol-esp',
		fr: 'triche-lol-esp',
		de: 'lol-esp-wallhack',
		pt: 'cheats-lol-esp',
		it: 'trucchi-lol-esp',
		nl: 'lol-esp-wallhack',
		pl: 'cheaty-lol-esp',
		ru: 'lol-esp-chity',
		tr: 'lol-esp-hile',
		ar: 'lol-esp-wallhack',
		ja: 'lol-esp-wallhack',
		ko: 'lol-esp-wallhack',
		zh: 'lol-esp-wallhack',
		hi: 'lol-esp-wallhack',
		id: 'lol-esp-wallhack',
		th: 'lol-esp-wallhack',
		vi: 'lol-esp-wallhack',
		uk: 'lol-esp-chity',
		cs: 'lol-esp-wallhack',
		ro: 'lol-esp-wallhack',
		sv: 'lol-esp-wallhack',
	},
	'lol-aimbot': {
		en: 'lol-aimbot',
		es: 'trucos-lol-aimbot',
		fr: 'triche-lol-aimbot',
		de: 'lol-aimbot',
		pt: 'cheats-lol-aimbot',
		it: 'trucchi-lol-aimbot',
		nl: 'lol-aimbot',
		pl: 'cheaty-lol-aimbot',
		ru: 'lol-aimbot-chity',
		tr: 'lol-aimbot-hile',
		ar: 'lol-aimbot',
		ja: 'lol-aimbot',
		ko: 'lol-aimbot',
		zh: 'lol-aimbot',
		hi: 'lol-aimbot',
		id: 'lol-aimbot',
		th: 'lol-aimbot',
		vi: 'lol-aimbot',
		uk: 'lol-aimbot-chity',
		cs: 'lol-aimbot',
		ro: 'lol-aimbot',
		sv: 'lol-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-lol',
		fr: 'fonctionnalites-triche-lol',
		de: 'lol-cheats-funktionen',
		pt: 'recursos-cheats-lol',
		it: 'funzioni-trucchi-lol',
		nl: 'lol-cheats-functies',
		pl: 'funkcje-cheatow-lol',
		ru: 'funkcii-chitov-lol',
		tr: 'lol-hile-ozellikleri',
		ar: 'lol-cheats-features',
		ja: 'lol-cheats-features',
		ko: 'lol-cheats-features',
		zh: 'lol-cheats-features',
		hi: 'lol-cheats-features',
		id: 'lol-cheats-features',
		th: 'lol-cheats-features',
		vi: 'lol-cheats-features',
		uk: 'funkcii-chitiv-lol',
		cs: 'lol-cheats-funkce',
		ro: 'functii-cheats-lol',
		sv: 'lol-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-lol',
		fr: 'prix-triche-lol',
		de: 'lol-cheats-preise',
		pt: 'precos-cheats-lol',
		it: 'prezzi-trucchi-lol',
		nl: 'lol-cheats-prijzen',
		pl: 'ceny-cheatow-lol',
		ru: 'ceny-chitov-lol',
		tr: 'lol-hile-fiyatlari',
		ar: 'lol-cheats-pricing',
		ja: 'lol-cheats-pricing',
		ko: 'lol-cheats-pricing',
		zh: 'lol-cheats-pricing',
		hi: 'lol-cheats-pricing',
		id: 'lol-cheats-pricing',
		th: 'lol-cheats-pricing',
		vi: 'lol-cheats-pricing',
		uk: 'ciny-chitiv-lol',
		cs: 'lol-cheats-ceny',
		ro: 'preturi-cheats-lol',
		sv: 'lol-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-lol',
		fr: 'installation-triche-lol',
		de: 'lol-cheats-installation',
		pt: 'instalacao-cheats-lol',
		it: 'installazione-trucchi-lol',
		nl: 'lol-cheats-installatie',
		pl: 'instalacja-cheatow-lol',
		ru: 'ustanovka-chitov-lol',
		tr: 'lol-hile-kurulum',
		ar: 'lol-cheats-setup',
		ja: 'lol-cheats-setup',
		ko: 'lol-cheats-setup',
		zh: 'lol-cheats-setup',
		hi: 'lol-cheats-setup',
		id: 'lol-cheats-setup',
		th: 'lol-cheats-setup',
		vi: 'lol-cheats-setup',
		uk: 'vstanovka-chitiv-lol',
		cs: 'lol-cheats-instalace',
		ro: 'instalare-cheats-lol',
		sv: 'lol-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-lol',
		fr: 'mises-a-jour-triche-lol',
		de: 'lol-cheats-updates',
		pt: 'atualizacoes-cheats-lol',
		it: 'aggiornamenti-trucchi-lol',
		nl: 'lol-cheats-updates',
		pl: 'aktualizacje-cheatow-lol',
		ru: 'obnovleniya-chitov-lol',
		tr: 'lol-hile-guncellemeleri',
		ar: 'lol-cheats-updates',
		ja: 'lol-cheats-updates',
		ko: 'lol-cheats-updates',
		zh: 'lol-cheats-updates',
		hi: 'lol-cheats-updates',
		id: 'lol-cheats-updates',
		th: 'lol-cheats-updates',
		vi: 'lol-cheats-updates',
		uk: 'onovlennya-chitiv-lol',
		cs: 'lol-cheats-aktualizace',
		ro: 'actualizari-cheats-lol',
		sv: 'lol-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-lol',
		fr: 'faq-triche-lol',
		de: 'lol-cheats-faq',
		pt: 'faq-cheats-lol',
		it: 'faq-trucchi-lol',
		nl: 'lol-cheats-faq',
		pl: 'faq-cheatow-lol',
		ru: 'faq-chitov-lol',
		tr: 'lol-hile-sss',
		ar: 'lol-cheats-faq',
		ja: 'lol-cheats-faq',
		ko: 'lol-cheats-faq',
		zh: 'lol-cheats-faq',
		hi: 'lol-cheats-faq',
		id: 'lol-cheats-faq',
		th: 'lol-cheats-faq',
		vi: 'lol-cheats-faq',
		uk: 'faq-chitiv-lol',
		cs: 'lol-cheats-faq',
		ro: 'faq-cheats-lol',
		sv: 'lol-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-lol',
		fr: 'support-triche-lol',
		de: 'lol-cheats-support',
		pt: 'suporte-cheats-lol',
		it: 'supporto-trucchi-lol',
		nl: 'lol-cheats-support',
		pl: 'wsparcie-cheatow-lol',
		ru: 'podderzhka-chitov-lol',
		tr: 'lol-hile-destek',
		ar: 'lol-cheats-support',
		ja: 'lol-cheats-support',
		ko: 'lol-cheats-support',
		zh: 'lol-cheats-support',
		hi: 'lol-cheats-support',
		id: 'lol-cheats-support',
		th: 'lol-cheats-support',
		vi: 'lol-cheats-support',
		uk: 'pidtrymka-chitiv-lol',
		cs: 'lol-cheats-podpora',
		ro: 'suport-cheats-lol',
		sv: 'lol-cheats-support',
	},
	undetected: {
		en: 'undetected-lol-cheats',
		es: 'trucos-lol-indetectables',
		fr: 'triche-lol-indetectable',
		de: 'unentdeckte-lol-cheats',
		pt: 'cheats-lol-indetectaveis',
		it: 'trucchi-lol-indetectabili',
		nl: 'undetected-lol-cheats',
		pl: 'niewykrywalne-cheats-lol',
		ru: 'nedecektiruemye-chity-lol',
		tr: 'tespit-edilemeyen-lol-hileleri',
		ar: 'undetected-lol-cheats',
		ja: 'undetected-lol-cheats',
		ko: 'undetected-lol-cheats',
		zh: 'undetected-lol-cheats',
		hi: 'undetected-lol-cheats',
		id: 'undetected-lol-cheats',
		th: 'undetected-lol-cheats',
		vi: 'undetected-lol-cheats',
		uk: 'nedecektovani-chity-lol',
		cs: 'undetected-lol-cheats',
		ro: 'cheats-lol-nedetectabile',
		sv: 'undetected-lol-cheats',
	},
	wallhack: {
		en: 'lol-wallhack',
		es: 'wallhack-trucos-lol',
		fr: 'wallhack-triche-lol',
		de: 'lol-wallhack',
		pt: 'wallhack-cheats-lol',
		it: 'wallhack-trucchi-lol',
		nl: 'lol-wallhack',
		pl: 'wallhack-cheatow-lol',
		ru: 'wallhack-chity-lol',
		tr: 'lol-wallhack-hile',
		ar: 'lol-wallhack',
		ja: 'lol-wallhack',
		ko: 'lol-wallhack',
		zh: 'lol-wallhack',
		hi: 'lol-wallhack',
		id: 'lol-wallhack',
		th: 'lol-wallhack',
		vi: 'lol-wallhack',
		uk: 'wallhack-chity-lol',
		cs: 'lol-wallhack',
		ro: 'wallhack-cheats-lol',
		sv: 'lol-wallhack',
	},
	radar: {
		en: 'lol-radar-cheat',
		es: 'radar-cheat-trucos-lol',
		fr: 'radar-cheat-triche-lol',
		de: 'lol-radar-cheat',
		pt: 'radar-cheat-cheats-lol',
		it: 'radar-cheat-trucchi-lol',
		nl: 'lol-radar-cheat',
		pl: 'radar-cheat-cheatow-lol',
		ru: 'radar-cheat-chity-lol',
		tr: 'lol-radar-cheat',
		ar: 'lol-radar-cheat',
		ja: 'lol-radar-cheat',
		ko: 'lol-radar-cheat',
		zh: 'lol-radar-cheat',
		hi: 'lol-radar-cheat',
		id: 'lol-radar-cheat',
		th: 'lol-radar-cheat',
		vi: 'lol-radar-cheat',
		uk: 'radar-cheat-chity-lol',
		cs: 'lol-radar-cheat',
		ro: 'radar-cheat-cheats-lol',
		sv: 'lol-radar-cheat',
	},
	'vanguard': {
		en: 'vanguard-bypass',
		es: 'vanguard-bypass-trucos',
		fr: 'vanguard-bypass-triche',
		de: 'vanguard-bypass',
		pt: 'vanguard-bypass-cheats',
		it: 'vanguard-bypass-trucchi',
		nl: 'vanguard-bypass',
		pl: 'vanguard-bypass-cheatow',
		ru: 'vanguard-bypass-chity',
		tr: 'vanguard-bypass',
		ar: 'vanguard-bypass',
		ja: 'vanguard-bypass',
		ko: 'vanguard-bypass',
		zh: 'vanguard-bypass',
		hi: 'vanguard-bypass',
		id: 'vanguard-bypass',
		th: 'vanguard-bypass',
		vi: 'vanguard-bypass',
		uk: 'vanguard-bypass-chity',
		cs: 'vanguard-bypass',
		ro: 'vanguard-bypass-cheats',
		sv: 'vanguard-bypass',
	},
	'cheats-2026': {
		en: 'lol-cheats-2026',
		es: 'trucos-lol-2026',
		fr: 'triche-lol-2026',
		de: 'lol-cheats-2026',
		pt: 'cheats-lol-2026',
		it: 'trucchi-lol-2026',
		nl: 'lol-cheats-2026',
		pl: 'cheaty-lol-2026',
		ru: 'chity-lol-2026',
		tr: 'lol-hileleri-2026',
		ar: 'lol-cheats-2026',
		ja: 'lol-cheats-2026',
		ko: 'lol-cheats-2026',
		zh: 'lol-cheats-2026',
		hi: 'lol-cheats-2026',
		id: 'lol-cheats-2026',
		th: 'lol-cheats-2026',
		vi: 'lol-cheats-2026',
		uk: 'chity-lol-2026',
		cs: 'lol-cheats-2026',
		ro: 'cheats-lol-2026',
		sv: 'lol-cheats-2026',
	},
	cheats: {
		en: 'lol-cheats',
		es: 'cheats-trucos-lol',
		fr: 'cheats-triche-lol',
		de: 'lol-cheats',
		pt: 'cheats-lol-pillar',
		it: 'cheats-trucchi-lol',
		nl: 'lol-cheats',
		pl: 'cheats-cheatow-lol',
		ru: 'haksy-chity-lol',
		tr: 'lol-hile-cheats',
		ar: 'lol-cheats',
		ja: 'lol-cheats',
		ko: 'lol-cheats',
		zh: 'lol-cheats',
		hi: 'lol-cheats',
		id: 'lol-cheats',
		th: 'lol-cheats',
		vi: 'lol-cheats',
		uk: 'haksy-chity-lol',
		cs: 'lol-cheats',
		ro: 'cheats-lol-pillar',
		sv: 'lol-cheats',
	},
	'cheat-download': {
		en: 'lol-cheat-download',
		es: 'descarga-trucos-lol',
		fr: 'telechargement-triche-lol',
		de: 'lol-cheat-download',
		pt: 'download-cheats-lol',
		it: 'download-trucchi-lol',
		nl: 'lol-cheat-download',
		pl: 'pobieranie-cheatow-lol',
		ru: 'skachat-chity-lol',
		tr: 'lol-hile-indir',
		ar: 'lol-cheat-download',
		ja: 'lol-cheat-download',
		ko: 'lol-cheat-download',
		zh: 'lol-cheat-download',
		hi: 'lol-cheat-download',
		id: 'lol-cheat-download',
		th: 'lol-cheat-download',
		vi: 'lol-cheat-download',
		uk: 'zavantazhennya-chitiv-lol',
		cs: 'lol-cheat-download',
		ro: 'descarcare-cheats-lol',
		sv: 'lol-cheat-download',
	},
	'mod-menu': {
		en: 'lol-mod-menu',
		es: 'menu-mod-trucos-lol',
		fr: 'menu-mod-triche-lol',
		de: 'lol-mod-menu',
		pt: 'menu-mod-cheats-lol',
		it: 'menu-mod-trucchi-lol',
		nl: 'lol-mod-menu',
		pl: 'menu-mod-cheatow-lol',
		ru: 'mod-menu-chity-lol',
		tr: 'lol-mod-menu',
		ar: 'lol-mod-menu',
		ja: 'lol-mod-menu',
		ko: 'lol-mod-menu',
		zh: 'lol-mod-menu',
		hi: 'lol-mod-menu',
		id: 'lol-mod-menu',
		th: 'lol-mod-menu',
		vi: 'lol-mod-menu',
		uk: 'mod-menu-chity-lol',
		cs: 'lol-mod-menu',
		ro: 'meniu-mod-cheats-lol',
		sv: 'lol-mod-menu',
	},
	'soft-aim': {
		en: 'lol-soft-aim',
		es: 'soft-aim-trucos-lol',
		fr: 'soft-aim-triche-lol',
		de: 'lol-soft-aim',
		pt: 'soft-aim-cheats-lol',
		it: 'soft-aim-trucchi-lol',
		nl: 'lol-soft-aim',
		pl: 'soft-aim-cheatow-lol',
		ru: 'soft-aim-chity-lol',
		tr: 'lol-soft-aim',
		ar: 'lol-soft-aim',
		ja: 'lol-soft-aim',
		ko: 'lol-soft-aim',
		zh: 'lol-soft-aim',
		hi: 'lol-soft-aim',
		id: 'lol-soft-aim',
		th: 'lol-soft-aim',
		vi: 'lol-soft-aim',
		uk: 'soft-aim-chity-lol',
		cs: 'lol-soft-aim',
		ro: 'soft-aim-cheats-lol',
		sv: 'lol-soft-aim',
	},
	'best-cheats': {
		en: 'best-lol-cheats',
		es: 'mejores-trucos-lol',
		fr: 'meilleures-triches-lol',
		de: 'beste-lol-cheats',
		pt: 'melhores-cheats-lol',
		it: 'migliori-trucchi-lol',
		nl: 'beste-lol-cheats',
		pl: 'najlepsze-cheats-lol',
		ru: 'luchshie-chity-lol',
		tr: 'en-iyi-lol-hileleri',
		ar: 'best-lol-cheats',
		ja: 'best-lol-cheats',
		ko: 'best-lol-cheats',
		zh: 'best-lol-cheats',
		hi: 'best-lol-cheats',
		id: 'best-lol-cheats',
		th: 'best-lol-cheats',
		vi: 'best-lol-cheats',
		uk: 'naykrashchi-chity-lol',
		cs: 'nejlepsi-lol-cheats',
		ro: 'cele-mai-bune-cheats-lol',
		sv: 'basta-lol-cheats',
	},
	'aimbot-cheat': {
		en: 'lol-aimbot-cheat',
		es: 'aimbot-cheat-trucos-lol',
		fr: 'aimbot-cheat-triche-lol',
		de: 'lol-aimbot-cheat',
		pt: 'aimbot-cheat-cheats-lol',
		it: 'aimbot-cheat-trucchi-lol',
		nl: 'lol-aimbot-cheat',
		pl: 'aimbot-cheat-cheatow-lol',
		ru: 'aimbot-cheat-chity-lol',
		tr: 'lol-aimbot-cheat',
		ar: 'lol-aimbot-cheat',
		ja: 'lol-aimbot-cheat',
		ko: 'lol-aimbot-cheat',
		zh: 'lol-aimbot-cheat',
		hi: 'lol-aimbot-cheat',
		id: 'lol-aimbot-cheat',
		th: 'lol-aimbot-cheat',
		vi: 'lol-aimbot-cheat',
		uk: 'aimbot-cheat-chity-lol',
		cs: 'lol-aimbot-cheat',
		ro: 'aimbot-cheat-cheats-lol',
		sv: 'lol-aimbot-cheat',
	},
	'esp-cheat': {
		en: 'lol-esp-cheat',
		es: 'esp-cheat-trucos-lol',
		fr: 'esp-cheat-triche-lol',
		de: 'lol-esp-cheat',
		pt: 'esp-cheat-cheats-lol',
		it: 'esp-cheat-trucchi-lol',
		nl: 'lol-esp-cheat',
		pl: 'esp-cheat-cheatow-lol',
		ru: 'esp-cheat-chity-lol',
		tr: 'lol-esp-cheat',
		ar: 'lol-esp-cheat',
		ja: 'lol-esp-cheat',
		ko: 'lol-esp-cheat',
		zh: 'lol-esp-cheat',
		hi: 'lol-esp-cheat',
		id: 'lol-esp-cheat',
		th: 'lol-esp-cheat',
		vi: 'lol-esp-cheat',
		uk: 'esp-cheat-chity-lol',
		cs: 'lol-esp-cheat',
		ro: 'esp-cheat-cheats-lol',
		sv: 'lol-esp-cheat',
	},
	'unlock-all': {
		en: 'lol-unlock-all',
		es: 'unlock-all-trucos-lol',
		fr: 'unlock-all-triche-lol',
		de: 'lol-unlock-all',
		pt: 'unlock-all-cheats-lol',
		it: 'unlock-all-trucchi-lol',
		nl: 'lol-unlock-all',
		pl: 'unlock-all-cheatow-lol',
		ru: 'unlock-all-chity-lol',
		tr: 'lol-unlock-all',
		ar: 'lol-unlock-all',
		ja: 'lol-unlock-all',
		ko: 'lol-unlock-all',
		zh: 'lol-unlock-all',
		hi: 'lol-unlock-all',
		id: 'lol-unlock-all',
		th: 'lol-unlock-all',
		vi: 'lol-unlock-all',
		uk: 'unlock-all-chity-lol',
		cs: 'lol-unlock-all',
		ro: 'unlock-all-cheats-lol',
		sv: 'lol-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	if (withSlash === '/lol-cheats/' || withSlash === '/lol-cheats/') {
		return getLocalizedPath('cheats', locale);
	}
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.cheats ?? 'Cheats', href: getLocalizedPath('cheats', locale), pageId: 'cheats' },
		{ label: labels.aimbot, href: getLocalizedPath('lol-aimbot', locale), pageId: 'lol-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('lol-esp', locale), pageId: 'lol-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
