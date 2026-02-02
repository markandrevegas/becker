// composables/useContentful.ts
import { createClient } from 'contentful'
import type { OnePager } from '~/types/contentful'
import { parseOnePager } from '../utils/contentfulParser'

export const useContentful = () => {
  const config = useRuntimeConfig()

  // Initialize client
  const client = createClient({
    space: config.public.contentfulSpaceId as string,
    accessToken: config.public.contentfulAccessToken as string
  })

  /**
   * Generic fetcher that can be used for any content type
   */
  const getEntry = <T>(id: string, parser: (entry: any) => T) => {
    // Nuxt 4 de-duplicates requests based on this key
    return useAsyncData<T>(`contentful:${id}`, async () => {
      const entry = await client.getEntry(id)
      
      if (!entry) {
        throw createError({
          statusCode: 404,
          statusMessage: `Contentful entry ${id} not found`,
        })
      }

      return parser(entry)
    })
  }

  return {
    client,
    getOnePager: (id: string) => getEntry<OnePager>(id, parseOnePager)
  }
}