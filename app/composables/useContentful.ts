export const useContentful = () => {
  const getEntry = async <T = any>(id: string) => {
    return await $fetch<T>('/api/contentful/' + id)
  }

  return { getEntry }
}