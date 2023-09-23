import { StructuredText } from 'react-datocms/structured-text'
import { isStructuredText } from 'datocms-structured-text-utils'
import { renderBlock } from './renderBlock'
import { renderInlineRecord } from './renderInlineRecord'
import { renderLinkToRecord } from './renderLinkToRecord'
import type {
  TextBlockFragment,
  TwoColumFragment,
} from 'graphql/generated/graphql'

interface Props {
  data:
    | TextBlockFragment['content']
    | TwoColumFragment['leftContent']
    | TwoColumFragment['rightContent']
}

export const ContentField = ({ data }: Props) => {
  if (!isStructuredText(data)) return
  return (
    <StructuredText
      renderInlineRecord={renderInlineRecord}
      renderLinkToRecord={renderLinkToRecord}
      renderBlock={renderBlock}
      data={data}
    />
  )
}
