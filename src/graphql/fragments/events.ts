import { event } from './event'
import { gql } from '@urql/core'

export const events = gql`
  fragment events on ConcertListRecord {
    ...identifiable
    pinnedConcerts {
      ...event
    }
    showAllConcerts
  }
  ${event}
`
