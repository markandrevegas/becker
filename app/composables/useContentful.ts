// composables/useContentful.ts
import { createClient } from 'contentful'
import type { OnePager } from '~/types/contentful'
import { parseOnePager } from '../utils/contentfulParser'

export const useContentful = () => {
  const config = useRuntimeConfig()
  const spaceId = config.public.contentfulSpaceId as string
  const accessToken = config.public.contentfulAccessToken as string

  if (!spaceId || !accessToken) {
    throw new Error('Contentful configuration missing. SpaceId: '+ !!spaceId + 'Token: ' + !!accessToken)
  }

  const client = createClient({
    space: spaceId,
    accessToken: accessToken
  })
  const getOnePager = (id: string) => {
    return useAsyncData<OnePager>('contentful-' + id, async () => {
      const entry = await client.getEntry(id)
      if (!entry) throw new Error('Entry' + id + ' not found')
      return parseOnePager(entry)
    })
  }

  return { getOnePager }
}