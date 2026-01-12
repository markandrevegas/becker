import { defineEventHandler, createError, getQuery } from "h3"

export default defineEventHandler(async (event) => {
	const PEXELS_KEY = process.env.PEXELS_ACCESS_KEY

	const query = getQuery(event)
	const searchQuery = query.query || "abstract"
	const randomPage = Math.floor(Math.random() * 100) + 1

	try {
		const url = "https://api.pexels.com/videos/search?query=" + searchQuery + "&per_page=1&page=" + randomPage + "&orientation=portrait"

		const res = await fetch(url, {
			headers: { Authorization: PEXELS_KEY || "" }
		})

		if (!res.ok) {
			throw createError({
				statusCode: res.status,
				statusMessage: "Pexels API Error"
			})
		}

		const data = await res.json()

		if (!data.videos || data.videos.length === 0) {
			throw createError({
				statusCode: 404,
				statusMessage: "No video found for this query"
			})
		}

		// Since we requested per_page=1, we just take the first item
		const video = data.videos[0]

		return {
			id: video.id,
			image: video.image,
			duration: video.duration,
			video_url: video.video_files.find((f: any) => f.quality === "hd")?.link || video.video_files[0].link,
			user: video.user.name
		}
	} catch (err: any) {
		if (err.statusCode) throw err

		throw createError({
			statusCode: 500,
			statusMessage: err.message || "Internal Server Error"
		})
	}
})
