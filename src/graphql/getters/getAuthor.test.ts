import { GetAuthorDocument } from 'graphql/generated/graphql'
import { client } from 'graphql/gqlClient'
import { getAuthor } from './getAuthor'

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

describe('getAuthor', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        person: {
          id: '186234305',
          name: 'Thijs',
          role: 'Contrabassist',
        },
      },
      operation: {
        key: 1,
        query: GetAuthorDocument,
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
    const { data } = await getAuthor({ id: '186234305' })
    expect(data).toEqual({
      description: 'Contrabassist',
      id: '186234305',
      name: 'Thijs',
    })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getAuthor({ id: '186234305' })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
