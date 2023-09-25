import { Event } from 'components/event'
import { getEvents } from 'graphql/getters/getEvents'
import { getEventsMeta } from 'graphql/getters/getEventsMeta'

const Page = async () => {
  const { data } = await getEvents({ skip: 0, first: 10 })
  const meta = await getEventsMeta()
  return (
    <div>
      <p>all concerts</p>

      {data?.map((events) => {
        return <Event key={events.id} id={events.id} />
      })}

      {/* TODO: client component that fetches more events? */}
      {meta.data?.count && meta.data?.count > 1 && (
        <p>Total events: {meta.data?.count}</p>
      )}
    </div>
  )
}

export default Page
