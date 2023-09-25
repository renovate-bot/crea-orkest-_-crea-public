import { Event } from 'components/event'
import { LoadMoreEvents } from 'components/loadMoreEvents'
import { getEvents } from 'graphql/getters/getEvents'

const Page = async () => {
  const first = 2
  const { data } = await getEvents({ skip: 0, first })
  return (
    <div>
      <p>all concerts</p>

      {data?.map((events) => {
        return <Event key={events.id} id={events.id} />
      })}

      <LoadMoreEvents initialSkip={first} />
    </div>
  )
}

export default Page
