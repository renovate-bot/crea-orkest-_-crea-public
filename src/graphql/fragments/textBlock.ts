import { events } from './events'
import { gql } from '@urql/core'
import { image } from './image'
import { videoRecord } from './video'
// import { pageLink } from './pageLink'

// TwoColumnModelLeftContentBlocksField
// TwoColumnModelRightContentBlocksField

// TextBlockModelContentBlocksField

export const textBlock = gql`
  fragment textBlock on TextBlockModelContentField {
    blocks {
      ... on ConcertListRecord {
        ...events
      }
      ... on ImageRecord {
        ...image
      }
      ... on VideoRecord {
        ...videoRecord
      }
    }
  }
  ${videoRecord}
  ${image}
  ${events}
`

export const leftContent = gql`
  fragment leftContent on TwoColumnModelLeftContentField {
    blocks {
      ... on ConcertListRecord {
        ...events
      }
      ... on ImageRecord {
        ...image
      }
      ... on VideoRecord {
        ...videoRecord
      }
    }
  }
  ${videoRecord}
  ${image}
  ${events}
`

export const rightContent = gql`
  fragment rightContent on TwoColumnModelRightContentField {
    blocks {
      ... on ConcertListRecord {
        ...events
      }
      ... on ImageRecord {
        ...image
      }
      ... on VideoRecord {
        ...videoRecord
      }
    }
  }
  ${videoRecord}
  ${image}
  ${events}
`
