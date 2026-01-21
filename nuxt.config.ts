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
		site?: {
			url?: string
			name?: string
			[key: string]: unknown
		}
		schemaOrg?: {
			identity?: {
				type?: string
				name?: string
				logo?: string
				[key: string]: unknown
			}
			[key: string]: unknown
		}
		scripts?: {
			registry?: {
				googleAnalytics?: {
					id?: string
					queryParams?: {
						debug_mode?: boolean
						[key: string]: unknown
					}
					[key: string]: unknown
				}
				[key: string]: unknown
			}
			[key: string]: unknown
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
}

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en"
			}, 	
			link: [
				{ rel: "icon", type: "image/png", href: "/assets/favicon-96x96.png", sizes: "96x96" },
				{ rel: "icon", type: "image/svg+xml", href: "/assets/favicon.svg" },
				{ rel: "shortcut icon", href: "/assets/favicon.ico" },
				{ rel: "apple-touch-icon", sizes: "180x180", href: "/assets/apple-touch-icon.png" },
				{ rel: "manifest", href: "/assets/site.webmanifest" }
			],
			meta: [{ name: "apple-mobile-web-app-title", content: "Deana Becker" }]
		}
	},
	image: {
		providers: {
			provider: 'ipx'
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
    contentfulDeliveryToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
		public: {
			contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulEnv: process.env.CONTENTFUL_ENV || 'master',
			strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337',
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
				weights: [100, 200, 300, 400, 500, 600, 700],
				display: "swap"
			},
			{
				name: "Inter",
				weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
				display: "swap"
			},
			{
				name: "Cormorant Garamond",
				weights: [300, 400, 500, 600, 700],
				styles: ["normal", "italic"],
				display: "swap"
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
    googleAnalytics: process.env.NODE_ENV === 'production'
      ? {
          id: process.env.NUXT_PUBLIC_GTAG_ID,
          queryParams: {
            debug_mode: false
          }
        }
      : undefined
		}
	}
})
