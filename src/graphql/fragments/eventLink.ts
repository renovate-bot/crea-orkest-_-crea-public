import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const eventLink = gql`
  fragment eventLink on ConcertRecord {
    ...identifiable
    title
    slug
  }
  ${identifiable}
`
