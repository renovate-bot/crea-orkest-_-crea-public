import { events } from './events'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { textBlock, twoColum } from './textBlock'

export const pageDetail = gql`
  fragment pageDetail on PageRecord {
    ...identifiable
    title
    slug
    content {
      ... on ConcertListRecord {
        ...events
      }
      ... on TextBlockRecord {
        ...textBlock
      }
      ... on TwoColumnRecord {
        ...twoColum
      }
    }
  }
  ${identifiable}
  ${events}
  ${textBlock}
  ${twoColum}
`
