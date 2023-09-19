import type { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { authorFormatter } from '../formatters/authorFormatter'
import { client } from '../gqlClient'
import {
  GetAuthorDocument,
  type GetAuthorQuery,
  type GetAuthorQueryVariables,
} from '../generated/graphql'

export const getAuthor = async (
  { id }: GetAuthorQueryVariables,
  fetchOptions?: RequestInit
) => {
  try {
    const { data, error } = await client.query<
      GetAuthorQuery,
      GetAuthorQueryVariables
    >(GetAuthorDocument, { id }, { fetchOptions })

    return {
      data: data ? authorFormatter(data) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)

    return { data: null, error }
  }
}
