import { client } from '../gqlClient'
import { metadataFormatter } from 'graphql/formatters/metadataFormatter'
import {
  GetPageSeoDocument,
  type GetPageSeoQuery,
  type GetPageSeoQueryVariables,
} from '../generated/graphql'

export const getPageSeo = async ({ slug }: GetPageSeoQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageSeoQuery,
      GetPageSeoQueryVariables
    >(GetPageSeoDocument, { slug })

    return {
      data: metadataFormatter(data?.page, slug) ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: metadataFormatter(undefined, slug), error }
  }
}
