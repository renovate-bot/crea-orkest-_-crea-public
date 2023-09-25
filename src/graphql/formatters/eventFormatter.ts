import type { ConcertDetailFragment } from 'graphql/generated/graphql'
import type { Event } from '../types/event'
import { authorFormatter } from './authorFormatter'
import { fileFormatter } from './fileFormatter'
import { locationMetaFormatter } from './locationMetaFormatter'

export const eventFormatter = (event: ConcertDetailFragment): Event => ({
  id: event.id,
  title: event.title ?? undefined,
  image: event.poster ? fileFormatter(event.poster) : undefined,
  persons: event.persons.map((person) => authorFormatter(person)),
  locations: event.locations.map((location) => locationMetaFormatter(location)),
})
