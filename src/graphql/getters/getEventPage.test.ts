import { GetEventPageDocument } from 'graphql/generated/graphql'
import { client } from 'graphql/gqlClient'
import { getEventPage } from './getEventPage'

jest.mock('../../graphql/gqlClient', () => {
  const originalModule = jest.requireActual('../../graphql/gqlClient')
  return {
    __esModule: true,
    ...originalModule,
    client: {
      ...originalModule,
      query: jest.fn(),
    },
  }
})

const mockedQuery = jest.mocked(client.query)

describe('getEventPage', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        concert: {
          __typename: 'ConcertRecord',
          _createdAt: '2023-09-24T17:30:44+02:00',
          _firstPublishedAt: '2023-09-24T17:30:44+02:00',
          _publishedAt: '2023-09-24T17:30:44+02:00',
          _updatedAt: '2023-09-24T17:30:44+02:00',
          id: '201835035',
          title: 'another concert',
          slug: 'another-concert',
          locations: [],
          poster: {
            id: '72577339',
            alt: null,
            width: 342,
            height: 384,
            title: null,
            url: 'https://www.datocms-assets.com/screenshot.png',
            video: null,
            __typename: 'FileField',
          },
          persons: [],
        },
      },
      operation: {
        key: 1,
        query: GetEventPageDocument,
        variables: {},
        kind: 'query',
        context: {
          url: 'https://main--crea-orkest-p7nmyh.apollographos.net/graphql',
          requestPolicy: 'cache-first',
        },
      },
      stale: false,
      hasNext: false,
    })
    const { data } = await getEventPage({ slug: 'another-concert' })
    expect(data).toEqual({
      id: '201835035',
      image: {
        description: '',
        height: 384,
        id: '72577339',
        title: '',
        url: 'https://www.datocms-assets.com/screenshot.png',
        width: 342,
      },
      locations: [],
      persons: [],
      title: 'another concert',
    })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getEventPage({ slug: 'another-concert' })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
