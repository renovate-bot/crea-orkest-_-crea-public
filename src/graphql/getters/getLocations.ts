import { client } from 'graphql/gqlClient'
import { locationsFormatter } from 'graphql/formatters/locationsFormatter'
import {
  GetLocationsDocument,
  type GetLocationsQuery,
  type GetLocationsQueryVariables,
} from 'graphql/generated/graphql'

export const getLocations = async ({
  first,
  skip,
}: GetLocationsQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetLocationsQuery,
      GetLocationsQueryVariables
    >(GetLocationsDocument, {
      first,
      skip,
    })

    return {
      data: data?.allLocations ? locationsFormatter(data.allLocations) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
