import { ContentField } from 'components/contentField'
import { Event } from 'components/event'
import React from 'react'
import { TwoColumContentField } from 'components/twoColumContentField'
import classNames from 'classnames'
import { getPage } from 'graphql/getters/getPage'
import { notFound } from 'next/navigation'
import styles from './styles.module.scss'

export interface Props {
  slug: string
}

export const DefaultPage = async ({ slug }: Props) => {
  const { data } = await getPage({ slug })
  if (!data) return notFound()

  return (
    <article className={classNames(styles.article)}>
      <h1>{data.title}</h1>

      {data.content.map((item) => {
        if (item.__typename === 'ConcertListRecord') {
          return <Event key={item.id} id={item.id} />
        }

        if ('leftContent' in item || 'rightContent' in item) {
          return <TwoColumContentField key={item.id} item={item} />
        }

        if ('content' in item) {
          return <ContentField key={item.id} data={item.content} />
        }

        return 'todo'
      })}
    </article>
  )
}
