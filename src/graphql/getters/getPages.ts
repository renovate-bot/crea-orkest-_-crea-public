import { client } from '../gqlClient'
import {
  GetPagesDocument,
  type GetPagesQuery,
  type GetPagesQueryVariables,
} from '../generated/graphql'

export const getPages = async ({ skip, first }: GetPagesQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPagesQuery,
      GetPagesQueryVariables
    >(GetPagesDocument, {
      skip,
      first,
    })

    return { data: data ? data : null, error }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
