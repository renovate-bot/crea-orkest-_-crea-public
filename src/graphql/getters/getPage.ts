import { client } from 'graphql/gqlClient'
import {
  GetPageDocument,
  type GetPageQuery,
  type GetPageQueryVariables,
} from 'graphql/generated/graphql'

export const getPage = async ({ slug }: GetPageQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageQuery,
      GetPageQueryVariables
    >(GetPageDocument, { slug })
    return {
      data: data?.page ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
