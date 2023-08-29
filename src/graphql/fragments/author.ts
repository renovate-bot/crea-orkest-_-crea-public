import { gql } from '@urql/core'

export const author = gql`
  fragment author on PersonRecord {
    id
    name
    role
  }
`
