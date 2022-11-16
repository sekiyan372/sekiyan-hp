import { createClient } from 'microcms-js-sdk'

export const microcmsClient = createClient({
  serviceDomain: 'service-domain',
  apiKey: process.env.MICROCMS_API_KEY ?? '',
})
