import type { Author } from '../types/author'
import type { GetAuthorQuery } from 'graphql/generated/graphql'

export const authorFormatter = (data: GetAuthorQuery): Author | undefined => {
  if (!data.person?.id) return

  return {
    id: data.person.id,
    name: data.person.name,
    description: data.person.role,
  }
}
