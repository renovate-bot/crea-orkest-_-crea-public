import { client } from 'graphql/gqlClient'
import { metadataFormatter } from 'graphql/formatters/metadataFormatter'
import { slugFormatter } from 'utils/slugFormatter'
import {
  GetEventSeoDocument,
  type GetEventSeoQuery,
  type GetEventSeoQueryVariables,
} from 'graphql/generated/graphql'

export const getEventPageSeo = async ({ slug }: GetEventSeoQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetEventSeoQuery,
      GetEventSeoQueryVariables
    >(GetEventSeoDocument, { slug })

    return {
      data: metadataFormatter(
        data?.concert ?? undefined,
        slugFormatter({ slug, prefix: '/concerten' })
      ),
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: metadataFormatter(undefined, slug), error }
  }
}
