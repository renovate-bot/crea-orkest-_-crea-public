import { gql } from '@urql/core'
import { pageLink } from './pageLink'

export const menuItem = gql`
  fragment menuItem on MenuItemRecord {
    id
    label
    link {
      ...pageLink
    }
  }
  ${pageLink}
`
