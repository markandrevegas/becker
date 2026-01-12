import { defineEventHandler, getQuery } from "h3"

interface UnsplashPhoto {
	id: string
	alt_description: string | null
	urls: {
		raw: string
		full: string
		regular: string
		small: string
		thumb: string
	}
	blur_hash: string
}

interface QueryParams {
	query?: string
	orientation?: string
	content_filter?: string
}

export default defineEventHandler(async (event) => {
	// 1. Use the runtime config defined in your nuxt.config.ts
	const config = useRuntimeConfig()
	const UNSPLASH_KEY = config.unsplashAccessKey
	const UNSPLASH_BASE = config.public.unsplashBase

	if (!UNSPLASH_KEY) {
		throw createError({
			statusCode: 500,
			statusMessage: "Unsplash API key is missing."
		})
	}

	try {
		const query = getQuery(event) as QueryParams

		// 2. Use $fetch: It handles JSON parsing and error throwing automatically
		const data = await $fetch<UnsplashPhoto | UnsplashPhoto[]>(`${UNSPLASH_BASE}/photos/random`, {
			headers: {
				Authorization: `Client-ID ${UNSPLASH_KEY}`
			},
			query: {
				query: query.query || "actress african american",
				orientation: query.orientation || "portrait",
				content_filter: query.content_filter || "high",
				count: "1"
			}
		})

		const photo = Array.isArray(data) ? data[0] : data

		if (!photo) {
			throw createError({
				statusCode: 404,
				statusMessage: "No photo found"
			})
		}

		return {
			id: photo.id,
			alt: photo.alt_description || "",
			urls: photo.urls,
			blurhash: photo.blur_hash
		}
	} catch (err: any) {
		if (err.statusCode) throw err

		throw createError({
			statusCode: 500,
			statusMessage: err.message || "Internal Server Error"
		})
	}
})
