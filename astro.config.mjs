// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { brandStudioPlugin } from './scripts/brand-studio/vite-plugin.mjs';

// Static Cloudflare Pages site — no deployment adapter.
// Do not add @astrojs/cloudflare; sitemaps and HTML must emit to dist/ root.
// https://astro.build/config
export default defineConfig({
	site: 'https://lolcheats.org',
	trailingSlash: 'always',
	compressHTML: true,
	devToolbar: { enabled: false },
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	server: {
		host: true,
		port: 4321,
		allowedHosts: true,
	},
	preview: {
		host: true,
		port: 5173,
		allowedHosts: true,
	},
	integrations: [react()],
	build: {
		// 'auto' keeps small styles inline but emits the large Tailwind bundle as a
		// cached external file — 'always' inflated HTML to ~160KB and tanked the
		// text/HTML ratio that SEO checkers score.
		inlineStylesheets: 'auto',
		format: 'directory',
	},
	vite: {
		plugins: [tailwindcss(), brandStudioPlugin()],
		build: {
			cssMinify: true,
			minify: 'terser',
			assetsInlineLimit: 4096,
			target: 'es2022',
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
							return 'react-vendor';
						}
						if (id.includes('i18next') || id.includes('react-i18next')) {
							return 'i18n-vendor';
						}
					},
				},
			},
		},
	},
});
