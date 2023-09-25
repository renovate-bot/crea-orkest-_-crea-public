import { concertDetail } from 'graphql/fragments/concertDetail'
import { gql } from '@urql/core'

export const GET_EVENT_PAGE = gql`
  query getEventPage($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
