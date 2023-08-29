import { file } from './file'
import { gql } from '@urql/core'

export const seo = gql`
  fragment seo on SeoField {
    description
    image {
      ...file
    }
    title
    twitterCard
  }
  ${file}
`
