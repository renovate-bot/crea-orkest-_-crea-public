import { gql } from '@urql/core'

export const GET_AUTHORS_META = gql`
  query getAuthorsMeta {
    _allPeopleMeta {
      count
    }
  }
`
