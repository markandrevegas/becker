export const useWordPress = () => {
	const config = useRuntimeConfig()

	const apiUrl = config.public.wordpressApiUrl

	if (!apiUrl) {
		throw new Error("WordPress configuration missing")
	}

	const getEntry = <T = any>(contentType: string, slug: string) => {
		return useAsyncData(
			`wordpress-${contentType}-${slug}`,
			() => $fetch<T[]>(`${apiUrl}/${contentType}?slug=${slug}`),
			{
				getCachedData: (key, nuxtApp) => {
					return undefined
				},
				server: false,
				lazy: true
			}
		)
	}

	return {
		getEntry
	}
}