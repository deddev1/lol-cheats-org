/** Old → new slug maps for blog guides and FAQ answers. Used by sync-slug-redirects.mjs */
export const BLOG_SLUG_RENAMES = {
	'lol-patch-notes-guide': 'patch-notes',
	'lol-skin-leaks-guide': 'skin-guide',
	'lol-champion-tier-list': 'tier-list',
	'lol-aram-aggressive-strategies': 'aram-meta',
	'lol-competitive-meta-guide': 'competitive-meta',
	'lol-loot-routes-guide': 'jungle-routes',
	'lol-pro-settings-guide': 'pro-settings',
	'lol-warmup-maps-ranked': 'warmup',
	'lol-cheats-complete-guide-2026': 'cheats-guide',
	'lol-cheats-buyers-guide': 'buy-cheats',
	'lol-cheats-2026-whats-new': 'cheats-2026',
	'lol-aimbot-settings-guide': 'aimbot-settings',
	'lol-esp-wallhack-explained': 'esp-wallhack',
	'undetected-lol-cheats-vanguard': 'undetected',
	'lol-cheats-vs-cheatvault-comparison': 'vs-budget',
	'elitefn-vs-lol-cheats-two-week-test': 'cheat-review',
	'lol-cheats-vs-ghostware-features-pricing': 'vs-esp-only',
};

/** Legacy Fortnite-era blog URLs → current short slugs */
export const LEGACY_BLOG_REDIRECTS = {
	'/blog/patch-notes-buffs-nerfs-vaults': 'patch-notes',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': 'skin-guide',
	'/blog/hammer-ar-s-tier-data-analysis': 'tier-list',
	'/blog/zero-build-meta-broken-aggressive-strategies': 'aram-meta',
	'/blog/fncs-meta-watch-community-event-drops': 'competitive-meta',
	'/blog/secret-loot-routes-full-gold': 'jungle-routes',
	'/blog/bugha-settings-pro-setup': 'pro-settings',
	'/blog/creative-warmup-maps-pros-use': 'warmup',
};

export const FAQ_SLUG_RENAMES = {
	'what-are-lol-cheats': 'what-is',
	'are-lol-cheats-undetected-in-2026': 'undetected',
	'ranked-and-normal-games': 'ranked',
	'esp-wallhack-radar-or-aimbot': 'included',
	'how-are-licenses-delivered': 'delivery',
	'where-to-check-updates': 'status',
	'how-to-install-lol-cheats': 'install',
	'monthly-vs-lifetime-license': 'plans',
	'can-i-get-a-refund': 'refund',
	'will-lol-cheats-get-me-banned': 'ban-risk',
};
