import { gql } from '@urql/core'

export const locations = gql`
  fragment locations on LocationItemRecord {
    id
    dateTime
    location {
      id
    }
  }
`
