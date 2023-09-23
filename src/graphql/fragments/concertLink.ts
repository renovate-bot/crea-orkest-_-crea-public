import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const concertLink = gql`
  fragment concertLink on ConcertRecord {
    ...identifiable
    title
    slug
  }
  ${identifiable}
`
