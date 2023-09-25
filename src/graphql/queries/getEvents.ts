import { concertDetail } from 'graphql/fragments/concertDetail'
import { gql } from '@urql/core'

export const GET_EVENTS = gql`
  query getEvents(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
