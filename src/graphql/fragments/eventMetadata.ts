import { file } from './file'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { locations } from './locations'

export const eventMetadata = gql`
  fragment eventMetadata on ConcertRecord {
    ...identifiable
    title
    locations {
      ...locations
    }
    poster {
      ...file
    }
  }
  ${identifiable}
  ${file}
  ${locations}
`
