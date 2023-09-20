import type { GetLocationQuery } from '../generated/graphql'
import type { Location } from 'graphql/types/location'

export const locationFormatter = ({
  location,
}: GetLocationQuery): Location => ({
  title: location?.title ?? '',
  address: location?.addressTitle ?? '',
  lat: location?.address?.latitude,
  lon: location?.address?.longitude,
  id: location?.id ?? '',
})
