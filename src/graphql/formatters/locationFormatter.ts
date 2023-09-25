import type { Location } from 'graphql/types/location'
import type { LocationFragment } from 'graphql/generated/graphql'

export const locationFormatter = (location: LocationFragment): Location => ({
  id: location.id,
  title: location?.title ?? undefined,
  address: location?.addressTitle ?? undefined,
  lat: location?.address?.latitude,
  lon: location?.address?.longitude,
})
