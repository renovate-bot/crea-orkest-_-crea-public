import { client } from '../gqlClient'
import {
  GetConcertPageDocument,
  type GetConcertPageQuery,
  type GetConcertPageQueryVariables,
} from 'graphql/generated/graphql'

export const getConcertPage = async ({
  slug,
}: GetConcertPageQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetConcertPageQuery,
      GetConcertPageQueryVariables
    >(GetConcertPageDocument, { slug })
    return {
      data: data?.concert ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
