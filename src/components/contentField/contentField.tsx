import { Event } from 'components/event'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { StructuredText } from 'react-datocms/structured-text'
import { isStructuredText } from 'datocms-structured-text-utils'

import type {
  EventsFragment,
  ImageFragment,
  TextBlockFragment,
  TwoColumFragment,
} from 'graphql/generated/graphql'

interface Props {
  data:
    | TextBlockFragment['content']
    | TwoColumFragment['leftContent']
    | TwoColumFragment['rightContent']
}

function isOfType<T extends Record>(x: T | Record, type: string): x is T {
  if (x.__typename === type) return true
  return false
}

const renderBlocks = ({
  record,
}: RenderBlockContext<EventsFragment | ImageFragment | Record>) => {
  if (isOfType<EventsFragment>(record, 'ConcertListRecord')) {
    return (
      <div>
        {record.pinnedConcerts.map((item) => {
          return <Event key={item.id} id={item.id} />
        })}
      </div>
    )
  }

  return <p>not supported: {record.__typename}</p>
}

export const ContentField = ({ data }: Props) => {
  if (!isStructuredText(data)) return
  return <StructuredText renderBlock={renderBlocks} data={data} />
}
