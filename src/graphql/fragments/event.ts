import { author } from './author'
import { eventMetadata } from './eventMetadata'
import { gql } from '@urql/core'

export const event = gql`
  fragment event on ConcertRecord {
    ...eventMetadata
    persons {
      ...author
    }
  }
  ${eventMetadata}
  ${author}
`
