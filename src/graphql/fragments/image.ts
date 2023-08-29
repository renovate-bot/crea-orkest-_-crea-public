import { gql } from '@urql/core'

export const responsiveImage = gql`
  fragment responsiveImage on ResponsiveImage {
    title
    alt
    sizes
    aspectRatio
    bgColor
    src
    height
    width
  }
`

export const image = gql`
  fragment image on ImageRecord {
    id
    item {
      id
      item {
        ...file
      }
      itemUrl
      title
    }
  }
`

export const mediaItem = gql`
  fragment mediaItem on MediaItemRecord {
    id
    title
    item {
      ...file
    }
    itemUrl
  }
`
