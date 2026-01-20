import { createClient, type SanityClient } from '@sanity/client'

export default defineNuxtPlugin(() => {
  const client: SanityClient = createClient({
    projectId: 'lwgg5n34',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true
  })

  return {
    provide: {
      sanity: client
    }
  }
})
