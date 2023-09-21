import Image from 'next/image'
import { StructuredText } from 'react-datocms/structured-text'
import type { TwoColumFragment } from 'graphql/generated/graphql'
import classNames from 'classnames'
import { isStructuredText } from 'datocms-structured-text-utils'
import styles from './styles.module.scss'

interface Props {
  item: TwoColumFragment
}

export const TwoColumContentField = ({ item }: Props) => {
  return (
    <div className={classNames(styles.wrapper)} key={item.id}>
      {isStructuredText(item.leftContent) && (
        <div>
          <StructuredText
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'ImageBlockRecord':
                  console.log(record)
                  return <Image src={''} alt={''} />
                default:
                  return null
              }
            }}
            data={item.leftContent}
          />
        </div>
      )}

      {isStructuredText(item.rightContent) && (
        <div>
          <StructuredText
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'ImageBlockRecord':
                  console.log(record)
                  return <Image src={''} alt={''} />
                default:
                  return null
              }
            }}
            data={item.rightContent}
          />
        </div>
      )}
    </div>
  )
}
