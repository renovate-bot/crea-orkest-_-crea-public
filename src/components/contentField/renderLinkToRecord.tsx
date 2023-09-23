import type { Record } from 'datocms-structured-text-utils'
import type { RenderRecordLinkContext } from 'react-datocms/structured-text'

export const renderLinkToRecord = ({
  record,
}: RenderRecordLinkContext<Record>) => {
  // TODO: what can you do with this function?
  return <p>renderLinkToRecord: {record.__typename}</p>
}
