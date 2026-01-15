import { defineNuxtConfig } from "nuxt/config"
import tsconfigPaths from "vite-tsconfig-paths"

// Extend the NuxtConfig type
declare module "nuxt/schema" {
	interface NuxtConfig {
		fonts?: {
			provider?: string
			assets?: {
				[key: string]: unknown
			}
			families?: Array<{
				name: string
				weights?: number[]
				styles?: string[]
				subsets?: string[]
				variants?: string[]
				[key: string]: unknown
			}>
		}
	}
}

export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
				{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
				{ rel: "shortcut icon", href: "/favicon.ico" },
				{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
				{ rel: "manifest", href: "/site.webmanifest" }
			],
			meta: [{ name: "apple-mobile-web-app-title", content: "Scratch" }]
		}
	},
	future: {
		compatibilityVersion: 4
	},
	compatibilityDate: "2025-01-12",
	devtools: { enabled: true },
	css: ["@/assets/css/tailwind.css"],
	vite: {
		plugins: [tsconfigPaths()]
	},
	modules: [
		"@nuxtjs/color-mode",
		"@nuxtjs/tailwindcss",
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxt/eslint",
		"@nuxt/icon",
		"@nuxtjs/mcp-toolkit",
		"nuxt-schema-org",
		"@nuxt/scripts"
	],
	runtimeConfig: {
		public: {
			fonts: {
				selfHosted: false
			}
		}
	},
	fonts: {
		provider: "google",
		assets: {},
		families: [
			{
				name: "Jost",
				weights: [100, 200, 300, 400, 500, 600, 700]
			},
			{
				name: "Inter",
				weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
			},
			{
				name: "Cormorant Garamond",
				weights: [300, 400, 500, 600, 700],
				styles: ["normal", "italic"]
			}
		]
	},
	nitro: {
		preset: "static",
		externals: {
			inline: ["ipx", "ofetch"]
		},
		experimental: {
			openAPI: true
		},
		logging: {
			level: 1
		}
	},
	hooks: {
		"pages:extend"(pages) {}
	},
	site: {
		url: "https://deanajbecker.com",
		name: "My Awesome App"
	},
	schemaOrg: {
		identity: {
			type: "Organization",
			name: "Deana J. Becker - SAG -AFTRA",
			logo: "/logo.png"
		}
	},
	scripts: {
		registry: {
			googleAnalytics: {
				id: process.env.NUXT_PUBLIC_GTAG_ID,
				queryParams: {
					debug_mode: true
				}
			}
		}
	}
})
