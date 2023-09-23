import { eventData } from 'graphql/fragments/eventData'
import { gql } from '@urql/core'

export const GET_CONCERTS = gql`
  query getConcerts(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order) {
      ...eventData
    }
  }
  ${eventData}
`
