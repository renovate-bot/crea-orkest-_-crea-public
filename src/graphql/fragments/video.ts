import { gql } from '@urql/core'
import { mediaItem } from './image'

export const videoUpload = gql`
  fragment videoUpload on UploadVideoField {
    mp4Url
    muxAssetId
    muxPlaybackId
    streamingUrl
    thumbnailUrl
  }
`

export const videoRecord = gql`
  fragment videoRecord on VideoRecord {
    id
    title
    media {
      ...videoField
    }
    thumbnail {
      ...mediaItem
    }
  }
  ${mediaItem}
`

export const videoField = gql`
  fragment videoField on VideoField {
    height
    provider
    providerUid
    thumbnailUrl
    title
    url
    width
  }
`
