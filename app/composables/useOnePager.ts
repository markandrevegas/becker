// composables/useOnePager.ts
export const useOnePager = () => {
  const { getOnePager } = useContentful()
  const ENTRY_ID = 'tvmagv98WHR9YBjGRhG4k'

  const { data, status, error, refresh } = getOnePager(ENTRY_ID)

  return {
    onePager: data,
    status,
    error,
    refresh
  }
}