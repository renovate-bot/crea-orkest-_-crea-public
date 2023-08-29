import { file } from './file'
import { gql } from '@urql/core'
import { menuItem } from './menuItem'
import { submenuItem } from './subMenuItem'

export const generalInfo = gql`
  fragment generalInfo on GeneralRecord {
    id
    title
    menu {
      ... on MenuItemRecord {
        ...menuItem
      }
      ... on SubmenuItemRecord {
        ...submenuItem
      }
    }
    logo {
      ...file
    }
  }
  ${file}
  ${menuItem}
  ${submenuItem}
`
