import { isValidUrl } from './isValidUrl'

export function slugFormatter(slug: string) {
  if (slug === 'homepage') {
    return (slug = '/')
  }

  if (isValidUrl(slug)) {
    return slug
  }

  return `/${slug}`
}
