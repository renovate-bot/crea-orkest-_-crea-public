import type { ConcertDetailFragment } from 'graphql/generated/graphql'
import type { Event } from '../types/event'
import { authorFormatter } from './authorFormatter'
import { fileFormatter } from './fileFormatter'
import { locationMetaFormatter } from './locationMetaFormatter'

export const eventsFormatter = (events: ConcertDetailFragment[]): Event[] =>
  events.map((event) => ({
    id: event.id,
    title: event.title ?? undefined,
    image: event.poster?.url ? fileFormatter(event.poster) : undefined,
    locations: event.locations.map((location) =>
      locationMetaFormatter(location)
    ),
    persons: event.persons.map((person) => authorFormatter(person)),
  }))
