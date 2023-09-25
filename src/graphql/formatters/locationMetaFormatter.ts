import type { LocationMeta } from 'graphql/types/event'
import type { LocationsFragment } from 'graphql/generated/graphql'

export const locationMetaFormatter = (
  location: LocationsFragment
): LocationMeta => ({
  id: location.location?.id ?? undefined,
  startTime: location?.dateTime ?? undefined,
})
