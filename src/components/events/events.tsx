import type { Event } from 'graphql/types/event'
import Image from 'next/image'
import React from 'react'
import { getEvents } from 'graphql/getters/getEvents'
import styles from './styles.module.scss'

export interface Props {
  skip: number
  first: number
}

export const Events = async ({ skip, first }: Props) => {
  const { data } = await getEvents({ skip, first })
  if (!data) return null

  return (
    <section>
      <h2>EVENTS</h2>
      {data.map((event: Event) => (
        <article key={event.title} className={styles.article}>
          <h1>{event.title}</h1>
          {event.image && (
            <Image
              src={event.image.url}
              width={200}
              height={200}
              alt={event.image.description}
            />
          )}
        </article>
      ))}
    </section>
  )
}
