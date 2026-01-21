import { getContentfulClient } from '../../utils/contentful'

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const client = getContentfulClient()

  return await client.getEntry(id)
})
