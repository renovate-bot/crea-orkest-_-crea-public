import { client } from '../gqlClient'
import { eventsFormatter } from '../formatters/eventsFormatter'
import {
  ConcertModelOrderBy,
  GetConcertsDocument,
  type GetConcertsQuery,
  type GetConcertsQueryVariables,
} from '../generated/graphql'

interface Props extends GetConcertsQueryVariables {
  skip: number
  first: number
}

export const getEvents = async ({
  skip,
  first,
  order = ConcertModelOrderBy.UpdatedAtAsc,
}: Props) => {
  try {
    const { data, error } = await client.query<
      GetConcertsQuery,
      GetConcertsQueryVariables
    >(GetConcertsDocument, {
      skip,
      first,
      order,
    })

    return {
      data: data ? eventsFormatter(data) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
