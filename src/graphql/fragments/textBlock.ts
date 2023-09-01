import { events } from './events'
import { gql } from '@urql/core'
import { image } from './image'
import { videoRecord } from './video'

export const textBlock = gql`
  fragment textBlock on TextBlockModelContentField {
    value
    links {
      ... on ConcertRecord {
        slug
        title
      }
      ... on PageRecord {
        slug
        title
      }
    }
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
    value
    links {
      ... on ConcertRecord {
        slug
        title
      }
      ... on PageRecord {
        slug
        title
      }
    }
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
    value
    links {
      ... on ConcertRecord {
        slug
        title
      }
      ... on PageRecord {
        slug
        title
      }
    }
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
