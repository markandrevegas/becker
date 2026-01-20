import type { OnePagerResponse } from '~/types/onePager'

export const useOnePager = () => {
  const config = useRuntimeConfig()

  const fetchOnePager = async (): Promise<OnePagerResponse> => {
    const onePager = await $fetch<OnePagerResponse>(
      `${config.public.strapiUrl}/api/one-pager`
    )
    console.log('OnePager singleton:', onePager)
    return onePager
  }

  return { fetchOnePager }
}
