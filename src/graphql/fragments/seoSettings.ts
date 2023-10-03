import { gql } from '@urql/core'
import { seoField } from './seoField'

export const seoSettings = gql`
  fragment seoSettings on GlobalSeoField {
    facebookPageUrl
    siteName
    titleSuffix
    twitterAccount
    fallbackSeo {
      ...seoField
    }
  }
  ${seoField}
`
