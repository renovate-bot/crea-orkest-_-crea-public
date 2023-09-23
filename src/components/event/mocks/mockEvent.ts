import type { Event } from 'graphql/types/event'

export const mockEvent: Event = {
  id: 'id',
  title: 'name',
  image: undefined,
  locations: [{ startTime: 'DATETIME', id: 'test id' }],
  persons: [],
}
