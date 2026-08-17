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
	en: {
		eyebrow: 'lol cheats',
		title: 'lol cheats gallery',
		subtitle: 'Simple lol cheats visuals — ESP, wallhack, aimbot, and radar for League of Legends on PC.',
		lead: 'LoL Cheats helps you spot enemy champions, minions, wards, and objectives with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'lol cheats esp', copy: 'See champions through walls with lol cheats esp and wallhack overlays.' },
			{ title: 'lol cheats radar', copy: 'Track nearby threats with lol cheats radar before you push or extract.' },
			{ title: 'lol cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for League of Legends matches on Windows PC.' },
		],
		updatesLabel: 'lol cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'LoL Cheats',
		title: 'GaleríLeague of Legends',
		subtitle: 'Visuales de League of Legends con loadouts, peleas de escuadrón y combate match — junto a herramientas ESP, radar y Aimbot.',
		lead: 'LoL Cheats está pensado para el loop BR de League of Legends: leer el mapa, rastrear escuadrones enemigos, wardsear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de champions y escuadrones', copy: 'Detecta champions enemigos y contornos de escuadrón en Summoners Rift y ARAM game para elegir peleas con mejor información.' },
			{ title: 'Marcadores de wards y cofres', copy: 'Resalta loadouts, cofres y wards de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot League of Legends', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones LoL Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'LoL Cheats',
		title: 'Galerie League of Legends',
		subtitle: 'Visuels League of Legends — loadouts, combats d\'escouade et match — avec ESP, radar et Aimbot.',
		lead: 'LoL Cheats suit la boucle BR de League of Legends : lire la carte, suivre les escouades, wards et survivre au extract.',
		highlights: [
			{ title: 'ESP champions & escouades', copy: 'Repérez les champions ennemis sur Summoners Rift et ARAM game pour choisir vos engagements.' },
			{ title: 'Marqueurs wards & coffres', copy: 'Mettez en évidence loadouts, coffres et wards haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot League of Legends', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour LoL Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'LoL Cheats',
		title: 'League of Legends Galerie',
		subtitle: 'League of Legends-Bilder zu Loadouts, Squad-Kämpfen und match — mit ESP, Radar und Aimbot.',
		lead: 'LoL Cheats passt zur Raid-Schleife von League of Legends: Karte lesen, Gegner-Trupps tracken, jagen und Nester überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Summoners Rift und ARAM game für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'League of Legends Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'LoL Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'LoL Cheats',
		title: 'GaleriLeague of Legends',
		subtitle: 'Visuais de League of Legends com loadouts, combates de eteamrão e match — com ESP, radar e Aimbot.',
		lead: 'LoL Cheats segue o loop BR do League of Legends: ler o mapa, rastrear eteamrões, wardsar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de champions e eteamrões', copy: 'Detecte champions inimigos em Summoners Rift e ARAM game para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de wards e cofres', copy: 'Destaque loadouts, cofres e wards de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot League of Legends', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações LoL Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'LoL Cheats',
		title: 'GalleriLeague of Legends',
		subtitle: 'Immagini League of Legends — loadout, scontri di teamra e match — con ESP, radar e Aimbot.',
		lead: 'LoL Cheats è pensato per il loop BR di League of Legends: leggere la mappa, tracciare teamre nemiche, wards e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e teamre', copy: 'Individua playeri nemici su Summoners Rift e ARAM game per scegliere i fight con più intel.' },
			{ title: 'Marker wards e coffreti', copy: 'Evidenzia loadout, coffreti e wards di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot League of Legends', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti LoL Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'LoL Cheats',
		title: 'League of Legends galerij',
		subtitle: 'League of Legends-beelden van loadouts, teamgevechten en match — met ESP, radar en Aimbot.',
		lead: 'LoL Cheats volgt de match-loop vLeague of Legends: kaart lezen, vijandelijke teams volgen, jagen en objective zones overleven.',
		highlights: [
			{ title: 'Player- & team-ESP', copy: 'Spot vijandelijke champions op Summoners Rift en ARAM game voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier wards zonder schermoverlast.' },
			{ title: 'League of Legends Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'LoL Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'LoL Cheats',
		title: 'GaleriLeague of Legends',
		subtitle: 'Grafiki League of Legends — loadouty, walki drużynowe i match — z ESP, radar i Aimbot.',
		lead: 'LoL Cheats pasuje do pętli BR League of Legends: czytaj mapę, śledź wrogie drużyny, wardsuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP champions i drużyn', copy: 'Wykrywaj wrogich champions na Summoners Rift i ARAM game dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery wardsu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy wards bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot League of Legends', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje LoL Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'LoL Cheats',
		title: 'Галерея League of Legends',
		subtitle: 'Визуалы League of Legends — лоадауты, бои отрядов и match — с ESP, радаром и Aimbot.',
		lead: 'LoL Cheats создан для рейд-циклу League of Legends: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Summoners Rift и ARAM game для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot League of Legends', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления LoL Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'LoL Cheats',
		title: 'League of Legends galerisi',
		subtitle: 'Loadout, takım savaşları ve match görselleri — ESP, radar ve Aimbot ile.',
		lead: 'LoL Cheats, League of Legends BR döngüsü için: haritayı oku, düşman takımları izle, wards al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Summoners Rift ve ARAM game\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye wards\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'League of Legends Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'LoL Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'LoL Cheats',
		title: 'معرض League of Legends',
		subtitle: 'صور League of Legends — loadouts ومعارك الفرق وmatch — مع ESP ورادار وAimbot.',
		lead: 'LoL Cheats مبني لحلقة BR في League of Legends: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف champions المعادين على Summoners Rift وARAM game لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot League of Legends', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات LoL Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'LoL Cheats',
		title: 'League of Legends ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのLeague of Legendsビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'LoL CheatsはLeague of LegendsのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'champions＆スクワッドESP', copy: 'Summoners RiftとARAM gameで敵championsを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'League of Legendsエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'LoL Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'LoL Cheats',
		title: 'League of Legends 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 League of Legends 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'LoL Cheats는 League of Legends survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'champions & 스쿼드 ESP', copy: 'Summoners Rift와 ARAM game에서 적 champions를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'League of Legends 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'LoL Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'LoL Cheats',
		title: 'League of Legends 图库',
		subtitle: 'League of Legends 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'LoL Cheats 为 League of Legends survival loop设计：读图、追踪敌方小队、搜刮并在 nest survival。',
		highlights: [
			{ title: 'champions与小队 ESP', copy: '在 Summoners Rift 和 ARAM game 发现敌方champions，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'League of Legends 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'LoL Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'LoL Cheats',
		title: 'League of Legends गैलरी',
		subtitle: 'Loadout, team fights और match visuals — ESP, radar और Aimbot के साथ।',
		lead: 'LoL Cheats League of Legends survival loop के लिए: map पढ़ें, enemy teams track करें, wards करें और nest survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Summoners Rift और ARAM game पर enemy champions spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier wards highlight करें screen clutter के बिना।' },
			{ title: 'League of Legends Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'LoL Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'LoL Cheats',
		title: 'Galeri League of Legends',
		subtitle: 'Visual League of Legends — loadout, pertempuran team, dan match — dengan ESP, radar, dan Aimbot.',
		lead: 'LoL Cheats untuk loop BR League of Legends: baca peta, lacak team musuh, wards, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & team', copy: 'Deteksi player musuh di Summoners Rift dan ARAM game untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker wards & peti', copy: 'Sorot loadout, peti, dan wards tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot League of Legends', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update LoL Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'LoL Cheats',
		title: 'แกลเลอรี League of Legends',
		subtitle: 'ภาพ League of Legends — loadout การต่อสู้ทีม และ match — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'LoL Cheats สำหรับลูป BR ของ League of Legends: อ่านแผนที่ ติดตามทีมศัตรู เก็บ wards และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Summoners Rift และ ARAM game เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ wards และหีบ', copy: 'เน้น loadout หีบและ wards ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot League of Legends', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต LoL Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'LoL Cheats',
		title: 'Thư viện League of Legends',
		subtitle: 'Hình ảnh League of Legends — loadout, chiến đấu team và match — với ESP, radar và Aimbot.',
		lead: 'LoL Cheats cho vòng BR League of Legends: đọc bản đồ, theo dõi team địch, wards và sống sót extract.',
		highlights: [
			{ title: 'ESP player & team', copy: 'Phát hiện player địch trên Summoners Rift và ARAM game để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu wards & rương', copy: 'Làm nổi bật loadout, rương và wards cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot League of Legends', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật LoL Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'LoL Cheats',
		title: 'Галерея League of Legends',
		subtitle: 'Візуали League of Legends — loadout, бої загонів і match — з ESP, радаром і Aimbot.',
		lead: 'LoL Cheats для рейд-циклу League of Legends: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Summoners Rift і ARAM game для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot League of Legends', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення LoL Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'LoL Cheats',
		title: 'Galerie League of Legends',
		subtitle: 'League of Legends vizuály — loadouty, team souboje a match — s ESP, radarem a Aimbot.',
		lead: 'LoL Cheats pro BR smyčku League of Legends: číst mapu, sledovat nepřátelské teamy, wards a přežít extract.',
		highlights: [
			{ title: 'ESP champions a teamů', copy: 'Spozorujte nepřátelské operátory na Summoners Rift a ARAM game pro lepší rotační rozhodnutí.' },
			{ title: 'Markery wardsu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier wards bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot League of Legends', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace LoL Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'LoL Cheats',
		title: 'Galerie League of Legends',
		subtitle: 'Vizualuri League of Legends — loadout, lupte de team și match — cu ESP, radar și Aimbot.',
		lead: 'LoL Cheats pentru bucla BR League of Legends: citește harta, urmărește team-uri inamice, wards și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și team-uri', copy: 'Detectează playeri inamici pe Summoners Rift și ARAM game pentru decizii de rotație mai bune.' },
			{ title: 'Markere wards și cheste', copy: 'Evidențiază loadout-uri, cheste și wards de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot League of Legends', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări LoL Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'LoL Cheats',
		title: 'League of Legends galleri',
		subtitle: 'League of Legends-bilder — loadouts, teamstrider och match — med ESP, radar och Aimbot.',
		lead: 'LoL Cheats för League of Legends:s match-loop: läs kartan, spåra fiendeteams, wardsa och överlev extract.',
		highlights: [
			{ title: 'Player- & team-ESP', copy: 'Spotta fiendeplayerer på Summoners Rift och ARAM game för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier wards utan skärmklutter.' },
			{ title: 'League of Legends Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'LoL Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
