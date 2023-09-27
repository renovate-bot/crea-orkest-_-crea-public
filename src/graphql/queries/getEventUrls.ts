import { eventLink } from 'graphql/fragments/eventLink'
import { gql } from '@urql/core'

export const GET_EVENT_URLS = gql`
  query getEventsUrls(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order) {
      ...eventLink
    }
  }
  ${eventLink}
`
