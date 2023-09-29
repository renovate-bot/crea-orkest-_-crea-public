import { author } from './author'
import { file } from './file'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { locationItem } from './locationItem'

export const concertDetail = gql`
  fragment concertDetail on ConcertRecord {
    ...identifiable
    title
    slug
    locations {
      ...locationItem
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
  ${locationItem}
`
