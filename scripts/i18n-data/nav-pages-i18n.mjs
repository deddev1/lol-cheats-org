/**
 * Rich nav-page sections matching simple-pages.ts structure for all locales.
 * Overrides thin productPage() output for key IA pages.
 */
import { section } from './constants.mjs';
import { phrases } from './phrases.mjs';

const RELATED_LINKS = {
	es: {
		features: [
			'<a href="/lol-esp/">Guía ESP y wallhack</a>',
			'<a href="/lol-aimbot/">Aimbot y soft aim</a>',
			'<a href="/lol-radar-cheat/">Overlay radar 2D</a>',
			'<a href="/setup/">Guía de instalación</a>',
			'<a href="/updates/">Estado en vivo</a>',
			'<a href="/blog/">Blog LoL Intel</a>',
		],
	},
	fr: {
		features: [
			'<a href="/lol-esp/">Guide ESP et wallhack</a>',
			'<a href="/lol-aimbot/">Aimbot et soft aim</a>',
			'<a href="/lol-radar-cheat/">Overlay radar 2D</a>',
			'<a href="/setup/">Guide d\'installation</a>',
			'<a href="/updates/">Statut en direct</a>',
			'<a href="/blog/">Blog LoL Intel</a>',
		],
	},
	de: {
		features: [
			'<a href="/lol-esp/">ESP & Wallhack Guide</a>',
			'<a href="/lol-aimbot/">Aimbot & Soft Aim</a>',
			'<a href="/lol-radar-cheat/">2D Radar Overlay</a>',
			'<a href="/setup/">Setup-Anleitung</a>',
			'<a href="/updates/">Live-Status</a>',
			'<a href="/blog/">LoL Intel Blog</a>',
		],
	},
};

function relatedLinks(locale, pageKey) {
	const localeLinks = RELATED_LINKS[locale]?.[pageKey];
	if (localeLinks) return localeLinks;
	if (pageKey === 'features') {
		return [
			'<a href="/lol-esp/">ESP & wallhack guide</a>',
			'<a href="/lol-aimbot/">Aimbot & soft aim</a>',
			'<a href="/lol-radar-cheat/">2D radar overlay</a>',
			'<a href="/setup/">Setup guide</a>',
			'<a href="/updates/">Live status</a>',
			'<a href="/blog/">LoL Intel blog</a>',
		];
	}
	return [];
}

const SECTION_HEADINGS = {
	features: {
		en: ['ESP & wallhack', 'Aimbot & soft aim', 'Radar', 'Explore related topics', 'Updates & support'],
		es: ['ESP y wallhack', 'Aimbot y soft aim', 'Radar', 'Explorar temas relacionados', 'Actualizaciones y soporte'],
		fr: ['ESP et wallhack', 'Aimbot et soft aim', 'Radar', 'Explorer les sujets liés', 'Mises à jour et support'],
		de: ['ESP & Wallhack', 'Aimbot & Soft Aim', 'Radar', 'Verwandte Themen', 'Updates & Support'],
		pt: ['ESP e wallhack', 'Aimbot e soft aim', 'Radar', 'Explorar tópicos relacionados', 'Atualizações e suporte'],
		it: ['ESP e wallhack', 'Aimbot e soft aim', 'Radar', 'Esplora argomenti correlati', 'Aggiornamenti e supporto'],
		nl: ['ESP & wallhack', 'Aimbot & soft aim', 'Radar', 'Gerelateerde onderwerpen', 'Updates & support'],
		pl: ['ESP i wallhack', 'Aimbot i soft aim', 'Radar', 'Powiązane tematy', 'Aktualizacje i wsparcie'],
		ru: ['ESP и wallhack', 'Aimbot и soft aim', 'Radar', 'Связанные темы', 'Обновления и поддержка'],
		tr: ['ESP ve wallhack', 'Aimbot ve soft aim', 'Radar', 'İlgili konular', 'Güncellemeler ve destek'],
		ar: ['ESP وWallhack', 'Aimbot وSoft aim', 'Radar', 'مواضيع ذات صلة', 'التحديثات والدعم'],
		ja: ['ESP・Wallhack', 'Aimbot・Soft aim', 'Radar', '関連トピック', 'アップデートとサポート'],
		ko: ['ESP 및 wallhack', 'Aimbot 및 soft aim', 'Radar', '관련 주제', '업데이트 및 지원'],
		zh: ['ESP与Wallhack', 'Aimbot与Soft aim', 'Radar', '相关主题', '更新与支持'],
		hi: ['ESP और wallhack', 'Aimbot और soft aim', 'Radar', 'संबंधित विषय', 'अपडेट और सहायता'],
		id: ['ESP & wallhack', 'Aimbot & soft aim', 'Radar', 'Topik terkait', 'Pembaruan & dukungan'],
		th: ['ESP และ wallhack', 'Aimbot และ soft aim', 'Radar', 'หัวข้อที่เกี่ยวข้อง', 'อัปเดตและการสนับสนุน'],
		vi: ['ESP & wallhack', 'Aimbot & soft aim', 'Radar', 'Chủ đề liên quan', 'Cập nhật & hỗ trợ'],
		uk: ['ESP і wallhack', 'Aimbot і soft aim', 'Radar', 'Пов\'язані теми', 'Оновлення та підтримка'],
		cs: ['ESP a wallhack', 'Aimbot a soft aim', 'Radar', 'Související témata', 'Aktualizace a podpora'],
		ro: ['ESP și wallhack', 'Aimbot și soft aim', 'Radar', 'Subiecte conexe', 'Actualizări și suport'],
		sv: ['ESP & wallhack', 'Aimbot & soft aim', 'Radar', 'Relaterade ämnen', 'Uppdateringar & support'],
	},
};

function headings(locale, pageKey) {
	return SECTION_HEADINGS[pageKey]?.[locale] ?? SECTION_HEADINGS[pageKey]?.en ?? [];
}

/** Five-section features page aligned with simple-pages.ts */
export function buildFeaturesPage(locale, basePage) {
	const p = phrases[locale];
	const h = headings(locale, 'features');
	return {
		...basePage,
		sections: [
			section(
				h[0] ?? 'ESP & wallhack',
				'See enemy champions, minions, bosses, and wards through walls with distance readouts.',
				'Use filters so the overlay stays clear in teamfight zones, high-traffic zones, and ARAM game chaos.',
				['Player boxes & distance', 'Ward and tower markers', 'Boss and early-game filters'],
			),
			section(
				h[1] ?? 'Aimbot & soft aim',
				'Aim help you can tune to feel natural.',
				'Set FOV, smoothness, and bone priority per champions before you queue.',
				['Smooth aim strength', 'FOV and bone priority', 'Hotkeys mid-match'],
			),
			section(
				h[2] ?? 'Radar',
				'A simple 2D radar for threats outside your view.',
				'Spot flanks near objectives and river without filling the whole screen.',
				['Nearby enemy cues', 'Adjustable range', 'Works in laners & junglers'],
			),
			section(
				h[3] ?? 'Explore related topics',
				'Most League of Legends cheat sites cover ESP, aimbot, radar, setup, and status on separate pages. Use these guides next:',
				'Browse internal guides before checkout.',
				relatedLinks(locale, 'features'),
			),
			section(
				h[4] ?? 'Updates & support',
				p.s3(),
				'Check Status before you play after a patch day.',
				['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			),
		],
	};
}

/** Pricing page with plan sections and link lists matching simple-pages.ts */
export function buildPricingPage(locale, basePage) {
	const p = phrases[locale];
	const storeLabels = {
		en: ['What you get', 'Plans', 'Before you buy'],
		es: ['Qué incluye', 'Planes', 'Antes de comprar'],
		fr: ['Ce que vous obtenez', 'Forfaits', 'Avant d\'acheter'],
		de: ['Was Sie erhalten', 'Pläne', 'Vor dem Kauf'],
	};
	const labels = storeLabels[locale] ?? storeLabels.en;
	return {
		...basePage,
		sections: [
			section(
				labels[0],
				'Full teamage access for Windows 10 / 11.',
				'Same ESP, soft aim, and radar on monthly and lifetime plans.',
				['ESP, aimbot, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			),
			section(
				labels[1],
				'Pick monthly to try first, or lifetime for one payment.',
				'Both plans unlock the same features after checkout.',
				['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			),
			{
				h2: labels[2],
				paragraphs: [
					'Read the refund policy if you need it. Contact support with your order ID for help.',
					'Keep your order email handy when you contact support.',
				],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	};
}

/** Apply rich nav-page overrides for locales that use productPage(). */
export function applyNavPageOverrides(locale, pages) {
	if (pages.features) pages.features = buildFeaturesPage(locale, pages.features);
	if (pages.pricing) pages.pricing = buildPricingPage(locale, pages.pricing);
	return pages;
}
