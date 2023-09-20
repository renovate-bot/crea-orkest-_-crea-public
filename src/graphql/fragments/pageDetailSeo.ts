import { gql } from '@urql/core'
import { seo } from './seo'
import { tag } from './tag'

export const pageDetailSeo = gql`
  fragment pageDetailSeo on PageRecord {
    _seoMetaTags {
      ...tag
    }
    seo {
      ...seo
    }
  }
  ${seo}
  ${tag}
`
