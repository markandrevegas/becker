// composables/useContentful.ts
import type { OnePager } from '~/types/contentful'
import { parseOnePager } from '../utils/contentfulParser'

export const useContentful = () => {
  const getOnePager = (id: string) => {
    return useAsyncData<OnePager>(
      `contentful-onepager-${id}`,
      async () => {
        const raw = await $fetch<any>(`/api/contentful/${id}`)
        return parseOnePager(raw)
      }
    )
  }

  return {
    getOnePager
  }
}
