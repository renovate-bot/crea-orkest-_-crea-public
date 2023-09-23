import type { Event } from '../types/event'
import type { GetConcertQuery } from '../generated/graphql'
import { fileFormatter } from './fileFormatter'

export const eventFormatter = ({
  concert,
}: GetConcertQuery): Event | undefined => {
  if (!concert) return
  return {
    id: concert.id,
    title: concert?.title || '',
    image: concert?.poster ? fileFormatter(concert.poster) : undefined,
    persons: concert.persons.map((person) => ({
      id: person.id,
      name: person.name ?? '',
      role: person.role ?? '',
    })),
    locations: concert?.locations.map((location) => ({
      startTime: location.dateTime ?? undefined,
      id: location.location?.id ?? '',
    })),
  }
}
