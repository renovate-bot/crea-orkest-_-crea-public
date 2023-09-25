import { gql } from '@urql/core'
import { identifiable } from 'graphql/fragments/identifiable'

export const GET_PAGES = gql`
  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {
    allPages(first: $first, skip: $skip, orderBy: $order) {
      ...identifiable
      title
      slug
    }
  }
  ${identifiable}
`
