import type { Image } from './image'

export interface Location {
  startTime?: string
  id: string
}

export interface Person {
  id: string
  name: string
  role: string
}

export interface Event {
  id: string
  title: string
  image: Image | undefined
  locations: Location[] | undefined
  persons: Person[] | undefined
}
