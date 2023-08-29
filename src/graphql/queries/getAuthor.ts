import { author } from 'graphql/fragments/author'
import { gql } from '@urql/core'

export const GET_AUTHOR = gql`
  query getAuthor($id: ItemId!) {
    person(filter: { id: { eq: $id } }) {
      ...author
    }
  }
  ${author}
`
