import type { Author } from './author'
import type { Image } from './image'
import type { Location } from './location'

export interface Event {
  id: string
  title?: string
  image?: Image
  locations?: (Location | undefined)[] // TODO: why?
  persons?: Author[]
}
