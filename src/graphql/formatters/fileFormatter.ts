import type { FileFragment } from 'graphql/generated/graphql'
import type { Image } from '../types/image'

export const fileFormatter = (data: FileFragment): Image => ({
  id: data.id,
  title: data.title || '',
  description: data.alt || '',
  url: data.url,
  width: Number(data.width),
  height: Number(data.height),
})
