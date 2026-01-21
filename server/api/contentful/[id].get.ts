import { getContentfulClient } from '../../utils/contentful'

export default defineEventHandler(async (event) => {
  const { id } = event.context.params!
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing id' })
  }

  const client = getContentfulClient()
  return await client.getEntry(id)
})