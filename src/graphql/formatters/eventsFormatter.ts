import type { Event } from '../types/event'
import type { GetConcertsQuery } from '../generated/graphql'
import { fileFormatter } from './fileFormatter'

export const eventsFormatter = (data: GetConcertsQuery): Event[] =>
  data.allConcerts.map((event) => ({
    id: String(event.id),
    title: String(event.title),
    image: event.poster?.url ? fileFormatter(event.poster) : undefined,
    locations: event.locations.map((location) => ({
      startTime: location.dateTime ?? '',
      id: location.location?.id ?? '',
    })),
  }))
