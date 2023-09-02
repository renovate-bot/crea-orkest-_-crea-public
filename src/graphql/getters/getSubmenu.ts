import { client } from '../gqlClient'
import {
  GetSubmenuDocument,
  type GetSubmenuQuery,
  type GetSubmenuQueryVariables,
} from 'graphql/generated/graphql'

interface Props {
  id: string
}

export const getSubmenu = async ({ id }: Props) => {
  try {
    const { data, error } = await client.query<
      GetSubmenuQuery,
      GetSubmenuQueryVariables
    >(GetSubmenuDocument, {})

    const item = data?.general?.menu.find((item) => {
      if ('menu' in item) {
        return item.id === id
      }
      return false
    })

    if (!item) throw new Error('No submenu')

    return {
      data: 'menu' in item ? item.menu : undefined,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
