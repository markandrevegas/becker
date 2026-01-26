// composables/useOnePager.ts
import type { OnePager } from '~/types/contentful'

export const useOnePager = () => {
  const ENTRY_ID = 'tvmagv98WHR9YBjGRhG4k'

  const { data, pending, error } = useAsyncData<OnePager>(
    'one-pager',
    () => $fetch('/api/contentful/' + ENTRY_ID)
  )

  return {
    onePager: data,
    pending,
    error
  }
}
