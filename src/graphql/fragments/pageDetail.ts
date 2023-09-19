import { events } from './events'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { seo } from './seo'
import { tag } from './tag'
import { leftContent, rightContent, textBlock } from './textBlock'

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
        ...identifiable
        content {
          ...textBlock
        }
      }
      ... on TwoColumnRecord {
        ...identifiable
        leftContent {
          ...leftContent
        }
        rightContent {
          ...rightContent
        }
      }
    }
  }
  ${rightContent}
  ${leftContent}
  ${textBlock}
  ${events}
  ${identifiable}
  ${seo}
  ${tag}
`
