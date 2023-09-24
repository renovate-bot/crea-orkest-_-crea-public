import { Event } from 'components/event'
import { getEvents } from 'graphql/getters/getEvents'

const Page = async () => {
  const { data } = await getEvents({ skip: 0, first: 10 })

  return (
    <div>
      <p>all concerts</p>

      {data?.map((concert) => {
        return <Event key={concert.id} id={concert.id} />
      })}
      {/* TODO: client component that fetches more concerts? */}
    </div>
  )
}

export default Page
