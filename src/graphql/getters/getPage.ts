import { client } from '../gqlClient'
import { pageQueryFormatter } from 'graphql/formatters/pageQueryFormatter'
import {
  GetPageDocument,
  type GetPageQuery,
  type GetPageQueryVariables,
} from '../generated/graphql'

export const getPage = async ({ slug }: GetPageQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageQuery,
      GetPageQueryVariables
    >(GetPageDocument, { slug })
    return {
      data: data ? pageQueryFormatter(data) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
