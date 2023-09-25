import { concertDetail } from 'graphql/fragments/concertDetail'
import { gql } from '@urql/core'

export const GET_EVENT = gql`
  query getEvent($id: ItemId!) {
    concert(filter: { id: { eq: $id } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
