import type { Location } from 'graphql/types/location'
import React from 'react'

export interface Props {
  data: Location
}

export const LocationView: React.FC<Props> = ({ data }) => {
  const { title, address, lat, lon, startTime } = data
  return (
    <address>
      <h2>{title}</h2>
      {address && <p>{address}</p>}
      {lat && lon && (
        <p>
          {lat} {lon}
        </p>
      )}
      {startTime && <p>{new Date(startTime).toDateString()}</p>}
    </address>
  )
}
