import Image from 'next/image'
import { StructuredText } from 'react-datocms/structured-text'
import { type TextBlockFragment } from 'graphql/generated/graphql'
import classNames from 'classnames'
import { isStructuredText } from 'datocms-structured-text-utils'
import styles from './styles.module.scss'

interface Props {
  item: TextBlockFragment
}

export const ContentField = ({ item }: Props) => {
  if (!isStructuredText(item.content)) return
  return (
    <div className={classNames(styles.wrapper)} key={item.id}>
      <StructuredText
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'ConcertListRecord':
              return <p>concert list record</p>
            case 'ImageBlockRecord':
              return <Image src={''} alt={''} />
            default:
              return null
          }
        }}
        data={item.content}
      />
    </div>
  )
}
