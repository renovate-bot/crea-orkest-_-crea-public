import { file } from './file'
import { gql } from '@urql/core'

export const seoField = gql`
  fragment seoField on SeoField {
    description
    image {
      ...file
    }
    title
    twitterCard
  }
  ${file}
`
