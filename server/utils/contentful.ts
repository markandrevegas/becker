import { createClient } from 'contentful'

export function serverQueryContentful(entryId: string) {
  const config = useRuntimeConfig()

  const client = createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.accessToken
  })

  return client.getEntry(entryId)
}
