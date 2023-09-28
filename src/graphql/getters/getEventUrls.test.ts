import { GetEventsUrlsDocument } from 'graphql/generated/graphql'
import { client } from 'graphql/gqlClient'
import { getEventUrls } from './getEventUrls'

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

describe('getEventUrls', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        allConcerts: [{}],
      },
      operation: {
        key: 1,
        query: GetEventsUrlsDocument,
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
    const { data } = await getEventUrls({ skip: 0, first: 1 })
    expect(data).toEqual([{}])
  })
  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getEventUrls({ skip: 0, first: 1 })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
