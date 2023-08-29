import { author } from 'graphql/fragments/author'
import { file } from 'graphql/fragments/file'
import { gql } from '@urql/core'
import { identifiable } from 'graphql/fragments/identifiable'
import { locations } from 'graphql/fragments/locations'

export const GET_CONCERT = gql`
  query getConcert($id: ItemId!) {
    concert(filter: { id: { eq: $id } }) {
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
