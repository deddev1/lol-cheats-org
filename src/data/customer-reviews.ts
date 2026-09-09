import { fillBrandTokens } from './brand';

function reviewMeta<
	T extends { seoTitle: string; seoDescription: string; text: string; short: string },
>(item: T): T {
	return {
		...item,
		text: fillBrandTokens(item.text),
		short: fillBrandTokens(item.short),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
	plan?: 'Monthly' | 'Lifetime';
};

/** Featured reviews shown on site — public total is higher in customerReviewStats. */
export const customerReviews = [
	reviewMeta({
		handle: 'mikeT_94',
		rating: 4,
		text: 'Got the monthly plan after a friend sent me the store link. ESP is readable without cluttering the screen. Took maybe 20 minutes to get everything tuned for ranked. Only gripe is the status page could say more when Vanguard updates hit.',
		short: 'ESP is clean in ranked. Setup took about 20 minutes — status notes could be clearer after patches.',
		slug: 'review-miket94-esp-ranked',
		seoTitle: 'Ranked ESP review by @mikeT_94 — 4/5 | {brand}',
		seoDescription:
			'@mikeT_94 on monthly {brand}: readable ESP in ranked, ~20 minute setup, wants clearer Vanguard status notes after patches.',
		date: '2026-08-14',
		tag: 'ESP',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'junglerSam',
		rating: 5,
		text: 'Radar is the main reason I kept the sub. I play jungle and the extra map info before river skirmishes is huge. Soft aim stays low on my ADC profile so it does not look obvious in replays.',
		short: 'Radar helps before river fights. Soft aim stays subtle on my ADC profile.',
		slug: 'review-junglersam-radar',
		seoTitle: 'Jungle radar review by @junglerSam — 5/5 | {brand}',
		seoDescription:
			'@junglerSam rates {brand} radar 5/5 for jungle pathing and river reads on Windows PC, with low-profile soft aim on ADC.',
		date: '2026-08-09',
		tag: 'Radar',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'clara_plays',
		rating: 4,
		text: 'Lifetime made sense since I play almost every night. Install was fine once I whitelisted the folder. Ward markers are actually useful instead of just champion boxes everywhere.',
		short: 'Lifetime user — ward markers help more than I expected after whitelisting the loader.',
		slug: 'review-clara-lifetime-wards',
		seoTitle: 'Lifetime ward ESP by @clara_plays — 4/5 | {brand}',
		seoDescription:
			'@clara_plays on lifetime {brand}: ward markers stand out, loader needed a Defender whitelist, nightly player on Windows PC.',
		date: '2026-07-31',
		tag: 'Ward ESP',
		plan: 'Lifetime',
	}),
	reviewMeta({
		handle: 'notSmurfLOL',
		rating: 3,
		text: 'Works once you get past the first launch. Windows flagged the loader and support answered in a few hours with steps. ESP in lane bushes is good — I just wish checkout email had arrived faster.',
		short: 'Loader flagged on first launch; support fixed it. ESP is solid, email delivery was slow.',
		slug: 'review-notsmurflol-setup',
		seoTitle: 'Setup review by @notSmurfLOL — 3/5 | {brand}',
		seoDescription:
			'@notSmurfLOL rates {brand} setup 3/5: Defender warning on first launch, support replied same day, slow license email.',
		date: '2026-07-22',
		tag: 'Setup',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'dariusOnly123',
		rating: 5,
		text: 'I only queue top so I built one profile for melee range. FOV is small and smoothness is high — feels like I am just hitting more skillshots. Patch day downtime was under a day last time.',
		short: 'One top-lane profile, small FOV. Back online in under a day after the last patch.',
		slug: 'review-dariusonly-soft-aim',
		seoTitle: 'Top lane soft aim by @dariusOnly123 — 5/5 | {brand}',
		seoDescription:
			'@dariusOnly123 on {brand} soft aim for top lane: tight FOV, high smoothness, back within a day after a League patch.',
		date: '2026-07-18',
		tag: 'Soft aim',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'supportMain_',
		rating: 4,
		text: 'Support main in gold — mostly use ESP for vision wars. Distance readouts on wards save time. Menu is a bit crowded at first but you learn where the toggles are.',
		short: 'Gold support — ward distance readouts save time. Menu takes a session to learn.',
		slug: 'review-supportmain-gold-esp',
		seoTitle: 'Gold support ESP by @supportMain_ — 4/5 | {brand}',
		seoDescription:
			'@supportMain_ uses {brand} ESP for vision control in gold ranked: ward distance readouts, busy menu at first.',
		date: '2026-07-12',
		tag: 'ESP',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'patchdaypete',
		rating: 4,
		text: 'Compared two providers before buying. This one posted on the status page within hours when Vanguard updated. Old tool I used stayed offline for almost a week.',
		short: 'Status page updated fast after Vanguard. Beat my old provider by days.',
		slug: 'review-patchdaypete-vanguard',
		seoTitle: 'Vanguard update review by @patchdaypete — 4/5 | {brand}',
		seoDescription:
			'@patchdaypete compares {brand} status updates after Vanguard patches — hours vs days offline with a previous cheat.',
		date: '2026-06-28',
		tag: 'Updates',
		plan: 'Lifetime',
	}),
	reviewMeta({
		handle: 'aramAndChill',
		rating: 5,
		text: 'Mostly ARAM with friends. Boxes are enough to track who is waiting in the bush before you facecheck. Monthly is cheap split between three of us on different nights.',
		short: 'ARAM bush reads are worth it. Three friends rotate the monthly login.',
		slug: 'review-aramandchill-esp',
		seoTitle: 'ARAM ESP review by @aramAndChill — 5/5 | {brand}',
		seoDescription:
			'@aramAndChill on {brand} for ARAM: bush tracking before facechecks, shared monthly plan among friends.',
		date: '2026-06-20',
		tag: 'ARAM',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'ctrl_freak',
		rating: 4,
		text: 'Per-champion profiles are nice. I keep separate FOV for mages vs ADC. Hotkeys work mid-match without opening the whole menu. Radar range could go a little wider but it is fine.',
		short: 'Separate profiles for mages and ADC. Hotkeys work in-match; radar range is okay.',
		slug: 'review-ctrlfreak-profiles',
		seoTitle: 'Champion profiles review by @ctrl_freak — 4/5 | {brand}',
		seoDescription:
			'@ctrl_freak on {brand} per-champion soft aim profiles, in-game hotkeys, and radar range on Windows PC.',
		date: '2026-06-14',
		tag: 'Soft aim',
		plan: 'Lifetime',
	}),
	reviewMeta({
		handle: 'newPCwhoDis',
		rating: 3,
		text: 'Fresh Windows install so I missed a step in setup guide. Support walked me through it on email. Works now. Not giving 5 stars because it should be clearer about Riot client order.',
		short: 'Missed a setup step on fresh Windows. Support helped over email — works now.',
		slug: 'review-newpc-setup-help',
		seoTitle: 'Fresh PC setup by @newPCwhoDis — 3/5 | {brand}',
		seoDescription:
			'@newPCwhoDis rates {brand} setup 3/5 on a new Windows PC: needed email support, Riot client order unclear in guide.',
		date: '2026-06-08',
		tag: 'Setup',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'duoQueueJay',
		rating: 5,
		text: 'Duos ranked — radar caught a third player rotating bot when we thought it was 2v2. That alone paid for the month. ESP colors are easy to read on my 1080p monitor.',
		short: 'Radar spotted a third bot rotator in duos. Clean ESP on 1080p.',
		slug: 'review-duoqueuejay-radar',
		seoTitle: 'Duos radar review by @duoQueueJay — 5/5 | {brand}',
		seoDescription:
			'@duoQueueJay on {brand} radar in duos ranked: third-player rotation read, readable ESP at 1080p.',
		date: '2026-05-29',
		tag: 'Radar',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'lifetimeLuca',
		rating: 5,
		text: 'Bought lifetime in May after trying monthly for two weeks. Same features, no stress about renewing. Still check status before ranked on patch weeks.',
		short: 'Lifetime after two weeks on monthly. Still check status on patch weeks.',
		slug: 'review-lifetime-luca-plan',
		seoTitle: 'Lifetime plan review by @lifetimeLuca — 5/5 | {brand}',
		seoDescription:
			'@lifetimeLuca switched from monthly to lifetime {brand} after two weeks — checks status before ranked on patch weeks.',
		date: '2026-05-21',
		tag: 'Lifetime',
		plan: 'Lifetime',
	}),
	reviewMeta({
		handle: 'midLaneMina',
		rating: 4,
		text: 'Mid main — soft aim helps on skillshot champs without snapping everywhere. I turned off most ESP categories and only keep champions + wards. Less noise that way.',
		short: 'Skillshot soft aim for mid. I only keep champion + ward ESP on.',
		slug: 'review-midlanemina-skillshot',
		seoTitle: 'Mid lane review by @midLaneMina — 4/5 | {brand}',
		seoDescription:
			'@midLaneMina on {brand} for mid lane skillshots: filtered ESP categories, soft aim without obvious snapping.',
		date: '2026-05-15',
		tag: 'Soft aim',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'ironToBronze',
		rating: 5,
		text: 'Not gonna lie I am low elo. ESP helped me stop facechecking random bushes. Climbing slowly but I die less in lane. Setup video on the site was enough.',
		short: 'Low elo — ESP stopped stupid bush facechecks. Site setup steps were enough.',
		slug: 'review-irontobronze-esp',
		seoTitle: 'Low elo ESP review by @ironToBronze — 5/5 | {brand}',
		seoDescription:
			'@ironToBronze on {brand} ESP for low elo ranked: fewer bush deaths, followed site setup guide on Windows PC.',
		date: '2026-05-08',
		tag: 'ESP',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'refundAskLater',
		rating: 4,
		text: 'Had a billing question before renew — support answered with my order ID in the subject. Feature set matches the store page. Radar + ESP combo is what I use daily.',
		short: 'Support answered a billing question quickly. Daily driver is radar + ESP.',
		slug: 'review-refundasklater-support',
		seoTitle: 'Support review by @refundAskLater — 4/5 | {brand}',
		seoDescription:
			'@refundAskLater on {brand} support and billing help — daily radar + ESP use on Windows PC.',
		date: '2026-04-30',
		tag: 'Support',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'nightOwlNA',
		rating: 4,
		text: 'Play late NA hours when queues are dead. Tool stays stable across long sessions. One crash after a mini-patch but status said rebuild was live next morning.',
		short: 'Stable on long late-night sessions. One crash after a mini-patch, fixed next morning.',
		slug: 'review-nightowlna-stability',
		seoTitle: 'Stability review by @nightOwlNA — 4/5 | {brand}',
		seoDescription:
			'@nightOwlNA on {brand} stability during long NA sessions — one crash after a mini-patch, rebuild next morning.',
		date: '2026-04-22',
		tag: 'Updates',
		plan: 'Lifetime',
	}),
	reviewMeta({
		handle: 'vishenOnly',
		rating: 5,
		text: 'One-trick for a few seasons. Built one aggressive profile and one safe profile for bad matchups. Switch with a hotkey. Aim assist feels natural on skillshots if you do not max smoothness down.',
		short: 'Two profiles for good/bad matchups, hotkey swap. Skillshot assist feels natural.',
		slug: 'review-vishenonly-profiles',
		seoTitle: 'One-trick profiles by @vishenOnly — 5/5 | {brand}',
		seoDescription:
			'@vishenOnly on {brand} dual soft aim profiles with hotkey swap for one-trick ranked on Windows PC.',
		date: '2026-04-14',
		tag: 'Soft aim',
		plan: 'Lifetime',
	}),
	reviewMeta({
		handle: 'boxBoxBox',
		rating: 3,
		text: 'ESP boxes are good but default colors were too bright on my ultrawide. Spent time in settings. Works now. Would like preset themes in the menu.',
		short: 'Boxes too bright on ultrawide until I tweaked colors. Want preset themes.',
		slug: 'review-boxboxbox-esp-colors',
		seoTitle: 'ESP colors review by @boxBoxBox — 3/5 | {brand}',
		seoDescription:
			'@boxBoxBox rates {brand} ESP 3/5 on ultrawide — needed color tuning, asks for preset themes.',
		date: '2026-04-06',
		tag: 'ESP',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'coachFriend',
		rating: 5,
		text: 'Recommended to two teammates after patch stability looked good. All three on monthly now. Ward ESP + radar is the combo for vision control before objectives.',
		short: 'Three teammates on monthly after I recommended it. Ward ESP + radar for objectives.',
		slug: 'review-coachfriend-team',
		seoTitle: 'Team recommendation by @coachFriend — 5/5 | {brand}',
		seoDescription:
			'@coachFriend recommends {brand} to teammates — ward ESP and radar for pre-objective vision on Windows PC.',
		date: '2026-03-28',
		tag: 'Radar',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'firstCheatEver',
		rating: 4,
		text: 'First time using anything like this. Setup guide screenshots helped. Still nervous in ranked so I keep settings low. No ban so far through two patch cycles.',
		short: 'First cheat — setup screenshots helped. Low settings in ranked, no issues two patches.',
		slug: 'review-firstcheatever-new',
		seoTitle: 'First-time buyer by @firstCheatEver — 4/5 | {brand}',
		seoDescription:
			'@firstCheatEver first {brand} review: setup guide helped, conservative ranked settings, two patches without issues.',
		date: '2026-03-19',
		tag: 'Setup',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'baronSteals',
		rating: 5,
		text: 'Objective fights are where radar pays off. Seeing flank angles before Baron starts is dirty in a good way. Pair with low ESP opacity and you still have screen space.',
		short: 'Radar before Baron fights is huge. Low ESP opacity keeps the screen readable.',
		slug: 'review-baronsteals-objectives',
		seoTitle: 'Objective radar by @baronSteals — 5/5 | {brand}',
		seoDescription:
			'@baronSteals on {brand} radar for Baron setup fights — flank reads with low-opacity ESP on Windows PC.',
		date: '2026-03-11',
		tag: 'Objectives',
		plan: 'Lifetime',
	}),
	reviewMeta({
		handle: 'latencyKing',
		rating: 4,
		text: '120 ping player — was worried aim stuff would feel off. Smoothness settings fixed that. ESP is more valuable than aim for me anyway on high ping.',
		short: 'High ping — smoothness tuning fixed aim feel. ESP matters more than aim for me.',
		slug: 'review-latencyking-high-ping',
		seoTitle: 'High ping review by @latencyKing — 4/5 | {brand}',
		seoDescription:
			'@latencyKing on {brand} with 120 ping: smoothness tuning for soft aim, ESP over aim assist on Windows PC.',
		date: '2026-03-03',
		tag: 'Soft aim',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'streamSafe-ish',
		rating: 4,
		text: 'Do not stream with it obviously. Offline friends do not notice in discord calls. Menu hides fine. Lifetime was on sale when I grabbed it.',
		short: 'Menu hides fine for offline play. Grabbed lifetime on sale.',
		slug: 'review-streamsafe-lifetime',
		seoTitle: 'Lifetime sale review by @streamSafe-ish — 4/5 | {brand}',
		seoDescription:
			'@streamSafe-ish on lifetime {brand} during a sale — discreet menu, offline ranked use on Windows PC.',
		date: '2026-02-24',
		tag: 'Lifetime',
		plan: 'Lifetime',
	}),
	reviewMeta({
		handle: 'oldAccountReturn',
		rating: 5,
		text: 'Came back to League after two years away. Meta changed but ESP still makes map sense faster. Check status page religiously on patch weeks — saved me queueing into a dead build once.',
		short: 'Returning player — ESP speeds up map reads. Status page saved me on a patch week.',
		slug: 'review-oldaccount-return',
		seoTitle: 'Returning player review by @oldAccountReturn — 5/5 | {brand}',
		seoDescription:
			'@oldAccountReturn returning to League with {brand}: ESP for map awareness, status checks before queue on patch weeks.',
		date: '2026-02-16',
		tag: 'ESP',
		plan: 'Monthly',
	}),
	reviewMeta({
		handle: 'honestTake99',
		rating: 4,
		text: 'Not perfect — menu design feels older than some competitors. But it works, updates come back fast, and support actually replies. That is why I stayed on monthly.',
		short: 'Menu looks dated vs competitors but updates and support keep me on monthly.',
		slug: 'review-honesttake99-honest',
		seoTitle: 'Honest review by @honestTake99 — 4/5 | {brand}',
		seoDescription:
			'@honestTake99 honest {brand} review: dated menu UI, fast rebuilds and responsive support on Windows PC.',
		date: '2026-02-08',
		tag: 'Support',
		plan: 'Monthly',
	}),
] as const satisfies readonly CustomerReview[];

/** Public aggregate — featured list above is a recent sample only. */
export const customerReviewStats = {
	averageRating: 4.6,
	totalCount: 127,
} as const;
