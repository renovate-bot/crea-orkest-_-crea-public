import { client } from '../gqlClient'
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
      data,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
