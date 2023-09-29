import type { Location } from 'graphql/types/location'
import React from 'react'
import { getLocation } from 'graphql/getters/getLocation'

export interface LocationProps {
  id: string
}

export const useLocation = ({ id }: LocationProps) => {
  const [location, setLocation] = React.useState<Location | null>(null)

  React.useEffect(() => {
    async function getData() {
      const { data } = await getLocation({ id })
      setLocation(data)
    }
    getData()
  }, [id])

  return location
}
