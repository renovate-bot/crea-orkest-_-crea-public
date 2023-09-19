import { isValidUrl } from './isValidUrl'

export function slugFormatter(slug: string) {
  if (slug === 'homepage') {
    return '/'
  }

  if (isValidUrl(slug)) {
    return slug
  }

  // relative url's
  if (slug.startsWith('/')) {
    return slug
  }

  return `/${slug}`
}
