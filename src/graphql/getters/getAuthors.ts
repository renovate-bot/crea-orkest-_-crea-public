import { authorsFormatter } from 'graphql/formatters/authorsFormatter'
import { client } from 'graphql/gqlClient'
import {
  GetAuthorsDocument,
  type GetAuthorsQuery,
  type GetAuthorsQueryVariables,
} from 'graphql/generated/graphql'

export const getAuthors = async ({
  first,
  skip,
  order,
}: GetAuthorsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetAuthorsQuery,
      GetAuthorsQueryVariables
    >(GetAuthorsDocument, {
      first,
      skip,
      order,
    })

    return {
      data: data?.allPeople ? authorsFormatter(data.allPeople) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)

    return { data: null, error }
  }
}
