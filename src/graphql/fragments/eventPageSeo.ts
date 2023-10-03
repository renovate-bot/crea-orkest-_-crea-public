import { gql } from '@urql/core'
import { seoField } from './seoField'
import { tag } from './tag'

export const eventPageSeo = gql`
  fragment eventPageSeo on ConcertRecord {
    _seoMetaTags {
      ...tag
    }
    seo {
      ...seoField
    }
  }
  ${seoField}
  ${tag}
`
