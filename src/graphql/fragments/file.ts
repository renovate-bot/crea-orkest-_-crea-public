import { colors } from './colors'
import { focalPoint } from './focalpoint'
import { gql } from '@urql/core'

import { responsiveImage } from './image'
import { videoUpload } from './video'

export const file = gql`
  fragment file on FileField {
    id
    alt
    colors {
      ...colors
    }
    focalPoint {
      ...focalPoint
    }
    width
    height
    responsiveImage {
      ...responsiveImage
    }
    title
    url
    video {
      ...videoUpload
    }
  }
  ${responsiveImage}
  ${focalPoint}
  ${colors}
  ${videoUpload}
`
