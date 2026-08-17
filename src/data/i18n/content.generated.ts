import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; cheats: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; teamFight: string; champEsp: string;
		headerArt: string; cheatsPackage: string; teamfight: string; battleRoyale: string; summonersRift: string;
	};
};
export type PageId = 'home' | 'lol-esp' | 'lol-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'vanguard' | 'cheats-2026' | 'cheats' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-cheat' | 'esp-cheat' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected lol cheats 2026",
					subtitle: "lol cheats with LoL ESP, radar cheat and LoL Aimbot for Windows PC — Vanguard maintenance included.",
					subtitleShort: "LoL ESP, radar & aimbot for PC",
					buyNow: "Buy LoL Cheats",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "LoL Cheats — undetected lol cheats live for League of Legends on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard maintenance supported",
					antiCheatShort: "Vanguard supported",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected lol cheats",
				},
				reviews: {
					title: "What champions say",
					subtitle: "Recent feedback from LoL Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy LoL Cheats",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected lol cheats for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | Undetected ESP, Aimbot & Wallhack",
					description: "LoL cheats for League of Legends on Windows PC with aimbot, ESP, and wallhack. Compare features, pricing, setup steps, and Vanguard update notes before you buy.",
					h1: "League of Legends Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "LoL Cheats is the undetected LoL Cheats package for Windows PC — built for League of Legends on Windows PC. LoL ESP wallhack, 2D radar, and LoL Aimbot with Vanguard maintenance after every major patch.",
					imageAlt: "LoL Cheats homepage hero — ESP and aimbot for League of Legends",
					galleryTitle: "LoL Cheats gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why champions choose lol cheats in 2026",
							paragraphs: [
								"League of Legends rewards map awareness. LoL Cheats combines ESP wallhack for enemy champions and wards, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on match, ARAM game, and ranked servers.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a> and <a href=\"https://www.riotgames.com/en/anti-cheat\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Vanguard maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/\">LoL Cheats pillar</a>, <a href=\"/lol-esp/\">ESP guide</a>, <a href=\"/lol-aimbot/\">Aimbot controls</a>, and <a href=\"/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar cheat, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, LoL Cheats bundles player ESP wallhack, ward markers, 2D radar overlays, and Aimbot profiles in one undetected package built for ranked and normal games — covering both “lol cheats” and “lol cheats” search intent.",
								"Browse the <a href=\"/lol-esp/\">ESP</a>, <a href=\"/lol-aimbot/\">Aimbot</a>, <a href=\"/lol-esp/\">wallhack</a>, and <a href=\"/lol-radar-cheat/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> for Riot Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? <a href=\"{checkout}\" target=\"_blank\" rel=\"noopener noreferrer\">Get access</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/lol-evade-esp-wallhack.webp",
				},
				"lol-esp": {
					title: "LoL ESP 2026 | Player Boxes & Wallhack",
					description: "LoL ESP for Windows PC with player boxes, ward markers, and distance readouts. Undetected visibility tools bundled in our LoL Cheats package with Vanguard.",
					h1: "LoL ESP — Player Boxes & Wallhack",
					intro: "LoL ESP visibility tools for match and ARAM game. Read enemy teams, enemy champions, minions, wards, and distance before you commit — toggleable LoL ESP wallhack overlays bundled in our LoL Cheats package.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP overlay visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "lol wallhack guide",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "What LoL ESP solves in matches",
							paragraphs: [
								"League of Legends maps punish incomplete information. LoL Cheats ESP wallhack helps you spot enemy teams early, spot enemy champions and minions before they push your angle, and mark low-health targets worth the detour.",
								"On match, ARAM game, and ranked servers, that visibility gap is often the difference between a clean third-party and a patched team. ESP ships bundled with radar overlays and Aimbot in one license.",
								"League of Legends’s live seasons and map updates are published by Riot Games (<a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>). When objectives or matchmaking rules shift, ESP categories stay useful because they track champions and wards — not a single static landmark.",
							],
						},
						{
							h2: "Player, apex, and ward ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, baron markers, objective cues, and ward pins so only match-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports ranked and normal games lobbies alike.",
								"Compare category detail on the <a href=\"/lol-esp/\">wallhack page</a> and pair visibility with the <a href=\"/lol-radar-cheat/\">radar cheat</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Ward and ward markers for faster rotations",
								"Baron and objective awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Vanguard maintenance",
							paragraphs: [
								"LoL Cheats ESP wallhack is maintained for League of Legends with rebuilds after Vanguard patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.riotgames.com/en/anti-cheat\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Vanguard maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first match.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the gank. Review <a href=\"/lol-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/\">LoL Cheats pillar</a> and <a href=\"/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/lol-evade-esp-wallhack.webp",
				},
				"lol-aimbot": {
					title: "LoL Aimbot 2026 | Soft Aim for Windows PC",
					description: "LoL Aimbot with soft aim for Windows PC. Tune FOV, bone priority, and hotkeys per champion. Bundled with ESP and radar in one undetected LoL Cheats license.",
					h1: "LoL Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for League of Legends ganks. Smoothness, FOV, bone priority, and per-champion profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot combat previews",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot tuned for League of Legends combat pace",
							paragraphs: [
								"League of Legends mixes skillshot mid-size ganks with close-quarters all-in engages. LoL Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during team fights and close-range team fights.",
								"Weapon balance and season rules change via <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill speed windows.",
							],
						},
						{
							h2: "Per-champion Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for assassins, mages, and marksmen. Switch between skillshot picks and teamfight clears without reopening menus every match.",
								"Prefer softer tracking? Read the <a href=\"/lol-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/lol-esp/\">ESP wallhack</a> and <a href=\"/lol-radar-cheat/\">2D radar</a> in the same LoL Cheats license.",
							],
							list: [
								"Smoothness, FOV, and aim smoothing sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-champion profile slots for AR / SMG / skillshot",
							],
						},
						{
							h2: "Vanguard maintenance for undetected Aimbot",
							paragraphs: [
								"LoL Cheats rebuilds Aimbot behavior when Vanguard or major League of Legends patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> and anti-cheat context on <a href=\"https://www.riotgames.com/en/anti-cheat\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard</a>, then follow our <a href=\"/updates/\">Vanguard maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/lol-script-teamfight.webp",
				},
				features: {
					title: "LoL Cheats Features | ESP, Soft Aim & Radar",
					description: "Full LoL Cheats feature list for Windows PC: ESP boxes, soft aim, radar, and toggle controls. Review everything included before you buy a monthly or lifetime.",
					h1: "LoL Cheats Features — Full Control List",
					intro: "Every ESP wallhack, radar cheat, and Aimbot control included in LoL Cheats for League of Legends on Windows PC — with Vanguard maintenance after major patches.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "LoL Cheats feature gallery",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, baron and objective awareness cues, ward and objective markers, distance readouts, snaplines, and toggleable ESP categories for match-critical overlays only.",
								"Team and enemy colour coding supports ranked and normal games. Deep-dive the <a href=\"/lol-esp/\">ESP page</a> and <a href=\"/lol-esp/\">wallhack guide</a> for category-level detail.",
								"Map and wards systems evolve with <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a> patch cycle and map updates — toggleable ESP categories keep overlays useful when objectives rotate.",
							],
						},
						{
							h2: "Radar cheat and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-match objectives, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-champion profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live League of Legends matches. See <a href=\"/lol-radar-cheat/\">radar</a> and <a href=\"/lol-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Vanguard maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Vanguard maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@lolcheats.org.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
				},
				pricing: {
					title: "LoL Cheats Pricing | $35/mo or $150 Life",
					description: "LoL Cheats pricing: $35 per month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Same features on both plans with instant digital delivery after.",
					h1: "LoL Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected LoL Cheats — ESP wallhack, radar cheat, and Aimbot for League of Legends on Windows PC. Instant digital delivery after payment.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "LoL Cheats package visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime LoL Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar cheat, and Aimbot access with Vanguard maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected LoL Cheats package — ideal if you play League of Legends regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, ward markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Vanguard or major League of Legends patches.",
								"Season calendars and client updates come from <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/\">lol cheats</a>, <a href=\"/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/lol-script-teamfight.webp",
				},
				setup: {
					title: "LoL Cheats Setup | Windows PC Guide",
					description: "Set up LoL Cheats on Windows PC after purchase. Activate ESP boxes, soft aim profiles, and radar, then confirm Vanguard status on Updates before your first.",
					h1: "LoL Cheats Setup — Windows PC Guide",
					intro: "Install and configure LoL Cheats for League of Legends on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Vanguard maintenance status before queueing.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "LoL Cheats setup visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install LoL Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Vanguard maintenance build before launching League of Legends.",
								"Also glance at <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> if Riot Games services look unstable on patch day — a platform outage is not a license fault.",
								"LoL Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemy champions, minions, and wards — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Vanguard module live on <a href=\"/lol-esp/\">ESP</a>, <a href=\"/lol-aimbot/\">Aimbot</a>, and <a href=\"/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/lol-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After League of Legends or Vanguard patches",
							paragraphs: [
								"When Riot Games ships a major League of Legends update or Vanguard patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.riotgames.com/en/anti-cheat\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard</a>. Our practical workflow is documented on the <a href=\"/updates/\">Vanguard bypass page</a> and <a href=\"/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/lol-hexevade-script-menu.webp",
				},
				updates: {
					title: "LoL Cheats Updates | Vanguard Maintenance Log",
					description: "LoL Cheats update log with Vanguard rebuild notes for ESP, soft aim, and radar on Windows PC. Check maintenance status here before queueing after League of.",
					h1: "LoL Cheats Updates — Maintenance Log",
					intro: "Track Vanguard maintenance and League of Legends patch rebuilds for the undetected ESP wallhack, radar cheat, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "League of Legends patch and maintenance visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"League of Legends and Vanguard receive frequent patches. LoL Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> for Riot Games platform health and this page for LoL Cheats build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on match and ARAM game.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Vanguard compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after champions balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Vanguard bypass guide</a> and <a href=\"/\">undetected lol cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a Vanguard update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/lol-hexevade-script-menu.webp",
				},
				faq: {
					title: "LoL Cheats FAQ | ESP, Soft Aim & Radar Answers",
					description: "LoL Cheats FAQ covers ESP, soft aim, radar, Vanguard maintenance, pricing, and delivery on Windows PC. Clear answers about licenses, setup, and updates before.",
					h1: "LoL Cheats FAQ — Common Questions",
					intro: "Answers about undetected LoL Cheats — ESP wallhack, radar cheat, Aimbot, Vanguard maintenance, checkout, and League of Legends compatibility on Windows PC.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "LoL Cheats FAQ visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is LoL Cheats?",
							paragraphs: [
								"LoL Cheats is an undetected cheat package for League of Legends on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Vanguard maintenance updates.",
								"Packages cover match and ARAM game. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/lol-esp/\">ESP</a> / <a href=\"/lol-aimbot/\">Aimbot</a> for module detail.",
								"League of Legends itself is published by Riot Games (<a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>). Cheats are third-party tools and may violate Riot Games' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are LoL Cheats undetected in 2026?",
							paragraphs: [
								"LoL Cheats is maintained with rebuilds after Vanguard and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/\">undetected lol cheats</a> and the <a href=\"/updates/\">Vanguard guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@lolcheats.org or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
				},
				support: {
					title: "LoL Cheats Support | Help & Contact",
					description: "Contact LoL Cheats support for license delivery, ESP setup, soft aim profiles, and billing on Windows PC. Email with your order ID so replies can start faster.",
					h1: "LoL Cheats Support — Contact Us",
					intro: "Get help with LoL Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Vanguard maintenance for League of Legends on Windows PC.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "LoL Cheats support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Vanguard maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. LoL Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Riot Games bans.",
								"Account and game policy questions belong with Riot Games. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Vanguard bypass notes live on the dedicated <a href=\"/updates/\">Vanguard page</a>.",
								"Email: support@lolcheats.org",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/lol-hexevade-script-menu.webp",
				},
				undetected: {
					title: "Undetected LoL Cheats 2026 | Vanguard Maintenance",
					description: "Undetected LoL Cheats with active Vanguard maintenance for ESP, soft aim, and radar on Windows PC. Learn what undetected means and check Status before every.",
					h1: "Undetected LoL Cheats — Vanguard Maintenance",
					intro: "How LoL Cheats stays maintained for League of Legends after Vanguard patches — ESP wallhack, radar cheat, and Aimbot rebuilds for Windows PC.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected LoL Cheats visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Vanguard bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for LoL Cheats",
							paragraphs: [
								"Undetected LoL Cheats means the package is actively maintained against Vanguard and major League of Legends patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Vanguard security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.riotgames.com/en/anti-cheat\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard</a>; League of Legends client updates ship through <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Vanguard maintenance workflow",
							paragraphs: [
								"When Vanguard or League of Legends updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Vanguard bypass League of Legends guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/\">lol cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/lol-hexevade-script-menu.webp",
				},
				wallhack: {
					title: "League of Legends Wallhack 2026 | ESP Boxes & Visibility",
					description: "LoL wallhack ESP with player boxes and ward markers for Windows PC. Undetected overlays with distance readouts, bundled with radar and soft aim in LoL Cheats.",
					h1: "League of Legends Wallhack — ESP Boxes & Visibility",
					intro: "LoL wallhack ESP for League of Legends — see champions, wards, baron buffs, and objectives through toggleable wallhack overlays built for ranked and normal games.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "lol wallhack ESP gallery",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "LoL ESP page",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"An LoL wallhack focuses on information — player outlines, ward pins, baron threat cues — rather than automatic aiming. LoL Cheats bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and objective zones.",
								"For the broader ESP keyword page see <a href=\"/lol-esp/\">LoL ESP</a>; for combat assist see <a href=\"/lol-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support match, ARAM game, and ranked servers with distance readouts and snaplines for engagement control.",
								"Season maps and objective changes are announced via <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/lol-radar-cheat/\">radar cheat</a> cues for flanks during forest and river bank ambushes.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Vanguard patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/\">undetected lol cheats</a> and <a href=\"/updates/\">Vanguard bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/lol-esp/\">ESP cheat</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/lol-evade-esp-wallhack.webp",
				},
				radar: {
					title: "League of Legends Radar Cheat 2026 | 2D Threat Overlay",
					description: "LoL radar cheat for flank awareness on Windows PC. 2D threat overlay bundled with ESP boxes and soft aim in one undetected LoL Cheats license with Vanguard.",
					h1: "League of Legends Radar Cheat — 2D Threat Awareness",
					intro: "2D radar-style overlay for League of Legends — directional threat cues for nearby champions outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "lol radar cheat visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Why radar cheat matters in League of Legends",
							paragraphs: [
								"survival ganks happen across open terrain — hills, forests, and river banks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.",
								"LoL Cheats radar complements <a href=\"/lol-esp/\">ESP wallhack</a> markers during team pushes and nest zone fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight objective zones. Directional cues highlight flanks during building clears and flank pushes across match and ARAM game.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/lol-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar cheat modules receive Vanguard maintenance rebuilds with the full LoL Cheats package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major League of Legends patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/lol-hexevade-script-menu.webp",
				},
				vanguard: {
					title: "Vanguard Bypass League of Legends | LoL Cheats Maintenance",
					description: "How LoL Cheats handles Vanguard patches for ESP, soft aim, and radar on Windows PC. Read the maintenance workflow and check Updates before queueing after.",
					h1: "Vanguard Bypass — LoL Cheats Maintenance",
					intro: "Understand Vanguard maintenance for LoL Cheats — how ESP wallhack, radar cheat, and Aimbot rebuild after League of Legends security updates.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard maintenance visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard overview",
							paragraphs: [
								"Vanguard is Riot Games' anti-cheat for League of Legends on PC (see <a href=\"https://www.riotgames.com/en/anti-cheat\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"LoL Cheats monitors Vanguard patch notes and League of Legends seasonal updates from <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a> to schedule module reviews.",
								"“Vanguard bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Vanguard patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Riot Games service health on <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/\">undetected lol cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Vanguard bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every match.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/lol-hexevade-script-menu.webp",
				},
				"cheats-2026": {
					title: "LoL Cheats 2026 | ESP Soft Aim & Radar",
					description: "Best LoL Cheats for 2026 on Windows PC: ESP boxes, soft aim, and radar with Vanguard maintenance. Compare features, pricing, and status notes before you buy or.",
					h1: "LoL Cheats 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 LoL Cheats package for League of Legends — undetected ESP wallhack, radar cheat, and Aimbot with Vanguard maintenance, instant delivery, and Windows PC support.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "LoL Cheats 2026 gallery",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why lol cheats buyers choose LoL Cheats in 2026",
							paragraphs: [
								"2026 updates bring new maps, champion balance changes, and Vanguard patches. LoL Cheats bundles ESP wallhack, radar cheat, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover match and ARAM game loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, ward markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/\">LoL Cheats pillar</a>, <a href=\"/lol-esp/\">ESP</a>, <a href=\"/lol-aimbot/\">Aimbot</a>, <a href=\"/lol-esp/\">wallhack</a>, <a href=\"/lol-radar-cheat/\">radar</a>, <a href=\"/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/\">lol cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/\">lol cheats</a> checklist, <a href=\"/blog/lol-cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@lolcheats.org via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
				},
				cheats: {
					title: "LoL Cheats 2026 | Undetected ESP Aimbot Guide",
					description: "lol cheats for Windows PC: undetected ESP wallhack, radar cheat, and Aimbot with Vanguard maintenance. Compare lol cheats options and buy the full package.",
					h1: "LoL Cheats — Undetected ESP, Aimbot & Wallhack",
					intro: "lol cheats for match and ARAM game combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Vanguard patches. This is the pillar guide for lol cheats in 2026.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "lol cheats gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "What lol cheats include in 2026",
							paragraphs: [
								"Players searching for lol cheats usually want visibility and combat tools without stacking separate downloads. LoL Cheats bundles player ESP wallhack, ward markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called lol cheats.",
								"Coverage spans match and ARAM game with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>; our cheats package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> before patch-day queue ups.",
							],
						},
						{
							h2: "How this LoL Cheats pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/\">lol cheats 2026</a> and <a href=\"/\">lol cheats</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/lol-esp/\">LoL ESP</a>, <a href=\"/lol-aimbot/\">LoL Aimbot</a>, <a href=\"/lol-esp/\">wallhack</a>, <a href=\"/lol-radar-cheat/\">radar cheat</a>, and <a href=\"/lol-aimbot/\">soft aim</a>.",
								"Blog guides expand Vanguard keyword: <a href=\"/blog/lol-cheats-complete-guide-2026/\">cheats complete guide</a>, <a href=\"/blog/lol-cheats-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-lol-cheats-vanguard/\">undetected Vanguard notes</a>.",
							],
						},
						{
							h2: "lol cheats vs single-feature tools",
							paragraphs: [
								"Standalone cheats often cover only wallhack or only aim assist. LoL Cheats maps the full survival loop: read enemy teams, track baron buffs and wards, spot flanks on radar, and tune Aimbot per champions.",
								"Compare the <a href=\"/lol-esp/\">ESP</a>, <a href=\"/lol-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/\">mod menu</a>, <a href=\"/lol-aimbot/\">aimbot</a>, <a href=\"/lol-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected lol cheats with Vanguard maintenance",
							paragraphs: [
								"Undetected lol cheats require rebuilds after Vanguard and major League of Legends patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.riotgames.com/en/anti-cheat\" target=\"_blank\" rel=\"noopener noreferrer\">Vanguard</a> for anti-cheat background and our <a href=\"/updates/\">Vanguard bypass guide</a> for the practical workflow. Pair with <a href=\"/\">undetected lol cheats</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
				},
				"cheat-download": {
					title: "League of Legends Cheat Download 2026 | Instant Access",
					description: "LoL cheat download with instant license delivery after checkout on Windows PC. Unlock ESP boxes, soft aim, and radar, then follow Setup to activate before your.",
					h1: "League of Legends Cheat Download — Instant License Delivery",
					intro: "How lol cheat download works for League of Legends — digital license delivery after payment confirmation, with ESP wallhack, radar cheat, and Aimbot access on Windows PC.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "lol cheat download visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How lol cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, LoL Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Riot Games services are down, check <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every lol cheat download includes player ESP wallhack, wards and ward markers, 2D radar overlays, Aimbot profiles, and in-client toggles for ranked and normal games.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/lol-esp/\">ESP</a>, <a href=\"/lol-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When League of Legends or Vanguard patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
				},
				"mod-menu": {
					title: "League of Legends Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "League of Legends mod menu for in-match ESP, soft aim, and radar toggles on Windows PC. Control overlays mid-game in one undetected LoL Cheats package with.",
					h1: "League of Legends Mod Menu — In-Client Control Panel",
					intro: "League of Legends mod menu controls for League of Legends — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your League of Legends match on Windows PC.",
					imageAlt: "LoL Cheats in-game menu controls",
					galleryTitle: "League of Legends mod menu gallery",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What League of Legends mod menu controls",
							paragraphs: [
								"A League of Legends mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. LoL Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, ward markers, vehicle cues, and per-champion Aimbot settings without alt-tabbing out of League of Legends.",
								"Control deep-dives: <a href=\"/lol-esp/\">ESP</a>, <a href=\"/lol-aimbot/\">Aimbot</a>, <a href=\"/lol-radar-cheat/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for ranked and normal games",
							paragraphs: [
								"Separate ESP wallhack categories for champions, wards, objectives, and baron buffs let you reduce overlay noise during rotations and objective zones.",
								"Radar cheat range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.lol} seasons change fight distances and mobility.",
								"Soft tracking champions should start with <a href=\"/lol-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Vanguard patches",
							paragraphs: [
								"League of Legends mod menu behavior is rebuilt when Vanguard or major League of Legends updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Vanguard bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
				},
				"soft-aim": {
					title: "League of Legends Soft Aim 2026 | Smooth Aimbot Settings",
					description: "League of Legends soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our lol cheats with ESP boxes.",
					h1: "League of Legends Soft Aim — Smooth Aimbot Controls",
					intro: "League of Legends soft aim settings for League of Legends — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "League of Legends soft aim FOV and smoothness settings",
					galleryTitle: "League of Legends soft aim gallery",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "What League of Legends soft aim means",
							paragraphs: [
								"League of Legends soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. LoL Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR ganks.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during team fights.",
								"Full Aimbot documentation: <a href=\"/lol-aimbot/\">LoL Aimbot</a>. Alternate wording: <a href=\"/lol-aimbot/\">aimbot cheat</a>.",
							],
						},
						{
							h2: "Soft aim profiles per champions",
							paragraphs: [
								"Save separate soft aim profiles for assassins, mages, and marksmen. Switch between skillshot picks and close team fights with hotkeys mid-match.",
								"Weapon kill speeds shift with <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/lol-esp/\">ESP wallhack</a> and <a href=\"/lol-radar-cheat/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with Vanguard maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Vanguard patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/lol-script-teamfight.webp",
				},
				"best-cheats": {
					title: "Best LoL Cheats 2026 | Buyer Guide",
					description: "Best LoL Cheats buyer guide for 2026 on Windows PC. Compare ESP, soft aim, radar, and Vanguard maintenance before checkout with this practical pre-purchase.",
					h1: "Best LoL Cheats — 2026 Buyer Guide",
					intro: "Compare lol cheats for League of Legends in 2026 — undetected ESP wallhack, radar cheat, and Aimbot in one maintained package with Vanguard rebuilds and instant delivery.",
					imageAlt: "LoL Cheats overview for League of Legends on PC",
					galleryTitle: "Best lol cheats gallery",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes lol cheats in 2026",
							paragraphs: [
								"The lol cheats combine active Vanguard maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"LoL Cheats covers match and ARAM game with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends on Riot Client</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best lol cheats feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, ward markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after League of Legends patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/\">undetected status</a>, and <a href=\"/\">lol cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/lol-esp/\">ESP</a>, <a href=\"/lol-aimbot/\">Aimbot</a>, <a href=\"/\">cheats</a>.",
							],
						},
						{
							h2: "Buying lol cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue up — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Riot Games terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/lol-evade-esp-wallhack.webp",
				},
				"aimbot-cheat": {
					title: "LoL Aimbot Cheat 2026 | Soft Aim Assist",
					description: "LoL Aimbot cheat with soft aim assist for Windows PC. Configure FOV, bone priority, and hotkeys per champion, bundled with ESP and radar in one LoL Cheats.",
					h1: "LoL Aimbot Cheat — Soft Aim Assist",
					intro: "LoL Aimbot cheat tools for League of Legends — smoothness, FOV, bone priority, per-champion profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "LoL Aimbot cheat controls and bone priority",
					galleryTitle: "LoL Aimbot cheat gallery",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "LoL Aimbot cheat vs visibility tools",
							paragraphs: [
								"A LoL Aimbot cheat focuses on assisted targeting during ganks — while ESP wallhack and radar handle map awareness. LoL Cheats bundles aimbot cheat modules with visibility overlays in one license.",
								"Smoothness, FOV, and aim smoothing controls tune assist for League of Legends combat pace across ranked and normal games.",
								"Prefer softer tracking language? See <a href=\"/lol-aimbot/\">soft aim</a>. Full settings: <a href=\"/lol-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot cheat controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot cheat mid-match without opening menus during rotations or late-match objectives.",
								"Per-champion profile slots separate skillshot AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a> can change ideal FOV — retune after major champions balance updates.",
							],
						},
						{
							h2: "Undetected aimbot cheat maintenance",
							paragraphs: [
								"Aimbot cheat signatures rebuild after Vanguard updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Vanguard bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/lol-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/lol-script-teamfight.webp",
				},
				"esp-cheat": {
					title: "LoL ESP Cheat 2026 | Player Boxes & Loot",
					description: "LoL ESP cheat with player boxes and ward markers for Windows PC. Undetected visibility overlays with Vanguard maintenance — compare features and buy when.",
					h1: "LoL ESP Cheat — Player Boxes Guide",
					intro: "LoL ESP cheat overlays for League of Legends — player outlines, baron threat cues, ward and objective markers with distance readouts across match and ARAM game.",
					imageAlt: "LoL ESP cheat boxes and ward markers",
					galleryTitle: "LoL ESP cheat gallery",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "What a LoL ESP cheat shows",
							paragraphs: [
								"A LoL ESP cheat renders enemy player outlines, vehicle positions, and ward pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during team pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/lol-esp/\">LoL ESP</a>. Wallhack wording: <a href=\"/lol-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP cheat categories for matches",
							paragraphs: [
								"Toggle player ESP cheat, ward markers, chest pins, and vehicle cues independently so only match-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports ranked and normal games.",
								"objective and wards changes publish through <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP cheat with Vanguard maintenance",
							paragraphs: [
								"ESP cheat modules rebuild after Vanguard and League of Legends patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP cheat awareness with <a href=\"/lol-radar-cheat/\">radar cheat</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/lol-evade-esp-wallhack.webp",
				},
				"unlock-all": {
					title: "League of Legends Unlock All 2026 | What It Really Means",
					description: "League of Legends unlock-all searches explained versus real LoL Cheats tools on Windows PC. Compare ESP, soft aim, and radar features so you know what you are.",
					h1: "League of Legends Unlock All — What Players Search For",
					intro: "League of Legends unlock-all is a common search term for League of Legends — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar cheat, and Aimbot tools LoL Cheats actually provides on Windows PC.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends unlock-all guide visuals",
					ctaPrimary: "Buy LoL Cheats",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What League of Legends unlock-all usually means",
							paragraphs: [
								"League of Legends unlock-all searches often refer to instant access to champions, skins, or rank tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"LoL Cheats focuses on in-match awareness — player ESP, ward markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and patch cycle account progression items are sold through <a href=\"https://www.leagueoflegends.com/\" target=\"_blank\" rel=\"noopener noreferrer\">League of Legends</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy teams, baron buffs, and low-health targets during live matches. Radar cheat adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, wards and ward markers speed map rotations — see the <a href=\"/lol-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/\">lol cheats</a> and <a href=\"/\">lol cheats</a>.",
							],
						},
						{
							h2: "Buying LoL Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar cheat, and Aimbot for League of Legends on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Vanguard patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/lol-script-teamfight.webp",
				},
				privacy: {
					title: "Privacy Policy | LoL Cheats",
					description: "Privacy policy for LoL Cheats on lolcheats.org. How we handle support emails, order references, checkout data, and site security when you browse or contact.",
					h1: "Privacy Policy",
					intro: "How LoL Cheats handles information when you browse lolcheats.org or contact support about League of Legends license.",
					imageAlt: "LoL Cheats privacy policy page",
					galleryTitle: "LoL Cheats legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual LoL Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@lolcheats.org with your request details.",
								"Policy updates publish on this page. Continued use of lolcheats.org after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/lol-hexevade-script-menu.webp",
				},
				refund: {
					title: "Refund Policy | LoL Cheats",
					description: "Refund policy for LoL Cheats licenses on Windows PC. Digital delivery terms, eligibility windows, and how to request help for ESP, soft aim, and radar package.",
					h1: "Refund Policy",
					intro: "Refund terms for LoL Cheats licenses — ESP wallhack, radar cheat, and Aimbot packages purchased through checkout for League of Legends.",
					imageAlt: "LoL Cheats refund policy page",
					galleryTitle: "LoL Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"LoL Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@lolcheats.org with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/lol-script-teamfight.webp",
				},
				terms: {
					title: "Terms of Use 2026 | LoL Cheats Rules",
					description: "Terms of use for lolcheats.org and LoL Cheats licenses on Windows PC. Usage rules, anti-cheat risk disclaimers, and liability limits for ESP, soft aim, and.",
					h1: "Terms of Use",
					intro: "Terms governing use of lolcheats.org and LoL Cheats licenses for League of Legends on Windows PC.",
					imageAlt: "LoL Cheats terms of use page",
					galleryTitle: "LoL Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using LoL Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for League of Legends on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in League of Legends may violate Riot Games terms and result in account penalties. LoL Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@lolcheats.org for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos League of Legends indetectables",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat y Aimbot para League of Legends en PC Windows — mantenimiento Vanguard incluido.",
					subtitleShort: "ESP, radar y Aimbot para League of Legends PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete LoL Cheats está activo para League of Legends en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Vanguard incluido",
					antiCheatShort: "Vanguard incluido",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "League of Legends",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de LoL Cheats",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para League of Legends — checkout en Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos League of Legends indetectables para League of Legends en PC. ESP wallhack, radar cheat y Aimbot con mantenimiento Vanguard. Entrega digital instantánea.",
					h1: "LoL Cheats — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para League of Legends en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Vanguard tras cada parche.",
					imageAlt: "LoL ESP — etiquetas de jugador cheat",
					galleryTitle: "GaleríLoL Cheats — ESP, Aimbot y wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen LoL Cheats en 2026",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Ideal para leer escuadrones enemigos en BR y ARAM game.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Cajas de jugador y wallhack",
					description: "ESP League of Legends: cajas de jugador, marcadores de carcasa y overlays wallhack. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. cajas de jugador, marcadores de carcasa y overlays wallhack.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Controles soft aim",
					description: "Aimbot League of Legends: soft aim, FOV y perfiles Aimbot por especie. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. soft aim, FOV y perfiles Aimbot por especie.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, controles de radar. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Funciones.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. ESP, soft aim, controles de radar.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: licencias de $35 mensuales o $150 de por vida. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Precios.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. licencias de $35 mensuales o $150 de por vida.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: activación en Windows PC y configuración del primer arranque. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Instalación.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. activación en Windows PC y configuración del primer arranque.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Vanguard",
					description: "Actualizaciones: estado de parches Vanguard y notas de reconstrucción. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Actualizaciones.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. estado de parches Vanguard y notas de reconstrucción.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: preguntas sobre ESP, soft aim, entrega y Vanguard. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. preguntas sobre ESP, soft aim, entrega y Vanguard.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: ayuda con pedidos y contacto de soporte de licencias. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Soporte.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. ayuda con pedidos y contacto de soporte de licencias.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: mantenimiento undetected tras parches Vanguard. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Trucos indetectables.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. mantenimiento undetected tras parches Vanguard.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | Visibilidad ESP",
					description: "League of Legends Wallhack: wallhack ESP para jugadores, wards y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. wallhack ESP para jugadores, wards y distancia.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | Radar 2D de amenazas",
					description: "Radar cheat: señales de radar 2D para flancos y rotaciones. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar cheat",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. señales de radar 2D para flancos y rotaciones.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Mantenimiento de parches",
					description: "Bypass Vanguard: cómo se gestionan las actualizaciones Vanguard para League of Legends cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. cómo se gestionan las actualizaciones Vanguard para League of Legends cheats.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos League of Legends 2026 | Guía del comprador",
					description: "Trucos League of Legends 2026: checklist de lol cheats 2026 antes del checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos League of Legends 2026",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Trucos League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Trucos League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Trucos League of Legends 2026",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. checklist de lol cheats 2026 antes del checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				cheats: {
					title: "Trucos League of Legends | Guía ESP y Aimbot",
					description: "Trucos League of Legends: pilar LoL Cheats para ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Trucos League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. pilar LoL Cheats para ESP y Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "DescargLoL Cheats | Acceso instantáneo",
					description: "DescargLoL Cheats: descarga de licencia digital tras el pago. entrega digital instantánea. indetectables — Windows PC.",
					h1: "DescargLoL Cheats",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. DescargLoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "DescargLoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "DescargLoL Cheats",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. descarga de licencia digital tras el pago.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod League of Legends | Controles en partida",
					description: "Menú mod League of Legends: toggles de ESP y soft aim en el cliente. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Menú mod League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Menú mod League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. toggles de ESP y soft aim en el cliente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Ajustes soft aim",
					description: "Soft aim League of Legends: ajustes suaves de soft aim para Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. ajustes suaves de soft aim para Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos League of Legends | Lista de compra",
					description: "Mejores trucos League of Legends: qué comparar antes de comprar lol cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Mejores trucos League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Mejores trucos League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. qué comparar antes de comprar lol cheats.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat aimbot League of Legends | Asistencia soft aim",
					description: "Cheat aimbot League of Legends: asistencia undetected de cheat Aimbot para League of Legends. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Cheat aimbot League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Cheat aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat aimbot League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. asistencia undetected de cheat Aimbot para League of Legends.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Cajas y wards",
					description: "Cheat ESP League of Legends: cajas ESP cheat, pins de carcasa y distancia. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. cajas ESP cheat, pins de carcasa y distancia.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | Qué significa",
					description: "Unlock all League of Legends: búsquedas unlock-all vs herramientas reales ESP y Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. búsquedas unlock-all vs herramientas reales ESP y Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | LoL Cheats",
					description: "Política de privacidad parLoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Política de privacidad para lolcheats.org y licencias de League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Los datos de pago se procesan en el checkout de Zadeyo — no se almacenan en lolcheats.org.",
							],
						},
						{
							h2: "Cómo usamos los datos",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
								"Correo: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | LoL Cheats",
					description: "Política de reembolso parLoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Política de reembolso para lolcheats.org y licencias de League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "Aprobación de reembolso",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Consulta la página Updates antes de jugar tras parches de Vanguard. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
								"Correo: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | LoL Cheats",
					description: "Términos de uso parLoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Términos de uso para lolcheats.org y licencias de League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Correo al soporte",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Correo de contacto, referencias de pedido Zadeyo y datos básicos de seguridad del sitio.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen mantenimiento Vanguard.",
							],
						},
						{
							h2: "Aviso de riesgos",
							paragraphs: [
								"LoL Cheats ofrece ESP wallhack, radar cheat y LoL Aimbot indetectables para League of Legends en Windows PC. Respuestas de soporte, resolución de pedidos y cumplimiento legal cuando sea necesario.",
								"Usar cheats puede violar los términos del equipo de League of Legends — asumes todo riesgo de ban.",
							],
						},
						{
							h2: "Cambios de política",
							paragraphs: [
								"Contacta support@lolcheats.org para solicitudes legales o de soporte.",
								"Correo: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches League of Legends indétectables",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat et Aimbot pour League of Legends sur PC Windows — maintenance Vanguard incluse.",
					subtitleShort: "ESP, radar et Aimbot pour League of Legends PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le team LoL Cheats est actif pour League of Legends sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Vanguard incluse",
					antiCheatShort: "Vanguard inclus",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "League of Legends",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs LoL Cheats",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour League of Legends — checkout via Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack et Aimbot",
					description: "Triches League of Legends indétectables pour League of Legends sur PC. ESP wallhack, radar cheat et Aimbot avec maintenance Vanguard.",
					h1: "LoL Cheats — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour League of Legends sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Vanguard après chaque patch.",
					imageAlt: "LoL ESP — tags joueur cheat",
					galleryTitle: "Galerie LoL Cheats — ESP, Aimbot et wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir LoL Cheats en 2026",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Parfait pour lire les escouades ennemies en BR et ARAM game.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Boîtes joueur et wallhack",
					description: "ESP League of Legends: boîtes joueur, marqueurs de warde et overlays wallhack. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. boîtes joueur, marqueurs de warde et overlays wallhack.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Contrôles soft aim",
					description: "Aimbot League of Legends: soft aim, FOV et profils Aimbot par espèce. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. soft aim, FOV et profils Aimbot par espèce.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, contrôles radar. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Fonctions.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. ESP, soft aim, contrôles radar.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: licences à $35/mois ou $150 à vie. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Tarifs.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. licences à $35/mois ou $150 à vie.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: activation Windows PC et configuration au premier lancement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Installation.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. activation Windows PC et configuration au premier lancement.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Vanguard",
					description: "Mises à jour: statut des patchs Vanguard et notes de rebuild. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Mises à jour.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. statut des patchs Vanguard et notes de rebuild.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: questions ESP, soft aim, livraison et Vanguard. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. questions ESP, soft aim, livraison et Vanguard.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: aide commande et contact support licence. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Support.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. aide commande et contact support licence.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: maintenance undetected après patchs Vanguard. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Triches indétectables.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. maintenance undetected après patchs Vanguard.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | Visibilité ESP",
					description: "League of Legends Wallhack: wallhack ESP pour joueurs, wards et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. wallhack ESP pour joueurs, wards et distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | Radar 2D des menaces",
					description: "Radar cheat: indices radar 2D pour flancs et rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar cheat",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. indices radar 2D pour flancs et rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Maintenance des patchs",
					description: "Bypass Vanguard: gestion des mises à jour Vanguard pour League of Legends cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. gestion des mises à jour Vanguard pour League of Legends cheats.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches League of Legends 2026 | Guide acheteur",
					description: "Triches League of Legends 2026: checklist lol cheats 2026 avant checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches League of Legends 2026",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Triches League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Triches League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Triches League of Legends 2026",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. checklist lol cheats 2026 avant checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				cheats: {
					title: "Triches League of Legends | Guide ESP et Aimbot",
					description: "Triches League of Legends: pilier LoL Cheats pour ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Triches League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Triches League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. pilier LoL Cheats pour ESP et Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement LoL Cheats | Accès instantané",
					description: "Téléchargement LoL Cheats: téléchargement licence numérique après paiement. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement LoL Cheats",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Téléchargement LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Téléchargement LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement LoL Cheats",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. téléchargement licence numérique après paiement.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod League of Legends | Contrôles en jeu",
					description: "Menu mod League of Legends: toggles ESP et soft aim in-client. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Menu mod League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Menu mod League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. toggles ESP et soft aim in-client.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Réglages soft aim",
					description: "Soft aim League of Legends: réglages soft aim fluides pour Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. réglages soft aim fluides pour Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches League of Legends | Checklist acheteur",
					description: "Meilleures triches League of Legends: quoi comparer avant d'acheter lol cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Meilleures triches League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Meilleures triches League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. quoi comparer avant d'acheter lol cheats.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat aimbot League of Legends | Assistance soft aim",
					description: "Cheat aimbot League of Legends: assist cheat Aimbot undetected pour League of Legends. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Cheat aimbot League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Cheat aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat aimbot League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. assist cheat Aimbot undetected pour League of Legends.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Boîtes et wards",
					description: "Cheat ESP League of Legends: boîtes ESP cheat, pins warde et distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. boîtes ESP cheat, pins warde et distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | Ce que ça signifie",
					description: "Unlock all League of Legends: recherches unlock-all vs vrais outils ESP et Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Acheter LoL Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. recherches unlock-all vs vrais outils ESP et Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | LoL Cheats",
					description: "Politique de confidentialité pour LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Politique de confidentialité pour lolcheats.org et les licences League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire les conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Les détails de paiement sont traités par le checkout Zadeyo — non stockés sur lolcheats.org.",
							],
						},
						{
							h2: "Utilisation des données",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
								"E-mail : support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | LoL Cheats",
					description: "Politique de remboursement pour LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Politique de remboursement pour lolcheats.org et les licences League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "Approbation du remboursement",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Consultez Updates après les patchs Vanguard. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
								"E-mail : support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | LoL Cheats",
					description: "Conditions d'utilisation pour LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Conditions d'utilisation pour lolcheats.org et les licences League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Contacter le support",
					ctaSecondary: "Lire la confidentialité",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation des conditions",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. E-mail de contact, références de commande Zadeyo et données de sécurité de base du site.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Vanguard.",
							],
						},
						{
							h2: "Avertissement sur les risques",
							paragraphs: [
								"LoL Cheats combine ESP wallhack, radar cheat et LoL Aimbot indétectables pour League of Legends sur PC Windows. Réponses du support, résolution des commandes et conformité légale si requis.",
								"Utiliser des cheats peut enfreindre les conditions de l'équipe League of Legends — vous assumez tout risque de bannissement.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@lolcheats.org pour le support ou les demandes légales.",
								"E-mail : support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected LoL Cheats",
					accentShort: "LoL Cheats",
					subtitle: "ESP Wallhack, Radar Cheat und Aimbot für League of Legends auf Windows PC — Vanguard-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für League of Legends PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "LoL Cheats Paket ist live für League of Legends auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard-Wartung unterstützt",
					antiCheatShort: "Vanguard Support",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von LoL Cheats Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für League of Legends — Checkout über Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected LoL Cheats für League of Legends auf PC. ESP Wallhack, Radar Cheat und Aimbot mit Vanguard-Wartung. Sofortige digitale Lieferung.",
					h1: "LoL Cheats — Undetected ESP, Wallhack und Aimbot",
					intro: "Undetected Windows PC Paket für League of Legends: ESP Wallhack, Radar und Aimbot mit Vanguard-Wartung nach jedem Patch.",
					imageAlt: "LoL ESP — Spieler-Tags Cheat",
					galleryTitle: "LoL Cheats Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum LoL Cheats 2026 führt",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Ideal um feindliche Squads in BR und ARAM game zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Spielerboxen & Wallhack",
					description: "LoL ESP: Spielerboxen, Kadaver-Marker und Wallhack-Overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Spielerboxen, Kadaver-Marker und Wallhack-Overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft-Aim Steuerung",
					description: "LoL Aimbot: Soft Aim, FOV und Aimbot-Profile pro Spezies. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Soft Aim, FOV und Aimbot-Profile pro Spezies.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, Soft Aim, Radar-Steuerung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Features.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. ESP, Soft Aim, Radar-Steuerung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monatliche oder $150 Lifetime-Lizenzen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Preise.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. $35 monatliche oder $150 Lifetime-Lizenzen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC Aktivierung und Erststart-Setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Setup.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Windows PC Aktivierung und Erststart-Setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Vanguard Wartungslog",
					description: "Updates: Vanguard Patch-Status und Rebuild-Notizen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Updates.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Vanguard Patch-Status und Rebuild-Notizen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: Fragen zu ESP, Soft Aim, Lieferung und Vanguard. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Fragen zu ESP, Soft Aim, Lieferung und Vanguard.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: Bestellhilfe und Lizenz-Support-Kontakt. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Support.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Bestellhilfe und Lizenz-Support-Kontakt.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: Undetected-Wartung nach Vanguard Patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Undetected Cheats.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Undetected-Wartung nach Vanguard Patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Sichtbarkeit",
					description: "League of Legends Wallhack: Wallhack ESP für Spieler, Kadaver und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Wallhack ESP für Spieler, Kadaver und Entfernung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Bedrohungsradar",
					description: "Radar Cheat: 2D-Radar-Hinweise für Flanken und Rotationen. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. 2D-Radar-Hinweise für Flanken und Rotationen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch-Wartung",
					description: "Vanguard Bypass: wie Vanguard Updates für LoL Cheats gehandhabt werden. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. wie Vanguard Updates für LoL Cheats gehandhabt werden.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "LoL Cheats 2026 | Käuferleitfaden",
					description: "LoL Cheats 2026: 2026 lol cheats Checkliste vor dem Checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "LoL Cheats 2026",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. LoL Cheats 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "LoL Cheats 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL Cheats 2026",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. 2026 lol cheats Checkliste vor dem Checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				cheats: {
					title: "LoL Cheats | ESP Aimbot Guide",
					description: "LoL Cheats: LoL Cheats Säule für ESP und Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "LoL Cheats",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. LoL Cheats.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "LoL Cheats",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. LoL Cheats Säule für ESP und Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "League of Legends Cheat Download | Sofortzugang",
					description: "League of Legends Cheat Download: digitaler Lizenz-Download nach Zahlung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "League of Legends Cheat Download",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. League of Legends Cheat Download.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "League of Legends Cheat Download",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "League of Legends Cheat Download",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. digitaler Lizenz-Download nach Zahlung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends Mod-Menü | In-Game Toggles",
					description: "League of Legends Mod-Menü: In-Client ESP- und Soft-Aim-Toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "League of Legends Mod-Menü",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. League of Legends Mod-Menü.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends Mod-Menü",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Mod-Menü",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. In-Client ESP- und Soft-Aim-Toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Soft-Aim Einstellungen",
					description: "League of Legends Soft Aim: sanfte Soft-Aim-Einstellungen für Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. sanfte Soft-Aim-Einstellungen für Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste LoL Cheats | Käufer-Checkliste",
					description: "Beste LoL Cheats: was vor dem Kauf der lol cheats verglichen werden sollte. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste LoL Cheats",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Beste LoL Cheats.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Beste LoL Cheats",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste LoL Cheats",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. was vor dem Kauf der lol cheats verglichen werden sollte.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "LoL Aimbot Cheat | Soft-Aim Assist",
					description: "LoL Aimbot Cheat: undetected Aimbot-Cheat-Assist für League of Legends. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "LoL Aimbot Cheat",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. LoL Aimbot Cheat.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "LoL Aimbot Cheat",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "LoL Aimbot Cheat",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. undetected Aimbot-Cheat-Assist für League of Legends.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP Cheat | Boxen & Loot",
					description: "LoL ESP Cheat: ESP-Cheat-Boxen, Kadaver-Pins und Entfernung. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "LoL ESP Cheat",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. LoL ESP Cheat.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP Cheat",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP Cheat",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. ESP-Cheat-Boxen, Kadaver-Pins und Entfernung.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | Was es bedeutet",
					description: "League of Legends Unlock All: unlock-all Suchen vs echte ESP- und Aimbot-Tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. unlock-all Suchen vs echte ESP- und Aimbot-Tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
								"support@lolcheats.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | LoL Cheats",
					description: "Datenschutz für LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Datenschutz für lolcheats.org und League of Legends-Lizenzen.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Zahlungsdaten werden über Zadeyo-Checkout verarbeitet — nicht auf lolcheats.org gespeichert.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@lolcheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | LoL Cheats",
					description: "Rückerstattung für LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Rückerstattung für lolcheats.org und League of Legends-Lizenzen.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "Rückerstattungsgenehmigung",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Updates-Seite nach Vanguard-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "So beantragen",
							paragraphs: [
								"support@lolcheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | LoL Cheats",
					description: "Nutzungsbedingungen für LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Nutzungsbedingungen für lolcheats.org und League of Legends-Lizenzen.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Support per E-Mail",
					ctaSecondary: "Datenschutz lesen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme der Bedingungen",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Kontakt-E-Mail, Zadeyo-Bestellreferenzen und grundlegende Sicherheitsdaten der Website.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Vanguard-Wartung.",
							],
						},
						{
							h2: "Risikohinweis",
							paragraphs: [
								"LoL Cheats bündelt ESP wallhack, radar cheat und LoL Aimbot als undetected Paket für League of Legends auf Windows PC. Support-Antworten, Auftragsabwicklung und rechtliche Compliance bei Bedarf.",
								"Cheats können gegen die Nutzungsbedingungen des League of Legends Teams verstoßen — Sie tragen das volle Ban-Risiko.",
							],
						},
						{
							h2: "Richtlinienänderungen",
							paragraphs: [
								"support@lolcheats.org für Support und rechtliche Anfragen.",
								"E-Mail: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats League of Legends indetectáveis",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat e Aimbot para League of Legends no PC Windows — manutenção Vanguard incluída.",
					subtitleShort: "ESP, radar e Aimbot para League of Legends PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote LoL Cheats está ativo para League of Legends no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Vanguard incluída",
					antiCheatShort: "Vanguard incluído",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "League of Legends",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores LoL Cheats",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para League of Legends — checkout via Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats League of Legends indetectáveis para League of Legends no PC. ESP wallhack, radar cheat e Aimbot com manutenção Vanguard. Entrega digital instantánea.",
					h1: "LoL Cheats — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para League of Legends no Windows PC: ESP wallhack, radar e Aimbot com manutenção Vanguard após cada patch.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "GaleriLoL Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher LoL Cheats em 2026",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Ideal para ler eteamrões inimigos em BR e ARAM game.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Caixas de jogador e wallhack",
					description: "ESP League of Legends: caixas de jogador, marcadores de carcaça e overlays wallhack. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. caixas de jogador, marcadores de carcaça e overlays wallhack.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Controles soft aim",
					description: "Aimbot League of Legends: soft aim, FOV e perfis Aimbot por espécie. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. soft aim, FOV e perfis Aimbot por espécie.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, controles de radar. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Recursos.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. ESP, soft aim, controles de radar.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: licenças de $35 mensais ou $150 vitalícias. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Preços.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. licenças de $35 mensais ou $150 vitalícias.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: ativação no Windows PC e configuração do primeiro lançamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Instalação.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. ativação no Windows PC e configuração do primeiro lançamento.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Vanguard",
					description: "Atualizações: status de patches Vanguard e notas de rebuild. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Atualizações.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. status de patches Vanguard e notas de rebuild.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: perguntas sobre ESP, soft aim, entrega e Vanguard. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. perguntas sobre ESP, soft aim, entrega e Vanguard.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: ajuda com pedidos e contato de suporte de licenças. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Suporte.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. ajuda com pedidos e contato de suporte de licenças.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: manutenção undetected após patches Vanguard. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Cheats indetectáveis.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. manutenção undetected após patches Vanguard.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | Visibilidade ESP",
					description: "League of Legends Wallhack: wallhack ESP para jogadores, carcaças e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. wallhack ESP para jogadores, carcaças e distância.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | Radar 2D de ameaças",
					description: "Radar cheat: sinais de radar 2D para flancos e rotações. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar cheat",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. sinais de radar 2D para flancos e rotações.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Manutenção de patches",
					description: "Bypass Vanguard: como as atualizações Vanguard são tratadas para League of Legends cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. como as atualizações Vanguard são tratadas para League of Legends cheats.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats League of Legends 2026 | Guia do comprador",
					description: "Cheats League of Legends 2026: checklist de lol cheats 2026 antes do checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats League of Legends 2026",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Cheats League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Cheats League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheats League of Legends 2026",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. checklist de lol cheats 2026 antes do checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				cheats: {
					title: "Cheats League of Legends | Guia ESP e Aimbot",
					description: "Cheats League of Legends: pilar LoL Cheats para ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Cheats League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. pilar LoL Cheats para ESP e Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download LoL Cheats | Acesso instantâneo",
					description: "Download LoL Cheats: download de licença digital após pagamento. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download LoL Cheats",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Download LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Download LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download LoL Cheats",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. download de licença digital após pagamento.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod League of Legends | Controles in-game",
					description: "Menu mod League of Legends: toggles de ESP e soft aim no cliente. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Menu mod League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Menu mod League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. toggles de ESP e soft aim no cliente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Ajustes soft aim",
					description: "Soft aim League of Legends: ajustes suaves de soft aim para Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. ajustes suaves de soft aim para Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats League of Legends | Checklist do comprador",
					description: "Melhores cheats League of Legends: o que comparar antes de comprar lol cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Melhores cheats League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Melhores cheats League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. o que comparar antes de comprar lol cheats.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat aimbot League of Legends | Assistência soft aim",
					description: "Cheat aimbot League of Legends: assistência undetected de cheat Aimbot para League of Legends. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheat aimbot League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Cheat aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat aimbot League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. assistência undetected de cheat Aimbot para League of Legends.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Caixas e wards",
					description: "Cheat ESP League of Legends: caixas ESP cheat, pins de carcaça e distância. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. caixas ESP cheat, pins de carcaça e distância.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | O que significa",
					description: "Unlock all League of Legends: buscas unlock-all vs ferramentas reais ESP e Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Comprar LoL Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. buscas unlock-all vs ferramentas reais ESP e Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
								"Contacte support@lolcheats.org para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | LoL Cheats",
					description: "Política de privacidade parLoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Política de privacidade para lolcheats.org e licenças League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler termos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informações que coletamos",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Detalhes de pagamento são processados pelo checkout Zadeyo — não armazenados em lolcheats.org.",
							],
						},
						{
							h2: "Como usamos os dados",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Seus direitos",
							paragraphs: [
								"Contacte support@lolcheats.org para suporte ou questões legais.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | LoL Cheats",
					description: "Política de reembolso parLoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Política de reembolso para lolcheats.org e licenças League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "Aprovação de reembolso",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Verifique Updates após patches Vanguard. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Como solicitar",
							paragraphs: [
								"Contacte support@lolcheats.org para suporte ou questões legais.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | LoL Cheats",
					description: "Termos de uso parLoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Termos de uso para lolcheats.org e licenças League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "E-mail ao suporte",
					ctaSecondary: "Ler privacidade",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceitação dos termos",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. E-mail de contato, referências de pedido Zadeyo e dados básicos de segurança do site.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Vanguard.",
							],
						},
						{
							h2: "Aviso de risco",
							paragraphs: [
								"LoL Cheats reúne ESP wallhack, radar cheat e LoL Aimbot indetectáveis para League of Legends no PC Windows. Respostas de suporte, resolução de pedidos e conformidade legal quando necessário.",
								"Usar cheats pode violar os termos da equipe League of Legends — você assume todo risco de ban.",
							],
						},
						{
							h2: "Alterações de política",
							paragraphs: [
								"Contacte support@lolcheats.org para suporte ou questões legais.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat League of Legends indetectable",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat e Aimbot per League of Legends su PC Windows — manutenzione Vanguard inclusa.",
					subtitleShort: "ESP, radar e Aimbot per League of Legends PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto LoL Cheats è attivo per League of Legends su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Vanguard supportata",
					antiCheatShort: "Vanguard supportato",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "League of Legends",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti LoL Cheats",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per League of Legends — checkout via Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat League of Legends indetectable per League of Legends su PC. ESP wallhack, radar cheat e Aimbot con manutenzione Vanguard. Consegna digitale istantanea.",
					h1: "LoL Cheats — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per League of Legends su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Vanguard dopo ogni patch.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "GalleriLoL Cheats — ESP, Aimbot e wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere LoL Cheats nel 2026",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Ideale per leggere teamre nemiche in BR e ARAM game.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Box giocatore e wallhack",
					description: "ESP League of Legends: box giocatore, marcatori warda e overlay wallhack. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. box giocatore, marcatori warda e overlay wallhack.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Controlli soft aim",
					description: "Aimbot League of Legends: soft aim, FOV e profili Aimbot per specie. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. soft aim, FOV e profili Aimbot per specie.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, controlli radar. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Funzioni.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. ESP, soft aim, controlli radar.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: licenze $35 mensili o $150 lifetime. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Prezzi.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. licenze $35 mensili o $150 lifetime.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: attivazione Windows PC e setup al primo avvio. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Setup.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. attivazione Windows PC e setup al primo avvio.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Vanguard",
					description: "Aggiornamenti: stato patch Vanguard e note di rebuild. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Aggiornamenti.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. stato patch Vanguard e note di rebuild.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: domande su ESP, soft aim, consegna e Vanguard. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. domande su ESP, soft aim, consegna e Vanguard.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: aiuto ordini e contatto supporto licenze. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Supporto.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. aiuto ordini e contatto supporto licenze.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: manutenzione undetected dopo patch Vanguard. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Cheat indetectable.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. manutenzione undetected dopo patch Vanguard.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | Visibilità ESP",
					description: "League of Legends Wallhack: wallhack ESP per giocatori, wards e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. wallhack ESP per giocatori, wards e distanza.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | Radar 2D minacce",
					description: "Radar cheat: segnali radar 2D per flanchi e rotazioni. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar cheat",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. segnali radar 2D per flanchi e rotazioni.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Manutenzione patch",
					description: "Bypass Vanguard: come vengono gestiti gli aggiornamenti Vanguard per League of Legends cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. come vengono gestiti gli aggiornamenti Vanguard per League of Legends cheats.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat League of Legends 2026 | Guida acquirente",
					description: "Cheat League of Legends 2026: checklist lol cheats 2026 prima del checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat League of Legends 2026",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Cheat League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Cheat League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheat League of Legends 2026",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. checklist lol cheats 2026 prima del checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				cheats: {
					title: "Cheat League of Legends | Guida ESP e Aimbot",
					description: "Cheat League of Legends: pilastro LoL Cheats per ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Cheat League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. pilastro LoL Cheats per ESP e Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download LoL Cheats | Accesso istantaneo",
					description: "Download LoL Cheats: download licenza digitale dopo il pagamento. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download LoL Cheats",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Download LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Download LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download LoL Cheats",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. download licenza digitale dopo il pagamento.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu League of Legends | Toggle in-game",
					description: "Mod menu League of Legends: toggle ESP e soft aim in-client. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Mod menu League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Mod menu League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. toggle ESP e soft aim in-client.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Impostazioni soft aim",
					description: "Soft aim League of Legends: impostazioni soft aim fluide per Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. impostazioni soft aim fluide per Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat League of Legends | Checklist acquirente",
					description: "Migliori cheat League of Legends: cosa confrontare prima di acquistare lol cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Migliori cheat League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Migliori cheat League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. cosa confrontare prima di acquistare lol cheats.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat aimbot League of Legends | Assist soft aim",
					description: "Cheat aimbot League of Legends: assist undetected cheat Aimbot per League of Legends. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat aimbot League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Cheat aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat aimbot League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. assist undetected cheat Aimbot per League of Legends.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Box e wards",
					description: "Cheat ESP League of Legends: box ESP cheat, pin warda e distanza. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. box ESP cheat, pin warda e distanza.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | Cosa significa",
					description: "Unlock all League of Legends: ricerche unlock-all vs veri strumenti ESP e Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "AcquistLoL Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. ricerche unlock-all vs veri strumenti ESP e Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
								"Contatta support@lolcheats.org per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | LoL Cheats",
					description: "Informativa privacy per LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Informativa privacy per lolcheats.org e licenze League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi i termini",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informazioni raccolte",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"I dati di pagamento sono elaborati dal checkout Zadeyo — non memorizzati su lolcheats.org.",
							],
						},
						{
							h2: "Uso dei dati",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "I tuoi diritti",
							paragraphs: [
								"Contatta support@lolcheats.org per supporto o richieste legali.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | LoL Cheats",
					description: "Politica di rimborso per LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Politica di rimborso per lolcheats.org e licenze League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Consegna digitale",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "Approvazione rimborso",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Controlla Updates dopo patch Vanguard. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Come richiedere",
							paragraphs: [
								"Contatta support@lolcheats.org per supporto o richieste legali.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | LoL Cheats",
					description: "Termini di utilizzo per LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Termini di utilizzo per lolcheats.org e licenze League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Email al supporto",
					ctaSecondary: "Leggi la privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Accettazione dei termini",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Email di contatto, riferimenti ordine Zadeyo e dati di sicurezza di base del sito.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Vanguard.",
							],
						},
						{
							h2: "Avviso sui rischi",
							paragraphs: [
								"LoL Cheats unisce ESP wallhack, radar cheat e LoL Aimbot indetectable per League of Legends su PC Windows. Risposte di supporto, risoluzione ordini e conformità legale quando richiesto.",
								"Usare cheat può violare i termini del team League of Legends — assumi tutto il rischio di ban.",
							],
						},
						{
							h2: "Modifiche alla policy",
							paragraphs: [
								"Contatta support@lolcheats.org per supporto o richieste legali.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected LoL Cheats",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat en Aimbot voor League of Legends op Windows PC — Vanguard-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor League of Legends PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "LoL Cheats pakket is live voor League of Legends op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard-onderhoud ondersteund",
					antiCheatShort: "Vanguard support",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback vLoL Cheats kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor League of Legends — checkout via Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected lol cheats voor League of Legends op PC. ESP wallhack, radar cheat en Aimbot met Vanguard-onderhoud. Directe digitale levering.",
					h1: "LoL Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor League of Legends: ESP wallhack, radar en Aimbot met Vanguard-onderhoud na elke patch.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "LoL Cheats galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom LoL Cheats in 2026",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Ideaal om vijandelijke teams te lezen in BR en ARAM game.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: spelerboxen, karkas-markers en wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. spelerboxen, karkas-markers en wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim, FOV en Aimbot-profielen per soort. directe digitale levering. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. soft aim, FOV en Aimbot-profielen per soort.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar bediening. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Functies.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. ESP, soft aim, radar bediening.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 maandelijkse of $150 lifetime licenties. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Prijzen.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. $35 maandelijkse of $150 lifetime licenties.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activatie en eerste-start setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Setup.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Windows PC activatie en eerste-start setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Vanguard Maintenance Log",
					description: "Updates: Vanguard patchstatus en rebuild-notities. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Updates.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Vanguard patchstatus en rebuild-notities.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: vragen over ESP, soft aim, levering en Vanguard. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. vragen over ESP, soft aim, levering en Vanguard.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: bestelhulp en licentie support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Support.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. bestelhulp en licentie support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Vanguard Safe Status",
					description: "Undetected Cheats: undetected onderhoud na Vanguard patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Undetected Cheats.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. undetected onderhoud na Vanguard patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP voor spelers, karkassen en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. wallhack ESP voor spelers, karkassen en afstand.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Threat Overlay",
					description: "Radar Cheat: 2D radar signalen voor flanks en rotaties. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. 2D radar signalen voor flanks en rotaties.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: hoe Vanguard updates worden afgehandeld voor League of Legends cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. hoe Vanguard updates worden afgehandeld voor League of Legends cheats.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "LoL Cheats 2026 | Buyer Guide",
					description: "LoL Cheats 2026: 2026 lol cheats checklist vóór checkout. directe digitale levering. undetected — Windows PC.",
					h1: "LoL Cheats 2026",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. LoL Cheats 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "LoL Cheats 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL Cheats 2026",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. 2026 lol cheats checklist vóór checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				cheats: {
					title: "LoL Cheats | ESP Aimbot Guide",
					description: "LoL Cheats: LoL Cheats pijler voor ESP en Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "LoL Cheats",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. LoL Cheats.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "LoL Cheats",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. LoL Cheats pijler voor ESP en Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "League of Legends Cheat Download | Instant Access",
					description: "League of Legends Cheat Download: digitale licentiedownload na betaling. directe digitale levering. undetected — Windows PC.",
					h1: "League of Legends Cheat Download",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. League of Legends Cheat Download.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "League of Legends Cheat Download",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "League of Legends Cheat Download",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. digitale licentiedownload na betaling.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends Mod Menu | In-Game Toggles",
					description: "League of Legends Mod Menu: in-client ESP en soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "League of Legends Mod Menu",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. League of Legends Mod Menu.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends Mod Menu",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Mod Menu",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. in-client ESP en soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: vloeiende soft aim instellingen voor Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. vloeiende soft aim instellingen voor Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste LoL Cheats | Buyer Checklist",
					description: "Beste LoL Cheats: wat te vergelijken vóór aankoop van lol cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste LoL Cheats",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Beste LoL Cheats.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Beste LoL Cheats",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste LoL Cheats",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. wat te vergelijken vóór aankoop van lol cheats.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "LoL Aimbot Cheat | Soft Aim Assist",
					description: "LoL Aimbot Cheat: undetected Aimbot cheat assist voor League of Legends. directe digitale levering. undetected — Windows PC.",
					h1: "LoL Aimbot Cheat",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. LoL Aimbot Cheat.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "LoL Aimbot Cheat",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "LoL Aimbot Cheat",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. undetected Aimbot cheat assist voor League of Legends.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP Cheat | Boxes & Loot",
					description: "LoL ESP Cheat: ESP cheat boxen, karkas pins en afstand. directe digitale levering. undetected — Windows PC.",
					h1: "LoL ESP Cheat",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. LoL ESP Cheat.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP Cheat",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP Cheat",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. ESP cheat boxen, karkas pins en afstand.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: unlock-all zoekopdrachten vs echte ESP en Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. unlock-all zoekopdrachten vs echte ESP en Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
								"support@lolcheats.org voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | LoL Cheats",
					description: "Privacybeleid voor LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Privacybeleid voor lolcheats.org en League of Legends-licenties.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Voorwaarden lezen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informatie die we verzamelen",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Betalingsgegevens worden verwerkt via Zadeyo checkout — niet opgeslagen op lolcheats.org.",
							],
						},
						{
							h2: "Hoe we gegevens gebruiken",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Uw rechten",
							paragraphs: [
								"support@lolcheats.org voor support en juridische vragen.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | LoL Cheats",
					description: "Restitutiebeleid voor LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Restitutiebeleid voor lolcheats.org en League of Legends-licenties.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale levering",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "Restitutiegoedkeuring",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Check Updates na Vanguard-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Hoe aanvragen",
							paragraphs: [
								"support@lolcheats.org voor support en juridische vragen.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | LoL Cheats",
					description: "Gebruiksvoorwaarden voor LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Gebruiksvoorwaarden voor lolcheats.org en League of Legends-licenties.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "E-mail support",
					ctaSecondary: "Privacy lezen",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptatie van voorwaarden",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Contact-e-mail, Zadeyo-orderreferenties en basisbeveiligingsgegevens van de site.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Vanguard-onderhoud.",
							],
						},
						{
							h2: "Risicowaarschuwing",
							paragraphs: [
								"LoL Cheats bundelt ESP wallhack, radar cheat en LoL Aimbot als undetected pakket voor League of Legends op Windows PC. Supportreacties, orderafhandeling en wettelijke naleving indien vereist.",
								"Cheats gebruiken kan in strijd zijn met de voorwaarden van het Riot Games — u neemt alle ban-risico's op u.",
							],
						},
						{
							h2: "Beleidswijzigingen",
							paragraphs: [
								"support@lolcheats.org voor support en juridische vragen.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty League of Legends",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat i Aimbot do League of Legends na PC Windows — konserwacja Vanguard w cenie.",
					subtitleShort: "ESP, radar i Aimbot dlLeague of Legends PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet LoL Cheats jest aktywny dlLeague of Legends na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Vanguard",
					antiCheatShort: "Vanguard wsparcie",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "League of Legends",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących LoL Cheats",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dlLeague of Legends — checkout przez Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty League of Legends dlLeague of Legends na PC. ESP wallhack, radar cheat i Aimbot z konserwacją Vanguard. Natychmiastowa dostawa cyfrowa.",
					h1: "LoL Cheats — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dlLeague of Legends na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Vanguard po każdym patchu.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "GaleriLoL Cheats — ESP, Aimbot i wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego LoL Cheats w 2026",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Idealny do czytania wrogich teamów w BR i ARAM game.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Player Boxes & Wallhack",
					description: "ESP League of Legends: boxy graczy, markery tusz i overlay wallhack. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. boxy graczy, markery tusz i overlay wallhack.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Soft Aim Controls",
					description: "Aimbot League of Legends: soft aim, FOV i profile Aimbot per gatunek. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. soft aim, FOV i profile Aimbot per gatunek.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, sterowanie radar. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Funkcje.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. ESP, soft aim, sterowanie radar.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: licencje $35 miesięcznie lub $150 lifetime. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Cennik.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. licencje $35 miesięcznie lub $150 lifetime.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: aktywacja Windows PC i konfiguracja pierwszego uruchomienia. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Instalacja.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. aktywacja Windows PC i konfiguracja pierwszego uruchomienia.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Vanguard Maintenance Log",
					description: "Aktualizacje: status patchy Vanguard i notatki rebuild. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Aktualizacje.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. status patchy Vanguard i notatki rebuild.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pytania o ESP, soft aim, dostawę i Vanguard. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. pytania o ESP, soft aim, dostawę i Vanguard.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: pomoc przy zamówieniu i kontakt wsparcia licencji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Wsparcie.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. pomoc przy zamówieniu i kontakt wsparcia licencji.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Vanguard Safe Status",
					description: "Cheaty undetected: undetected konserwacja po patchach Vanguard. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Cheaty undetected.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. undetected konserwacja po patchach Vanguard.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP dla graczy, tusz i dystansu. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. wallhack ESP dla graczy, tusz i dystansu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | 2D Threat Overlay",
					description: "Radar cheat: 2D radar wskazówki dla flank i rotacji. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar cheat",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. 2D radar wskazówki dla flank i rotacji.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: jak obsługiwane są aktualizacje Vanguard dlLeague of Legends cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. jak obsługiwane są aktualizacje Vanguard dlLeague of Legends cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty League of Legends 2026 | Buyer Guide",
					description: "Cheaty League of Legends 2026: checklista lol cheats 2026 przed checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty League of Legends 2026",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Cheaty League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Cheaty League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheaty League of Legends 2026",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. checklista lol cheats 2026 przed checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				cheats: {
					title: "Cheaty League of Legends | ESP Aimbot Guide",
					description: "Cheaty League of Legends: filary LoL Cheats dla ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Cheaty League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. filary LoL Cheats dla ESP i Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie LoL Cheats | Instant Access",
					description: "Pobieranie LoL Cheats: cyfrowe pobranie licencji po płatności. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie LoL Cheats",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Pobieranie LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Pobieranie LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie LoL Cheats",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. cyfrowe pobranie licencji po płatności.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu League of Legends | In-Game Toggles",
					description: "Mod menu League of Legends: przełączniki ESP i soft aim w kliencie. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Mod menu League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Mod menu League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. przełączniki ESP i soft aim w kliencie.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Smooth Aim Settings",
					description: "Soft aim League of Legends: płynne ustawienia soft aim dla Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. płynne ustawienia soft aim dla Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty League of Legends | Buyer Checklist",
					description: "Najlepsze cheaty League of Legends: co porównać przed zakupem lol cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Najlepsze cheaty League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Najlepsze cheaty League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. co porównać przed zakupem lol cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat aimbot League of Legends | Soft Aim Assist",
					description: "Cheat aimbot League of Legends: undetected Aimbot cheat assist dlLeague of Legends. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheat aimbot League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Cheat aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat aimbot League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. undetected Aimbot cheat assist dlLeague of Legends.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Boxes & Loot",
					description: "Cheat ESP League of Legends: boxy ESP cheat, piny tusz i dystans. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. boxy ESP cheat, piny tusz i dystans.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | What It Means",
					description: "Unlock all League of Legends: wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Kup LoL Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. wyszukiwania unlock-all vs prawdziwe narzędzia ESP i Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | LoL Cheats",
					description: "Polityka prywatności dlLoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Polityka prywatności dla lolcheats.org i licencji League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj warunki",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informacje, które zbieramy",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Dane płatności są przetwarzane przez checkout Zadeyo — nie przechowywane na lolcheats.org.",
							],
						},
						{
							h2: "Jak wykorzystujemy dane",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Twoje prawa",
							paragraphs: [
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | LoL Cheats",
					description: "Polityka zwrotów dlLoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Polityka zwrotów dla lolcheats.org i licencji League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dostawa cyfrowa",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "Zatwierdzenie zwrotu",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Sprawdź Updates po patchach Vanguard. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Jak złożyć wniosek",
							paragraphs: [
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | LoL Cheats",
					description: "Warunki użytkowania dlLoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Warunki użytkowania dla lolcheats.org i licencji League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "E-mail do supportu",
					ctaSecondary: "Przeczytaj politykę prywatności",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Akceptacja warunków",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. E-mail kontaktowy, referencje zamówień Zadeyo i podstawowe dane bezpieczeństwa witryny.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Vanguard.",
							],
						},
						{
							h2: "Ostrzeżenie o ryzyku",
							paragraphs: [
								"LoL Cheats łączy ESP wallhack, radar cheat i LoL Aimbot jako pakiet undetected dla League of Legends na PC Windows. Odpowiedzi wsparcia, rozwiązywanie zamówień i zgodność prawna w razie potrzeby.",
								"Korzystanie z cheatów może naruszać warunki zespołu League of Legends — bierzesz na siebie ryzyko bana.",
							],
						},
						{
							h2: "Zmiany polityki",
							paragraphs: [
								"support@lolcheats.org w sprawach wsparcia i prawnych.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы League of Legends",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat и Aimbot для League of Legends на Windows PC — обслуживание Vanguard включено.",
					subtitleShort: "ESP, radar и Aimbot для League of Legends PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет LoL Cheats активен для League of Legends на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Vanguard",
					antiCheatShort: "Vanguard поддержка",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей LoL Cheats",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для League of Legends — оплата через Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы League of Legends для League of Legends на PC. ESP wallhack, radar cheat и Aimbot с обслуживанием Vanguard. Мгновенная цифровая доставка.",
					h1: "LoL Cheats — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для League of Legends на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Vanguard после патчей.",
					imageAlt: "LoL ESP — теги игроков cheat",
					galleryTitle: "Галерея LoL Cheats — ESP, Aimbot и wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают LoL Cheats в 2026",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Идеально для чтения вражеских отрядов в BR и ARAM game.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Боксы игроков и wallhack",
					description: "ESP League of Legends: боксы игроков, маркеры туш и wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. боксы игроков, маркеры туш и wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Управление soft aim",
					description: "Aimbot League of Legends: soft aim, FOV и профили Aimbot по видам. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. soft aim, FOV и профили Aimbot по видам.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, управление radar. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Функции.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. ESP, soft aim, управление radar.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: лицензии $35 в месяц или $150 lifetime. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Цены.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. лицензии $35 в месяц или $150 lifetime.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: активация на Windows PC и настройка первого запуска. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Установка.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. активация на Windows PC и настройка первого запуска.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Vanguard",
					description: "Обновления: статус патчей Vanguard и заметки о rebuild. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Обновления.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. статус патчей Vanguard и заметки о rebuild.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: вопросы об ESP, soft aim, доставке и Vanguard. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. вопросы об ESP, soft aim, доставке и Vanguard.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: помощь с заказом и контакт поддержки лицензий. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Поддержка.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. помощь с заказом и контакт поддержки лицензий.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected обслуживание после патчей Vanguard. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Undetected читы.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. undetected обслуживание после патчей Vanguard.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | Видимость ESP",
					description: "League of Legends Wallhack: wallhack ESP для игроков, туш и дистанции. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. wallhack ESP для игроков, туш и дистанции.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | 2D радар угроз",
					description: "Radar cheat: 2D radar подсказки для флангов и ротаций. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar cheat",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. 2D radar подсказки для флангов и ротаций.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Обслуживание патчей",
					description: "Bypass Vanguard: как обрабатываются обновления Vanguard для League of Legends cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. как обрабатываются обновления Vanguard для League of Legends cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы League of Legends 2026 | Гайд покупателя",
					description: "Читы League of Legends 2026: чеклист lol cheats 2026 перед checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы League of Legends 2026",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Читы League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Читы League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Читы League of Legends 2026",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. чеклист lol cheats 2026 перед checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				cheats: {
					title: "Читы League of Legends | Гайд ESP и Aimbot",
					description: "Читы League of Legends: столп LoL Cheats для ESP и Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Читы League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Читы League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. столп LoL Cheats для ESP и Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать LoL Cheats | Мгновенный доступ",
					description: "Скачать LoL Cheats: цифровая загрузка лицензии после оплаты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать LoL Cheats",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Скачать LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Скачать LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать LoL Cheats",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. цифровая загрузка лицензии после оплаты.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню League of Legends | Игровые переключатели",
					description: "Мод-меню League of Legends: переключатели ESP и soft aim в клиенте. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Мод-меню League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Мод-меню League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. переключатели ESP и soft aim в клиенте.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Настройки soft aim",
					description: "Soft aim League of Legends: плавные настройки soft aim для Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. плавные настройки soft aim для Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы League of Legends | Чеклист покупателя",
					description: "Лучшие читы League of Legends: что сравнить перед покупкой lol cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Лучшие читы League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Лучшие читы League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. что сравнить перед покупкой lol cheats.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Хак aimbot League of Legends | Soft aim ассист",
					description: "Хак aimbot League of Legends: undetected Aimbot cheat assist для League of Legends. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Хак aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Хак aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Хак aimbot League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. undetected Aimbot cheat assist для League of Legends.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Хак ESP League of Legends | Боксы и лут",
					description: "Хак ESP League of Legends: ESP cheat боксы, pins туш и дистанция. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Хак ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Хак ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Хак ESP League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. ESP cheat боксы, pins туш и дистанция.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | Что это значит",
					description: "Unlock all League of Legends: поиски unlock-all vs настоящие ESP и Aimbot инструменты. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купить LoL Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. поиски unlock-all vs настоящие ESP и Aimbot инструменты.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
								"support@lolcheats.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | LoL Cheats",
					description: "Политика конфиденциальности для LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Политика конфиденциальности для lolcheats.org и лицензий League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать условия",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Информация, которую мы собираем",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Платёжные данные обрабатываются через checkout Zadeyo — не хранятся на lolcheats.org.",
							],
						},
						{
							h2: "Как мы используем данные",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Ваши права",
							paragraphs: [
								"support@lolcheats.org для поддержки и юридических вопросов.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | LoL Cheats",
					description: "Политика возврата для LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Политика возврата для lolcheats.org и лицензий League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифровая доставка",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "Одобрение возврата",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Проверяйте Updates после патчей Vanguard. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Как запросить",
							paragraphs: [
								"support@lolcheats.org для поддержки и юридических вопросов.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | LoL Cheats",
					description: "Условия использования для LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Условия использования для lolcheats.org и лицензий League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Написать в поддержку",
					ctaSecondary: "Читать политику конфиденциальности",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Принятие условий",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Контактный email, ссылки на заказы Zadeyo и базовые данные безопасности сайта.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Vanguard.",
							],
						},
						{
							h2: "Предупреждение о рисках",
							paragraphs: [
								"LoL Cheats объединяет ESP wallhack, radar cheat и LoL Aimbot в undetected пакете для League of Legends на Windows PC. Ответы поддержки, решение заказов и соблюдение законодательства при необходимости.",
								"Использование читов может нарушать условия команды League of Legends — вы принимаете на себя риск бана.",
							],
						},
						{
							h2: "Изменения политики",
							paragraphs: [
								"support@lolcheats.org для поддержки и юридических вопросов.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected League of Legends hileleri",
					accentShort: "LoL Cheats",
					subtitle: "League of Legends Windows PC için ESP wallhack, radar cheat ve Aimbot — Vanguard bakımı dahil.",
					subtitleShort: "League of Legends PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "LoL Cheats paketi League of Legends Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Vanguard bakım desteği",
					antiCheatShort: "Vanguard destek",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "LoL Cheats alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "League of Legends için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack ve Aimbot",
					description: "League of Legends için undetected hileler. ESP wallhack, radar cheat ve Aimbot — Vanguard bakımı. Anında dijital teslimat.",
					h1: "LoL Cheats — Undetected ESP, Wallhack ve Aimbot",
					intro: "League of Legends Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Vanguard bakımı dahil.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "LoL Cheats galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden LoL Cheats",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. BR ve ARAM game'da düşman team okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: oyuncu kutuları, leş işaretleri ve wallhack overlay'leri. anında dijital teslimat. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. oyuncu kutuları, leş işaretleri ve wallhack overlay'leri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim, FOV ve türe özel Aimbot profilleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. soft aim, FOV ve türe özel Aimbot profilleri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar kontrolleri. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Özellikler.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. ESP, soft aim, radar kontrolleri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: aylık $35 veya lifetime $150 lisanslar. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. aylık $35 veya lifetime $150 lisanslar.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC aktivasyonu ve ilk açılış kurulumu. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Kurulum.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Windows PC aktivasyonu ve ilk açılış kurulumu.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Vanguard Maintenance Log",
					description: "Güncellemeler: Vanguard yama durumu ve rebuild notları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Vanguard yama durumu ve rebuild notları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, teslimat ve Vanguard soruları. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. SSS.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. ESP, soft aim, teslimat ve Vanguard soruları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: sipariş yardımı ve lisans destek iletişimi. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Destek.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. sipariş yardımı ve lisans destek iletişimi.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Vanguard Safe Status",
					description: "Undetected hileler: Vanguard yamalarından sonra undetected bakım. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Vanguard yamalarından sonra undetected bakım.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: oyuncular, leşler ve mesafe için wallhack ESP. anında dijital teslimat. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. oyuncular, leşler ve mesafe için wallhack ESP.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | 2D Threat Overlay",
					description: "Radar cheat: flank ve rotasyonlar için 2D radar ipuçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar cheat",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. flank ve rotasyonlar için 2D radar ipuçları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard bypass | Patch Maintenance",
					description: "Vanguard bypass: League of Legends cheats için Vanguard güncellemelerinin nasıl yönetildiği. anında dijital teslimat. undetected — Windows PC.",
					h1: "Vanguard bypass",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Vanguard bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard bypass",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends cheats için Vanguard güncellemelerinin nasıl yönetildiği.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "League of Legends Hileleri 2026 | Buyer Guide",
					description: "League of Legends Hileleri 2026: checkout öncesi 2026 lol cheats kontrol listesi. anında dijital teslimat. undetected — Windows PC.",
					h1: "League of Legends Hileleri 2026",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends Hileleri 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "League of Legends Hileleri 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "League of Legends Hileleri 2026",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. checkout öncesi 2026 lol cheats kontrol listesi.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				cheats: {
					title: "League of Legends Hileleri | ESP Aimbot Guide",
					description: "League of Legends Hileleri: ESP ve Aimbot için LoL Cheats sütunu. anında dijital teslimat. undetected — Windows PC.",
					h1: "League of Legends Hileleri",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends Hileleri.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "League of Legends Hileleri",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Hileleri",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. ESP ve Aimbot için LoL Cheats sütunu.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"cheat-download": {
					title: "League of Legends Hile İndir | Instant Access",
					description: "League of Legends Hile İndir: ödeme sonrası dijital lisans indirme. anında dijital teslimat. undetected — Windows PC.",
					h1: "League of Legends Hile İndir",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends Hile İndir.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "League of Legends Hile İndir",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "League of Legends Hile İndir",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. ödeme sonrası dijital lisans indirme.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends Mod Menü | In-Game Toggles",
					description: "League of Legends Mod Menü: istemci içi ESP ve soft aim toggle'ları. anında dijital teslimat. undetected — Windows PC.",
					h1: "League of Legends Mod Menü",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends Mod Menü.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends Mod Menü",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Mod Menü",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. istemci içi ESP ve soft aim toggle'ları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: Windows PC için akıcı soft aim ayarları. anında dijital teslimat. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Windows PC için akıcı soft aim ayarları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi League of Legends Hileleri | Buyer Checklist",
					description: "En İyi League of Legends Hileleri: lol cheats satın almadan önce ne karşılaştırılmalı. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi League of Legends Hileleri",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. En İyi League of Legends Hileleri.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "En İyi League of Legends Hileleri",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi League of Legends Hileleri",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. lol cheats satın almadan önce ne karşılaştırılmalı.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "LoL Aimbot Hilesi | Soft Aim Assist",
					description: "LoL Aimbot Hilesi: League of Legends için undetected Aimbot cheat assist. anında dijital teslimat. undetected — Windows PC.",
					h1: "LoL Aimbot Hilesi",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. LoL Aimbot Hilesi.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "LoL Aimbot Hilesi",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "LoL Aimbot Hilesi",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends için undetected Aimbot cheat assist.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP Hilesi | Boxes & Loot",
					description: "LoL ESP Hilesi: ESP cheat kutuları, leş pinleri ve mesafe. anında dijital teslimat. undetected — Windows PC.",
					h1: "LoL ESP Hilesi",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. LoL ESP Hilesi.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP Hilesi",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP Hilesi",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. ESP cheat kutuları, leş pinleri ve mesafe.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: unlock-all aramaları vs gerçek ESP ve Aimbot araçları. anında dijital teslimat. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. unlock-all aramaları vs gerçek ESP ve Aimbot araçları.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
								"Destek ve yasal sorular için support@lolcheats.org.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | LoL Cheats",
					description: "Gizlilik politikası LoL Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Gizlilik politikası lolcheats.org ve League of Legends lisansları için.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Şartları oku",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Topladığımız bilgiler",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Ödeme bilgileri Zadeyo checkout ile işlenir — lolcheats.org'da saklanmaz.",
							],
						},
						{
							h2: "Verileri nasıl kullanıyoruz",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Haklarınız",
							paragraphs: [
								"Destek ve yasal sorular için support@lolcheats.org.",
								"E-posta: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | LoL Cheats",
					description: "İade politikası LoL Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "İade politikası",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. İade politikası lolcheats.org ve League of Legends lisansları için.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Dijital teslimat",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "İade onayı",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Vanguard yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Nasıl talep edilir",
							paragraphs: [
								"Destek ve yasal sorular için support@lolcheats.org.",
								"E-posta: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | LoL Cheats",
					description: "Kullanım şartları LoL Cheats — ESP wallhack, Aimbot için, Windows PC.",
					h1: "Kullanım şartları",
					intro: "LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Kullanım şartları lolcheats.org ve League of Legends lisansları için.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Destek e-postası",
					ctaSecondary: "Gizliliği oku",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Şartların kabulü",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. İletişim e-postası, Zadeyo sipariş referansları ve temel site güvenlik verileri.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Vanguard bakımı içerir.",
							],
						},
						{
							h2: "Risk uyarısı",
							paragraphs: [
								"LoL Cheats, League of Legends için Windows PC üzerinde ESP wallhack, radar cheat ve LoL Aimbot undetected paket sunar. Destek yanıtları, sipariş çözümü ve gerektiğinde yasal uyum.",
								"Hile kullanmak League of Legends ekibi şartlarını ihlal edebilir — tüm ban riskini üstlenirsiniz.",
							],
						},
						{
							h2: "Politika değişiklikleri",
							paragraphs: [
								"Destek ve yasal sorular için support@lolcheats.org.",
								"E-posta: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش League of Legends غير مكتشف",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ League of Legends على Windows PC — صيانة Vanguard مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ League of Legends PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة LoL Cheats نشطة لـ League of Legends على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Vanguard",
					antiCheatShort: "دعم Vanguard",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري LoL Cheats",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ League of Legends — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP وWallhack وAimbot",
					description: "غش League of Legends undetected لـ League of Legends على PC. ESP wallhack ورadar hack وAimbot مع صيانة Vanguard. تسليم رقمي فوري.",
					h1: "LoL Cheats — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ League of Legends على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Vanguard.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "معرض LoL Cheats — ESP وAimbot وwallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا LoL Cheats في 2026",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. مثالي لقراءة فرق العدو في BR وARAM game.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Player Boxes & Wallhack",
					description: "ESP League of Legends: صناديق اللاعبين وعلامات الجيفة وoverlays wallhack. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. صناديق اللاعبين وعلامات الجيفة وoverlays wallhack.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Soft Aim Controls",
					description: "Aimbot League of Legends: soft aim وFOV وملفات Aimbot لكل نوع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. soft aim وFOV وملفات Aimbot لكل نوع.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP وsoft aim وضوابط radar. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. الميزات.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. ESP وsoft aim وضوابط radar.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: تراخيص $35 شهرياً أو $150 lifetime. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. الأسعار.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. تراخيص $35 شهرياً أو $150 lifetime.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: تفعيل Windows PC وإعداد أول تشغيل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. التثبيت.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. تفعيل Windows PC وإعداد أول تشغيل.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Vanguard Maintenance Log",
					description: "التحديثات: حالة patch Vanguard وملاحظات rebuild. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. التحديثات.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. حالة patch Vanguard وملاحظات rebuild.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: أسئلة ESP وsoft aim والتسليم وVanguard. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. الأسئلة.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. أسئلة ESP وsoft aim والتسليم وVanguard.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: مساعدة الطلبات واتصال دعم التراخيص. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. الدعم.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. مساعدة الطلبات واتصال دعم التراخيص.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Vanguard Safe Status",
					description: "غش undetected: صيانة undetected بعد patch Vanguard. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. غش undetected.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. صيانة undetected بعد patch Vanguard.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP للاعبين والجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. wallhack ESP للاعبين والجيف والمسافة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | 2D Threat Overlay",
					description: "Radar cheat: إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar cheat",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. إشارات radar ثنائية الأبعاد للهجمات الجانبية والتدوير.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: كيف تُدار تحديثات Vanguard لـ League of Legends cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. كيف تُدار تحديثات Vanguard لـ League of Legends cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش League of Legends 2026 | Buyer Guide",
					description: "غش League of Legends 2026: قائمة lol cheats 2026 قبل checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش League of Legends 2026",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. غش League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "غش League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "غش League of Legends 2026",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. قائمة lol cheats 2026 قبل checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				cheats: {
					title: "غش League of Legends | ESP Aimbot Guide",
					description: "غش League of Legends: ركيزة LoL Cheats لـ ESP وAimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. غش League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "غش League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. ركيزة LoL Cheats لـ ESP وAimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل LoL Cheats | Instant Access",
					description: "تحميل LoL Cheats: تنزيل ترخيص رقمي بعد الدفع. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل LoL Cheats",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. تحميل LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "تحميل LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل LoL Cheats",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. تنزيل ترخيص رقمي بعد الدفع.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود League of Legends | In-Game Toggles",
					description: "قائمة مود League of Legends: مفاتيح ESP وsoft aim داخل العميل. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. قائمة مود League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "قائمة مود League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. مفاتيح ESP وsoft aim داخل العميل.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Smooth Aim Settings",
					description: "Soft aim League of Legends: إعدادات soft aim سلسة لـ Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. إعدادات soft aim سلسة لـ Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش League of Legends | Buyer Checklist",
					description: "أفضل غش League of Legends: ما يجب مقارنته قبل شراء lol cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. أفضل غش League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "أفضل غش League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. ما يجب مقارنته قبل شراء lol cheats.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "هاك Aimbot League of Legends | Soft Aim Assist",
					description: "هاك Aimbot League of Legends: مساعدة cheat Aimbot undetected لـ League of Legends. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. هاك Aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "هاك Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. مساعدة cheat Aimbot undetected لـ League of Legends.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "هاك ESP League of Legends | Boxes & Loot",
					description: "هاك ESP League of Legends: صناديق ESP cheat وpins الجيف والمسافة. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. هاك ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "هاك ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "هاك ESP League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. صناديق ESP cheat وpins الجيف والمسافة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | What It Means",
					description: "Unlock all League of Legends: بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "اشترِ LoL Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. بحث unlock-all مقابل أدوات ESP وAimbot الحقيقية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
								"support@lolcheats.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | LoL Cheats",
					description: "سياسة الخصوصية لـ LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. سياسة الخصوصية لـ lolcheats.org وتراخيص League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تُعالَج تفاصيل الدفع عبر checkout Zadeyo — ولا تُخزَّن على lolcheats.org.",
							],
						},
						{
							h2: "كيف نستخدم البيانات",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@lolcheats.org للدعم والطلبات القانونية.",
								"البريد: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | LoL Cheats",
					description: "سياسة الاسترداد لـ LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. سياسة الاسترداد لـ lolcheats.org وتراخيص League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"راجع Updates بعد تص patches Vanguard. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@lolcheats.org للدعم والطلبات القانونية.",
								"البريد: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | LoL Cheats",
					description: "شروط الاستخدام لـ LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. شروط الاستخدام لـ lolcheats.org وتراخيص League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الخصوصية",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. بريد الاتصال ومراجع طلبات Zadeyo وبيانات أمان الموقع الأساسية.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Vanguard.",
							],
						},
						{
							h2: "إخلاء المسؤولية عن المخاطر",
							paragraphs: [
								"LoL Cheats يجمع ESP wallhack وradar cheat وLoL Aimbot غير مكتشف لـ League of Legends على Windows PC. ردود الدعم وحل الطلبات والامتثال القانوني عند الحاجة.",
								"استخدام الغش قد ينتهك شروط فريق League of Legends — أنت تتحمل كل مخاطر الحظر.",
							],
						},
						{
							h2: "تغييرات السياسة",
							paragraphs: [
								"support@lolcheats.org للدعم والطلبات القانونية.",
								"البريد: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected League of Legendsチート",
					accentShort: "LoL Cheats",
					subtitle: "League of Legends Windows PC向けESP wallhack、radar cheat、Aimbot — Vanguardメンテナンス付き。",
					subtitleShort: "League of Legends PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "LoL CheatsパッケージはLeague of Legends Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguardメンテナンス対応",
					antiCheatShort: "Vanguard対応",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "LoL Cheats購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "League of Legends向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP・Wallhack・Aimbot",
					description: "League of Legends向けundetectedチート。ESP wallhack、radar cheat、Aimbot、Vanguardメンテナンス。即時デジタル配信。",
					h1: "LoL Cheats — Undetected ESP・Wallhack・Aimbot",
					intro: "League of Legends Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Vanguardメンテナンス付き。",
					imageAlt: "lol cheats hero ESP aimbot wallhack",
					galleryTitle: "LoL Cheatsギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にLoL Cheatsを選ぶ理由",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。BRとARAM gameで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: プレイヤーボックス、死体マーカー、wallhackオーバーレイ. 即時デジタル配信. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。プレイヤーボックス、死体マーカー、wallhackオーバーレイ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim、FOV、種別ごとのAimbotプロファイル. 即時デジタル配信. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。soft aim、FOV、種別ごとのAimbotプロファイル.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP、soft aim、radarコントロール. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。機能.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。ESP、soft aim、radarコントロール.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: 月額$35またはlifetime $150ライセンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。料金.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。月額$35またはlifetime $150ライセンス.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PCアクティベーションと初回起動セットアップ. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。Windows PCアクティベーションと初回起動セットアップ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | Vanguard Maintenance Log",
					description: "更新: Vanguardパッチ状況とrebuildメモ. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。更新.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "更新",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。Vanguardパッチ状況とrebuildメモ.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP、soft aim、配信、Vanguardに関する質問. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。ESP、soft aim、配信、Vanguardに関する質問.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: 注文ヘルプとライセンスサポート連絡先. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。サポート.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。注文ヘルプとライセンスサポート連絡先.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Vanguard Safe Status",
					description: "Undetectedチート: Vanguardパッチ後のundetectedメンテナンス. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。Vanguardパッチ後のundetectedメンテナンス.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: プレイヤー、死体、距離向けwallhack ESP. 即時デジタル配信. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。プレイヤー、死体、距離向けwallhack ESP.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Threat Overlay",
					description: "Radar Cheat: 側面攻撃とローテーション向け2D radarキュー. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。側面攻撃とローテーション向け2D radarキュー.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: League of Legends cheats向けVanguard更新の対応方法. 即時デジタル配信. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。League of Legends cheats向けVanguard更新の対応方法.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "LoL Cheats 2026 | Buyer Guide",
					description: "LoL Cheats 2026: checkout前の2026 lol cheatsチェックリスト. 即時デジタル配信. undetected — Windows PC.",
					h1: "LoL Cheats 2026",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。LoL Cheats 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "LoL Cheats 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL Cheats 2026",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。checkout前の2026 lol cheatsチェックリスト.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				cheats: {
					title: "LoL Cheats | ESP Aimbot Guide",
					description: "LoL Cheats: ESPとAimbotのLoL Cheats柱. 即時デジタル配信. undetected — Windows PC.",
					h1: "LoL Cheats",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。LoL Cheats.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "LoL Cheats",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。ESPとAimbotのLoL Cheats柱.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "League of Legends Cheat Download | Instant Access",
					description: "League of Legends Cheat Download: 支払い後のデジタルライセンスダウンロード. 即時デジタル配信. undetected — Windows PC.",
					h1: "League of Legends Cheat Download",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。League of Legends Cheat Download.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "League of Legends Cheat Download",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "League of Legends Cheat Download",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。支払い後のデジタルライセンスダウンロード.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends Mod Menu | In-Game Toggles",
					description: "League of Legends Mod Menu: クライアント内ESPとsoft aimトグル. 即時デジタル配信. undetected — Windows PC.",
					h1: "League of Legends Mod Menu",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。League of Legends Mod Menu.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends Mod Menu",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Mod Menu",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。クライアント内ESPとsoft aimトグル.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: Windows PC向けスムーズなsoft aim設定. 即時デジタル配信. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。Windows PC向けスムーズなsoft aim設定.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強League of Legendsチート | Buyer Checklist",
					description: "最強League of Legendsチート: lol cheats購入前に比較すべき点. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強League of Legendsチート",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。最強League of Legendsチート.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "最強League of Legendsチート",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強League of Legendsチート",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。lol cheats購入前に比較すべき点.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "LoL Aimbot Cheat | Soft Aim Assist",
					description: "LoL Aimbot Cheat: League of Legends向けundetected Aimbot cheat assist. 即時デジタル配信. undetected — Windows PC.",
					h1: "LoL Aimbot Cheat",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。LoL Aimbot Cheat.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "LoL Aimbot Cheat",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "LoL Aimbot Cheat",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。League of Legends向けundetected Aimbot cheat assist.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP Cheat | Boxes & Loot",
					description: "LoL ESP Cheat: ESP cheatボックス、死体pin、距離. 即時デジタル配信. undetected — Windows PC.",
					h1: "LoL ESP Cheat",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。LoL ESP Cheat.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP Cheat",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP Cheat",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。ESP cheatボックス、死体pin、距離.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: unlock-all検索 vs 本物のESPとAimbotツール. 即時デジタル配信. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。unlock-all検索 vs 本物のESPとAimbotツール.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
								"サポート・法務: support@lolcheats.org",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | LoL Cheats",
					description: "プライバシーポリシー LoL Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。プライバシーポリシー lolcheats.orgおよびLeague of Legendsライセンス向け。",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約を読む",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"支払い情報はZadeyo checkoutで処理され、lolcheats.orgには保存されません。",
							],
						},
						{
							h2: "データの利用方法",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@lolcheats.org",
								"メール: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | LoL Cheats",
					description: "返金ポリシー LoL Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "返金ポリシー",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。返金ポリシー lolcheats.orgおよびLeague of Legendsライセンス向け。",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"Vanguardパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@lolcheats.org",
								"メール: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | LoL Cheats",
					description: "利用規約 LoL Cheats — ESP wallhack、Aimbot向け, Windows PC.",
					h1: "利用規約",
					intro: "LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。利用規約 lolcheats.orgおよびLeague of Legendsライセンス向け。",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "プライバシーを読む",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。連絡メール、Zadeyo注文参照、基本的なサイトセキュリティデータ。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにVanguardメンテナンス含む。",
							],
						},
						{
							h2: "リスク免責",
							paragraphs: [
								"LoL CheatsはLeague of Legends向けWindows PC用ESP wallhack、radar cheat、LoL Aimbotのundetectedパッケージです。サポート対応、注文処理、必要時の法的遵守。",
								"チートの使用はLeague of Legendsチームの利用規約に違反する可能性があり、BANリスクはすべて自己負担です。",
							],
						},
						{
							h2: "ポリシー変更",
							paragraphs: [
								"サポート・法務: support@lolcheats.org",
								"メール: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected League of Legends 치트",
					accentShort: "LoL Cheats",
					subtitle: "League of Legends Windows PC용 ESP wallhack, radar cheat, Aimbot — Vanguard 유지보수 포함.",
					subtitleShort: "League of Legends PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "LoL Cheats 패키지는 League of Legends Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard 유지보수 지원",
					antiCheatShort: "Vanguard 지원",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "LoL Cheats 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "League of Legends용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack, Aimbot",
					description: "League of Legends undetected 치트. ESP wallhack, radar cheat, Aimbot, Vanguard 유지보수. 즉시 디지털 배송.",
					h1: "LoL Cheats — Undetected ESP, Wallhack, Aimbot",
					intro: "League of Legends Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Vanguard 유지보수 포함.",
					imageAlt: "lol cheats hero ESP aimbot wallhack",
					galleryTitle: "LoL Cheats 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 LoL Cheats를 선택하는 이유",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. BR 및 ARAM game에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: 플레이어 박스, 시체 마커, wallhack 오버레이. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 플레이어 박스, 시체 마커, wallhack 오버레이.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim, FOV, 종별 Aimbot 프로필. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. soft aim, FOV, 종별 Aimbot 프로필.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar 컨트롤. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 기능.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. ESP, soft aim, radar 컨트롤.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: 월 $35 또는 lifetime $150 라이선스. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 가격.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 월 $35 또는 lifetime $150 라이선스.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC 활성화 및 첫 실행 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 설치.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. Windows PC 활성화 및 첫 실행 설정.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Vanguard Maintenance Log",
					description: "업데이트: Vanguard 패치 상태 및 rebuild 메모. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. Vanguard 패치 상태 및 rebuild 메모.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, 배송, Vanguard 질문. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. ESP, soft aim, 배송, Vanguard 질문.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: 주문 도움 및 라이선스 지원 연락처. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 지원.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 주문 도움 및 라이선스 지원 연락처.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Vanguard Safe Status",
					description: "Undetected 치트: Vanguard 패치 후 undetected 유지보수. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. Vanguard 패치 후 undetected 유지보수.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: 플레이어, 시체, 거리용 wallhack ESP. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 플레이어, 시체, 거리용 wallhack ESP.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Threat Overlay",
					description: "Radar Cheat: 측면 공격과 로테이션용 2D radar 신호. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 측면 공격과 로테이션용 2D radar 신호.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: League of Legends cheats용 Vanguard 업데이트 처리 방법. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. League of Legends cheats용 Vanguard 업데이트 처리 방법.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "LoL Cheats 2026 | Buyer Guide",
					description: "LoL Cheats 2026: checkout 전 2026 lol cheats 체크리스트. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "LoL Cheats 2026",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. LoL Cheats 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "LoL Cheats 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL Cheats 2026",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. checkout 전 2026 lol cheats 체크리스트.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				cheats: {
					title: "LoL Cheats | ESP Aimbot Guide",
					description: "LoL Cheats: ESP와 Aimbot을 위한 LoL Cheats 기둥. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "LoL Cheats",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. LoL Cheats.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "LoL Cheats",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. ESP와 Aimbot을 위한 LoL Cheats 기둥.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "League of Legends Cheat Download | Instant Access",
					description: "League of Legends Cheat Download: 결제 후 디지털 라이선스 다운로드. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "League of Legends Cheat Download",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. League of Legends Cheat Download.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "League of Legends Cheat Download",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "League of Legends Cheat Download",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 결제 후 디지털 라이선스 다운로드.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends 모드 메뉴 | In-Game Toggles",
					description: "League of Legends 모드 메뉴: 클라이언트 내 ESP 및 soft aim 토글. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "League of Legends 모드 메뉴",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. League of Legends 모드 메뉴.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends 모드 메뉴",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends 모드 메뉴",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 클라이언트 내 ESP 및 soft aim 토글.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: Windows PC용 부드러운 soft aim 설정. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. Windows PC용 부드러운 soft aim 설정.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 League of Legends 치트 | Buyer Checklist",
					description: "최고의 League of Legends 치트: lol cheats 구매 전 비교할 항목. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 League of Legends 치트",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 최고의 League of Legends 치트.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "최고의 League of Legends 치트",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 League of Legends 치트",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. lol cheats 구매 전 비교할 항목.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "League of Legends 에임봇 핵 | Soft Aim Assist",
					description: "League of Legends 에임봇 핵: League of Legends용 undetected Aimbot cheat assist. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "League of Legends 에임봇 핵",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. League of Legends 에임봇 핵.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends 에임봇 핵",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends 에임봇 핵",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. League of Legends용 undetected Aimbot cheat assist.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP 핵 | Boxes & Loot",
					description: "LoL ESP 핵: ESP cheat 박스, 시체 pin, 거리. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "LoL ESP 핵",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. LoL ESP 핵.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP 핵",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP 핵",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. ESP cheat 박스, 시체 pin, 거리.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: unlock-all 검색 vs 실제 ESP 및 Aimbot 도구. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. unlock-all 검색 vs 실제 ESP 및 Aimbot 도구.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
								"지원 및 법무: support@lolcheats.org",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | LoL Cheats",
					description: "개인정보 처리방침 LoL Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 개인정보 처리방침 lolcheats.org 및 League of Legends 라이선스용.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "이용 약관 읽기",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "수집하는 정보",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"결제 정보는 Zadeyo checkout에서 처리되며 lolcheats.org에 저장되지 않습니다.",
							],
						},
						{
							h2: "데이터 사용 방법",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "귀하의 권리",
							paragraphs: [
								"지원 및 법무: support@lolcheats.org",
								"이메일: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | LoL Cheats",
					description: "환불 정책 LoL Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "환불 정책",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 환불 정책 lolcheats.org 및 League of Legends 라이선스용.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "디지털 배송",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "환불 승인",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"Vanguard 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "신청 방법",
							paragraphs: [
								"지원 및 법무: support@lolcheats.org",
								"이메일: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | LoL Cheats",
					description: "이용 약관 LoL Cheats — ESP wallhack, Aimbot용, Windows PC.",
					h1: "이용 약관",
					intro: "LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 이용 약관 lolcheats.org 및 League of Legends 라이선스용.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "개인정보 읽기",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "약관 동의",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 연락 이메일, Zadeyo 주문 참조 및 기본 사이트 보안 데이터.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Vanguard 유지보수 포함.",
							],
						},
						{
							h2: "위험 고지",
							paragraphs: [
								"LoL Cheats는 League of Legends Windows PC용 ESP wallhack, radar cheat, LoL Aimbot undetected 패키지입니다. 지원 응답, 주문 해결 및 필요 시 법적 준수.",
								"치트 사용은 League of Legends 팀 약관 위반일 수 있으며 모든 밴 위험은 본인 부담입니다.",
							],
						},
						{
							h2: "정책 변경",
							paragraphs: [
								"지원 및 법무: support@lolcheats.org",
								"이메일: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected League of Legends作弊",
					accentShort: "LoL Cheats",
					subtitle: "适用于League of Legends Windows PC的ESP wallhack、radar cheat和Aimbot — 含Vanguard维护。",
					subtitleShort: "League of Legends PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "LoL Cheats套餐已在League of Legends Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Vanguard维护",
					antiCheatShort: "Vanguard支持",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "LoL Cheats 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "League of Legends undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP、Wallhack、Aimbot",
					description: "League of Legends undetected作弊。ESP wallhack、radar cheat、Aimbot、Vanguard维护。即时数字交付。",
					h1: "LoL Cheats — Undetected ESP、Wallhack、Aimbot",
					intro: "League of Legends Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Vanguard维护。",
					imageAlt: "lol cheats hero ESP aimbot wallhack",
					galleryTitle: "LoL Cheats图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择LoL Cheats的原因",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。适合在BR和ARAM game中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。一个许可证而非多个工具。",
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: 玩家方框、尸体标记和wallhack overlay. 即时数字交付. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。玩家方框、尸体标记和wallhack overlay.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim、FOV和按物种的Aimbot配置. 即时数字交付. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。soft aim、FOV和按物种的Aimbot配置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP、soft aim、radar控制. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。功能.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。ESP、soft aim、radar控制.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: 月付$35或lifetime $150许可证. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。价格.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。月付$35或lifetime $150许可证.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC激活和首次启动设置. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。安装.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。Windows PC激活和首次启动设置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				updates: {
					title: "更新 | Vanguard Maintenance Log",
					description: "更新: Vanguard补丁状态和rebuild说明. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。更新.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "更新",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。Vanguard补丁状态和rebuild说明.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP、soft aim、交付和Vanguard问题. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。常见问题.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。ESP、soft aim、交付和Vanguard问题.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: 订单帮助和许可证支持联系方式. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。支持.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。订单帮助和许可证支持联系方式.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Vanguard Safe Status",
					description: "Undetected作弊: Vanguard补丁后的undetected维护. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。Undetected作弊.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。Vanguard补丁后的undetected维护.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: 玩家、尸体和距离的wallhack ESP. 即时数字交付. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。玩家、尸体和距离的wallhack ESP.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Threat Overlay",
					description: "Radar Cheat: 侧翼和轮换的2D radar提示. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。侧翼和轮换的2D radar提示.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: League of Legends cheats的Vanguard更新处理方式. 即时数字交付. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends cheats的Vanguard更新处理方式.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "League of Legends作弊 2026 | Buyer Guide",
					description: "League of Legends作弊 2026: checkout前的2026 lol cheats清单. 即时数字交付. undetected — Windows PC.",
					h1: "League of Legends作弊 2026",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends作弊 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "League of Legends作弊 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "League of Legends作弊 2026",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。checkout前的2026 lol cheats清单.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				cheats: {
					title: "League of Legends作弊 | ESP Aimbot Guide",
					description: "League of Legends作弊: ESP和Aimbot的LoL Cheats支柱. 即时数字交付. undetected — Windows PC.",
					h1: "League of Legends作弊",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends作弊.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "League of Legends作弊",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends作弊",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。ESP和Aimbot的LoL Cheats支柱.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "League of Legends作弊下载 | Instant Access",
					description: "League of Legends作弊下载: 付款后的数字许可证下载. 即时数字交付. undetected — Windows PC.",
					h1: "League of Legends作弊下载",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends作弊下载.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "League of Legends作弊下载",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "League of Legends作弊下载",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。付款后的数字许可证下载.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends修改菜单 | In-Game Toggles",
					description: "League of Legends修改菜单: 客户端内ESP和soft aim开关. 即时数字交付. undetected — Windows PC.",
					h1: "League of Legends修改菜单",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends修改菜单.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends修改菜单",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends修改菜单",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。客户端内ESP和soft aim开关.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: Windows PC的流畅soft aim设置. 即时数字交付. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。Windows PC的流畅soft aim设置.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳League of Legends作弊 | Buyer Checklist",
					description: "最佳League of Legends作弊: 购买lol cheats前应比较的内容. 即时数字交付. undetected — Windows PC.",
					h1: "最佳League of Legends作弊",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。最佳League of Legends作弊.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "最佳League of Legends作弊",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳League of Legends作弊",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。购买lol cheats前应比较的内容.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "League of Legends自瞄外挂 | Soft Aim Assist",
					description: "League of Legends自瞄外挂: League of Legends的undetected Aimbot cheat assist. 即时数字交付. undetected — Windows PC.",
					h1: "League of Legends自瞄外挂",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends自瞄外挂.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends自瞄外挂",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends自瞄外挂",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends的undetected Aimbot cheat assist.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP外挂 | Boxes & Loot",
					description: "LoL ESP外挂: ESP cheat方框、尸体pin和距离. 即时数字交付. undetected — Windows PC.",
					h1: "LoL ESP外挂",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。LoL ESP外挂.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP外挂",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP外挂",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。ESP cheat方框、尸体pin和距离.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: unlock-all搜索 vs 真正的ESP和Aimbot工具. 即时数字交付. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "购买 LoL Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。unlock-all搜索 vs 真正的ESP和Aimbot工具.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
								"支持与法务：support@lolcheats.org",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | LoL Cheats",
					description: "隐私政策 LoL Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。隐私政策 适用于 lolcheats.org 和 League of Legends 许可证。",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读使用条款",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "我们收集的信息",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"支付详情由 Zadeyo checkout 处理 — 不存储在 lolcheats.org。",
							],
						},
						{
							h2: "数据使用方式",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "您的权利",
							paragraphs: [
								"支持与法务：support@lolcheats.org",
								"邮箱: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | LoL Cheats",
					description: "退款政策 LoL Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。退款政策 适用于 lolcheats.org 和 League of Legends 许可证。",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "数字交付",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "退款批准",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"Vanguard补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "如何申请",
							paragraphs: [
								"支持与法务：support@lolcheats.org",
								"邮箱: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | LoL Cheats",
					description: "使用条款 LoL Cheats — ESP wallhack、Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。使用条款 适用于 lolcheats.org 和 League of Legends 许可证。",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "阅读隐私政策",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "接受条款",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。联系邮箱、Zadeyo 订单参考及基本网站安全数据。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Vanguard维护。",
							],
						},
						{
							h2: "风险免责声明",
							paragraphs: [
								"LoL Cheats为League of LegendsWindows PC提供ESP wallhack、radar cheat和LoL Aimbotundetected套餐。支持回复、订单处理及必要时的法律合规。",
								"使用作弊可能违反 League of Legends 团队条款 — 您承担所有封禁风险。",
							],
						},
						{
							h2: "政策变更",
							paragraphs: [
								"支持与法务：support@lolcheats.org",
								"邮箱: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected lol cheats",
					accentShort: "LoL Cheats",
					subtitle: "League of Legends Windows PC के लिए ESP wallhack, radar cheat और Aimbot — Vanguard maintenance शामिल।",
					subtitleShort: "League of Legends PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "LoL Cheats पैकेज League of Legends Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Vanguard maintenance समर्थित",
					antiCheatShort: "Vanguard समर्थित",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "LoL Cheats खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "League of Legends के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack और Aimbot",
					description: "League of Legends undetected cheats. ESP wallhack, radar cheat, Aimbot, Vanguard maintenance. Instant digital delivery.",
					h1: "LoL Cheats — Undetected ESP, Wallhack और Aimbot",
					intro: "League of Legends Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Vanguard maintenance सहित.",
					imageAlt: "lol cheats hero ESP aimbot wallhack",
					galleryTitle: "LoL Cheats gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में LoL Cheats क्यों",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। BR और ARAM game में दुश्मन team पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: प्लेयर बॉक्स, ward markers और wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। प्लेयर बॉक्स, ward markers और wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim, FOV और प्रजाति-वार Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। soft aim, FOV और प्रजाति-वार Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly या $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। $35 monthly या $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation और first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। Windows PC activation और first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Vanguard Maintenance Log",
					description: "अपडेट: Vanguard patch status और rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। Vanguard patch status और rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery और Vanguard questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। ESP, soft aim, delivery और Vanguard questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help और license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। order help और license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Vanguard Safe Status",
					description: "Undetected cheats: Vanguard patches के बाद undetected maintenance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। Vanguard patches के बाद undetected maintenance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: champions, wards और distance के लिए wallhack ESP. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। champions, wards और distance के लिए wallhack ESP.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Threat Overlay",
					description: "Radar Cheat: flanks और rotations के लिए 2D radar cues. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। flanks और rotations के लिए 2D radar cues.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: League of Legends cheats के लिए Vanguard updates कैसे handle होते हैं. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। League of Legends cheats के लिए Vanguard updates कैसे handle होते हैं.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"cheats-2026": {
					title: "LoL Cheats 2026 | Buyer Guide",
					description: "LoL Cheats 2026: checkout से पहले 2026 lol cheats checklist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "LoL Cheats 2026",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। LoL Cheats 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "LoL Cheats 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL Cheats 2026",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। checkout से पहले 2026 lol cheats checklist.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				cheats: {
					title: "LoL Cheats | ESP Aimbot Guide",
					description: "LoL Cheats: ESP और Aimbot के लिए LoL Cheats pillar. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "LoL Cheats",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। LoL Cheats.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "LoL Cheats",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। ESP और Aimbot के लिए LoL Cheats pillar.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"cheat-download": {
					title: "League of Legends Cheat Download | Instant Access",
					description: "League of Legends Cheat Download: payment के बाद digital license download. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "League of Legends Cheat Download",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। League of Legends Cheat Download.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "League of Legends Cheat Download",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "League of Legends Cheat Download",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। payment के बाद digital license download.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends Mod Menu | In-Game Toggles",
					description: "League of Legends Mod Menu: in-client ESP और soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "League of Legends Mod Menu",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। League of Legends Mod Menu.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends Mod Menu",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Mod Menu",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। in-client ESP और soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: Windows PC के लिए smooth soft aim settings. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। Windows PC के लिए smooth soft aim settings.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ LoL Cheats | Buyer Checklist",
					description: "सर्वश्रेष्ठ LoL Cheats: lol cheats खरीदने से पहले क्या compare करें. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ LoL Cheats",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। सर्वश्रेष्ठ LoL Cheats.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "सर्वश्रेष्ठ LoL Cheats",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ LoL Cheats",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। lol cheats खरीदने से पहले क्या compare करें.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "LoL Aimbot Cheat | Soft Aim Assist",
					description: "LoL Aimbot Cheat: League of Legends के लिए undetected Aimbot cheat assist. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "LoL Aimbot Cheat",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। LoL Aimbot Cheat.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "LoL Aimbot Cheat",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "LoL Aimbot Cheat",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। League of Legends के लिए undetected Aimbot cheat assist.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP Cheat | Boxes & Loot",
					description: "LoL ESP Cheat: ESP cheat boxes, ward pins और distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "LoL ESP Cheat",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। LoL ESP Cheat.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP Cheat",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP Cheat",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। ESP cheat boxes, ward pins और distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: unlock-all searches vs real ESP और Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "LoL Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। unlock-all searches vs real ESP और Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
								"सहायता: support@lolcheats.org",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | LoL Cheats",
					description: "गोपनीयता नीति LoL Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। गोपनीयता नीति lolcheats.org और League of Legends लाइसेंस के लिए।",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "शर्तें पढ़ें",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "हम जो जानकारी एकत्र करते हैं",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"भुगतान विवरण Zadeyo checkout द्वारा संसाधित — lolcheats.org पर संग्रहीत नहीं।",
							],
						},
						{
							h2: "हम डेटा का उपयोग कैसे करते हैं",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "आपके अधिकार",
							paragraphs: [
								"सहायता: support@lolcheats.org",
								"ईमेल: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | LoL Cheats",
					description: "रिफंड नीति LoL Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "रिफंड नीति",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। रिफंड नीति lolcheats.org और League of Legends लाइसेंस के लिए।",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "डिजिटल डिलीवरी",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "रिफंड स्वीकृति",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"Vanguard पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "कैसे अनुरोध करें",
							paragraphs: [
								"सहायता: support@lolcheats.org",
								"ईमेल: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | LoL Cheats",
					description: "उपयोग की शर्तें LoL Cheats — ESP wallhack, Aimbot के लिए, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। उपयोग की शर्तें lolcheats.org और League of Legends लाइसेंस के लिए।",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "सहायता ईमेल",
					ctaSecondary: "गोपनीयता पढ़ें",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "शर्तों की स्वीकृति",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। संपर्क ईमेल, Zadeyo ऑर्डर संदर्भ और बुनियादी साइट सुरक्षा डेटा।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Vanguard maintenance शामिल।",
							],
						},
						{
							h2: "जोखिम अस्वीकरण",
							paragraphs: [
								"LoL Cheats League of Legends के लिए Windows PC पर ESP wallhack, radar cheat और LoL Aimbot undetected पैकेज देता है। सहायता प्रतिक्रिया, ऑर्डर समाधान और आवश्यकता पर कानूनी अनुपालन।",
								"cheat का उपयोग League of Legends टीम की शर्तों का उल्लंघन हो सकता है — आप सभी ban जोखिम स्वीकार करते हैं।",
							],
						},
						{
							h2: "नीति परिवर्तन",
							paragraphs: [
								"सहायता: support@lolcheats.org",
								"ईमेल: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat League of Legends undetected",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat, dan Aimbot untuk League of Legends di PC Windows — pemeliharaan Vanguard termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk League of Legends PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket LoL Cheats aktif untuk League of Legends di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Vanguard didukung",
					antiCheatShort: "Vanguard didukung",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli LoL Cheats",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk League of Legends — checkout via Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat League of Legends undetected untuk League of Legends di PC. ESP wallhack, radar cheat, Aimbot, pemeliharaan Vanguard. Pengiriman digital instan.",
					h1: "LoL Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected League of Legends di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Vanguard.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "Galeri LoL Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "MengapLoL Cheats di 2026",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Ideal membaca team musuh di BR dan ARAM game.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Player Boxes & Wallhack",
					description: "ESP League of Legends: kotak pemain, penanda bangkai, dan overlay wallhack. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. kotak pemain, penanda bangkai, dan overlay wallhack.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Soft Aim Controls",
					description: "Aimbot League of Legends: soft aim, FOV, dan profil Aimbot per spesies. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. soft aim, FOV, dan profil Aimbot per spesies.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, kontrol radar. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Fitur.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. ESP, soft aim, kontrol radar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: lisensi $35 bulanan atau $150 lifetime. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Harga.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. lisensi $35 bulanan atau $150 lifetime.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: aktivasi Windows PC dan setup peluncuran pertama. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Setup.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. aktivasi Windows PC dan setup peluncuran pertama.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Vanguard Maintenance Log",
					description: "Pembaruan: status patch Vanguard dan catatan rebuild. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Pembaruan.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. status patch Vanguard dan catatan rebuild.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: pertanyaan ESP, soft aim, pengiriman, dan Vanguard. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. pertanyaan ESP, soft aim, pengiriman, dan Vanguard.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: bantuan pesanan dan kontak dukungan lisensi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Dukungan.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. bantuan pesanan dan kontak dukungan lisensi.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Vanguard Safe Status",
					description: "Cheat undetected: pemeliharaan undetected setelah patch Vanguard. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Cheat undetected.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. pemeliharaan undetected setelah patch Vanguard.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP untuk pemain, bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. wallhack ESP untuk pemain, bangkai, dan jarak.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | 2D Threat Overlay",
					description: "Radar cheat: petunjuk radar 2D untuk flanking dan rotasi. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar cheat",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. petunjuk radar 2D untuk flanking dan rotasi.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: cara pembaruan Vanguard ditangani untuk League of Legends cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. cara pembaruan Vanguard ditangani untuk League of Legends cheats.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat League of Legends 2026 | Buyer Guide",
					description: "Cheat League of Legends 2026: checklist lol cheats 2026 sebelum checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat League of Legends 2026",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Cheat League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Cheat League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheat League of Legends 2026",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. checklist lol cheats 2026 sebelum checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				cheats: {
					title: "Cheat League of Legends | ESP Aimbot Guide",
					description: "Cheat League of Legends: pilar LoL Cheats untuk ESP dan Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Cheat League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. pilar LoL Cheats untuk ESP dan Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat League of Legends | Instant Access",
					description: "Download Cheat League of Legends: unduhan lisensi digital setelah pembayaran. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Download Cheat League of Legends.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Download Cheat League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. unduhan lisensi digital setelah pembayaran.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod League of Legends | In-Game Toggles",
					description: "Menu mod League of Legends: toggle ESP dan soft aim in-client. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Menu mod League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Menu mod League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. toggle ESP dan soft aim in-client.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Smooth Aim Settings",
					description: "Soft aim League of Legends: pengaturan soft aim halus untuk Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. pengaturan soft aim halus untuk Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat League of Legends terbaik | Buyer Checklist",
					description: "Cheat League of Legends terbaik: apa yang dibandingkan sebelum membeli lol cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat League of Legends terbaik",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Cheat League of Legends terbaik.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Cheat League of Legends terbaik",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat League of Legends terbaik",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. apa yang dibandingkan sebelum membeli lol cheats.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat aimbot League of Legends | Soft Aim Assist",
					description: "Cheat aimbot League of Legends: assist cheat Aimbot undetected untuk League of Legends. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat aimbot League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Cheat aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat aimbot League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. assist cheat Aimbot undetected untuk League of Legends.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Boxes & Loot",
					description: "Cheat ESP League of Legends: kotak ESP cheat, pin bangkai, dan jarak. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. kotak ESP cheat, pin bangkai, dan jarak.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | What It Means",
					description: "Unlock all League of Legends: pencarian unlock-all vs alat ESP dan Aimbot asli. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Beli LoL Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. pencarian unlock-all vs alat ESP dan Aimbot asli.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
								"support@lolcheats.org untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | LoL Cheats",
					description: "Kebijakan privasi untuk LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Kebijakan privasi untuk lolcheats.org dan lisensi League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca syarat",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informasi yang kami kumpulkan",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"Detail pembayaran diproses oleh checkout Zadeyo — tidak disimpan di lolcheats.org.",
							],
						},
						{
							h2: "Cara kami menggunakan data",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Hak Anda",
							paragraphs: [
								"support@lolcheats.org untuk dukungan dan legal.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | LoL Cheats",
					description: "Kebijakan refund untuk LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Kebijakan refund untuk lolcheats.org dan lisensi League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Pengiriman digital",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "Persetujuan refund",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Periksa Updates setelah patch Vanguard. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Cara meminta",
							paragraphs: [
								"support@lolcheats.org untuk dukungan dan legal.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | LoL Cheats",
					description: "Syarat penggunaan untuk LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Syarat penggunaan untuk lolcheats.org dan lisensi League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Email dukungan",
					ctaSecondary: "Baca privasi",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Penerimaan syarat",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Email kontak, referensi pesanan Zadeyo, dan data keamanan situs dasar.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Vanguard.",
							],
						},
						{
							h2: "Penyangkalan risiko",
							paragraphs: [
								"LoL Cheats menyediakan ESP wallhack, radar cheat, dan LoL Aimbot undetected untuk League of Legends di PC Windows. Respons dukungan, penyelesaian pesanan, dan kepatuhan hukum jika diperlukan.",
								"Menggunakan cheat dapat melanggar ketentuan tim League of Legends — Anda menanggung semua risiko ban.",
							],
						},
						{
							h2: "Perubahan kebijakan",
							paragraphs: [
								"support@lolcheats.org untuk dukungan dan legal.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "lol cheats ไม่ถูกตรวจจับ",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat และ Aimbot สำหรับ League of Legends บน Windows PC — รวมการดูแล Vanguard",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ League of Legends PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ LoL Cheats พร้อมใช้งานสำหรับ League of Legends บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Vanguard",
					antiCheatShort: "Vanguard รองรับ",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ LoL Cheats",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ League of Legends — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat League of Legends undetected สำหรับ League of Legends บน PC. ESP wallhack, radar cheat, Aimbot, Vanguard maintenance. จัดส่งดิจิทัลทันที.",
					h1: "LoL Cheats — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ League of Legends บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Vanguard maintenance",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "แกลเลอรี LoL Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก LoL Cheats ปี 2026",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC เหมาะสำหรับอ่าน team ศัตรูใน BR และ ARAM game",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC กล่องผู้เล่น มาร์กเกอร์ซาก และ overlay wallhack.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC soft aim, FOV และโปรไฟล์ Aimbot ตามสายพันธุ์.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, การควบคุม radar. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ฟีเจอร์.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ESP, soft aim, การควบคุม radar.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: ใบอนุญาต $35 รายเดือนหรือ $150 lifetime. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ราคา.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ใบอนุญาต $35 รายเดือนหรือ $150 lifetime.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ติดตั้ง.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC การเปิดใช้งาน Windows PC และการตั้งค่าเปิดครั้งแรก.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Vanguard Maintenance Log",
					description: "อัปเดต: สถานะ patch Vanguard และบันทึก rebuild. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC อัปเดต.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC สถานะ patch Vanguard และบันทึก rebuild.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: คำถาม ESP, soft aim, การจัดส่ง และ Vanguard. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC คำถาม ESP, soft aim, การจัดส่ง และ Vanguard.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC สนับสนุน.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ความช่วยเหลือคำสั่งซื้อและติดต่อสนับสนุนใบอนุญาต.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Vanguard Safe Status",
					description: "Cheats undetected: การบำรุงรักษา undetected หลัง patch Vanguard. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC Cheats undetected.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC การบำรุงรักษา undetected หลัง patch Vanguard.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC wallhack ESP สำหรับผู้เล่น ซาก และระยะทาง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Threat Overlay",
					description: "Radar Cheat: สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC สัญญาณ radar 2D สำหรับการโจมตีด้านข้างและการหมุน.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: วิธีจัดการอัปเดต Vanguard สำหรับ League of Legends cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC วิธีจัดการอัปเดต Vanguard สำหรับ League of Legends cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "LoL Cheats 2026 | Buyer Guide",
					description: "LoL Cheats 2026: checklist lol cheats 2026 ก่อน checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "LoL Cheats 2026",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC LoL Cheats 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "LoL Cheats 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL Cheats 2026",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC checklist lol cheats 2026 ก่อน checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				cheats: {
					title: "LoL Cheats | ESP Aimbot Guide",
					description: "LoL Cheats: เสาหลัก LoL Cheats สำหรับ ESP และ Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "LoL Cheats",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC LoL Cheats.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "LoL Cheats",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC เสาหลัก LoL Cheats สำหรับ ESP และ Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด LoL Cheats | Instant Access",
					description: "ดาวน์โหลด LoL Cheats: ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด LoL Cheats",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ดาวน์โหลด LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "ดาวน์โหลด LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด LoL Cheats",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ดาวน์โหลดใบอนุญาตดิจิทัลหลังชำระเงิน.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด League of Legends | In-Game Toggles",
					description: "เมนูมอด League of Legends: สวิตช์ ESP และ soft aim ในไคลเอนต์. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด League of Legends",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC เมนูมอด League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "เมนูมอด League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด League of Legends",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC สวิตช์ ESP และ soft aim ในไคลเอนต์.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC การตั้งค่า soft aim ที่ลื่นไหลสำหรับ Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat League of Legends ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat League of Legends ที่ดีที่สุด: สิ่งที่ควรเปรียบเทียบก่อนซื้อ lol cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat League of Legends ที่ดีที่สุด",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC Cheat League of Legends ที่ดีที่สุด.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Cheat League of Legends ที่ดีที่สุด",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat League of Legends ที่ดีที่สุด",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC สิ่งที่ควรเปรียบเทียบก่อนซื้อ lol cheats.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat Aimbot League of Legends | Soft Aim Assist",
					description: "Cheat Aimbot League of Legends: assist cheat Aimbot undetected สำหรับ League of Legends. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Aimbot League of Legends",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC Cheat Aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC assist cheat Aimbot undetected สำหรับ League of Legends.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Boxes & Loot",
					description: "Cheat ESP League of Legends: กล่อง ESP cheat, pin ซาก และระยะทาง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC กล่อง ESP cheat, pin ซาก และระยะทาง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "ซื้อ LoL Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC การค้นหา unlock-all vs เครื่องมือ ESP และ Aimbot จริง.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
								"support@lolcheats.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | LoL Cheats",
					description: "นโยบายความเป็นส่วนตัว สำหรับ LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC นโยบายความเป็นส่วนตัว สำหรับ lolcheats.org และใบอนุญาต League of Legends",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านข้อกำหนด",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "ข้อมูลที่เราเก็บ",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"รายละเอียดการชำระเงินประมวลผลผ่าน checkout Zadeyo — ไม่เก็บบน lolcheats.org",
							],
						},
						{
							h2: "การใช้ข้อมูล",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "สิทธิของคุณ",
							paragraphs: [
								"support@lolcheats.org สำหรับการสนับสนุน",
								"อีเมล: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | LoL Cheats",
					description: "นโยบายการคืนเงิน สำหรับ LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC นโยบายการคืนเงิน สำหรับ lolcheats.org และใบอนุญาต League of Legends",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การจัดส่งดิจิทัล",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "การอนุมัติคืนเงิน",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"ตรวจ Updates หลังแพตช์ Vanguard ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "วิธีขอคืนเงิน",
							paragraphs: [
								"support@lolcheats.org สำหรับการสนับสนุน",
								"อีเมล: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | LoL Cheats",
					description: "ข้อกำหนดการใช้งาน สำหรับ LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC ข้อกำหนดการใช้งาน สำหรับ lolcheats.org และใบอนุญาต League of Legends",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "อีเมลฝ่ายสนับสนุน",
					ctaSecondary: "อ่านนโยบายความเป็นส่วนตัว",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "การยอมรับข้อกำหนด",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC อีเมลติดต่อ อ้างอิงคำสั่งซื้อ Zadeyo และข้อมูลความปลอดภัยพื้นฐานของเว็บไซต์",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Vanguard",
							],
						},
						{
							h2: "ข้อจำกัดความรับผิดชอบด้านความเสี่ยง",
							paragraphs: [
								"LoL Cheats รวม ESP wallhack, radar cheat และ LoL Aimbot แบบ undetected สำหรับ League of Legends บน Windows PC การตอบกลับฝ่ายสนับสนุน การแก้ไขคำสั่งซื้อ และการปฏิบัติตามกฎหมายเมื่อจำเป็น",
								"การใช้ cheat อาจละเมิดข้อกำหนดของทีม League of Legends — คุณรับความเสี่ยง ban ทั้งหมด",
							],
						},
						{
							h2: "การเปลี่ยนแปลงนโยบาย",
							paragraphs: [
								"support@lolcheats.org สำหรับการสนับสนุน",
								"อีเมล: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat League of Legends undetected",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat và Aimbot cho League of Legends trên PC Windows — bảo trì Vanguard bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho League of Legends PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói LoL Cheats đang hoạt động cho League of Legends trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Vanguard",
					antiCheatShort: "Hỗ trợ Vanguard",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người muLoL Cheats",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho League of Legends — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat League of Legends undetected cho League of Legends trên PC. ESP wallhack, radar cheat, Aimbot, bảo trì Vanguard. Giao hàng kỹ thuật số tức thì.",
					h1: "LoL Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected League of Legends trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Vanguard.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "Thư viện LoL Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn LoL Cheats 2026",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Lý tưởng đọc team địch trong BR và ARAM game.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Player Boxes & Wallhack",
					description: "ESP League of Legends: hộp người chơi, đánh dấu xác thịt và overlay wallhack. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. hộp người chơi, đánh dấu xác thịt và overlay wallhack.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Soft Aim Controls",
					description: "Aimbot League of Legends: soft aim, FOV và hồ sơ Aimbot theo loài. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. soft aim, FOV và hồ sơ Aimbot theo loài.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, điều khiển radar. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Tính năng.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. ESP, soft aim, điều khiển radar.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: giấy phép $35 hàng tháng hoặc $150 lifetime. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Giá.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. giấy phép $35 hàng tháng hoặc $150 lifetime.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: kích hoạt Windows PC và thiết lập lần chạy đầu. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Cài đặt.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. kích hoạt Windows PC và thiết lập lần chạy đầu.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Vanguard Maintenance Log",
					description: "Cập nhật: trạng thái patch Vanguard và ghi chú rebuild. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Cập nhật.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. trạng thái patch Vanguard và ghi chú rebuild.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: câu hỏi ESP, soft aim, giao hàng và Vanguard. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. câu hỏi ESP, soft aim, giao hàng và Vanguard.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Hỗ trợ.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. trợ giúp đơn hàng và liên hệ hỗ trợ giấy phép.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Vanguard Safe Status",
					description: "Cheat undetected: bảo trì undetected sau patch Vanguard. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Cheat undetected.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. bảo trì undetected sau patch Vanguard.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP cho người chơi, xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. wallhack ESP cho người chơi, xác thịt và khoảng cách.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | 2D Threat Overlay",
					description: "Radar cheat: tín hiệu radar 2D cho đánh hông và xoay vòng. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar cheat",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. tín hiệu radar 2D cho đánh hông và xoay vòng.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: cách xử lý cập nhật Vanguard cho League of Legends cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. cách xử lý cập nhật Vanguard cho League of Legends cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat League of Legends 2026 | Buyer Guide",
					description: "Cheat League of Legends 2026: checklist lol cheats 2026 trước checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat League of Legends 2026",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Cheat League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Cheat League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheat League of Legends 2026",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. checklist lol cheats 2026 trước checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				cheats: {
					title: "Cheat League of Legends | ESP Aimbot Guide",
					description: "Cheat League of Legends: trụ cột LoL Cheats cho ESP và Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Cheat League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. trụ cột LoL Cheats cho ESP và Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat League of Legends | Instant Access",
					description: "Tải Cheat League of Legends: tải giấy phép kỹ thuật số sau thanh toán. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Tải Cheat League of Legends.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Tải Cheat League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. tải giấy phép kỹ thuật số sau thanh toán.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu League of Legends | In-Game Toggles",
					description: "Mod menu League of Legends: công tắc ESP và soft aim trong client. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Mod menu League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Mod menu League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. công tắc ESP và soft aim trong client.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Smooth Aim Settings",
					description: "Soft aim League of Legends: cài đặt soft aim mượt cho Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. cài đặt soft aim mượt cho Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat League of Legends tốt nhất | Buyer Checklist",
					description: "Cheat League of Legends tốt nhất: nên so sánh gì trước khi mua lol cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat League of Legends tốt nhất",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Cheat League of Legends tốt nhất.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Cheat League of Legends tốt nhất",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat League of Legends tốt nhất",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. nên so sánh gì trước khi mua lol cheats.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat aimbot League of Legends | Soft Aim Assist",
					description: "Cheat aimbot League of Legends: hỗ trợ cheat Aimbot undetected cho League of Legends. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat aimbot League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Cheat aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat aimbot League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. hỗ trợ cheat Aimbot undetected cho League of Legends.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Boxes & Loot",
					description: "Cheat ESP League of Legends: hộp ESP cheat, pin xác thịt và khoảng cách. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. hộp ESP cheat, pin xác thịt và khoảng cách.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | What It Means",
					description: "Unlock all League of Legends: tìm kiếm unlock-all vs công cụ ESP và Aimbot thật. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "MuLoL Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. tìm kiếm unlock-all vs công cụ ESP và Aimbot thật.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | LoL Cheats",
					description: "Chính sách bảo mật cho LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Chính sách bảo mật cho lolcheats.org và giấy phép League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc điều khoản",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Thông tin chúng tôi thu thập",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"Chi tiết thanh toán được xử lý qua checkout Zadeyo — không lưu trên lolcheats.org.",
							],
						},
						{
							h2: "Cách chúng tôi sử dụng dữ liệu",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Quyền của bạn",
							paragraphs: [
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | LoL Cheats",
					description: "Chính sách hoàn tiền cho LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Chính sách hoàn tiền cho lolcheats.org và giấy phép League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Giao hàng kỹ thuật số",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "Phê duyệt hoàn tiền",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Kiểm tra Updates sau bản vá Vanguard. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Cách yêu cầu",
							paragraphs: [
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | LoL Cheats",
					description: "Điều khoản sử dụng cho LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Điều khoản sử dụng cho lolcheats.org và giấy phép League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Email hỗ trợ",
					ctaSecondary: "Đọc quyền riêng tư",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Chấp nhận điều khoản",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Email liên hệ, tham chiếu đơn hàng Zadeyo và dữ liệu bảo mật cơ bản của trang.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Vanguard.",
							],
						},
						{
							h2: "Tuyên bố miễn trừ rủi ro",
							paragraphs: [
								"LoL Cheats cung cấp ESP wallhack, radar cheat và LoL Aimbot undetected cho League of Legends trên PC Windows. Phản hồi hỗ trợ, giải quyết đơn hàng và tuân thủ pháp lý khi cần.",
								"Dùng cheat có thể vi phạm điều khoản của đội League of Legends — bạn chịu mọi rủi ro ban.",
							],
						},
						{
							h2: "Thay đổi chính sách",
							paragraphs: [
								"support@lolcheats.org cho hỗ trợ và pháp lý.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти League of Legends",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat і Aimbot для League of Legends на Windows PC — обслуговування Vanguard включено.",
					subtitleShort: "ESP, radar і Aimbot для League of Legends PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет LoL Cheats активний для League of Legends на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Vanguard",
					antiCheatShort: "Vanguard підтримка",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців LoL Cheats",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для League of Legends — оплата через Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти League of Legends для League of Legends на PC. ESP wallhack, radar cheat, Aimbot, обслуговування Vanguard. Мгновенная цифровая доставка.",
					h1: "LoL Cheats — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для League of Legends на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Vanguard.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "Галерея LoL Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому LoL Cheats у 2026",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Ідеально для читання ворожих загонів у BR і ARAM game.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Player Boxes & Wallhack",
					description: "ESP League of Legends: бокси гравців, маркери туш і wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. бокси гравців, маркери туш і wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Soft Aim Controls",
					description: "Aimbot League of Legends: soft aim, FOV і профілі Aimbot за видами. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. soft aim, FOV і профілі Aimbot за видами.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, керування radar. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Функції.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. ESP, soft aim, керування radar.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: ліцензії $35 на місяць або $150 lifetime. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Ціни.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. ліцензії $35 на місяць або $150 lifetime.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: активація Windows PC і налаштування першого запуску. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Встановлення.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. активація Windows PC і налаштування першого запуску.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Vanguard Maintenance Log",
					description: "Оновлення: статус патчів Vanguard і нотатки rebuild. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Оновлення.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. статус патчів Vanguard і нотатки rebuild.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: питання про ESP, soft aim, доставку та Vanguard. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. питання про ESP, soft aim, доставку та Vanguard.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: допомога з замовленням і контакт підтримки ліцензій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Підтримка.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. допомога з замовленням і контакт підтримки ліцензій.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Vanguard Safe Status",
					description: "Undetected чіти: undetected обслуговування після патчів Vanguard. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Undetected чіти.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. undetected обслуговування після патчів Vanguard.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP для гравців, туш і дистанції. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. wallhack ESP для гравців, туш і дистанції.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | 2D Threat Overlay",
					description: "Radar cheat: 2D radar підказки для флангів і ротацій. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar cheat",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. 2D radar підказки для флангів і ротацій.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: як обробляються оновлення Vanguard для League of Legends cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. як обробляються оновлення Vanguard для League of Legends cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти League of Legends 2026 | Buyer Guide",
					description: "Чіти League of Legends 2026: чеклист lol cheats 2026 перед checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти League of Legends 2026",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Чіти League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Чіти League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Чіти League of Legends 2026",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. чеклист lol cheats 2026 перед checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				cheats: {
					title: "Чіти League of Legends | ESP Aimbot Guide",
					description: "Чіти League of Legends: стовп LoL Cheats для ESP і Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Чіти League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. стовп LoL Cheats для ESP і Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження LoL Cheats | Instant Access",
					description: "Завантаження LoL Cheats: цифрове завантаження ліцензії після оплати. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження LoL Cheats",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Завантаження LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Завантаження LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження LoL Cheats",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. цифрове завантаження ліцензії після оплати.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню League of Legends | In-Game Toggles",
					description: "Мод-меню League of Legends: перемикачі ESP і soft aim у клієнті. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Мод-меню League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Мод-меню League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. перемикачі ESP і soft aim у клієнті.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Smooth Aim Settings",
					description: "Soft aim League of Legends: плавні налаштування soft aim для Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. плавні налаштування soft aim для Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти League of Legends | Buyer Checklist",
					description: "Найкращі чіти League of Legends: що порівняти перед покупкою lol cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Найкращі чіти League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Найкращі чіти League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. що порівняти перед покупкою lol cheats.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Хак aimbot League of Legends | Soft Aim Assist",
					description: "Хак aimbot League of Legends: undetected Aimbot cheat assist для League of Legends. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Хак aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Хак aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Хак aimbot League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. undetected Aimbot cheat assist для League of Legends.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Хак ESP League of Legends | Boxes & Loot",
					description: "Хак ESP League of Legends: ESP cheat бокси, pins туш і дистанція. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Хак ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Хак ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Хак ESP League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. ESP cheat бокси, pins туш і дистанція.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | What It Means",
					description: "Unlock all League of Legends: пошуки unlock-all vs справжні ESP і Aimbot інструменти. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Купити LoL Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. пошуки unlock-all vs справжні ESP і Aimbot інструменти.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
								"support@lolcheats.org для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | LoL Cheats",
					description: "Політика конфіденційності для LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Політика конфіденційності для lolcheats.org та ліцензій League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати умови",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Інформація, яку ми збираємо",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Платіжні дані обробляються через checkout Zadeyo — не зберігаються на lolcheats.org.",
							],
						},
						{
							h2: "Як ми використовуємо дані",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Ваші права",
							paragraphs: [
								"support@lolcheats.org для підтримки та правових питань.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | LoL Cheats",
					description: "Політика повернення для LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Політика повернення для lolcheats.org та ліцензій League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Цифрова доставка",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "Схвалення повернення",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Перевіряйте Updates після патчів Vanguard. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Як подати запит",
							paragraphs: [
								"support@lolcheats.org для підтримки та правових питань.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | LoL Cheats",
					description: "Умови використання для LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Умови використання для lolcheats.org та ліцензій League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Написати в підтримку",
					ctaSecondary: "Читати конфіденційність",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Прийняття умов",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Контактний email, посилання на замовлення Zadeyo та базові дані безпеки сайту.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Vanguard.",
							],
						},
						{
							h2: "Попередження про ризики",
							paragraphs: [
								"LoL Cheats об'єднує ESP wallhack, radar cheat і LoL Aimbot у undetected пакеті для League of Legends на Windows PC. Відповіді підтримки, вирішення замовлень та правова відповідність за потреби.",
								"Використання читів може порушувати умови команди League of Legends — ви приймаєте на себе ризик бану.",
							],
						},
						{
							h2: "Зміни політики",
							paragraphs: [
								"support@lolcheats.org для підтримки та правових питань.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected lol cheaty",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat a Aimbot pro League of Legends na Windows PC — údržba Vanguard v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro League of Legends PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček LoL Cheats je aktivní pro League of Legends na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Vanguard",
					antiCheatShort: "Vanguard podpora",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících LoL Cheats",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro League of Legends — checkout přes Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected lol cheaty pro League of Legends na PC. ESP wallhack, radar cheat, Aimbot, údržba Vanguard. Okamžité digitální doručení.",
					h1: "LoL Cheats — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro League of Legends na Windows PC: ESP wallhack, radar, Aimbot s údržbou Vanguard.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "Galerie LoL Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč LoL Cheats v roce 2026",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Ideální pro čtení nepřátelských teamů v BR a ARAM game.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: hráčské boxy, markery kadáverů a wallhack overlaye. okamžité digitální doručení. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. hráčské boxy, markery kadáverů a wallhack overlaye.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim, FOV a Aimbot profily podle druhu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. soft aim, FOV a Aimbot profily podle druhu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, ovládání radar. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Funkce.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. ESP, soft aim, ovládání radar.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: licence $35 měsíčně nebo $150 lifetime. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Ceny.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. licence $35 měsíčně nebo $150 lifetime.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: aktivace Windows PC a nastavení prvního spuštění. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Instalace.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. aktivace Windows PC a nastavení prvního spuštění.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Vanguard Maintenance Log",
					description: "Aktualizace: stav patchů Vanguard a poznámky k rebuild. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Aktualizace.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. stav patchů Vanguard a poznámky k rebuild.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: otázky k ESP, soft aim, doručení a Vanguard. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. otázky k ESP, soft aim, doručení a Vanguard.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: pomoc s objednávkou a kontakt podpory licencí. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Podpora.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. pomoc s objednávkou a kontakt podpory licencí.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Vanguard Safe Status",
					description: "Undetected cheaty: undetected údržba po patchech Vanguard. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Undetected cheaty.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. undetected údržba po patchech Vanguard.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP pro hráče, kadávery a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. wallhack ESP pro hráče, kadávery a vzdálenost.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Threat Overlay",
					description: "Radar Cheat: 2D radar signály pro flanly a rotace. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. 2D radar signály pro flanly a rotace.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: jak se řeší aktualizace Vanguard pro League of Legends cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. jak se řeší aktualizace Vanguard pro League of Legends cheats.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "lol cheaty 2026 | Buyer Guide",
					description: "lol cheaty 2026: checklist lol cheats 2026 před checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "lol cheaty 2026",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. lol cheaty 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "lol cheaty 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "lol cheaty 2026",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. checklist lol cheats 2026 před checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				cheats: {
					title: "lol cheaty | ESP Aimbot Guide",
					description: "lol cheaty: pilíř LoL Cheats pro ESP a Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "lol cheaty",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. lol cheaty.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "lol cheaty",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "lol cheaty",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. pilíř LoL Cheats pro ESP a Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout LoL Cheats | Instant Access",
					description: "Stáhnout LoL Cheats: digitální stažení licence po platbě. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout LoL Cheats",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Stáhnout LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Stáhnout LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout LoL Cheats",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. digitální stažení licence po platbě.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends mod menu | In-Game Toggles",
					description: "League of Legends mod menu: přepínače ESP a soft aim v klientu. okamžité digitální doručení. undetected — Windows PC.",
					h1: "League of Legends mod menu",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. League of Legends mod menu.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends mod menu",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends mod menu",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. přepínače ESP a soft aim v klientu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: plynulé nastavení soft aim pro Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. plynulé nastavení soft aim pro Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší lol cheaty | Buyer Checklist",
					description: "Nejlepší lol cheaty: co porovnat před nákupem lol cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší lol cheaty",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Nejlepší lol cheaty.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Nejlepší lol cheaty",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší lol cheaty",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. co porovnat před nákupem lol cheats.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "LoL Aimbot cheat | Soft Aim Assist",
					description: "LoL Aimbot cheat: undetected Aimbot cheat assist pro League of Legends. okamžité digitální doručení. undetected — Windows PC.",
					h1: "LoL Aimbot cheat",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. LoL Aimbot cheat.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "LoL Aimbot cheat",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "LoL Aimbot cheat",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. undetected Aimbot cheat assist pro League of Legends.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP cheat | Boxes & Loot",
					description: "LoL ESP cheat: ESP cheat boxy, piny kadáverů a vzdálenost. okamžité digitální doručení. undetected — Windows PC.",
					h1: "LoL ESP cheat",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. LoL ESP cheat.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP cheat",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP cheat",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. ESP cheat boxy, piny kadáverů a vzdálenost.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje. okamžité digitální doručení. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Koupit LoL Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. vyhledávání unlock-all vs skutečné ESP a Aimbot nástroje.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
								"support@lolcheats.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | LoL Cheats",
					description: "Zásady ochrany soukromí pro LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Zásady ochrany soukromí pro lolcheats.org a licence League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst podmínky",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informace, které shromažďujeme",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Platební údaje zpracovává checkout Zadeyo — neukládají se na lolcheats.org.",
							],
						},
						{
							h2: "Jak používáme data",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Vaše práva",
							paragraphs: [
								"support@lolcheats.org pro podporu a právní dotazy.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | LoL Cheats",
					description: "Zásady vrácení peněz pro LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Zásady vrácení peněz pro lolcheats.org a licence League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitální doručení",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "Schválení vrácení",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Po patchích Vanguard zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Jak požádat",
							paragraphs: [
								"support@lolcheats.org pro podporu a právní dotazy.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | LoL Cheats",
					description: "Podmínky použití pro LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Podmínky použití pro lolcheats.org a licence League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "E-mail podpoře",
					ctaSecondary: "Přečíst soukromí",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Přijetí podmínek",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Kontaktní e-mail, reference objednávek Zadeyo a základní bezpečnostní data webu.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Vanguard.",
							],
						},
						{
							h2: "Upozornění na rizika",
							paragraphs: [
								"LoL Cheats spojuje ESP wallhack, radar cheat a LoL Aimbot jako undetected balíček pro League of Legends na Windows PC. Odpovědi podpory, vyřizování objednávek a právní soulad v případě potřeby.",
								"Používání cheatů může porušovat podmínky týmu League of Legends — nesete veškeré riziko bana.",
							],
						},
						{
							h2: "Změny zásad",
							paragraphs: [
								"support@lolcheats.org pro podporu a právní dotazy.",
								"E-mail: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats League of Legends undetected",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat și Aimbot pentru League of Legends pe PC Windows — mentenanță Vanguard inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru League of Legends PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul LoL Cheats este activ pentru League of Legends pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Vanguard suportată",
					antiCheatShort: "Vanguard suportat",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii LoL Cheats",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru League of Legends — checkout via Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats League of Legends undetected pentru League of Legends pe PC. ESP wallhack, radar cheat, Aimbot, mentenanță Vanguard. Livrare digitală instantă.",
					h1: "LoL Cheats — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected League of Legends pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Vanguard.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "Galerie LoL Cheats — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce LoL Cheats în 2026",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Ideal pentru citirea team-urilor inamice în BR și ARAM game.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"lol-esp": {
					title: "ESP League of Legends | Player Boxes & Wallhack",
					description: "ESP League of Legends: casete jucător, markere carcase și overlay-uri wallhack. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. ESP League of Legends.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "ESP League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. casete jucător, markere carcase și overlay-uri wallhack.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "Aimbot League of Legends | Soft Aim Controls",
					description: "Aimbot League of Legends: soft aim, FOV și profile Aimbot pe specie. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Aimbot League of Legends.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Aimbot League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. soft aim, FOV și profile Aimbot pe specie.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, controale radar. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Funcții.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. ESP, soft aim, controale radar.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: licențe $35 lunar sau $150 lifetime. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Prețuri.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. licențe $35 lunar sau $150 lifetime.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: activare Windows PC și setup la prima lansare. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Instalare.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. activare Windows PC și setup la prima lansare.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Vanguard Maintenance Log",
					description: "Actualizări: status patch Vanguard și note rebuild. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Actualizări.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. status patch Vanguard și note rebuild.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: întrebări ESP, soft aim, livrare și Vanguard. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. întrebări ESP, soft aim, livrare și Vanguard.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: ajutor comenzi și contact suport licențe. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Suport.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. ajutor comenzi și contact suport licențe.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Vanguard Safe Status",
					description: "Cheats undetected: mentenanță undetected după patch-uri Vanguard. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Cheats undetected.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. mentenanță undetected după patch-uri Vanguard.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP pentru jucători, carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. wallhack ESP pentru jucători, carcase și distanță.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar cheat | 2D Threat Overlay",
					description: "Radar cheat: indicii radar 2D pentru flancuri și rotații. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar cheat",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Radar cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar cheat",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. indicii radar 2D pentru flancuri și rotații.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				vanguard: {
					title: "Bypass Vanguard | Patch Maintenance",
					description: "Bypass Vanguard: cum sunt gestionate actualizările Vanguard pentru League of Legends cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Vanguard",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Bypass Vanguard.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Bypass Vanguard",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Vanguard",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. cum sunt gestionate actualizările Vanguard pentru League of Legends cheats.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats League of Legends 2026 | Buyer Guide",
					description: "Cheats League of Legends 2026: checklist lol cheats 2026 înainte de checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats League of Legends 2026",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Cheats League of Legends 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "Cheats League of Legends 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Cheats League of Legends 2026",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. checklist lol cheats 2026 înainte de checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				cheats: {
					title: "Cheats League of Legends | ESP Aimbot Guide",
					description: "Cheats League of Legends: pilon LoL Cheats pentru ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Cheats League of Legends.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. pilon LoL Cheats pentru ESP și Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare LoL Cheats | Instant Access",
					description: "Descărcare LoL Cheats: descărcare licență digitală după plată. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare LoL Cheats",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Descărcare LoL Cheats.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "Descărcare LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare LoL Cheats",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. descărcare licență digitală după plată.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod League of Legends | In-Game Toggles",
					description: "Meniu mod League of Legends: toggle-uri ESP și soft aim in-client. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Meniu mod League of Legends.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "Meniu mod League of Legends",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. toggle-uri ESP și soft aim in-client.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim League of Legends | Smooth Aim Settings",
					description: "Soft aim League of Legends: setări soft aim fluide pentru Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Soft aim League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Soft aim League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Soft aim League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. setări soft aim fluide pentru Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats League of Legends | Buyer Checklist",
					description: "Cele mai bune cheats League of Legends: ce să compari înainte de a cumpăra lol cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Cele mai bune cheats League of Legends.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "Cele mai bune cheats League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. ce să compari înainte de a cumpăra lol cheats.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "Cheat aimbot League of Legends | Soft Aim Assist",
					description: "Cheat aimbot League of Legends: assist cheat Aimbot undetected pentru League of Legends. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheat aimbot League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Cheat aimbot League of Legends.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "Cheat aimbot League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "Cheat aimbot League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. assist cheat Aimbot undetected pentru League of Legends.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "Cheat ESP League of Legends | Boxes & Loot",
					description: "Cheat ESP League of Legends: casete ESP cheat, pin-uri carcase și distanță. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheat ESP League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Cheat ESP League of Legends.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "Cheat ESP League of Legends",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Cheat ESP League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. casete ESP cheat, pin-uri carcase și distanță.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all League of Legends | What It Means",
					description: "Unlock all League of Legends: căutări unlock-all vs instrumente reale ESP și Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all League of Legends",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Unlock all League of Legends.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "Unlock all League of Legends",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Cumpără LoL Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all League of Legends",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. căutări unlock-all vs instrumente reale ESP și Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
								"support@lolcheats.org pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | LoL Cheats",
					description: "Politica de confidențialitate pentru LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Politica de confidențialitate pentru lolcheats.org și licențe League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește termenii",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informații pe care le colectăm",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Detaliile de plată sunt procesate prin checkout Zadeyo — nu sunt stocate pe lolcheats.org.",
							],
						},
						{
							h2: "Cum folosim datele",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Drepturile tale",
							paragraphs: [
								"support@lolcheats.org pentru suport și legal.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | LoL Cheats",
					description: "Politica de rambursare pentru LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Politica de rambursare pentru lolcheats.org și licențe League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livrare digitală",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "Aprobare rambursare",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Verificați Updates după patch-uri Vanguard. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Cum să soliciți",
							paragraphs: [
								"support@lolcheats.org pentru suport și legal.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | LoL Cheats",
					description: "Termeni de utilizare pentru LoL Cheats — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Termeni de utilizare pentru lolcheats.org și licențe League of Legends.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Email suport",
					ctaSecondary: "Citește confidențialitatea",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptarea termenilor",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Email de contact, referințe comenzi Zadeyo și date de securitate de bază ale site-ului.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Vanguard.",
							],
						},
						{
							h2: "Declinare responsabilitate",
							paragraphs: [
								"LoL Cheats combină ESP wallhack, radar cheat și LoL Aimbot undetected pentru League of Legends pe PC Windows. Răspunsuri suport, rezolvarea comenzilor și conformitate legală când este necesar.",
								"Folosirea cheat-urilor poate încălca termenii echipei League of Legends — îți asumi tot riscul de ban.",
							],
						},
						{
							h2: "Modificări de politică",
							paragraphs: [
								"support@lolcheats.org pentru suport și legal.",
								"Email: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					cheats: "Cheats",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected lol cheats",
					accentShort: "LoL Cheats",
					subtitle: "ESP wallhack, radar cheat och Aimbot för League of Legends på Windows PC — Vanguard-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för League of Legends PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "LoL Cheats-paketet är live för League of Legends på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Vanguard-underhåll stöds",
					antiCheatShort: "Vanguard stöd",
				},
				product: {
					title: "LoL Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "League of Legends",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från LoL Cheats-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för League of Legends — checkout via Zadeyo.",
				},
				images: {
					hero: "LoL Cheats hero — ESP and aimbot overlay in League of Legends",
					espWallhack: "Wallhack outlines showing enemy champions and minions through walls",
					aimbotCombat: "Soft aim assist overlay during League of Legends match",
					teamFight: "LoL Cheats combat overlay during a team fight",
					champEsp: "Player ESP boxes and distance readouts in League of Legends match",
					headerArt: "Aimbot view and bone priority controls for League of Legends",
					cheatsPackage: "2D radar threat overlay for League of Legends",
					teamfight: "Aimbot assist during League of Legends gank",
					battleRoyale: "LoL Cheats in-match overview for Windows PC",
					summonersRift: "ESP markers for wards and objectives in League of Legends",
				},
			},
			pages: {
				home: {
					title: "LoL Cheats 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected lol cheats för League of Legends på PC. ESP wallhack, radar cheat, Aimbot, Vanguard-underhåll. Omedelbar digital leverans.",
					h1: "LoL Cheats — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för League of Legends på Windows PC: ESP wallhack, radar, Aimbot med Vanguard-underhåll.",
					imageAlt: "LoL ESP player tags cheat",
					galleryTitle: "LoL Cheats galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför LoL Cheats 2026",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Ideal för att läsa fiendeteams i BR och ARAM game.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"lol-esp": {
					title: "LoL ESP | Player Boxes & Wallhack",
					description: "LoL ESP: spelarboxar, kadavermarkörer och wallhack-overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "LoL ESP",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. LoL ESP.",
					imageAlt: "LoL ESP player boxes and distance readouts in a match",
					galleryTitle: "LoL ESP",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL ESP",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. spelarboxar, kadavermarkörer och wallhack-overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"lol-aimbot": {
					title: "LoL Aimbot | Soft Aim Controls",
					description: "LoL Aimbot: soft aim, FOV och Aimbot-profiler per art. omedelbar digital leverans. undetected — Windows PC.",
					h1: "LoL Aimbot",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. LoL Aimbot.",
					imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
					galleryTitle: "LoL Aimbot",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL Aimbot",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. soft aim, FOV och Aimbot-profiler per art.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar-kontroller. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Funktioner.",
					imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. ESP, soft aim, radar-kontroller.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 månatliga eller $150 lifetime-licenser. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Priser.",
					imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. $35 månatliga eller $150 lifetime-licenser.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC-aktivering och första-start setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Installation.",
					imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Windows PC-aktivering och första-start setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Vanguard Maintenance Log",
					description: "Uppdateringar: Vanguard patchstatus och rebuild-anteckningar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Uppdateringar.",
					imageAlt: "LoL Cheats live status after Vanguard and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Vanguard patchstatus och rebuild-anteckningar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: frågor om ESP, soft aim, leverans och Vanguard. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. FAQ.",
					imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. frågor om ESP, soft aim, leverans och Vanguard.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: orderhjälp och licens support-kontakt. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Support.",
					imageAlt: "LoL Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. orderhjälp och licens support-kontakt.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Vanguard Safe Status",
					description: "Undetected cheats: undetected underhåll loler Vanguard patchar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Undetected cheats.",
					imageAlt: "LoL Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. undetected underhåll loler Vanguard patchar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "League of Legends Wallhack | ESP Visibility",
					description: "League of Legends Wallhack: wallhack ESP för spelare, kadaver och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "League of Legends Wallhack",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. League of Legends Wallhack.",
					imageAlt: "lol wallhack visibility through walls in a match",
					galleryTitle: "League of Legends Wallhack",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "League of Legends Wallhack",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. wallhack ESP för spelare, kadaver och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Cheat | 2D Threat Overlay",
					description: "Radar Cheat: 2D radar-signaler för flanker och rotationer. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Cheat",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Radar Cheat.",
					imageAlt: "League of Legends 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Cheat",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "Radar Cheat",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. 2D radar-signaler för flanker och rotationer.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				vanguard: {
					title: "Vanguard Bypass | Patch Maintenance",
					description: "Vanguard Bypass: hur Vanguard-uppdateringar hanteras för League of Legends cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Vanguard Bypass",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Vanguard Bypass.",
					imageAlt: "LoL Cheats maintenance after a Vanguard patch",
					galleryTitle: "Vanguard Bypass",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Vanguard Bypass",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. hur Vanguard-uppdateringar hanteras för League of Legends cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "LoL Cheats 2026 | Buyer Guide",
					description: "LoL Cheats 2026: 2026 lol cheats checklist före checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "LoL Cheats 2026",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. LoL Cheats 2026.",
					imageAlt: "LoL Cheats product overview for League of Legends",
					galleryTitle: "LoL Cheats 2026",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-cheats/",
					sections: [
						{
							h2: "LoL Cheats 2026",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. 2026 lol cheats checklist före checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				cheats: {
					title: "LoL Cheats | ESP Aimbot Guide",
					description: "LoL Cheats: LoL Cheats pelare för ESP och Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "LoL Cheats",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. LoL Cheats.",
					imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "LoL Cheats",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. LoL Cheats pelare för ESP och Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "League of Legends Cheat Download | Instant Access",
					description: "League of Legends Cheat Download: digital licensnedladdning loler betalning. omedelbar digital leverans. undetected — Windows PC.",
					h1: "League of Legends Cheat Download",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. League of Legends Cheat Download.",
					imageAlt: "LoL Cheats download and install delivery flow",
					galleryTitle: "League of Legends Cheat Download",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "League of Legends Cheat Download",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. digital licensnedladdning loler betalning.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "League of Legends Mod-meny | In-Game Toggles",
					description: "League of Legends Mod-meny: in-client ESP och soft aim-växlar. omedelbar digital leverans. undetected — Windows PC.",
					h1: "League of Legends Mod-meny",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. League of Legends Mod-meny.",
					imageAlt: "League of Legends cheat mod menu with EvadePlus dodge settings",
					galleryTitle: "League of Legends Mod-meny",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Mod-meny",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. in-client ESP och soft aim-växlar.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "League of Legends Soft Aim | Smooth Aim Settings",
					description: "League of Legends Soft Aim: mjuka soft aim-inställningar för Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "League of Legends Soft Aim",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. League of Legends Soft Aim.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "League of Legends Soft Aim",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "League of Legends Soft Aim",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. mjuka soft aim-inställningar för Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "BästLoL Cheats | Buyer Checklist",
					description: "BästLoL Cheats: vad du ska jämföra innan du köper lol cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "BästLoL Cheats",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. BästLoL Cheats.",
					imageAlt: "League of Legends evade script with ESP wallhack distance tracking",
					galleryTitle: "BästLoL Cheats",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "BästLoL Cheats",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. vad du ska jämföra innan du köper lol cheats.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"aimbot-cheat": {
					title: "LoL Aimbot Cheat | Soft Aim Assist",
					description: "LoL Aimbot Cheat: undetected Aimbot cheat assist för League of Legends. omedelbar digital leverans. undetected — Windows PC.",
					h1: "LoL Aimbot Cheat",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. LoL Aimbot Cheat.",
					imageAlt: "League of Legends script overlays during a teamfight",
					galleryTitle: "LoL Aimbot Cheat",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-aimbot/",
					sections: [
						{
							h2: "LoL Aimbot Cheat",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. undetected Aimbot cheat assist för League of Legends.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"esp-cheat": {
					title: "LoL ESP Cheat | Boxes & Loot",
					description: "LoL ESP Cheat: ESP cheat-boxar, kadaver-pins och avstånd. omedelbar digital leverans. undetected — Windows PC.",
					h1: "LoL ESP Cheat",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. LoL ESP Cheat.",
					imageAlt: "League of Legends evade and ESP wallhack overlay in match",
					galleryTitle: "LoL ESP Cheat",
					heroImage: "/images/lol-evade-esp-wallhack.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/lol-esp/",
					sections: [
						{
							h2: "LoL ESP Cheat",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. ESP cheat-boxar, kadaver-pins och avstånd.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "League of Legends Unlock All | What It Means",
					description: "League of Legends Unlock All: unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg. omedelbar digital leverans. undetected — Windows PC.",
					h1: "League of Legends Unlock All",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. League of Legends Unlock All.",
					imageAlt: "LoL Cheats license features overview",
					galleryTitle: "League of Legends Unlock All",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "Köp LoL Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "League of Legends Unlock All",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. unlock-all-sökningar vs riktiga ESP- och Aimbot-verktyg.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
								"support@lolcheats.org för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | LoL Cheats",
					description: "Integritetspolicy för LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Integritetspolicy för lolcheats.org och League of Legends-licenser.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-hexevade-script-menu.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs villkor",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information vi samlar in",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Betalningsuppgifter behandlas via Zadeyo checkout — lagras inte på lolcheats.org.",
							],
						},
						{
							h2: "Hur vi använder data",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Supportssvar, orderlösning och juridisk lolerlevnad vid behov.",
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Dina rättigheter",
							paragraphs: [
								"support@lolcheats.org för support och juridik.",
								"E-post: support@lolcheats.org",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | LoL Cheats",
					description: "Återbetalningspolicy för LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Återbetalningspolicy för lolcheats.org och League of Legends-licenser.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-script-teamfight.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital leverans",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "Återbetalningsgodkännande",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Supportssvar, orderlösning och juridisk lolerlevnad vid behov.",
								"Kontrollera Updates loler Vanguard-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Hur du begär",
							paragraphs: [
								"support@lolcheats.org för support och juridik.",
								"E-post: support@lolcheats.org",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | LoL Cheats",
					description: "Användarvillkor för LoL Cheats — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Användarvillkor för lolcheats.org och League of Legends-licenser.",
					imageAlt: "LoL Cheats",
					galleryTitle: "LoL Cheats",
					heroImage: "/images/lol-cheat-mod-menu-evade.webp",
					ctaPrimary: "E-posta support",
					ctaSecondary: "Läs integritet",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Godkännande av villkor",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Kontakt-e-post, Zadeyo-orderreferenser och grundläggande säkerhetsdata för webbplatsen.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Vanguard-underhåll.",
							],
						},
						{
							h2: "Riskvarning",
							paragraphs: [
								"LoL Cheats kombinerar ESP wallhack, radar cheat och LoL Aimbot som undetected paket för League of Legends på Windows PC. Supportssvar, orderlösning och juridisk lolerlevnad vid behov.",
								"Att använda cheats kan bryta mot Riot Games terms — du tar all ban-risk.",
							],
						},
						{
							h2: "Policyändringar",
							paragraphs: [
								"support@lolcheats.org för support och juridik.",
								"E-post: support@lolcheats.org",
							],
						},
					],
				},
			},
		},
	};
