// composables/useContentful.ts
import { createClient } from 'contentful'

export const useContentful = () => {
  const config = useRuntimeConfig()
  const spaceId = config.public.contentfulSpaceId
  const accessToken = config.public.contentfulAccessToken

  if (!spaceId || !accessToken) {
    throw new Error('Contentful configuration missing. SpaceId: '+ !!spaceId + 'Token: ' + !!accessToken)
  }

  const client = createClient({
    space: spaceId || '',
    accessToken: accessToken || ''
  })
  const getOnePager = (id: string) => {
    return useAsyncData('contentful-' + id, async () => {
      const entry = await client.getEntry(id)
      return entry
    })
  }

  return { getOnePager }
}