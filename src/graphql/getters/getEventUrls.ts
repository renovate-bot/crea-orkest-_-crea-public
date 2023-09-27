import { client } from 'graphql/gqlClient'
import {
  ConcertModelOrderBy,
  GetEventsDocument,
  type GetEventsUrlsQuery,
  type GetEventsUrlsQueryVariables,
} from 'graphql/generated/graphql'

interface Props extends GetEventsUrlsQueryVariables {
  skip: number
  first: number
}

export const getEventUrls = async ({
  skip,
  first,
  order = ConcertModelOrderBy.UpdatedAtDesc,
}: Props) => {
  try {
    const { data, error } = await client.query<
      GetEventsUrlsQuery,
      GetEventsUrlsQueryVariables
    >(GetEventsDocument, {
      skip,
      first,
      order,
    })

    return {
      data: data?.allConcerts.length ? data.allConcerts : [],
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
