import { Event } from 'components/event/event'
import React from 'react'
import { getEvents } from 'graphql/getters/getEvents'

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
      {data.map((event) => (
        <Event key={event.id} id={event.id} />
      ))}
    </section>
  )
}
