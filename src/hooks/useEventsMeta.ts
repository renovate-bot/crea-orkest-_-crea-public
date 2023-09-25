import React from 'react'
import { getEventsMeta } from 'graphql/getters/getEventsMeta'

export const useEventsMeta = () => {
  const [maxEvents, setMaxEvents] = React.useState<number>(0)

  React.useEffect(() => {
    async function getData() {
      const { data } = await getEventsMeta()
      if (!data?.count) return
      setMaxEvents(data.count)
    }
    getData()
  }, [])

  return { maxEvents }
}
