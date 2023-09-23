import { eventData } from './eventData'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const events = gql`
  fragment events on ConcertListRecord {
    ...identifiable
    pinnedConcerts {
      ...eventData
    }
    showAllConcerts
  }
  ${identifiable}
  ${eventData}
`
