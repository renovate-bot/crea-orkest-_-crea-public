import { gql } from '@urql/core'

export const tag = gql`
  fragment tag on Tag {
    attributes
    content
    tag
  }
`
