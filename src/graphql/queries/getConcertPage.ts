import { concertDetail } from 'graphql/fragments/concertDetail'
import { gql } from '@urql/core'

export const GET_CONCERT_PAGE = gql`
  query getConcertPage($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
