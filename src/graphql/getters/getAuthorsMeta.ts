import { client } from 'graphql/gqlClient'
import {
  GetAuthorsMetaDocument,
  type GetAuthorsMetaQuery,
  type GetAuthorsMetaQueryVariables,
} from 'graphql/generated/graphql'

export const getAuthorsMeta = async () => {
  try {
    const { data, error } = await client.query<
      GetAuthorsMetaQuery,
      GetAuthorsMetaQueryVariables
    >(GetAuthorsMetaDocument, {})

    return {
      data: data?._allPeopleMeta ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)

    return { data: null, error }
  }
}
