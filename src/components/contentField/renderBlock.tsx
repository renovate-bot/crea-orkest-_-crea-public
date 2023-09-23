import { Event } from 'components/event'
import Image from 'next/image'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'

import type {
  EventsFragment,
  ImageFragment,
  VideoFragment,
} from 'graphql/generated/graphql'

export const renderBlock = ({
  record,
}: RenderBlockContext<
  EventsFragment | ImageFragment | VideoFragment | Record
>) => {
  if (isOfType<EventsFragment>(record, 'ConcertListRecord')) {
    return (
      <div>
        {record.pinnedConcerts.map((item) => {
          return <Event key={item.id} id={item.id} />
        })}
      </div>
    )
  }

  if (isOfType<ImageFragment>(record, 'ImageRecord')) {
    if (!record.item?.item?.url) return null
    return (
      <Image
        src={record.item.item.url}
        alt={record.item.item.alt || ''}
        height={record.item.item.height || undefined}
        width={record.item.item.width || undefined}
      />
    )
  }

  if (isOfType<VideoFragment>(record, 'VideoRecord')) {
    if (!record.media?.url) return null
    return <p>some video component</p>
  }

  return <p>not supported: {record.__typename}</p>
}
