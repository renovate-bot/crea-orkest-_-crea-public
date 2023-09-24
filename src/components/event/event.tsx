import Image from 'next/image'
import { Location } from 'components/location'
import React from 'react'
import classNames from 'classnames'
import { getEvent } from 'graphql/getters/getEvent'
import styles from './styles.module.scss'

export interface Props {
  id: string
}

export const Event: React.FC<Props> = async ({ id }) => {
  const { data } = await getEvent({ id })
  if (!data) return null

  return (
    <div className={classNames(styles.card)}>
      {data.image?.url && (
        <Image
          className={classNames(styles.card__image)}
          src={data.image.url}
          alt={data.image.description}
          width={data.image.width ?? 100}
          height={data.image.height ?? 100}
        />
      )}
      <h2>{data.title}</h2>
      {data.persons && data.persons.length > 0 && (
        <ul>
          {data.persons.map((person) => {
            return (
              <li key={person.id}>
                {person.name} | {person.role}
              </li>
            )
          })}
        </ul>
      )}
      {data?.locations?.map((item) => (
        <div key={item.id} className={classNames(styles.card__locations)}>
          <Location id={item.id} />
        </div>
      ))}
    </div>
  )
}
