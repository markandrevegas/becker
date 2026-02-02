// composables/useOnePager.ts
export const useOnePager = () => {
  const { getOnePager } = useContentful()
  const ENTRY_ID = 'tvmagv98WHR9YBjGRhG4k'

  return getOnePager(ENTRY_ID)
}