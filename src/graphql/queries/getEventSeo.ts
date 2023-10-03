import { eventPageSeo } from 'graphql/fragments/eventPageSeo'
import { gql } from '@urql/core'

export const GET_EVENT_SEO = gql`
  query getEventSeo($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...eventPageSeo
    }
  }
  ${eventPageSeo}
`
