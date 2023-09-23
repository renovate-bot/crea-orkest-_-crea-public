import { gql } from '@urql/core'

export const identifiable = gql`
  fragment identifiable on RecordInterface {
    __typename
    _createdAt
    _firstPublishedAt
    _publishedAt
    _updatedAt
    id
  }
`
