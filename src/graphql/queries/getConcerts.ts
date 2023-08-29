import { eventMetadata } from 'graphql/fragments/eventMetadata'
import { gql } from '@urql/core'

export const GET_CONCERTS = gql`
  query getConcerts(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order) {
      ...eventMetadata
    }
  }
  ${eventMetadata}
`
