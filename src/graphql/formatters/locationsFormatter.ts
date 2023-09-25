import type { Location } from 'graphql/types/location'
import type { LocationFragment } from 'graphql/generated/graphql'

export const locationsFormatter = (locations: LocationFragment[]): Location[] =>
  locations.map((location) => ({
    title: location?.title ?? '',
    address: location.addressTitle ?? '',
    lat: location?.address?.latitude,
    lon: location?.address?.longitude,
    id: location?.id ?? '',
  }))
