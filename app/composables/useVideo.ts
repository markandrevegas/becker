export const useVideo = () => {
	const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

	const getCacheKey = (query: string): string => {
		return `video_cache_${query.replace(/\s+/g, "_")}`
	}

	const getRandomVideo = async (searchQuery: string = "acting talent") => {
		const key = getCacheKey(searchQuery)

		// 1. Check LocalStorage Cache
		if (import.meta.client) {
			const cached = localStorage.getItem(key)
			if (cached) {
				try {
					const { video, timestamp } = JSON.parse(cached)
					const now = Date.now()

					if (now - timestamp < CACHE_DURATION) {
						console.log("[useVideo] Loading from cache")
						return { data: video, error: null }
					}
					localStorage.removeItem(key)
				} catch (e) {
					localStorage.removeItem(key)
				}
			}
		}

		// 2. Fetch from your Proxy API
		try {
			const video = await $fetch("/api/video/random", {
				query: { query: searchQuery }
			})

			// 3. Store in Cache
			if (import.meta.client && video) {
				localStorage.setItem(
					key,
					JSON.stringify({
						video,
						timestamp: Date.now()
					})
				)
			}

			return { data: video, error: null }
		} catch (err) {
			console.error("[useVideo] Fetch error:", err)
			return { data: null, error: err }
		}
	}

	return { getRandomVideo }
}
