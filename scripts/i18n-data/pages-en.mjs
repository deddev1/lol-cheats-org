import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'LoL Cheats | Undetected Aimbot, ESP & Wallhack 2026',
		description:
			'League of Legends cheats for PC with aimbot, ESP and wallhack features. Explore gameplay features, pricing, setup information and the latest updates.',
		h1: 'LoL Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'LoL Cheats is the undetected LoL Cheats package for Windows PC — built for League of Legends on Windows PC. LoL ESP wallhack, 2D radar, and LoL Aimbot with Vanguard maintenance after every major patch.',
		imageAlt: "LoL Cheats homepage hero — ESP and aimbot for League of Legends",
		galleryTitle: 'LoL Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why champions choose lol cheats in 2026',
				'League of Legends rewards map awareness. LoL Cheats combines ESP wallhack for enemy champions and wards, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on match, ARAM game, and ranked servers.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.lol} and ${EXT.vanguard}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Vanguard maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/lol-cheats/">LoL Cheats pillar</a>, <a href="/lol-esp/">ESP guide</a>, <a href="/lol-aimbot/">Aimbot controls</a>, and <a href="/lol-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar cheat, and Aimbot in one license',
				'Instead of stacking separate tools, LoL Cheats bundles player ESP wallhack, ward markers, 2D radar overlays, and Aimbot profiles in one undetected package built for ranked and normal games — covering both “lol cheats” and “lol cheats” search intent.',
				'Browse the <a href="/lol-esp/">ESP</a>, <a href="/lol-aimbot/">Aimbot</a>, <a href="/lol-esp/">wallhack</a>, and <a href="/lol-radar-cheat/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Riot Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'lol-esp': {
		title: 'LoL ESP 2026 | Player Boxes & Wallhack',
		description:
			'LoL ESP for Windows PC — player boxes, ward markers, and distance readouts. Part of our undetected lol cheats for League of Legends.',
		h1: 'LoL ESP — Player Boxes & Wallhack',
		intro:
			'LoL ESP visibility tools for match and ARAM game. Read enemy teams, enemy champions, minions, wards, and distance before you commit — toggleable LoL ESP wallhack overlays bundled in our LoL Cheats package.',
		imageAlt: "LoL ESP player boxes and distance readouts in a match",
		galleryTitle: 'LoL ESP overlay visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'lol wallhack guide',
		ctaSecondaryHref: '/lol-esp/',
		sections: [
			section(
				'What LoL ESP solves in matches',
				'League of Legends maps punish incomplete information. LoL Cheats ESP wallhack helps you spot enemy teams early, spot enemy champions and minions before they push your angle, and mark low-health targets worth the detour.',
				'On match, ARAM game, and ranked servers, that visibility gap is often the difference between a clean third-party and a patched team. ESP ships bundled with radar overlays and Aimbot in one license.',
				`League of Legends’s live seasons and map updates are published by Riot Games (${EXT.lol}). When POIs or matchmaking rules shift, ESP categories stay useful because they track champions and wards — not a single static landmark.`,
			),
			section(
				'Player, apex, and ward ESP wallhack categories',
				'Toggle enemy player outlines, baron markers, objective cues, and ward pins so only match-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports ranked and normal games lobbies alike.',
				'Compare category detail on the <a href="/lol-esp/">wallhack page</a> and pair visibility with the <a href="/lol-radar-cheat/">radar cheat</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Ward and ward markers for faster rotations',
					'Baron and objective awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Vanguard maintenance',
				'LoL Cheats ESP wallhack is maintained for League of Legends with rebuilds after Vanguard patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.vanguard} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Vanguard maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first match.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the gank. Review <a href="/lol-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/lol-cheats/">LoL Cheats pillar</a> and <a href="/lol-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'lol-aimbot': {
		title: 'LoL Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'LoL Aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our LoL Cheats package.',
		h1: 'LoL Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for League of Legends ganks. Smoothness, FOV, bone priority, and per-champion profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "LoL Aimbot and soft aim controls on Windows PC",
		galleryTitle: 'LoL Aimbot combat previews',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/lol-esp/',
		sections: [
			section(
				'Aimbot tuned for League of Legends combat pace',
				'League of Legends mixes skillshot mid-size ganks with close-quarters all-in engages. LoL Cheats Aimbot includes smoothness, FOV, and aim smoothing controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during team fights and close-range team fights.',
				`Weapon balance and season rules change via ${EXT.lol}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live kill speed windows.`,
			),
			section(
				'Per-champion Aimbot profiles',
				'Save separate Aimbot profiles for carnivores, ambush builds, and skillshot champions. Switch between skillshot ambush ganks and high-traffic zone clears without reopening menus every match.',
				'Prefer softer tracking? Read the <a href="/lol-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/lol-esp/">ESP wallhack</a> and <a href="/lol-radar-cheat/">2D radar</a> in the same LoL Cheats license.',
				[
					'Smoothness, FOV, and aim smoothing sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-champion profile slots for AR / SMG / skillshot',
				],
			),
			section(
				'Vanguard maintenance for undetected Aimbot',
				'LoL Cheats rebuilds Aimbot behavior when Vanguard or major League of Legends patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.vanguard}, then follow our <a href="/updates/">Vanguard maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'LoL Cheats Features | ESP, Soft Aim & RadarRadar',
		description:
			'Full lol cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'LoL Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar cheat, and Aimbot control included in LoL Cheats for League of Legends on Windows PC — with Vanguard maintenance after major patches.',
		imageAlt: "LoL Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'LoL Cheats feature gallery',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, apex and nest awareness cues, ward and water markers, distance readouts, snaplines, and toggleable ESP categories for match-critical overlays only.',
				'Team and enemy colour coding supports ranked and normal games. Deep-dive the <a href="/lol-esp/">ESP page</a> and <a href="/lol-esp/">wallhack guide</a> for category-level detail.',
				`Map and wards systems evolve with ${EXT.lol} patch cycle and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar cheat and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-match objectives, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-champion profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live League of Legends matches. See <a href="/lol-radar-cheat/">radar</a> and <a href="/lol-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/lol-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Vanguard maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Vanguard maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@lolcheats.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/lol-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'LoL Cheats Pricing | $35/mo or $150 Life',
		description:
			'lol cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'LoL Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected LoL Cheats — ESP wallhack, radar cheat, and Aimbot for League of Legends on Windows PC. Instant digital delivery after payment.',
		imageAlt: "LoL Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'LoL Cheats package visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime LoL Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar cheat, and Aimbot access with Vanguard maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected LoL Cheats package — ideal if you play League of Legends regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, ward markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Vanguard or major League of Legends patches.',
				`Season calendars and client updates come from ${EXT.lol}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/lol-cheats/">lol cheats</a>, <a href="/lol-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'LoL Cheats Setup | Windows PC Guide',
		description:
			'Set up lol cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Vanguard updates before your first queue up.',
		h1: 'LoL Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure LoL Cheats for League of Legends on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Vanguard maintenance status before queueing.',
		imageAlt: "LoL Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'LoL Cheats setup visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install LoL Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Vanguard maintenance build before launching League of Legends.',
				`Also glance at ${EXT.status} if Riot Games services look unstable on patch day — a platform outage is not a license fault.`,
				'LoL Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemy champions, minions, and wards — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Vanguard module live on <a href="/lol-esp/">ESP</a>, <a href="/lol-aimbot/">Aimbot</a>, and <a href="/lol-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/lol-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After League of Legends or Vanguard patches',
				'When Riot Games ships a major League of Legends update or Vanguard patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.vanguard}. Our practical workflow is documented on the <a href="/updates/">Vanguard bypass page</a> and <a href="/lol-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'LoL Cheats Updates | Vanguard Maintenance Log',
		description:
			'lol cheats update log: Vanguard rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'LoL Cheats Updates — Maintenance Log',
		intro:
			'Track Vanguard maintenance and League of Legends patch rebuilds for the undetected ESP wallhack, radar cheat, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "LoL Cheats live status after Vanguard and game patches",
		galleryTitle: 'League of Legends patch and maintenance visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/lol-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'League of Legends and Vanguard receive frequent patches. LoL Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Riot Games platform health and this page for LoL Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on match and ARAM game.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Vanguard compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after champions balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Vanguard bypass guide</a> and <a href="/lol-cheats/">undetected lol cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.lol}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Vanguard update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'LoL Cheats FAQ | ESP, Soft Aim & RadarRadar Answers',
		description:
			'lol cheats FAQ: ESP boxes, soft aim, Vanguard maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'LoL Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected LoL Cheats — ESP wallhack, radar cheat, Aimbot, Vanguard maintenance, checkout, and League of Legends compatibility on Windows PC.',
		imageAlt: "LoL Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'LoL Cheats FAQ visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is LoL Cheats?',
				'LoL Cheats is an undetected cheat package for League of Legends on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Vanguard maintenance updates.',
				'Packages cover match and ARAM game. Explore <a href="/features/">Features</a> for the full control list and <a href="/lol-esp/">ESP</a> / <a href="/lol-aimbot/">Aimbot</a> for module detail.',
				`League of Legends itself is published by Riot Games (${EXT.lol}). Cheats are third-party tools and may violate Riot Games' rules — use is at your own risk.`,
			),
			section(
				'Are LoL Cheats undetected in 2026?',
				'LoL Cheats is maintained with rebuilds after Vanguard and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/lol-cheats/">undetected lol cheats</a> and the <a href="/updates/">Vanguard guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@lolcheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'LoL Cheats Support | Help & Contact',
		description:
			'Contact lol cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'LoL Cheats Support — Contact Us',
		intro:
			'Get help with LoL Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Vanguard maintenance for League of Legends on Windows PC.',
		imageAlt: "LoL Cheats support page for license and setup help",
		galleryTitle: 'LoL Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Vanguard maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. LoL Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Riot Games bans.',
				`Account and game policy questions belong with Riot Games. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Vanguard bypass notes live on the dedicated <a href="/updates/">Vanguard page</a>.',
				'Email: support@lolcheats.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected LoL Cheats 2026 | Vanguard Maintenance',
		description:
			'Undetected lol cheats with Vanguard maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected LoL Cheats — Vanguard Maintenance',
		intro:
			'How LoL Cheats stays maintained for League of Legends after Vanguard patches — ESP wallhack, radar cheat, and Aimbot rebuilds for Windows PC.',
		imageAlt: "LoL Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected LoL Cheats visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Vanguard bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for LoL Cheats',
				'Undetected LoL Cheats means the package is actively maintained against Vanguard and major League of Legends patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Vanguard security updates.',
				`Anti-cheat technology is documented by ${EXT.vanguard}; League of Legends client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Vanguard maintenance workflow',
				'When Vanguard or League of Legends updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Vanguard bypass League of Legends guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/lol-cheats/">lol cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'League of Legends Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'lol wallhack ESP with player boxes and ward markers for Windows PC. Undetected lol cheats — learn overlays and buy.',
		h1: 'League of Legends Wallhack — ESP Boxes & Visibility',
		intro:
			'LoL wallhack ESP for League of Legends — see champions, wards, apex champions, and water sources through toggleable wallhack overlays built for ranked and normal games.',
		imageAlt: "lol wallhack visibility through walls in a match",
		galleryTitle: 'lol wallhack ESP gallery',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'LoL ESP page',
		ctaSecondaryHref: '/lol-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'An LoL wallhack focuses on information — player outlines, ward pins, apex threat cues — rather than automatic aiming. LoL Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and objective zones.',
				'For the broader ESP keyword page see <a href="/lol-esp/">LoL ESP</a>; for combat assist see <a href="/lol-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support match, ARAM game, and ranked servers with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.lol}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/lol-radar-cheat/">radar cheat</a> cues for flanks during forest and river bank ambushes.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Vanguard patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/lol-cheats/">undetected lol cheats</a> and <a href="/updates/">Vanguard bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/lol-esp/">ESP cheat</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'League of Legends Radar Cheat 2026 | 2D Threat Overlay',
		description:
			'lol radar cheat for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our LoL Cheats package.',
		h1: 'League of Legends Radar Cheat — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for League of Legends — directional threat cues for nearby champions outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "League of Legends 2D radar overlay showing nearby threats",
		galleryTitle: 'lol radar cheat visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/lol-esp/',
		sections: [
			section(
				'Why radar cheat matters in League of Legends',
				'survival ganks happen across open terrain — hills, forests, and river banks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third player.',
				'LoL Cheats radar complements <a href="/lol-esp/">ESP wallhack</a> markers during team pushes and nest zone fights.',
				`Mode rules and seasonal changes come from ${EXT.lol}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight objective zones. Directional cues highlight flanks during building clears and flank pushes across match and ARAM game.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/lol-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/lol-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar cheat modules receive Vanguard maintenance rebuilds with the full LoL Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major League of Legends patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/lol-cheats/">undetected status</a>.',
			),
		],
	},
	'vanguard': {
		title: 'Vanguard Bypass League of Legends | LoL Cheats Maintenance',
		description:
			'How lol cheats rebuild after Vanguard patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Vanguard Bypass — LoL Cheats Maintenance',
		intro:
			'Understand Vanguard maintenance for LoL Cheats — how ESP wallhack, radar cheat, and Aimbot rebuild after League of Legends security updates.',
		imageAlt: "LoL Cheats maintenance after a Vanguard patch",
		galleryTitle: 'Vanguard maintenance visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Vanguard overview',
				`Vanguard is Riot Games' anti-cheat for League of Legends on PC (see ${EXT.vanguard}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`LoL Cheats monitors Vanguard patch notes and League of Legends seasonal updates from ${EXT.lol} to schedule module reviews.`,
				'“Vanguard bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Vanguard patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Riot Games service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/lol-cheats/">undetected lol cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Vanguard bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every match.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'LoL Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best lol cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected lol cheats with Vanguard maintenance — compare and buy.',
		h1: 'LoL Cheats 2026 — ESP, Soft Aim & RadarRadar',
		intro:
			'The 2026 LoL Cheats package for League of Legends — undetected ESP wallhack, radar cheat, and Aimbot with Vanguard maintenance, instant delivery, and Windows PC support.',
		imageAlt: "LoL Cheats product overview for League of Legends",
		galleryTitle: 'LoL Cheats 2026 gallery',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why lol cheats buyers choose LoL Cheats in 2026',
				'2026 updates bring new maps, champion balance changes, and Vanguard patches. LoL Cheats bundles ESP wallhack, radar cheat, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.lol}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover match and ARAM game loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, ward markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/lol-cheats/">LoL Cheats pillar</a>, <a href="/lol-esp/">ESP</a>, <a href="/lol-aimbot/">Aimbot</a>, <a href="/lol-esp/">wallhack</a>, <a href="/lol-radar-cheat/">radar</a>, <a href="/lol-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/lol-cheats/">lol cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/lol-cheats/">lol cheats</a> checklist, <a href="/blog/lol-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@lolcheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	cheats: {
		title: 'LoL Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'lol cheats for Windows PC: undetected ESP wallhack, radar cheat, and Aimbot with Vanguard maintenance. Compare lol cheats options and buy the full package.',
		h1: 'LoL Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'lol cheats for match and ARAM game combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Vanguard patches. This is the pillar guide for lol cheats in 2026.',
		imageAlt: "LoL Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'lol cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/lol-cheats/',
		sections: [
			section(
				'What lol cheats include in 2026',
				'Players searching for lol cheats usually want visibility and combat tools without stacking separate downloads. LoL Cheats bundles player ESP wallhack, ward markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called lol cheats.',
				'Coverage spans match and ARAM game with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.lol}; our cheats package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queue ups.`,
			),
			section(
				'How this LoL Cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/lol-cheats/">lol cheats 2026</a> and <a href="/lol-cheats/">lol cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/lol-esp/">LoL ESP</a>, <a href="/lol-aimbot/">LoL Aimbot</a>, <a href="/lol-esp/">wallhack</a>, <a href="/lol-radar-cheat/">radar cheat</a>, and <a href="/lol-aimbot/">soft aim</a>.',
				'Blog guides expand Vanguard keyword: <a href="/blog/lol-cheats-complete-guide-2026/">cheats complete guide</a>, <a href="/blog/lol-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-lol-cheats-vanguard/">undetected Vanguard notes</a>.',
			),
			section(
				'lol cheats vs single-feature tools',
				'Standalone cheats often cover only wallhack or only aim assist. LoL Cheats maps the full survival loop: read enemy teams, track apex champions and wards, spot flanks on radar, and tune Aimbot per champions.',
				'Compare the <a href="/lol-esp/">ESP</a>, <a href="/lol-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/lol-cheats/">mod menu</a>, <a href="/lol-aimbot/">aimbot</a>, <a href="/lol-esp/">ESP</a>.',
			),
			section(
				'Undetected lol cheats with Vanguard maintenance',
				'Undetected lol cheats require rebuilds after Vanguard and major League of Legends patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.vanguard} for anti-cheat background and our <a href="/updates/">Vanguard bypass guide</a> for the practical workflow. Pair with <a href="/lol-cheats/">undetected lol cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'League of Legends Cheat Download 2026 | Instant Access',
		description:
			'lol cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'League of Legends Cheat Download — Instant License Delivery',
		intro:
			'How lol cheat download works for League of Legends — digital license delivery after payment confirmation, with ESP wallhack, radar cheat, and Aimbot access on Windows PC.',
		imageAlt: "LoL Cheats download and install delivery flow",
		galleryTitle: 'lol cheat download visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How lol cheat download delivery works',
				'After checkout confirms payment, LoL Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Riot Games services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every lol cheat download includes player ESP wallhack, wards and ward markers, 2D radar overlays, Aimbot profiles, and in-client toggles for ranked and normal games.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/lol-esp/">ESP</a>, <a href="/lol-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When League of Legends or Vanguard patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/lol-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'League of Legends Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'League of Legends mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected LoL Cheats package.',
		h1: 'League of Legends Mod Menu — In-Client Control Panel',
		intro:
			'League of Legends mod menu controls for League of Legends — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your League of Legends match on Windows PC.',
		imageAlt: "LoL Cheats in-game menu controls",
		galleryTitle: 'League of Legends mod menu gallery',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What League of Legends mod menu controls',
				'A League of Legends mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. LoL Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, ward markers, vehicle cues, and per-champion Aimbot settings without alt-tabbing out of League of Legends.',
				'Control deep-dives: <a href="/lol-esp/">ESP</a>, <a href="/lol-aimbot/">Aimbot</a>, <a href="/lol-radar-cheat/">radar</a>.',
			),
			section(
				'Mod menu categories for ranked and normal games',
				'Separate ESP wallhack categories for champions, wards, water sources, and apex champions let you reduce overlay noise during rotations and objective zones.',
				'Radar cheat range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.lol} seasons change fight distances and mobility.',
				'Soft tracking champions should start with <a href="/lol-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Vanguard patches',
				'League of Legends mod menu behavior is rebuilt when Vanguard or major League of Legends updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Vanguard bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'League of Legends Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'League of Legends soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our lol cheats with ESP boxes.',
		h1: 'League of Legends Soft Aim — Smooth Aimbot Controls',
		intro:
			'League of Legends soft aim settings for League of Legends — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "League of Legends soft aim FOV and smoothness settings",
		galleryTitle: 'League of Legends soft aim gallery',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/lol-aimbot/',
		sections: [
			section(
				'What League of Legends soft aim means',
				'League of Legends soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. LoL Cheats exposes smoothness, FOV, and aim smoothing sliders so you control how assist feels in BR ganks.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during team fights.',
				'Full Aimbot documentation: <a href="/lol-aimbot/">LoL Aimbot</a>. Alternate wording: <a href="/lol-aimbot/">aimbot cheat</a>.',
			),
			section(
				'Soft aim profiles per champions',
				'Save separate soft aim profiles for carnivores, ambush builds, and skillshot champions. Switch between skillshot ambush ganks and close team fights with hotkeys mid-match.',
				`Weapon kill speeds shift with ${EXT.lol} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/lol-esp/">ESP wallhack</a> and <a href="/lol-radar-cheat/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Vanguard maintenance',
				'Aimbot modules rebuild after Vanguard patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best LoL Cheats 2026 | Buyer Guide',
		description:
			'Best lol cheats for 2026: ESP boxes, soft aim, and Vanguard maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best LoL Cheats — 2026 Buyer Guide',
		intro:
			'Compare lol cheats for League of Legends in 2026 — undetected ESP wallhack, radar cheat, and Aimbot in one maintained package with Vanguard rebuilds and instant delivery.',
		imageAlt: "LoL Cheats overview for League of Legends on PC",
		galleryTitle: 'Best lol cheats gallery',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes lol cheats in 2026',
				'The lol cheats combine active Vanguard maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'LoL Cheats covers match and ARAM game with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best lol cheats feature checklist',
				'Look for player ESP wallhack, ward markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after League of Legends patches.',
				'Review <a href="/features/">Features</a>, <a href="/lol-cheats/">undetected status</a>, and <a href="/lol-cheats/">lol cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/lol-esp/">ESP</a>, <a href="/lol-aimbot/">Aimbot</a>, <a href="/lol-cheats/">cheats</a>.',
			),
			section(
				'Buying lol cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue up — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Riot Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-cheat': {
		title: 'LoL Aimbot Cheat 2026 | Soft Aim Assist',
		description:
			'LoL Aimbot cheat with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our LoL Cheats package.',
		h1: 'LoL Aimbot Cheat — Soft Aim Assist',
		intro:
			'LoL Aimbot cheat tools for League of Legends — smoothness, FOV, bone priority, per-champion profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "LoL Aimbot cheat controls and bone priority",
		galleryTitle: 'LoL Aimbot cheat gallery',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/lol-aimbot/',
		sections: [
			section(
				'LoL Aimbot cheat vs visibility tools',
				'A LoL Aimbot cheat focuses on assisted targeting during ganks — while ESP wallhack and radar handle map awareness. LoL Cheats bundles aimbot cheat modules with visibility overlays in one license.',
				'Smoothness, FOV, and aim smoothing controls tune assist for League of Legends combat pace across ranked and normal games.',
				'Prefer softer tracking language? See <a href="/lol-aimbot/">soft aim</a>. Full settings: <a href="/lol-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot cheat controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot cheat mid-match without opening menus during rotations or late-match objectives.',
				'Per-champion profile slots separate skillshot AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.lol} can change ideal FOV — retune after major champions balance updates.`,
			),
			section(
				'Undetected aimbot cheat maintenance',
				'Aimbot cheat signatures rebuild after Vanguard updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Vanguard bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/lol-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-cheat': {
		title: 'LoL ESP Cheat 2026 | Player Boxes & Loot',
		description:
			'LoL ESP cheat with player boxes and ward markers for Windows PC. Undetected lol cheats with — see overlays and buy.',
		h1: 'LoL ESP Cheat — Player Boxes Guide',
		intro:
			'LoL ESP cheat overlays for League of Legends — player outlines, apex threat cues, ward and water markers with distance readouts across match and ARAM game.',
		imageAlt: "LoL ESP cheat boxes and ward markers",
		galleryTitle: 'LoL ESP cheat gallery',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/lol-esp/',
		sections: [
			section(
				'What a LoL ESP cheat shows',
				'A LoL ESP cheat renders enemy player outlines, vehicle positions, and ward pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during team pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/lol-esp/">LoL ESP</a>. Wallhack wording: <a href="/lol-esp/">wallhack</a>.',
			),
			section(
				'ESP cheat categories for matches',
				'Toggle player ESP cheat, ward markers, chest pins, and vehicle cues independently so only match-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports ranked and normal games.',
				`POI and wards changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP cheat with Vanguard maintenance',
				'ESP cheat modules rebuild after Vanguard and League of Legends patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP cheat awareness with <a href="/lol-radar-cheat/">radar cheat</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/lol-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'League of Legends Unlock All 2026 | What It Really Means',
		description:
			'League of Legends unlock-all explained vs real lol cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'League of Legends Unlock All — What Players Search For',
		intro:
			'League of Legends unlock-all is a common search term for League of Legends — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar cheat, and Aimbot tools LoL Cheats actually provides on Windows PC.',
		imageAlt: "LoL Cheats license features overview",
		galleryTitle: 'League of Legends unlock-all guide visuals',
		ctaPrimary: 'Buy LoL Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What League of Legends unlock-all usually means',
				'League of Legends unlock-all searches often refer to instant access to champions, skins, or rank tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'LoL Cheats focuses on in-match awareness — player ESP, ward markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and patch cycle account progression items are sold through ${EXT.lol}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy teams, apex champions, and low-health targets during live matches. Radar cheat adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, wards and ward markers speed map rotations — see the <a href="/lol-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/lol-cheats/">lol cheats</a> and <a href="/lol-cheats/">lol cheats</a>.',
			),
			section(
				'Buying LoL Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar cheat, and Aimbot for League of Legends on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Vanguard patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | LoL Cheats',
		description:
			'Privacy policy for LoL Cheats. How we handle support emails, order data, and checkout for lol cheats licenses on lolcheats.org.',
		h1: 'Privacy Policy',
		intro: 'How LoL Cheats handles information when you browse lolcheats.org or contact support about League of Legends license.',
		imageAlt: "LoL Cheats privacy policy page",
		galleryTitle: 'LoL Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual LoL Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@lolcheats.org with your request details.',
				'Policy updates publish on this page. Continued use of lolcheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | LoL Cheats',
		description:
			'Refund policy for LoL Cheats. Digital delivery terms and eligibility for LoL Cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for LoL Cheats licenses — ESP wallhack, radar cheat, and Aimbot packages purchased through checkout for League of Legends.',
		imageAlt: "LoL Cheats refund policy page",
		galleryTitle: 'LoL Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'LoL Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@lolcheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | LoL Cheats Rules',
		description:
			'Terms of use for lolcheats.org and LoL Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of lolcheats.org and LoL Cheats licenses for League of Legends on Windows PC.',
		imageAlt: "LoL Cheats terms of use page",
		galleryTitle: 'LoL Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using LoL Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for League of Legends on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in League of Legends may violate Riot Games terms and result in account penalties. LoL Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/lol-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@lolcheats.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
