import { gql } from '@urql/core'
import { seo } from './seo'

export const seoSettings = gql`
  fragment seoSettings on GlobalSeoField {
    facebookPageUrl
    siteName
    titleSuffix
    twitterAccount
    fallbackSeo {
      ...seo
    }
  }
  ${seo}
`
