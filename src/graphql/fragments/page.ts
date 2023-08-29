import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { seo } from './seo'
import { tag } from './tag'

export const page = gql`
  fragment page on PageRecord {
    ...identifiable
    _seoMetaTags {
      ...tag
    }
    title
    slug
    seo {
      ...seo
    }
    content {
      ... on ConcertListRecord {
        id
      }
      ... on TextBlockRecord {
        id
      }
    }
  }
  ${identifiable}
  ${seo}
  ${tag}
`
