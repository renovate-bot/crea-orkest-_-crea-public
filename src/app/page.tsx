import { Author } from 'components/author'
import { Event } from 'components/event'
import { Events } from 'components/events'
import type { Metadata } from 'next'
import { Navigation } from 'components/navigation'
import React from 'react'
import { getAuthor } from 'graphql/getters/getAuthor'
import { getAuthors } from 'graphql/getters/getAuthors'
import { getEvent } from 'graphql/getters/getEvent'
import { getEvents } from 'graphql/getters/getEvents'
import { getGeneralInfo } from 'graphql/getters/getGeneralInfo'
import { getLocation } from 'graphql/getters/getLocation'
import { getLocations } from 'graphql/getters/getLocations'
import { getPage } from 'graphql/getters/getPage'
import { getPageSeo } from 'graphql/getters/getPageSeo'
import { getPages } from 'graphql/getters/getPages'
import { getSiteInfo } from 'graphql/getters/getSiteInfo'

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: 'homepage' })

  return data
}

const Page = async () => {
  const author = await getAuthor({ id: '186234305' })
  const data = await getAuthors({ first: 10, skip: 0 })
  const pages = await getPages({ first: 10, skip: 0 })
  const page = await getPage({ slug: 'contact' })
  const events = await getEvents({
    first: 10,
    skip: 0,
  })
  const event = await getEvent({ id: '186970038' })
  const location = await getLocation({ id: '188451657' })
  const locations = await getLocations({ first: 10, skip: 0 })
  const genInfo = await getGeneralInfo()
  const siteInfo = await getSiteInfo()
  return (
    <main>
      <h1>Navigation</h1>
      <Navigation />
      <h1>Page</h1>
      <p>hello world</p>
      <p>author</p>
      <code>
        <pre>{JSON.stringify(author, undefined, 2)}</pre>
      </code>
      {author.data?.id && <Author id={author.data.id} />}
      <hr />
      <p>authors</p>
      <code>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </code>
      <hr />
      <p>pages</p>
      <code>
        <pre>{JSON.stringify(pages, undefined, 2)}</pre>
      </code>
      <hr />
      <p>page</p>
      <code>
        <pre>{JSON.stringify(page, undefined, 2)}</pre>
      </code>
      <hr />
      <p>events</p>
      <code>
        <pre>{JSON.stringify(events, undefined, 2)}</pre>
      </code>
      <Events skip={0} first={3} />
      <hr />
      <p>event</p>
      <code>
        <pre>{JSON.stringify(event, undefined, 2)}</pre>
      </code>
      <Event id={'186970038'} />
      <hr />
      <p>location</p>
      <code>
        <pre>{JSON.stringify(location, undefined, 2)}</pre>
      </code>
      <hr />

      <p>locations</p>
      <code>
        <pre>{JSON.stringify(locations, undefined, 2)}</pre>
      </code>
      <hr />

      <p>site info</p>
      <code>
        <pre>{JSON.stringify(siteInfo, undefined, 2)}</pre>
      </code>

      <p>gen info</p>
      <code>
        <pre>{JSON.stringify(genInfo, undefined, 2)}</pre>
      </code>
    </main>
  )
}

export default Page
