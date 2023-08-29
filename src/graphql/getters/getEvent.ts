import { client } from '../gqlClient'
import { eventFormatter } from 'graphql/formatters/eventFormatter'
import {
  GetConcertDocument,
  type GetConcertQuery,
  type GetConcertQueryVariables,
} from '../generated/graphql'

export const getEvent = async ({ id }: GetConcertQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetConcertQuery,
      GetConcertQueryVariables
    >(GetConcertDocument, {
      id,
    })

    return {
      data: data ? eventFormatter(data) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
