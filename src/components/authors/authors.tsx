import type { PersonModelOrderBy } from 'graphql/generated/graphql'
import React from 'react'
import { getAuthors } from 'graphql/getters/getAuthors'

export interface Props {
  skip: number
  first: number
  order: PersonModelOrderBy
}

export const Authors: React.FC<Props> = async ({ skip, first, order }) => {
  const { data } = await getAuthors({ skip, first, order })
  if (!data) return null

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
