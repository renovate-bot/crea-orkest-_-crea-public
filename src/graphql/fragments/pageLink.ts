import { gql } from '@urql/core'

export const pageLink = gql`
  fragment pageLink on PageRecord {
    slug
    title
  }
`
