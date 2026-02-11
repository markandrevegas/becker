import { createClient } from "contentful"

export const getContentfulClient = () => {
	const config = useRuntimeConfig()

	return createClient({
		space: config.public.contentfulSpaceId,
		environment: config.public.contentfulEnv,
		accessToken: config.contentfulDeliveryToken
	})
}
