import { EventView } from './eventView'
import React from 'react'
import { getEvent } from 'graphql/getters/getEvent'

export interface Props {
  id: string
}

export const Event: React.FC<Props> = async ({ id }: Props) => {
  const { data } = await getEvent({ id })
  if (!data) return null

  return <EventView data={data} />
}
