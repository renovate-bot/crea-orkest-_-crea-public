import { GetAuthorsDocument } from 'graphql/generated/graphql'
import { client } from 'graphql/gqlClient'
import { getAuthors } from './getAuthors'

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

describe('getAuthors', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        allPeople: [
          {
            id: '186234305',
            name: 'Thijs',
            role: 'Contrabassist',
          },
        ],
      },
      operation: {
        key: 1,
        query: GetAuthorsDocument,
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
    const { data } = await getAuthors({ skip: 0, first: 1 })
    expect(data).toEqual([
      { description: 'Contrabassist', id: '186234305', name: 'Thijs' },
    ])
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getAuthors({ skip: 0, first: 1 })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
