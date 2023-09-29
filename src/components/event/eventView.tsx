import type { Event } from 'graphql/types/event'
import Image from 'next/image'
import { LocationView } from 'components/location/locationView'
import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface Props {
  data: Event
}

export const EventView: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className={classNames(styles.card)}>
      {data.image?.url && (
        <Image
          priority={true} // TODO: only for the first item
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
                {person.name} | {person.description}
              </li>
            )
          })}
        </ul>
      )}
      {data?.locations?.map((item) => {
        if (!item?.id) return
        return <LocationView key={item.id} data={item} />
      })}
    </div>
  )
}
