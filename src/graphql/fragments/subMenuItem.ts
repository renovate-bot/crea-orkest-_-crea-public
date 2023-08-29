import { gql } from '@urql/core'
import { menuItem } from './menuItem'

export const submenuItem = gql`
  fragment submenuItem on SubmenuItemRecord {
    id
    label
    menu {
      ...menuItem
    }
  }
  ${menuItem}
`
