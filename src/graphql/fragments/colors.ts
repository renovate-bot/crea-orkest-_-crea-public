import { gql } from '@urql/core'

export const colors = gql`
  fragment colors on ColorField {
    alpha
    blue
    cssRgb
    green
    hex
    red
  }
`
