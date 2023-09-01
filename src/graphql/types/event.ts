import type { Image } from './image'

export interface Location {
  startTime?: string
  id: string
}

export interface Event {
  id: string
  title: string
  image: Image | undefined
  locations: Location[] | undefined
}
