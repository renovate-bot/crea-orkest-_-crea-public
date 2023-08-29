import { client } from '../gqlClient'
import { locationFormatter } from 'graphql/formatters/locationFormatter'
import {
  GetLocationDocument,
  type GetLocationQuery,
  type GetLocationQueryVariables,
} from 'graphql/generated/graphql'

export const getLocation = async ({ id }: GetLocationQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetLocationQuery,
      GetLocationQueryVariables
    >(GetLocationDocument, {
      id,
    })

    return {
      data: data ? locationFormatter(data) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
