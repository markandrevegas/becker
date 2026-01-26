import { serverQueryContentful } from '../../utils/contentful'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing entry id' })
  }

  return await serverQueryContentful(id)
})
