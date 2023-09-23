import Link from 'next/link'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderInlineRecordContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import { slugFormatter } from 'components/navigationItem/utils/slugFormatter'
import type {
  ConcertLinkFragment,
  PageLinkFragment,
} from 'graphql/generated/graphql'

export const renderInlineRecord = ({
  record,
}: RenderInlineRecordContext<
  Record | PageLinkFragment | ConcertLinkFragment
>) => {
  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    if (!record.slug) return null
    return <Link href={slugFormatter(record.slug)}>{record.title}</Link>
  }
  if (isOfType<ConcertLinkFragment>(record, 'ConcertRecord')) {
    if (!record.slug) return null
    return (
      <Link href={`/concerten${slugFormatter(record.slug)}`}>
        {record.title}
      </Link>
    )
  }
  // TODO: maybe return null
  return <p>renderInlineRecord todo: {record.__typename}</p>
}
