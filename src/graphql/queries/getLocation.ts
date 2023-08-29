import { gql } from '@urql/core'

import { location } from 'graphql/fragments/location'

export const GET_LOCATION = gql`
  query getLocation($id: ItemId) {
    location(filter: { id: { eq: $id } }) {
      ...location
    }
  }
  ${location}
`
