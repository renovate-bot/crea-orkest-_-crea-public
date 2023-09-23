import { concertLink } from './concertLink'
import { events } from './events'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { image } from './image'
import { pageLink } from './pageLink'
import { video } from './video'

export const textBlockContent = gql`
  fragment textBlockContent on TextBlockModelContentField {
    value
    links {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
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
        ...video
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${video}
  ${image}
  ${events}
`

export const leftContent = gql`
  fragment leftContent on TwoColumnModelLeftContentField {
    value
    links {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
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
        ...video
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${video}
  ${image}
  ${events}
`

export const rightContent = gql`
  fragment rightContent on TwoColumnModelRightContentField {
    value
    links {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
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
        ...video
      }
    }
  }
  ${concertLink}
  ${pageLink}
  ${events}
  ${image}
  ${video}
`

export const textBlock = gql`
  fragment textBlock on TextBlockRecord {
    ...identifiable
    content {
      ...textBlockContent
    }
  }
  ${identifiable}
  ${textBlockContent}
`

export const twoColum = gql`
  fragment twoColum on TwoColumnRecord {
    ...identifiable
    leftContent {
      ...leftContent
    }
    rightContent {
      ...rightContent
    }
  }
  ${identifiable}
  ${leftContent}
  ${rightContent}
`
