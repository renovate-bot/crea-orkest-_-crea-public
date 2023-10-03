import { isValidUrl } from './isValidUrl'

interface WithPrefixProps {
  slug: string
  prefix?: string
}
export function slugFormatter({ slug, prefix }: WithPrefixProps): string {
  if (prefix === '/') {
    prefix = undefined
  }

  if (slug === 'homepage' || slug === '') {
    return '/'
  }

  if (isValidUrl(slug)) {
    return slug
  }

  if (prefix && !prefix.startsWith('/')) {
    prefix = `/${prefix}`
  }

  if (slug && !slug.startsWith('/')) {
    slug = `/${slug}`
  }

  if (!prefix) return slug

  return prefix + slug
}
