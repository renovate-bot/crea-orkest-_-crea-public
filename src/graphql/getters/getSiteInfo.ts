import { client } from 'graphql/gqlClient'
import {
  GetSiteInfoDocument,
  type GetSiteInfoQuery,
  type GetSiteInfoQueryVariables,
} from 'graphql/generated/graphql'

export const getSiteInfo = async () => {
  try {
    const { data, error } = await client.query<
      GetSiteInfoQuery,
      GetSiteInfoQueryVariables
    >(GetSiteInfoDocument, {})

    return {
      data: data?._site ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
