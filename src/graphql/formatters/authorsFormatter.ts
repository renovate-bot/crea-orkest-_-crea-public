import type { Author } from '../types/author'
import type { GetAuthorsQuery } from '../generated/graphql'

export const authorsFormatter = (data: GetAuthorsQuery): Author[] => {
  if (!data.allPeople.length) return []
  return data.allPeople.map((author) => ({
    id: author.id,
    name: author.name ?? '',
    description: author.role ?? '',
  }))
}
