import { author } from './author'
import { file } from './file'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { locations } from './locations'

export const concertDetail = gql`
  fragment concertDetail on ConcertRecord {
    ...identifiable
    title
    slug
    locations {
      ...locations
    }
    poster {
      ...file
    }
    persons {
      ...author
    }
  }
  ${author}
  ${identifiable}
  ${file}
  ${locations}
`
