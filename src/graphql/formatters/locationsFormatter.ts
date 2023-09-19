import type { GetLocationsQuery } from '../generated/graphql'
import type { Location } from 'graphql/types/location'

export const locationsFormatter = ({
  allLocations,
}: GetLocationsQuery): Location[] =>
  allLocations.map((location) => ({
    title: location?.title ?? '',
    address: location.addressTitle ?? '',
    lat: location?.address?.latitude,
    lon: location?.address?.longitude,
    id: location?.id ?? '',
  }))
