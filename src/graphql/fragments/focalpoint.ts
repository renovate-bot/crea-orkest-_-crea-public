import { gql } from '@urql/core'

export const focalPoint = gql`
  fragment focalPoint on focalPoint {
    x
    y
  }
`
