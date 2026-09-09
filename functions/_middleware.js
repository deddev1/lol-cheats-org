import CANNIBAL_REDIRECTS from './cannibal-redirects.json';

const CANONICAL_ORIGIN = 'https://lolcheats.org';
const APEX_HOST = 'lolcheats.org';
const WWW_HOST = 'www.lolcheats.org';

/** Legacy domains → canonical apex (301). */
const LEGACY_HOSTS = new Set([
	'thelolhack.org',
	'www.thelolhack.org',
	'bestlolcheats.com',
	'www.bestlolcheats.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

// Keep in sync with public/_redirects (which preserves query strings by default, as we do below).
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	'/lol-hacks': '/',
	'/lol-esp-cheat': '/lol-esp/',
	'/lol-esp-cheat/': '/lol-esp/',
	'/lol-aimbot-cheat': '/lol-aimbot/',
	'/lol-aimbot-cheat/': '/lol-aimbot/',
	'/best-lol-cheats': '/',
	'/best-lol-cheats/': '/',
	'/lol-cheats-2026': '/',
	'/lol-cheats-2026/': '/',
	'/undetected-lol-cheats': '/',
	'/undetected-lol-cheats/': '/',
	'/lol-mod-menu': '/',
	'/lol-mod-menu/': '/',
	'/lol-unlock-all': '/',
	'/lol-unlock-all/': '/',
	'/lol-soft-aim': '/lol-aimbot/',
	'/lol-soft-aim/': '/lol-aimbot/',
	'/lol-wallhack': '/lol-esp/',
	'/lol-wallhack/': '/lol-esp/',
	'/lol-cheat-download': '/setup/',
	'/lol-cheat-download/': '/setup/',
	'/vanguard-bypass': '/updates/',
	'/vanguard-bypass/': '/updates/',
	'/reviews/lol-radar-cheat-review-vanlifefn': '/reviews/lol-radar-cheat-review-vanlifelol/',
	'/reviews/lol-radar-cheat-review-vanlifefn/': '/reviews/lol-radar-cheat-review-vanlifelol/',
	'/reviews/lol-radar-cheat-review-vanlifewz': '/reviews/lol-radar-cheat-review-vanlifelol/',
	'/reviews/lol-radar-cheat-review-vanlifewz/': '/reviews/lol-radar-cheat-review-vanlifelol/',
	'/reviews/lol-controller-soft-aim-review-ctrl-player99': '/reviews/lol-soft-aim-review-ctrl-player99/',
	'/reviews/lol-controller-soft-aim-review-ctrl-player99/': '/reviews/lol-soft-aim-review-ctrl-player99/',
	'/faq/herbivore-and-carnivore-matches': '/faq/ranked/',
	'/faq/herbivore-and-carnivore-matches/': '/faq/ranked/',
	'/faq/how-to-contact-support': '/support/',
	'/faq/how-to-contact-support/': '/support/',
	'/faq/what-is-an-lol-wallhack': '/faq/included/',
	'/faq/what-is-an-lol-wallhack/': '/faq/included/',
	'/faq/does-lol-cheats-include-radar-cheat': '/faq/included/',
	'/faq/does-lol-cheats-include-radar-cheat/': '/faq/included/',
	'/faq/vanguard-anti-cheat-and-lol-cheats': '/faq/undetected/',
	'/faq/vanguard-anti-cheat-and-lol-cheats/': '/faq/undetected/',
	'/faq/buy-undetected-lol-cheats-windows-pc': '/pricing/',
	'/faq/buy-undetected-lol-cheats-windows-pc/': '/pricing/',
	'/reviews/lol-esp-growth-run-review-buildsr4k': '/reviews/lol-esp-aram-review-buildsr4k/',
	'/reviews/lol-esp-growth-run-review-buildsr4k/': '/reviews/lol-esp-aram-review-buildsr4k/',
	'/reviews/lol-esp-zero-build-review-buildsr4k': '/reviews/lol-esp-aram-review-buildsr4k/',
	'/reviews/lol-esp-zero-build-review-buildsr4k/': '/reviews/lol-esp-aram-review-buildsr4k/',
	'/blog/lol-patch-notes-guide': '/blog/patch-notes/',
	'/blog/lol-patch-notes-guide/': '/blog/patch-notes/',
	'/blog/lol-skin-leaks-guide': '/blog/skin-guide/',
	'/blog/lol-skin-leaks-guide/': '/blog/skin-guide/',
	'/blog/lol-champion-tier-list': '/blog/tier-list/',
	'/blog/lol-champion-tier-list/': '/blog/tier-list/',
	'/blog/lol-aram-aggressive-strategies': '/blog/aram-meta/',
	'/blog/lol-aram-aggressive-strategies/': '/blog/aram-meta/',
	'/blog/lol-competitive-meta-guide': '/blog/competitive-meta/',
	'/blog/lol-competitive-meta-guide/': '/blog/competitive-meta/',
	'/blog/lol-loot-routes-guide': '/blog/jungle-routes/',
	'/blog/lol-loot-routes-guide/': '/blog/jungle-routes/',
	'/blog/lol-pro-settings-guide': '/blog/pro-settings/',
	'/blog/lol-pro-settings-guide/': '/blog/pro-settings/',
	'/blog/lol-warmup-maps-ranked': '/blog/warmup/',
	'/blog/lol-warmup-maps-ranked/': '/blog/warmup/',
	'/blog/lol-cheats-complete-guide-2026': '/blog/cheats-guide/',
	'/blog/lol-cheats-complete-guide-2026/': '/blog/cheats-guide/',
	'/blog/lol-cheats-buyers-guide': '/blog/buy-cheats/',
	'/blog/lol-cheats-buyers-guide/': '/blog/buy-cheats/',
	'/blog/lol-cheats-2026-whats-new': '/blog/cheats-2026/',
	'/blog/lol-cheats-2026-whats-new/': '/blog/cheats-2026/',
	'/blog/lol-aimbot-settings-guide': '/blog/aimbot-settings/',
	'/blog/lol-aimbot-settings-guide/': '/blog/aimbot-settings/',
	'/blog/lol-esp-wallhack-explained': '/blog/esp-wallhack/',
	'/blog/lol-esp-wallhack-explained/': '/blog/esp-wallhack/',
	'/blog/undetected-lol-cheats-vanguard': '/blog/undetected/',
	'/blog/undetected-lol-cheats-vanguard/': '/blog/undetected/',
	'/blog/lol-cheats-vs-cheatvault-comparison': '/blog/vs-budget/',
	'/blog/lol-cheats-vs-cheatvault-comparison/': '/blog/vs-budget/',
	'/blog/elitefn-vs-lol-cheats-two-week-test': '/blog/cheat-review/',
	'/blog/elitefn-vs-lol-cheats-two-week-test/': '/blog/cheat-review/',
	'/blog/lol-cheats-vs-ghostware-features-pricing': '/blog/vs-esp-only/',
	'/blog/lol-cheats-vs-ghostware-features-pricing/': '/blog/vs-esp-only/',
	'/faq/what-are-lol-cheats': '/faq/what-is/',
	'/faq/what-are-lol-cheats/': '/faq/what-is/',
	'/faq/are-lol-cheats-undetected-in-2026': '/faq/undetected/',
	'/faq/are-lol-cheats-undetected-in-2026/': '/faq/undetected/',
	'/faq/ranked-and-normal-games': '/faq/ranked/',
	'/faq/ranked-and-normal-games/': '/faq/ranked/',
	'/faq/esp-wallhack-radar-or-aimbot': '/faq/included/',
	'/faq/esp-wallhack-radar-or-aimbot/': '/faq/included/',
	'/faq/how-are-licenses-delivered': '/faq/delivery/',
	'/faq/how-are-licenses-delivered/': '/faq/delivery/',
	'/faq/where-to-check-updates': '/faq/status/',
	'/faq/where-to-check-updates/': '/faq/status/',
	'/faq/how-to-install-lol-cheats': '/faq/install/',
	'/faq/how-to-install-lol-cheats/': '/faq/install/',
	'/faq/monthly-vs-lifetime-license': '/faq/plans/',
	'/faq/monthly-vs-lifetime-license/': '/faq/plans/',
	'/faq/can-i-get-a-refund': '/faq/refund/',
	'/faq/can-i-get-a-refund/': '/faq/refund/',
	'/faq/will-lol-cheats-get-me-banned': '/faq/ban-risk/',
	'/faq/will-lol-cheats-get-me-banned/': '/faq/ban-risk/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		// Browser always revalidates; Cloudflare edge caches briefly for TTFB.
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
	}
}

/** Flat .xml sitemaps — redirect any other *.xml/ trailing-slash URL (locale sitemaps). */
function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Add trailing slash for directory-style paths (matches Astro trailingSlash: 'always'). */
function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect =
		PATH_REDIRECTS[url.pathname] ??
		CANNIBAL_REDIRECTS[url.pathname] ??
		xmlTrailingSlashRedirect(url.pathname) ??
		trailingSlashRedirect(url.pathname);
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');
	const isImmutableAsset = /\.(?:webp|png|jpe?g|gif|svg|ico|woff2?|ttf|eot)$/i.test(url.pathname);

	if (isImmutableAsset) {
		headers.set('Cache-Control', 'public, max-age=31536000, immutable');
		headers.set('CDN-Cache-Control', 'public, s-maxage=31536000, immutable');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=31536000, immutable');
	}

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
