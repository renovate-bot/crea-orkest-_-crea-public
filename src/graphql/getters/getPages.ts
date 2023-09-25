import { client } from 'graphql/gqlClient'
import {
  GetPagesDocument,
  type GetPagesQuery,
  type GetPagesQueryVariables,
} from 'graphql/generated/graphql'

export const getPages = async ({ skip, first }: GetPagesQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPagesQuery,
      GetPagesQueryVariables
    >(GetPagesDocument, {
      skip,
      first,
    })

    return { data: data?.allPages ?? null, error }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
