// composables/useContentful.ts
import { createClient } from 'contentful'
import type { OnePager } from '~/types/contentful'
import { parseOnePager } from '../utils/contentfulParser'

export const useContentful = () => {
  const config = useRuntimeConfig()

  const client = createClient({
    space: String(config.public.contentfulSpaceId),
    accessToken: String(config.public.contentfulAccessToken)
  })

  const getOnePager = (id: string) => {
    return useAsyncData<OnePager>(
      `contentful-onepager-${id}`,
      async () => {
        const entry = await client.getEntry(id)
        
        if (!entry) {
          throw new Error(`Contentful entry ${id} not found`)
        }

        return parseOnePager(entry)
      }
    )
  }

  return {
    getOnePager
  }
}