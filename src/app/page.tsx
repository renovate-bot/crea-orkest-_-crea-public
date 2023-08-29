import { Author } from 'components/author'
import { ConcertModelOrderBy } from 'graphql/generated/graphql'
import { Event } from 'components/event'
import { Events } from 'components/events'
import React from 'react'
import { getAuthor } from 'graphql/getters/getAuthor'
import { getAuthors } from 'graphql/getters/getAuthors'
import { getEvent } from 'graphql/getters/getEvent'
import { getEvents } from 'graphql/getters/getEvents'
import { getGeneralInfo } from 'graphql/getters/getGeneralInfo'
import { getLocation } from 'graphql/getters/getLocation'
import { getLocations } from 'graphql/getters/getLocations'
import { getPage } from 'graphql/getters/getPage'
import { getPages } from 'graphql/getters/getPages'
import { getSiteInfo } from 'graphql/getters/getSiteInfo'

const Page = async () => {
  const author = await getAuthor({ id: '186234305' })
  const data = await getAuthors({ first: 10, skip: 0 })
  const pages = await getPages({ first: 10, skip: 0 })
  const page = await getPage({ slug: 'contact' })
  const events = await getEvents({
    first: 10,
    skip: 0,
    order: ConcertModelOrderBy.UpdatedAtAsc,
  })
  const event = await getEvent({ id: '186970038' })
  const location = await getLocation({ id: '188451657' })
  const locations = await getLocations({ first: 10, skip: 0 })
  const genInfo = await getGeneralInfo()
  const siteInfo = await getSiteInfo()
  return (
    <main>
      <h1>Page</h1>
      <p>hello world</p>
      <p>author</p>
      <code>{JSON.stringify(author)}</code>
      {author.data?.id && <Author id={author.data.id} />}
      <hr />
      <p>authors</p>
      <code>{JSON.stringify(data)}</code>
      <hr />
      <p>pages</p>
      <code>{JSON.stringify(pages)}</code>
      <hr />
      <p>page</p>
      <code>{JSON.stringify(page)}</code>
      <hr />
      <p>events</p>
      <code>{JSON.stringify(events)}</code>
      <Events skip={0} first={3} />
      <hr />
      <p>event</p>
      <code>{JSON.stringify(event)}</code>
      <Event id={'186970038'} />
      <hr />
      <p>location</p>
      <code>{JSON.stringify(location)}</code>
      <hr />

      <p>locations</p>
      <code>{JSON.stringify(locations)}</code>
      <hr />

      <p>site info</p>
      <code>{JSON.stringify(siteInfo)}</code>

      <p>gen info</p>
      <code>{JSON.stringify(genInfo)}</code>
    </main>
  )
}

export default Page
