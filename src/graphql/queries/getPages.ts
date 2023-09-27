import { gql } from '@urql/core'
import { pageLink } from 'graphql/fragments/pageLink'

export const GET_PAGES = gql`
  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {
    allPages(first: $first, skip: $skip, orderBy: $order) {
      ...pageLink
    }
  }
  ${pageLink}
`
