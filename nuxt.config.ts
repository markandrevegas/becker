import { defineNuxtConfig } from "nuxt/config"
import type { NitroRouteConfig } from 'nitropack'

// Extend the NuxtConfig type
declare module "nuxt/schema" {
	interface NuxtConfig {
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
			provider: string
			quality?: number
			domains?: string[]
		}
		nitro?: {
			preset?: string
			prerender?: {
				crawlLinks?: boolean
				routes?: string[]
			}
			externals?: {
				inline?: string[]
			}
			experimental?: {
				openAPI?: boolean
			}
			routeRules?: Record<string, NitroRouteConfig>
		}
	}
}

export default defineNuxtConfig({
	ssr: true,
	app: {
		baseURL: '/becker/',
		head: {
			htmlAttrs: {
				lang: "en"
			}, 	
			link: [
				{ rel: "icon", type: "image/png", href: "/becker/assets/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/becker/assets/favicon.svg" },
        { rel: "shortcut icon", href: "/becker/assets/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/becker/assets/apple-touch-icon.png" },
        { rel: "manifest", href: "/becker/assets/site.webmanifest" },
        { rel: "preconnect", href: "https://m.imdb.com", crossorigin: "" }
			],
			meta: [{ name: "apple-mobile-web-app-title", content: "Deana Becker" }]
		},
	},
	image: {
    provider: 'ipx', 
    domains: ['images.ctfassets.net', 'm.imdb.com']
  },
	future: {
		compatibilityVersion: 4
	},
	features: {
    inlineStyles: true
  },
	compatibilityDate: "2025-01-12",
	devtools: { enabled: true },
	css: ["@/assets/css/tailwind.css"],
	modules: [
		"@nuxtjs/color-mode",
		"@nuxtjs/tailwindcss",
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxt/eslint",
		"@nuxt/icon",
		"nuxt-schema-org",
		"@nuxt/scripts"
	],
	runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    }
  },
	nitro: {
		preset: "github-pages",
		prerender: {
			crawlLinks: true,
      routes: ['/']
    },
		routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
			'/**': {
        headers: {
          'Content-Security-Policy': "style-src 'self' 'unsafe-inline'"
        }
      }
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
