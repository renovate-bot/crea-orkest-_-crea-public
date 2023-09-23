import { ContentField } from 'components/contentField'
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
          <ContentField data={item.leftContent} />
        </div>
      )}

      {isStructuredText(item.rightContent) && (
        <div>
          <ContentField data={item.rightContent} />
        </div>
      )}
    </div>
  )
}
