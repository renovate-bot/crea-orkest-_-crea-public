import type { GetPageQuery } from '../generated/graphql'
import type { Page } from '../types/page'

export const pageQueryFormatter = (data: GetPageQuery): Page | undefined => {
  if (!data.page?.id) return
  return {
    id: String(data.page?.id),
    title: String(data.page?.title),
    slug: String(data.page?.slug),
  }
}
