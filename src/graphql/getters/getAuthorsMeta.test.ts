import { GetAuthorsMetaDocument } from 'graphql/generated/graphql'
import { client } from 'graphql/gqlClient'
import { getAuthorsMeta } from './getAuthorsMeta'

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

describe('getAuthorsMeta', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        _allPeopleMeta: {
          count: '186234305',
        },
      },
      operation: {
        key: 1,
        query: GetAuthorsMetaDocument,
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
    const { data } = await getAuthorsMeta()
    expect(data).toEqual({ count: '186234305' })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getAuthorsMeta()
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
