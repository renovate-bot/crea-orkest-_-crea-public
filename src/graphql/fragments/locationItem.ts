import { gql } from '@urql/core'
import { location } from './location'

export const locationItem = gql`
  fragment locationItem on LocationItemRecord {
    id
    dateTime
    location {
      ...location
    }
  }
  ${location}
`
