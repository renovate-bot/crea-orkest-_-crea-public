import { coordinates } from './coordinates'
import { gql } from '@urql/core'

export const location = gql`
  fragment location on LocationRecord {
    id
    title
    addressTitle
    address {
      ...coordinates
    }
  }
  ${coordinates}
`
