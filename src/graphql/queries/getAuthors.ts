import { author } from '../fragments/author'
import { gql } from '@urql/core'

export const GET_AUTHORS = gql`
  query getAuthors(
    $first: IntType!
    $skip: IntType!
    $order: [PersonModelOrderBy]
  ) {
    allPeople(first: $first, skip: $skip, orderBy: $order) {
      ...author
    }
  }
  ${author}
`
