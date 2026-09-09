import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: 	{
		eyebrow: 'lol cheats',
		title: 'lol cheats gallery',
		subtitle: 'Simple lol cheats visuals — ESP, wallhack, aimbot, and radar for League of Legends on PC.',
		lead: 'LoL Cheats helps you spot enemy champions, minions, wards, and objectives with ESP, aimbot, and radar in one license.',
		highlights: [
		{ title: 'lol cheats esp', copy: 'See champions through walls with lol cheats esp and wallhack overlays.' },
		{ title: 'lol cheats radar', copy: 'Track nearby threats with lol cheats radar before you push a lane.' },
		{ title: 'lol cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for League of Legends on Windows PC.' },
		],
		updatesLabel: 'lol cheats updates',
		updatesShort: 'Updates',
	},
	es: 	{
		eyebrow: 'trucos lol',
		title: 'Galería trucos lol',
		subtitle: 'Capturas de trucos lol — ESP, wallhack, aimbot y radar para League of Legends en PC.',
		lead: 'LoL Cheats te ayuda a ver campeones enemigos, súbditos, wards y objetivos con ESP, aimbot y radar en una licencia.',
		highlights: [
		{ title: 'esp trucos lol', copy: 'Ve campeones a través de paredes con ESP y wallhack.' },
		{ title: 'radar trucos lol', copy: 'Sigue amenazas cercanas con el radar antes de pushear la línea.' },
		{ title: 'aimbot trucos lol', copy: 'Soft aim y aimbot ajustados para League of Legends en PC.' },
		],
		updatesLabel: 'actualizaciones trucos lol',
		updatesShort: 'Actualizaciones',
	},
	fr: 	{
		eyebrow: 'cheats lol',
		title: 'Galerie cheats lol',
		subtitle: 'Visuels cheats lol — ESP, wallhack, aimbot et radar pour League of Legends sur PC.',
		lead: 'LoL Cheats repère les champions ennemis, sbires, wards et objectifs avec ESP, aimbot et radar dans une licence.',
		highlights: [
		{ title: 'esp cheats lol', copy: 'Voyez les champions à travers les murs avec ESP et wallhack.' },
		{ title: 'radar cheats lol', copy: 'Suivez les menaces proches avec le radar avant de push.' },
		{ title: 'aimbot cheats lol', copy: 'Soft aim et aimbot réglés pour League of Legends sur PC.' },
		],
		updatesLabel: 'mises à jour cheats lol',
		updatesShort: 'Mises à jour',
	},
	de: 	{
		eyebrow: 'lol cheats',
		title: 'LoL Cheats Galerie',
		subtitle: 'LoL Cheats Screenshots — ESP, Wallhack, Aimbot und Radar für League of Legends auf PC.',
		lead: 'LoL Cheats zeigt feindliche Champions, Minions, Wards und Objectives mit ESP, Aimbot und Radar in einer Lizenz.',
		highlights: [
		{ title: 'lol cheats esp', copy: 'Champions durch Wände sehen mit ESP und Wallhack.' },
		{ title: 'lol cheats radar', copy: 'Nahe Bedrohungen mit dem Radar verfolgen, bevor du pushst.' },
		{ title: 'lol cheats aimbot', copy: 'Soft Aim und Aimbot für League of Legends auf Windows PC.' },
		],
		updatesLabel: 'lol cheats updates',
		updatesShort: 'Updates',
	},
	pt: 	{
		eyebrow: 'cheats lol',
		title: 'Galeria cheats lol',
		subtitle: 'Visuais cheats lol — ESP, wallhack, aimbot e radar para League of Legends no PC.',
		lead: 'LoL Cheats ajuda a ver campeões inimigos, minions, wards e objetivos com ESP, aimbot e radar numa licença.',
		highlights: [
		{ title: 'esp cheats lol', copy: 'Veja campeões através de paredes com ESP e wallhack.' },
		{ title: 'radar cheats lol', copy: 'Acompanhe ameaças próximas com o radar antes de pushar.' },
		{ title: 'aimbot cheats lol', copy: 'Soft aim e aimbot ajustados para League of Legends no PC.' },
		],
		updatesLabel: 'atualizações cheats lol',
		updatesShort: 'Atualizações',
	},
	it: 	{
		eyebrow: 'cheat lol',
		title: 'Galleria cheat lol',
		subtitle: 'Screenshot cheat lol — ESP, wallhack, aimbot e radar per League of Legends su PC.',
		lead: 'LoL Cheats individua campioni nemici, minion, ward e obiettivi con ESP, aimbot e radar in una licenza.',
		highlights: [
		{ title: 'esp cheat lol', copy: 'Vedi i campioni attraverso i muri con ESP e wallhack.' },
		{ title: 'radar cheat lol', copy: 'Traccia minacce vicine con il radar prima di pushare.' },
		{ title: 'aimbot cheat lol', copy: 'Soft aim e aimbot per League of Legends su PC.' },
		],
		updatesLabel: 'aggiornamenti cheat lol',
		updatesShort: 'Aggiornamenti',
	},
	nl: 	{
		eyebrow: 'lol cheats',
		title: 'lol cheats galerij',
		subtitle: 'LoL cheats visuals — ESP, wallhack, aimbot en radar voor League of Legends op PC.',
		lead: 'LoL Cheats helpt vijandige champions, minions, wards en objectives te spotten met ESP, aimbot en radar in één licentie.',
		highlights: [
		{ title: 'lol cheats esp', copy: 'Zie champions door muren met ESP en wallhack.' },
		{ title: 'lol cheats radar', copy: 'Volg nabije dreigingen met radar voordat je pusht.' },
		{ title: 'lol cheats aimbot', copy: 'Soft aim en aimbot afgestemd op League of Legends op PC.' },
		],
		updatesLabel: 'lol cheats updates',
		updatesShort: 'Updates',
	},
	pl: 	{
		eyebrow: 'cheaty lol',
		title: 'Galeria cheaty lol',
		subtitle: 'Zrzuty cheaty lol — ESP, wallhack, aimbot i radar dla League of Legends na PC.',
		lead: 'LoL Cheats pomaga wykrywać wrogich championów, miniony, wardy i cele dzięki ESP, aimbot i radar w jednej licencji.',
		highlights: [
		{ title: 'esp cheaty lol', copy: 'Widz championów przez ściany dzięki ESP i wallhack.' },
		{ title: 'radar cheaty lol', copy: 'Śledź pobliskie zagrożenia radarem przed pushem.' },
		{ title: 'aimbot cheaty lol', copy: 'Soft aim i aimbot dopasowane do League of Legends na PC.' },
		],
		updatesLabel: 'aktualizacje cheaty lol',
		updatesShort: 'Aktualizacje',
	},
	ru: 	{
		eyebrow: 'читы lol',
		title: 'Галерея читов lol',
		subtitle: 'Скриншоты читов lol — ESP, wallhack, aimbot и радар для League of Legends на PC.',
		lead: 'LoL Cheats помогает видеть вражеских чемпионов, миньонов, варды и цели с ESP, aimbot и радаром в одной лицензии.',
		highlights: [
		{ title: 'esp читы lol', copy: 'Видеть чемпионов сквозь стены с ESP и wallhack.' },
		{ title: 'radar читы lol', copy: 'Отслеживать угрозы радаром перед пушем линии.' },
		{ title: 'aimbot читы lol', copy: 'Soft aim и aimbot для League of Legends на PC.' },
		],
		updatesLabel: 'обновления читов lol',
		updatesShort: 'Обновления',
	},
	tr: 	{
		eyebrow: 'lol hileleri',
		title: 'lol hileleri galerisi',
		subtitle: 'lol hileleri görselleri — ESP, wallhack, aimbot ve radar, League of Legends PC.',
		lead: 'LoL Cheats tek lisansla ESP, aimbot ve radar ile düşman şampiyon, minion, ward ve hedefleri gösterir.',
		highlights: [
		{ title: 'lol hileleri esp', copy: 'ESP ve wallhack ile duvar arkasındaki şampiyonları görün.' },
		{ title: 'lol hileleri radar', copy: 'Push etmeden önce yakındaki tehditleri radarla takip edin.' },
		{ title: 'lol hileleri aimbot', copy: 'League of Legends PC için soft aim ve aimbot.' },
		],
		updatesLabel: 'lol hileleri güncellemeleri',
		updatesShort: 'Güncellemeler',
	},
	ar: 	{
		eyebrow: 'غش lol',
		title: 'معرض غش lol',
		subtitle: 'صور غش lol — ESP وwallhack وaimbot ورadar لـ League of Legends على PC.',
		lead: 'LoL Cheats يساعدك على رؤية الأبطال والminions والwards والأهداف مع ESP وaimbot ورadar في ترخيص واحد.',
		highlights: [
		{ title: 'esp غش lol', copy: 'رؤية الأبطال عبر الجدران مع ESP وwallhack.' },
		{ title: 'radar غش lol', copy: 'تتبع التهديدات القريبة بالradar قبل الدفع.' },
		{ title: 'aimbot غش lol', copy: 'soft aim وaimbot مضبوطان لـ League of Legends على PC.' },
		],
		updatesLabel: 'تحديثات غش lol',
		updatesShort: 'التحديثات',
	},
	ja: 	{
		eyebrow: 'lolチート',
		title: 'lolチートギャラリー',
		subtitle: 'lolチートの画面 — ESP、wallhack、aimbot、レーダー（League of Legends PC向け）。',
		lead: 'LoL Cheatsは1ライセンスでESP、aimbot、レーダーにより敵チャンピオン、ミニオン、ワード、オブジェクトを把握できます。',
		highlights: [
		{ title: 'lolチート esp', copy: 'ESPとwallhackで壁越しにチャンピオンを確認。' },
		{ title: 'lolチート レーダー', copy: 'プッシュ前にレーダーで近くの脅威を追跡。' },
		{ title: 'lolチート aimbot', copy: 'League of Legends PC向けsoft aimとaimbot。' },
		],
		updatesLabel: 'lolチート更新',
		updatesShort: '更新',
	},
	ko: 	{
		eyebrow: 'lol 치트',
		title: 'lol 치트 갤러리',
		subtitle: 'lol 치트 화면 — ESP, wallhack, aimbot, 레이더 (League of Legends PC).',
		lead: 'LoL Cheats는 하나의 라이선스로 ESP, aimbot, 레이더로 적 챔피언, 미니언, 와드, 목표를 확인합니다.',
		highlights: [
		{ title: 'lol 치트 esp', copy: 'ESP와 wallhack으로 벽 너머 챔피언 확인.' },
		{ title: 'lol 치트 레이더', copy: '푸시 전 레이더로 근처 위협 추적.' },
		{ title: 'lol 치트 aimbot', copy: 'League of Legends PC용 soft aim과 aimbot.' },
		],
		updatesLabel: 'lol 치트 업데이트',
		updatesShort: '업데이트',
	},
	zh: 	{
		eyebrow: 'lol外挂',
		title: 'lol外挂图库',
		subtitle: 'lol外挂截图 — ESP、wallhack、自瞄、雷达，适用于 League of Legends PC。',
		lead: 'LoL Cheats 在一个许可证内用 ESP、自瞄和雷达帮你发现敌方英雄、小兵、眼位和目标。',
		highlights: [
		{ title: 'lol外挂 esp', copy: '用 ESP 和 wallhack 穿墙看到英雄。' },
		{ title: 'lol外挂 雷达', copy: '推线前用雷达跟踪附近威胁。' },
		{ title: 'lol外挂 自瞄', copy: '为 League of Legends PC 调校的 soft aim 和自瞄。' },
		],
		updatesLabel: 'lol外挂更新',
		updatesShort: '更新',
	},
	hi: 	{
		eyebrow: 'lol cheats',
		title: 'lol cheats gallery',
		subtitle: 'lol cheats visuals — ESP, wallhack, aimbot, radar League of Legends PC के लिए.',
		lead: 'LoL Cheats एक license में ESP, aimbot और radar से enemy champions, minions, wards और objectives दिखाता है.',
		highlights: [
		{ title: 'lol cheats esp', copy: 'ESP और wallhack से दीवारों के पार champions देखें.' },
		{ title: 'lol cheats radar', copy: 'Push से पहले radar से nearby threats track करें.' },
		{ title: 'lol cheats aimbot', copy: 'League of Legends PC के लिए soft aim और aimbot.' },
		],
		updatesLabel: 'lol cheats updates',
		updatesShort: 'अपडेट',
	},
	id: 	{
		eyebrow: 'cheat lol',
		title: 'Galeri cheat lol',
		subtitle: 'Visual cheat lol — ESP, wallhack, aimbot, radar untuk League of Legends di PC.',
		lead: 'LoL Cheats membantu melihat champion musuh, minion, ward, dan objektif dengan ESP, aimbot, dan radar dalam satu lisensi.',
		highlights: [
		{ title: 'esp cheat lol', copy: 'Lihat champion through walls dengan ESP dan wallhack.' },
		{ title: 'radar cheat lol', copy: 'Lacak ancaman terdekat dengan radar sebelum push.' },
		{ title: 'aimbot cheat lol', copy: 'Soft aim dan aimbot untuk League of Legends di PC.' },
		],
		updatesLabel: 'pembaruan cheat lol',
		updatesShort: 'Pembaruan',
	},
	th: 	{
		eyebrow: 'cheat lol',
		title: 'แกลเลอรี cheat lol',
		subtitle: 'ภาพ cheat lol — ESP, wallhack, aimbot, radar สำหรับ League of Legends บน PC',
		lead: 'LoL Cheats ช่วยมองเห็นแชมเปี้ยนศัตรู มินion วard และเป้าหมายด้วย ESP aimbot และ radar ในไลเซนส์เดียว',
		highlights: [
		{ title: 'esp cheat lol', copy: 'มองแชมเปี้ยนผ่านกำแพงด้วย ESP และ wallhack' },
		{ title: 'radar cheat lol', copy: 'ติดตามภัยคุกคามใกล้ๆ ด้วย radar ก่อน push' },
		{ title: 'aimbot cheat lol', copy: 'soft aim และ aimbot สำหรับ League of Legends บน PC' },
		],
		updatesLabel: 'อัปเดต cheat lol',
		updatesShort: 'อัปเดต',
	},
	vi: 	{
		eyebrow: 'cheat lol',
		title: 'Thư viện cheat lol',
		subtitle: 'Hình ảnh cheat lol — ESP, wallhack, aimbot, radar cho League of Legends trên PC.',
		lead: 'LoL Cheats giúp thấy tướng địch, lính, ward và mục tiêu với ESP, aimbot và radar trong một license.',
		highlights: [
		{ title: 'esp cheat lol', copy: 'Nhìn tướng xuyên tường với ESP và wallhack.' },
		{ title: 'radar cheat lol', copy: 'Theo dõi mối đe dọa gần bằng radar trước khi push.' },
		{ title: 'aimbot cheat lol', copy: 'Soft aim và aimbot cho League of Legends trên PC.' },
		],
		updatesLabel: 'cập nhật cheat lol',
		updatesShort: 'Cập nhật',
	},
	uk: 	{
		eyebrow: 'чити lol',
		title: 'Галерея читів lol',
		subtitle: 'Скріни читів lol — ESP, wallhack, aimbot і радар для League of Legends на PC.',
		lead: 'LoL Cheats допомагає бачити ворожих чемпіонів, міньонів, варди та цілі з ESP, aimbot і радаром в одній ліцензії.',
		highlights: [
		{ title: 'esp чити lol', copy: 'Бачити чемпіонів крізь стіни з ESP і wallhack.' },
		{ title: 'radar чити lol', copy: 'Відстежувати загрози радаром перед пушем.' },
		{ title: 'aimbot чити lol', copy: 'Soft aim і aimbot для League of Legends на PC.' },
		],
		updatesLabel: 'оновлення читів lol',
		updatesShort: 'Оновлення',
	},
	cs: 	{
		eyebrow: 'cheaty lol',
		title: 'Galerie cheaty lol',
		subtitle: 'Screenshoty cheaty lol — ESP, wallhack, aimbot, radar pro League of Legends na PC.',
		lead: 'LoL Cheats pomáhá vidět nepřátelské championy, miniony, wardy a cíle s ESP, aimbot a radarem v jedné licenci.',
		highlights: [
		{ title: 'esp cheaty lol', copy: 'Vidět championy skrz zdi s ESP a wallhack.' },
		{ title: 'radar cheaty lol', copy: 'Sledovat hrozby radarem před pushem.' },
		{ title: 'aimbot cheaty lol', copy: 'Soft aim a aimbot pro League of Legends na PC.' },
		],
		updatesLabel: 'aktualizace cheaty lol',
		updatesShort: 'Aktualizace',
	},
	ro: 	{
		eyebrow: 'cheats lol',
		title: 'Galerie cheats lol',
		subtitle: 'Capturi cheats lol — ESP, wallhack, aimbot, radar pentru League of Legends pe PC.',
		lead: 'LoL Cheats te ajută să vezi campioni inamici, minioni, warduri și obiective cu ESP, aimbot și radar într-o licență.',
		highlights: [
		{ title: 'esp cheats lol', copy: 'Vezi campioni prin pereți cu ESP și wallhack.' },
		{ title: 'radar cheats lol', copy: 'Urmărește amenințările apropiate cu radarul înainte de push.' },
		{ title: 'aimbot cheats lol', copy: 'Soft aim și aimbot pentru League of Legends pe PC.' },
		],
		updatesLabel: 'actualizări cheats lol',
		updatesShort: 'Actualizări',
	},
	sv: 	{
		eyebrow: 'lol cheats',
		title: 'lol cheats-galleri',
		subtitle: 'lol cheats-bilder — ESP, wallhack, aimbot och radar för League of Legends på PC.',
		lead: 'LoL Cheats hjälper dig se fiendechampions, minions, wards och objectives med ESP, aimbot och radar i en licens.',
		highlights: [
		{ title: 'lol cheats esp', copy: 'Se champions genom väggar med ESP och wallhack.' },
		{ title: 'lol cheats radar', copy: 'Spåra hot i närheten med radar innan du pushar.' },
		{ title: 'lol cheats aimbot', copy: 'Soft aim och aimbot för League of Legends på PC.' },
		],
		updatesLabel: 'lol cheats-uppdateringar',
		updatesShort: 'Uppdateringar',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
