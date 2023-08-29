import { linkConfig } from './linkConfig'
import { Client, cacheExchange, fetchExchange } from '@urql/core'

export const client = new Client({
  url: linkConfig.url,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    return {
      headers: { ...linkConfig.headers },
      next: { revalidate: 60 },
    }
  },
  suspense: true,
  maskTypename: true,
})
