import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { seo } from './seo'
import { tag } from './tag'

export const page = gql`
  fragment page on PageRecord {
    ...identifiable
    title
    slug
    content {
      ... on ConcertListRecord {
        id
      }
      ... on TextBlockRecord {
        id
      }
      ... on TwoColumnRecord {
        id
      }
    }
  }
  ${identifiable}
  ${seo}
  ${tag}
`
