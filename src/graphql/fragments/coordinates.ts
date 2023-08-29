import { gql } from '@urql/core'

export const coordinates = gql`
  fragment coordinates on LatLonField {
    latitude
    longitude
  }
`
