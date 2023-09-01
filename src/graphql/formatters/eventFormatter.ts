import type { Event } from '../types/event'
import type { GetConcertQuery } from '../generated/graphql'
import { fileFormatter } from './fileFormatter'

export const eventFormatter = (data: GetConcertQuery): Event => ({
  id: String(data.concert?.id),
  title: String(data.concert?.title),
  image: data.concert?.poster ? fileFormatter(data.concert.poster) : undefined,
  locations: data.concert?.locations.map((location) => ({
    startTime: location.dateTime ?? undefined,
    id: location.location?.id ?? '',
  })),
})
