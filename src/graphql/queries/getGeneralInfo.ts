import { generalInfo } from 'graphql/fragments/generalInfo'
import { gql } from '@urql/core'

export const GET_GENERAL_INFO = gql`
  query getGeneralInfo {
    general {
      ...generalInfo
    }
  }
  ${generalInfo}
`
