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
		image?: {
			quality?: number
			domains?: string[]
			providers?: {
				[key: string]: {
					name: string
					provider: string
					options?: {
						baseURL?: string
						[key: string]: unknown
					}
				}
			}
		}
	}

	interface NuxtOptions {
		image?: NuxtConfig["image"]
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
	modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/image", "@nuxt/eslint", "@nuxt/icon", "@nuxtjs/mcp-toolkit"],
	image: {
		providers: {
			placehold: {
				name: "placehold",
				provider: "ipx",
				options: {
					baseURL: "https://placehold.co/48x48"
				}
			}
		},
		domains: ["placehold.co"],
		quality: 80
	},
	runtimeConfig: {
		spotifyClientId: process.env.NUXT_SPOTIFY_CLIENT_ID,
		spotifyClientSecret: process.env.NUXT_SPOTIFY_CLIENT_SECRET,
		unsplashAccessKey: process.env.NUXT_UNSPLASH_ACCESS_KEY,
		public: {
			unsplashBase: process.env.NUXT_UNSPLASH_BASE || "https://api.unsplash.com",
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
		preset: "node-server",
		externals: {
			inline: ["ipx", "ofetch"]
		},
		experimental: {
			openAPI: true
		}
	},
	hooks: {
		// Optional: If you want to force the router to ignore it
		"pages:extend"(pages) {
			// No action usually needed here, but ensures /_mcp is clear
		}
	}
})
