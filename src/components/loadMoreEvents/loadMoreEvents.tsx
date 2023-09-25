'use client'
import type { Event as EventType } from 'graphql/types/event'
import { EventView } from 'components/event/eventView'
import React from 'react'
import { getEvents } from 'graphql/getters/getEvents'
import { useEventsMeta } from 'hooks/useEventsMeta'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

export interface Props {
  initialSkip: number
}

export const LoadMoreEvents = ({ initialSkip }: Props) => {
  const [skip, setSkip] = React.useState(initialSkip)
  const [events, setEvents] = React.useState<EventType[]>([])
  const ref = React.useRef<HTMLButtonElement>(null)
  const { maxEvents } = useEventsMeta()
  const [entry] = useIntersectionObserver({
    condition: Boolean(maxEvents),
    ref,
  })

  React.useEffect(() => {
    let fetching = false
    if (!maxEvents) return
    if (maxEvents <= initialSkip + events.length) return
    if (!entry?.isIntersecting) return
    if (fetching) return
    if (skip >= maxEvents) return
    fetching = true
    // TODO: abort signal to stop fetching
    getEvents({ skip, first: 1 })
      .then(({ data }) => {
        if (!data) return
        setEvents((prev) => [...prev, ...data])
        setSkip((prev) => {
          return prev + 1
        })
      })
      .catch(() => {
        console.log('TODO: render an error')
      })
      .finally(() => {
        fetching = false
      })
  }, [
    skip,
    setSkip,
    maxEvents,
    entry?.isIntersecting,
    events.length,
    initialSkip,
  ])

  return (
    <div>
      {events.map((event) => {
        return <EventView key={event.id} data={event} />
      })}

      {maxEvents && maxEvents - initialSkip !== events.length && (
        <button
          type="button"
          ref={ref}
          onClick={() =>
            console.log('TODO: fetch if no IntersectionObserver support')
          }
        >
          load more elements
        </button>
      )}

      {maxEvents && (
        <p>
          {' '}
          {events.length + initialSkip} van {maxEvents} concerten
        </p>
      )}
    </div>
  )
}
