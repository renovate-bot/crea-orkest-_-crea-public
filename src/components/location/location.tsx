import { LocationView } from './locationView'
import React from 'react'
import { getLocation } from 'graphql/getters/getLocation'

export interface Props {
  id: string
}

export const Location: React.FC<Props> = async ({ id }) => {
  const { data } = await getLocation({ id })
  if (!data) return null

  return <LocationView data={data} />
}
