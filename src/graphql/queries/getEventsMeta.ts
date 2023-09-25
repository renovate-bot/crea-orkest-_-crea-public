import { gql } from '@urql/core'

export const GET_EVENTS_META = gql`
  query getEventsMeta {
    _allConcertsMeta {
      count
    }
  }
`
