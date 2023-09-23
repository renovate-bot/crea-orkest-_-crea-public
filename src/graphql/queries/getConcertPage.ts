import { author } from 'graphql/fragments/author'
import { file } from 'graphql/fragments/file'
import { gql } from '@urql/core'
import { identifiable } from 'graphql/fragments/identifiable'
import { locations } from 'graphql/fragments/locations'

export const GET_CONCERT_PAGE = gql`
  query getConcertPage($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      id
      title
      locations {
        ...locations
      }
      persons {
        ...author
      }
      poster {
        ...file
      }
    }
  }
  ${identifiable}
  ${locations}
  ${file}
  ${author}
`
