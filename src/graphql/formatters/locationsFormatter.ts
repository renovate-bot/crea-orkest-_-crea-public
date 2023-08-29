import type { GetLocationsQuery } from '../generated/graphql'
import type { Location } from 'graphql/types/location'

export const locationsFormatter = (data: GetLocationsQuery): Location[] =>
  data.allLocations.map((location) => ({
    title: location?.title || '',
    address: location.addressTitle || '',
    lat: Number(location?.address?.latitude),
    lon: Number(location?.address?.longitude),
    id: location?.id || '',
  }))
