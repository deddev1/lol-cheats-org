import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'LoL Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos League of Legends indetectables para League of Legends en PC. ESP wallhack, radar cheat y Aimbot con mantenimiento Vanguard. Entrega digital instantánea.', h1: 'LoL Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para League of Legends en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Vanguard tras cada parche.', imageAlt: 'LoL ESP — etiquetas de jugador cheat', gallery: 'Galería LoL Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen LoL Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en ranked and ARAM matches.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'LoL Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches League of Legends indétectables pour League of Legends sur PC. ESP wallhack, radar cheat et Aimbot avec maintenance Vanguard. Livraison numérique instantanée.', h1: 'LoL Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour League of Legends sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Vanguard après chaque patch.', imageAlt: 'LoL ESP — tags joueur cheat', gallery: 'Galerie LoL Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir LoL Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en ranked et ARAM.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'LoL Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected LoL Cheats für League of Legends auf PC. ESP Wallhack, Radar Cheat und Aimbot mit Vanguard-Wartung. Sofortige digitale Lieferung.', h1: 'LoL Cheats — Undetected ESP, Wallhack und Aimbot', intro: 'Undetected Windows PC Paket für League of Legends: ESP Wallhack, Radar und Aimbot mit Vanguard-Wartung nach jedem Patch.', imageAlt: 'LoL ESP — Spieler-Tags Cheat', gallery: 'LoL Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum LoL Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in ranked and ARAM matches zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'LoL Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats League of Legends indetectáveis para League of Legends no PC. ESP wallhack, radar cheat e Aimbot com manutenção Vanguard. Entrega digital instantánea.', h1: 'LoL Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para League of Legends no Windows PC: ESP wallhack, radar e Aimbot com manutenção Vanguard após cada patch.', imageAlt: 'LoL ESP player tags cheat', gallery: 'Galeria LoL Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher LoL Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em ranked and ARAM matches.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'LoL Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat League of Legends indetectable per League of Legends su PC. ESP wallhack, radar cheat e Aimbot con manutenzione Vanguard. Consegna digitale istantanea.', h1: 'LoL Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per League of Legends su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Vanguard dopo ogni patch.', imageAlt: 'LoL ESP player tags cheat', gallery: 'Galleria LoL Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere LoL Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in ranked and ARAM matches.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'LoL Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected lol cheats voor League of Legends op PC. ESP wallhack, radar cheat en Aimbot met Vanguard-onderhoud. Directe digitale levering.', h1: 'LoL Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor League of Legends: ESP wallhack, radar en Aimbot met Vanguard-onderhoud na elke patch.', imageAlt: 'LoL ESP player tags cheat', gallery: 'LoL Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom LoL Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke teams te lezen in ranked and ARAM matches.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'LoL Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty League of Legends dla League of Legends na PC. ESP wallhack, radar cheat i Aimbot z konserwacją Vanguard. Natychmiastowa dostawa cyfrowa.', h1: 'LoL Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla League of Legends na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Vanguard po każdym patchu.', imageAlt: 'LoL ESP player tags cheat', gallery: 'Galeria LoL Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego LoL Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich teamów w ranked and ARAM matches.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'LoL Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы League of Legends для League of Legends на PC. ESP wallhack, radar cheat и Aimbot с обслуживанием Vanguard. Мгновенная цифровая доставка.', h1: 'LoL Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для League of Legends на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Vanguard после патчей.', imageAlt: 'LoL ESP — теги игроков cheat', gallery: 'Галерея LoL Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают LoL Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в ranked и ARAM.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'LoL Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'League of Legends için undetected hileler. ESP wallhack, radar cheat ve Aimbot — Vanguard bakımı. Anında dijital teslimat.', h1: 'LoL Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'League of Legends Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Vanguard bakımı dahil.', imageAlt: 'LoL ESP player tags cheat', gallery: 'LoL Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden LoL Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'Dereceli ve ARAM maçlarında düşman takım okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'LoL Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش League of Legends undetected لـ League of Legends على PC. ESP wallhack ورadar hack وAimbot مع صيانة Vanguard. تسليم رقمي فوري.', h1: 'LoL Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ League of Legends على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Vanguard.', imageAlt: 'LoL ESP player tags cheat', gallery: 'معرض LoL Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا LoL Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في ranked وARAM.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'LoL Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'League of Legends向けundetectedチート。ESP wallhack、radar cheat、Aimbot、Vanguardメンテナンス。即時デジタル配信。', h1: 'LoL Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'League of Legends Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Vanguardメンテナンス付き。', imageAlt: 'lol cheats hero ESP aimbot wallhack', gallery: 'LoL Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にLoL Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'rankedとARAMで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'LoL Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'League of Legends undetected 치트. ESP wallhack, radar cheat, Aimbot, Vanguard 유지보수. 즉시 디지털 배송.', h1: 'LoL Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'League of Legends Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Vanguard 유지보수 포함.', imageAlt: 'lol cheats hero ESP aimbot wallhack', gallery: 'LoL Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 LoL Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'ranked 및 ARAM에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'LoL Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'League of Legends undetected作弊。ESP wallhack、radar cheat、Aimbot、Vanguard维护。即时数字交付。', h1: 'LoL Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'League of Legends Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Vanguard维护。', imageAlt: 'lol cheats hero ESP aimbot wallhack', gallery: 'LoL Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择LoL Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在ranked and ARAM matches中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'LoL Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'League of Legends undetected cheats. ESP wallhack, radar cheat, Aimbot, Vanguard maintenance. Instant digital delivery.', h1: 'LoL Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'League of Legends Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Vanguard maintenance सहित.', imageAlt: 'lol cheats hero ESP aimbot wallhack', gallery: 'LoL Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में LoL Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'ranked and ARAM matches में दुश्मन team पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'LoL Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat League of Legends undetected untuk League of Legends di PC. ESP wallhack, radar cheat, Aimbot, pemeliharaan Vanguard. Pengiriman digital instan.', h1: 'LoL Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected League of Legends di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Vanguard.', imageAlt: 'LoL ESP player tags cheat', gallery: 'Galeri LoL Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa LoL Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca team musuh di ranked and ARAM matches.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'LoL Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat League of Legends undetected สำหรับ League of Legends บน PC. ESP wallhack, radar cheat, Aimbot, Vanguard maintenance. จัดส่งดิจิทัลทันที.', h1: 'LoL Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ League of Legends บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Vanguard maintenance', imageAlt: 'LoL ESP player tags cheat', gallery: 'แกลเลอรี LoL Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก LoL Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน team ศัตรูใน ranked and ARAM matches', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'LoL Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat League of Legends undetected cho League of Legends trên PC. ESP wallhack, radar cheat, Aimbot, bảo trì Vanguard. Giao hàng kỹ thuật số tức thì.', h1: 'LoL Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected League of Legends trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Vanguard.', imageAlt: 'LoL ESP player tags cheat', gallery: 'Thư viện LoL Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn LoL Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc team địch trong ranked and ARAM matches.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'LoL Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти League of Legends для League of Legends на PC. ESP wallhack, radar cheat, Aimbot, обслуговування Vanguard. Мгновенная цифровая доставка.', h1: 'LoL Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для League of Legends на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Vanguard.', imageAlt: 'LoL ESP player tags cheat', gallery: 'Галерея LoL Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому LoL Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у ranked і ARAM.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'LoL Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected lol cheaty pro League of Legends na PC. ESP wallhack, radar cheat, Aimbot, údržba Vanguard. Okamžité digitální doručení.', h1: 'LoL Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro League of Legends na Windows PC: ESP wallhack, radar, Aimbot s údržbou Vanguard.', imageAlt: 'LoL ESP player tags cheat', gallery: 'Galerie LoL Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč LoL Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských teamů v ranked and ARAM matches.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'LoL Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats League of Legends undetected pentru League of Legends pe PC. ESP wallhack, radar cheat, Aimbot, mentenanță Vanguard. Livrare digitală instantă.', h1: 'LoL Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected League of Legends pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Vanguard.', imageAlt: 'LoL ESP player tags cheat', gallery: 'Galerie LoL Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce LoL Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea team-urilor inamice în ranked and ARAM matches.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'LoL Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected lol cheats för League of Legends på PC. ESP wallhack, radar cheat, Aimbot, Vanguard-underhåll. Omedelbar digital leverans.', h1: 'LoL Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för League of Legends på Windows PC: ESP wallhack, radar, Aimbot med Vanguard-underhåll.', imageAlt: 'LoL ESP player tags cheat', gallery: 'LoL Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför LoL Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendeteams i ranked and ARAM matches.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'lol-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, ward markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'lol-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-champion Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Vanguard Maintenance Log', focus: 'Vanguard patch status and rebuild notes', altKeyword: 'updates Vanguard maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Vanguard questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Vanguard Safe Status', focus: 'undetected maintenance after Vanguard patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for champions, wards, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar cheat overlay' },
	vanguard: { suffix: 'Patch Maintenance', focus: 'how Vanguard updates are handled for League of Legends cheats', altKeyword: 'Vanguard bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 lol cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	cheats: { suffix: 'ESP Aimbot Guide', focus: 'LoL Cheats pillar for ESP and Aimbot', altKeyword: 'cheats ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying lol cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-cheat': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot cheat assist for League of Legends', altKeyword: 'aimbot cheat combat' },
	'esp-cheat': { suffix: 'Boxes & Loot', focus: 'ESP cheat boxes, ward pins, and distance', altKeyword: 'ESP cheat wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all champions ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'lol-esp': 'Cajas de jugador y wallhack',
		'lol-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Vanguard',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		vanguard: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		cheats: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-cheat': 'Asistencia soft aim',
		'esp-cheat': 'Cajas y wards',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'lol-esp': 'Boîtes joueur et wallhack',
		'lol-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Vanguard',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		vanguard: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		cheats: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-cheat': 'Assistance soft aim',
		'esp-cheat': 'Boîtes et wards',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'lol-esp': 'Spielerboxen & Wallhack',
		'lol-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Vanguard Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		vanguard: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		cheats: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-cheat': 'Soft-Aim Assist',
		'esp-cheat': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'lol-esp': 'Caixas de jogador e wallhack',
		'lol-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Vanguard',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		vanguard: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		cheats: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-cheat': 'Assistência soft aim',
		'esp-cheat': 'Caixas e wards',
		'unlock-all': 'O que significa',
	},
	it: {
		'lol-esp': 'Box giocatore e wallhack',
		'lol-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Vanguard',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		vanguard: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		cheats: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-cheat': 'Assist soft aim',
		'esp-cheat': 'Box e wards',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'lol-esp': 'Боксы игроков и wallhack',
		'lol-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Vanguard',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		vanguard: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		cheats: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-cheat': 'Soft aim ассист',
		'esp-cheat': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'LoL Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const focus = FOCUS_I18N[locale]?.[pageKey] ?? meta.focus;
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — LoL Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'lol-esp': { en: 'LoL ESP', es: 'ESP League of Legends', fr: 'ESP League of Legends', de: 'LoL ESP', pt: 'ESP League of Legends', it: 'ESP League of Legends', nl: 'LoL ESP', pl: 'ESP League of Legends', ru: 'ESP League of Legends', tr: 'LoL ESP', ar: 'ESP League of Legends', ja: 'LoL ESP', ko: 'LoL ESP', zh: 'LoL ESP', hi: 'LoL ESP', id: 'ESP League of Legends', th: 'LoL ESP', vi: 'ESP League of Legends', uk: 'ESP League of Legends', cs: 'LoL ESP', ro: 'ESP League of Legends', sv: 'LoL ESP' },
	'lol-aimbot': { en: 'LoL Aimbot', es: 'Aimbot League of Legends', fr: 'Aimbot League of Legends', de: 'LoL Aimbot', pt: 'Aimbot League of Legends', it: 'Aimbot League of Legends', nl: 'LoL Aimbot', pl: 'Aimbot League of Legends', ru: 'Aimbot League of Legends', tr: 'LoL Aimbot', ar: 'Aimbot League of Legends', ja: 'LoL Aimbot', ko: 'LoL Aimbot', zh: 'LoL Aimbot', hi: 'LoL Aimbot', id: 'Aimbot League of Legends', th: 'LoL Aimbot', vi: 'Aimbot League of Legends', uk: 'Aimbot League of Legends', cs: 'LoL Aimbot', ro: 'Aimbot League of Legends', sv: 'LoL Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'League of Legends Wallhack', es: 'League of Legends Wallhack', fr: 'League of Legends Wallhack', de: 'League of Legends Wallhack', pt: 'League of Legends Wallhack', it: 'League of Legends Wallhack', nl: 'League of Legends Wallhack', pl: 'League of Legends Wallhack', ru: 'League of Legends Wallhack', tr: 'League of Legends Wallhack', ar: 'League of Legends Wallhack', ja: 'League of Legends Wallhack', ko: 'League of Legends Wallhack', zh: 'League of Legends Wallhack', hi: 'League of Legends Wallhack', id: 'League of Legends Wallhack', th: 'League of Legends Wallhack', vi: 'League of Legends Wallhack', uk: 'League of Legends Wallhack', cs: 'League of Legends Wallhack', ro: 'League of Legends Wallhack', sv: 'League of Legends Wallhack' },
	radar: { en: 'Radar Cheat', es: 'Radar cheat', fr: 'Radar cheat', de: 'Radar Cheat', pt: 'Radar cheat', it: 'Radar cheat', nl: 'Radar Cheat', pl: 'Radar cheat', ru: 'Radar cheat', tr: 'Radar cheat', ar: 'Radar cheat', ja: 'Radar Cheat', ko: 'Radar Cheat', zh: 'Radar Cheat', hi: 'Radar Cheat', id: 'Radar cheat', th: 'Radar Cheat', vi: 'Radar cheat', uk: 'Radar cheat', cs: 'Radar Cheat', ro: 'Radar cheat', sv: 'Radar Cheat' },
	vanguard: { en: 'Vanguard Bypass', es: 'Bypass Vanguard', fr: 'Bypass Vanguard', de: 'Vanguard Bypass', pt: 'Bypass Vanguard', it: 'Bypass Vanguard', nl: 'Vanguard Bypass', pl: 'Bypass Vanguard', ru: 'Bypass Vanguard', tr: 'Vanguard bypass', ar: 'Bypass Vanguard', ja: 'Vanguard Bypass', ko: 'Vanguard Bypass', zh: 'Vanguard Bypass', hi: 'Vanguard Bypass', id: 'Bypass Vanguard', th: 'Vanguard Bypass', vi: 'Bypass Vanguard', uk: 'Bypass Vanguard', cs: 'Vanguard Bypass', ro: 'Bypass Vanguard', sv: 'Vanguard Bypass' },
	'cheats-2026': { en: 'LoL Cheats 2026', es: 'Trucos League of Legends 2026', fr: 'Triches League of Legends 2026', de: 'LoL Cheats 2026', pt: 'Cheats League of Legends 2026', it: 'Cheat League of Legends 2026', nl: 'LoL Cheats 2026', pl: 'Cheaty League of Legends 2026', ru: 'Читы League of Legends 2026', tr: 'League of Legends Hileleri 2026', ar: 'غش League of Legends 2026', ja: 'LoL Cheats 2026', ko: 'LoL Cheats 2026', zh: 'League of Legends作弊 2026', hi: 'LoL Cheats 2026', id: 'Cheat League of Legends 2026', th: 'LoL Cheats 2026', vi: 'Cheat League of Legends 2026', uk: 'Чіти League of Legends 2026', cs: 'lol cheaty 2026', ro: 'Cheats League of Legends 2026', sv: 'LoL Cheats 2026' },
	cheats: { en: 'LoL Cheats', es: 'Trucos League of Legends', fr: 'Triches League of Legends', de: 'LoL Cheats', pt: 'Cheats League of Legends', it: 'Cheat League of Legends', nl: 'LoL Cheats', pl: 'Cheaty League of Legends', ru: 'Читы League of Legends', tr: 'League of Legends Hileleri', ar: 'غش League of Legends', ja: 'LoL Cheats', ko: 'LoL Cheats', zh: 'League of Legends作弊', hi: 'LoL Cheats', id: 'Cheat League of Legends', th: 'LoL Cheats', vi: 'Cheat League of Legends', uk: 'Чіти League of Legends', cs: 'lol cheaty', ro: 'Cheats League of Legends', sv: 'LoL Cheats' },
	'cheat-download': { en: 'League of Legends Cheat Download', es: 'DescargLoL Cheats', fr: 'Téléchargement LoL Cheats', de: 'League of Legends Cheat Download', pt: 'Download LoL Cheats', it: 'Download LoL Cheats', nl: 'League of Legends Cheat Download', pl: 'Pobieranie LoL Cheats', ru: 'Скачать LoL Cheats', tr: 'League of Legends Hile İndir', ar: 'تحميل LoL Cheats', ja: 'League of Legends Cheat Download', ko: 'League of Legends Cheat Download', zh: 'League of Legends作弊下载', hi: 'League of Legends Cheat Download', id: 'Download Cheat League of Legends', th: 'ดาวน์โหลด LoL Cheats', vi: 'Tải Cheat League of Legends', uk: 'Завантаження LoL Cheats', cs: 'Stáhnout LoL Cheats', ro: 'Descărcare LoL Cheats', sv: 'League of Legends Cheat Download' },
	'mod-menu': { en: 'League of Legends Mod Menu', es: 'Menú mod League of Legends', fr: 'Menu mod League of Legends', de: 'League of Legends Mod-Menü', pt: 'Menu mod League of Legends', it: 'Mod menu League of Legends', nl: 'League of Legends Mod Menu', pl: 'Mod menu League of Legends', ru: 'Мод-меню League of Legends', tr: 'League of Legends Mod Menü', ar: 'قائمة مود League of Legends', ja: 'League of Legends Mod Menu', ko: 'League of Legends 모드 메뉴', zh: 'League of Legends修改菜单', hi: 'League of Legends Mod Menu', id: 'Menu mod League of Legends', th: 'เมนูมอด League of Legends', vi: 'Mod menu League of Legends', uk: 'Мод-меню League of Legends', cs: 'League of Legends mod menu', ro: 'Meniu mod League of Legends', sv: 'League of Legends Mod-meny' },
	'soft-aim': { en: 'League of Legends Soft Aim', es: 'Soft aim League of Legends', fr: 'Soft aim League of Legends', de: 'League of Legends Soft Aim', pt: 'Soft aim League of Legends', it: 'Soft aim League of Legends', nl: 'League of Legends Soft Aim', pl: 'Soft aim League of Legends', ru: 'Soft aim League of Legends', tr: 'League of Legends Soft Aim', ar: 'Soft aim League of Legends', ja: 'League of Legends Soft Aim', ko: 'League of Legends Soft Aim', zh: 'League of Legends Soft Aim', hi: 'League of Legends Soft Aim', id: 'Soft aim League of Legends', th: 'League of Legends Soft Aim', vi: 'Soft aim League of Legends', uk: 'Soft aim League of Legends', cs: 'League of Legends Soft Aim', ro: 'Soft aim League of Legends', sv: 'League of Legends Soft Aim' },
	'best-cheats': { en: 'Best LoL Cheats', es: 'Mejores trucos League of Legends', fr: 'Meilleures triches League of Legends', de: 'Beste LoL Cheats', pt: 'Melhores cheats League of Legends', it: 'Migliori cheat League of Legends', nl: 'Beste LoL Cheats', pl: 'Najlepsze cheaty League of Legends', ru: 'Лучшие читы League of Legends', tr: 'En İyi League of Legends Hileleri', ar: 'أفضل غش League of Legends', ja: '最強League of Legendsチート', ko: '최고의 League of Legends 치트', zh: '最佳League of Legends作弊', hi: 'सर्वश्रेष्ठ LoL Cheats', id: 'Cheat League of Legends terbaik', th: 'Cheat League of Legends ที่ดีที่สุด', vi: 'Cheat League of Legends tốt nhất', uk: 'Найкращі чіти League of Legends', cs: 'Nejlepší lol cheaty', ro: 'Cele mai bune cheats League of Legends', sv: 'BästLoL Cheats' },
	'aimbot-cheat': { en: 'LoL Aimbot Cheat', es: 'Cheat aimbot League of Legends', fr: 'Cheat aimbot League of Legends', de: 'LoL Aimbot Cheat', pt: 'Cheat aimbot League of Legends', it: 'Cheat aimbot League of Legends', nl: 'LoL Aimbot Cheat', pl: 'Cheat aimbot League of Legends', ru: 'Хак aimbot League of Legends', tr: 'LoL Aimbot Hilesi', ar: 'هاك Aimbot League of Legends', ja: 'LoL Aimbot Cheat', ko: 'League of Legends 에임봇 핵', zh: 'League of Legends自瞄外挂', hi: 'LoL Aimbot Cheat', id: 'Cheat aimbot League of Legends', th: 'Cheat Aimbot League of Legends', vi: 'Cheat aimbot League of Legends', uk: 'Хак aimbot League of Legends', cs: 'LoL Aimbot cheat', ro: 'Cheat aimbot League of Legends', sv: 'LoL Aimbot Cheat' },
	'esp-cheat': { en: 'LoL ESP Cheat', es: 'Cheat ESP League of Legends', fr: 'Cheat ESP League of Legends', de: 'LoL ESP Cheat', pt: 'Cheat ESP League of Legends', it: 'Cheat ESP League of Legends', nl: 'LoL ESP Cheat', pl: 'Cheat ESP League of Legends', ru: 'Хак ESP League of Legends', tr: 'LoL ESP Hilesi', ar: 'هاك ESP League of Legends', ja: 'LoL ESP Cheat', ko: 'LoL ESP 핵', zh: 'LoL ESP外挂', hi: 'LoL ESP Cheat', id: 'Cheat ESP League of Legends', th: 'Cheat ESP League of Legends', vi: 'Cheat ESP League of Legends', uk: 'Хак ESP League of Legends', cs: 'LoL ESP cheat', ro: 'Cheat ESP League of Legends', sv: 'LoL ESP Cheat' },
	'unlock-all': { en: 'League of Legends Unlock All', es: 'Unlock all League of Legends', fr: 'Unlock all League of Legends', de: 'League of Legends Unlock All', pt: 'Unlock all League of Legends', it: 'Unlock all League of Legends', nl: 'League of Legends Unlock All', pl: 'Unlock all League of Legends', ru: 'Unlock all League of Legends', tr: 'League of Legends Unlock All', ar: 'Unlock all League of Legends', ja: 'League of Legends Unlock All', ko: 'League of Legends Unlock All', zh: 'League of Legends Unlock All', hi: 'League of Legends Unlock All', id: 'Unlock all League of Legends', th: 'League of Legends Unlock All', vi: 'Unlock all League of Legends', uk: 'Unlock all League of Legends', cs: 'League of Legends Unlock All', ro: 'Unlock all League of Legends', sv: 'League of Legends Unlock All' },
};

const CTA2_HREF = {
	'lol-esp': '/lol-cheats/',
	'lol-aimbot': '/lol-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/lol-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/lol-cheats/',
	wallhack: '/lol-esp/',
	radar: '/lol-esp/',
	vanguard: '/updates/',
	'cheats-2026': '/lol-cheats/',
	cheats: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/lol-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-cheat': '/lol-aimbot/',
	'esp-cheat': '/lol-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	const L = LEGAL_I18N[locale];
	const pageCopy = L?.[kind] ?? {};
	const h2 = pageCopy.h2 ?? ['Information we collect', 'How we use data', 'Your rights'];
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | LoL Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} ${L?.descFor ?? 'for LoL Cheats — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for lolcheats.org and League of Legends licenses.'}`),
		imageAlt: 'LoL Cheats',
		galleryTitle: 'LoL Cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: L?.emailSupport ?? 'Email support',
		ctaSecondary:
			kind === 'privacy'
				? L?.readTerms ?? 'Read terms'
				: L?.readPrivacy ?? 'Read privacy',
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				h2[0],
				p.s1(L?.sec1p1 ?? 'Contact email, secure checkout order references, and basic site security data.'),
				kind === 'privacy'
					? L?.privacy?.sec1p2 ?? 'Payment details are processed bysecure checkout. — not stored on lolcheats.org.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate Riot Games terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@lolcheats.org`),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
