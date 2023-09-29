import type { ConcertDetailFragment } from 'graphql/generated/graphql'
import type { Event } from '../types/event'
import { eventFormatter } from './eventFormatter'

export const eventsFormatter = (events: ConcertDetailFragment[]): Event[] =>
  events.map((event) => eventFormatter(event))
