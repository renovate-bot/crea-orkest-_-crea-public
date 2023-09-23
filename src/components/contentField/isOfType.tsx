import type { Record } from 'datocms-structured-text-utils'

export function isOfType<T extends Record>(
  x: T | Record,
  typename: string
): x is T {
  if (x.__typename === typename) return true
  return false
}
