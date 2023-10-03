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
  const [loading, setLoading] = React.useState(false)
  const [events, setEvents] = React.useState<EventType[]>([])
  const ref = React.useRef<HTMLButtonElement>(null)
  const { numberOfEvents } = useEventsMeta()
  const [entry] = useIntersectionObserver({
    enabled: Boolean(numberOfEvents),
    ref,
  })

  React.useEffect(() => {
    if (!numberOfEvents) return
    if (events.length === numberOfEvents - initialSkip) return
    if (!entry?.isIntersecting) return
    if (loading) return
    if (skip > numberOfEvents) return
    setLoading(true)
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
        setLoading(false)
      })
  }, [
    loading,
    skip,
    numberOfEvents,
    entry?.isIntersecting,
    events.length,
    initialSkip,
  ])

  return (
    <div>
      {events.map((event) => {
        return <EventView key={event.id} data={event} />
      })}

      {numberOfEvents && (
        <button
          type="button"
          ref={ref}
          disabled={events.length === numberOfEvents - initialSkip}
          onClick={() =>
            console.log('TODO: fetch if no IntersectionObserver support')
          }
        >
          load more elements
        </button>
      )}

      {numberOfEvents && (
        <p>
          {/* TODO: fix this logic */}
          {events.length + initialSkip} van {numberOfEvents} concerten
        </p>
      )}
    </div>
  )
}
