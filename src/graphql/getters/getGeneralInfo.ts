import { client } from '../gqlClient'
import {
  GetGeneralInfoDocument,
  type GetGeneralInfoQuery,
  type GetGeneralInfoQueryVariables,
} from 'graphql/generated/graphql'

export const getGeneralInfo = async () => {
  try {
    const { data, error } = await client.query<
      GetGeneralInfoQuery,
      GetGeneralInfoQueryVariables
    >(GetGeneralInfoDocument, {})

    return {
      data,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
