/** Shared text cleanup for i18n source data and generated output. */

const BR_ARAM_REPLACEMENTS = {
	es: 'partidas ranked y ARAM',
	fr: 'parties classées et ARAM',
	de: 'Ranked- und ARAM-Matches',
	pt: 'partidas ranqueadas e ARAM',
	it: 'partite ranked e ARAM',
	nl: 'ranked- en ARAM-matches',
	pl: 'mecze ranked i ARAM',
	ru: 'рейтинговых и ARAM-матчах',
	tr: 'dereceli ve ARAM maçlarında',
	ar: 'مباريات ranked وARAM',
	ja: 'ランクとARAM',
	ko: '랭크 및 ARAM',
	zh: '排位和ARAM',
	hi: 'ranked और ARAM',
	id: 'pertandingan ranked dan ARAM',
	th: 'แรงค์และ ARAM',
	vi: 'trận ranked và ARAM',
	uk: 'рейтингових і ARAM-матчах',
	cs: 'ranked a ARAM zápasech',
	ro: 'meciuri ranked și ARAM',
	sv: 'ranked- och ARAM-matcher',
};

const MAPS_REPLACEMENTS = {
	es: "Summoner's Rift, carriles y jungla",
	fr: "Faille de l'invocateur, voies et jungle",
	de: "Summoner's Rift, Lanes und Dschungel",
	pt: "Summoner's Rift, rotas e selva",
	it: "Summoner's Rift, lane e giungla",
	nl: "Summoner's Rift, lanes en jungle",
	pl: "Summoner's Rift, linie i dżungla",
	ru: "Summoner's Rift, линии и джунгли",
	tr: "Summoner's Rift, koridorlar ve orman",
	ar: "Summoner's Rift والمسارات والغابة",
	ja: "サモナーズリフト、レーン、ジャングル",
	ko: "소환사의 협곡, 라인, 정글",
	zh: "召唤师峡谷、线路与野区",
	hi: "Summoner's Rift, लanes और jungle",
	id: "Summoner's Rift, lane, dan jungle",
	th: "Summoner's Rift, lane และ jungle",
	vi: "Summoner's Rift, lane và rừng",
	uk: "Summoner's Rift, лінії та джунглі",
	cs: "Summoner's Rift, lane a jungle",
	ro: "Summoner's Rift, lane-uri și jungle",
	sv: "Summoner's Rift, lanes och jungle",
};

/** Apply global corruption fixes to any string. */
export function sanitizeI18nText(text, locale = 'en') {
	if (typeof text !== 'string' || !text) return text;

	let s = text;

	// Broken word merges from automated replacements
	s = s
		.replace(/parLeague/g, 'para League')
		.replace(/dlLeague/g, 'dla League')
		.replace(/GaleríLoL/g, 'Galería LoL')
		.replace(/GaleriLoL/g, 'Galeria LoL')
		.replace(/GalleriLoL/g, 'Galleria LoL')
		.replace(/GaleríLeague/g, 'Galería LoL')
		.replace(/AcquistLoL/g, 'Acquista LoL')
		.replace(/MuLoL/g, 'Mua LoL')
		.replace(/MengapLoL/g, 'Mengapa LoL Cheats')
		.replace(/eteamrões/g, 'esquadrões')
		.replace(/teamre nemiche/g, 'squadre nemiche')
		.replace(/linkLeague of LegendsCheats/g, 'linkLoLCheats');

	// Warzone leftovers
	const brAram = BR_ARAM_REPLACEMENTS[locale] ?? 'ranked and ARAM matches';
	s = s
		.replace(/\bBR y ARAM game\b/g, brAram)
		.replace(/\bBR und ARAM game\b/g, brAram)
		.replace(/\bBR en ARAM game\b/g, brAram)
		.replace(/\bBR e ARAM game\b/g, brAram)
		.replace(/\bBR i ARAM game\b/g, brAram)
		.replace(/\bBR ve ARAM game'?da\b/g, brAram)
		.replace(/\bBR ve ARAM game\b/g, brAram)
		.replace(/\bBR dan ARAM game\b/g, brAram)
		.replace(/\bBR และ ARAM game\b/g, brAram)
		.replace(/\bBR và ARAM game\b/g, brAram)
		.replace(/\bBR和ARAM game\b/g, brAram)
		.replace(/\bBR और ARAM game\b/g, brAram)
		.replace(/\bBR a ARAM game\b/g, brAram)
		.replace(/\bBR och ARAM game\b/g, brAram)
		.replace(/\bBR și ARAM game\b/g, brAram)
		.replace(/\bARAM game\b/g, 'ARAM')
		.replace(/\bBR\b/g, 'ranked');

	// Remove third-party checkout branding from user-facing copy
	s = s
		.replace(/\s*[—–-]\s*checkout (?:via|en|über|por|pela|przez|через|عبر|通过|で購入|で|결제|checkout)\s+secure checkout\.?/gi, '.')
		.replace(/\s*via secure checkout checkout\.?/gi, '.')
		.replace(/\s*checkout en secure checkout\.?/gi, '.')
		.replace(/\s*checkout über secure checkout\.?/gi, '.')
		.replace(/\s*checkout via secure checkout\.?/gi, '.')
		.replace(/\s*checkout przez secure checkout\.?/gi, '.')
		.replace(/\s*secure checkout checkout\.?/gi, 'secure checkout.')
		.replace(/\s*secure checkout delivery\.?/gi, ' instant digital delivery.')
		.replace(/\bvia checkout secure checkout\b/gi, 'via secure checkout')
		.replace(/\büber secure checkout checkout\b/gi, 'über sicheren Checkout')
		.replace(/\bcheckout secure checkout\b/gi, 'secure checkout')
		.replace(/\bsecure checkout checkout\b/gi, 'secure checkout')
		.replace(/\bsecure checkout\b/gi, 'secure checkout')
		.replace(/\s{2,}/g, ' ')
		.trim();

	return s;
}

/** Recursively sanitize all strings in an object. */
export function sanitizeDeep(value, locale = 'en') {
	if (typeof value === 'string') return sanitizeI18nText(value, locale);
	if (Array.isArray(value)) return value.map((v) => sanitizeDeep(v, locale));
	if (value && typeof value === 'object') {
		const out = {};
		for (const [k, v] of Object.entries(value)) {
			out[k] = sanitizeDeep(v, locale);
		}
		return out;
	}
	return value;
}

export function mapsForLocale(locale) {
	return MAPS_REPLACEMENTS[locale] ?? "Summoner's Rift, lanes, and jungle";
}
