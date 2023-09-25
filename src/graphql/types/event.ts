import type { Author } from './author'
import type { Image } from './image'

export interface LocationMeta {
  id?: string
  startTime?: string
}

export interface Event {
  id: string
  title?: string
  image?: Image
  locations: LocationMeta[]
  persons?: Author[]
}
