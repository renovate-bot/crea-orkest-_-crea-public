import type { GetLocationQuery } from '../generated/graphql'
import type { Location } from 'graphql/types/location'

export const locationFormatter = (data: GetLocationQuery): Location => ({
  title: data.location?.title ?? '',
  address: data.location?.addressTitle ?? '',
  lat: data.location?.address?.latitude,
  lon: data.location?.address?.longitude,
  id: data.location?.id ?? '',
})
