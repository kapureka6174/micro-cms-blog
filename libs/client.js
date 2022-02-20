import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'kapureka6174',
  apiKey: process.env.API_KEY,
})
