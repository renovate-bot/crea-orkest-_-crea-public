import { concertDetail } from './concertDetail'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const events = gql`
  fragment events on ConcertListRecord {
    ...identifiable
    pinnedConcerts {
      ...concertDetail
    }
    showAllConcerts
  }
  ${identifiable}
  ${concertDetail}
`
