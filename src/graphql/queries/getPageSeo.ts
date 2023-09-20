import { gql } from '@urql/core'

import { pageDetailSeo } from '../fragments/pageDetailSeo'

export const GET_PAGE_SEO = gql`
  query getPageSeo($slug: String!) {
    page(filter: { slug: { eq: $slug } }) {
      ...pageDetailSeo
    }
  }
  ${pageDetailSeo}
`
