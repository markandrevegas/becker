import { defineEventHandler, createError, getQuery, type H3Event } from 'h3'

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

export default defineEventHandler(async (event: H3Event) => {
  const UNSPLASH_KEY = process.env.NUXT_UNSPLASH_ACCESS_KEY
  const UNSPLASH_BASE = process.env.NUXT_UNSPLASH_BASE || "https://api.unsplash.com"

  // Check for API key early
  if (!UNSPLASH_KEY) {
    throw createError({
      statusCode: 500,
      statusMessage: "Unsplash API key is missing in environment variables."
    })
  }

  try {
    const query = getQuery(event) as QueryParams

    const params = new URLSearchParams({
      query: query.query || "actress african american",
      orientation: query.orientation || "portrait",
      content_filter: query.content_filter || "high",
      count: "1"
    })

    const url = `${UNSPLASH_BASE}/photos/random?${params.toString()}`

    const res = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`
      }
    })

    if (!res.ok) {
      const msg = await res.text()
      throw createError({
        statusCode: res.status,
        statusMessage: msg || "Unsplash API Error"
      })
    }

    const json = await res.json()
    // Unsplash returns an array when 'count' is used
    const photo: UnsplashPhoto = Array.isArray(json) ? json[0] : json

    return {
      id: photo.id,
      alt: photo.alt_description || "",
      urls: photo.urls,
      blurhash: photo.blur_hash
    }
  } catch (err: any) {
    // Re-throw if it's already an H3 error (from the res.ok check)
    if (err.statusCode) throw err

    // Otherwise, create a new 500 error
    throw createError({
      statusCode: 500,
      statusMessage: err.message || "Internal Server Error"
    })
  }
})