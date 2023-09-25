import { gql } from '@urql/core'

export const GET_PAGES_META = gql`
  query getPagesMeta {
    _allPagesMeta {
      count
    }
  }
`
