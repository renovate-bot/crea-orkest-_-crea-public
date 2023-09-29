import { getPagesMeta } from 'graphql/getters/getPagesMeta'
import { usePagesMeta } from './usePagesMeta'
import { renderHook, waitFor } from '@testing-library/react'

jest.mock('../graphql/getters/getPagesMeta', () => {
  const originalModule = jest.requireActual('../graphql/getters/getPagesMeta')
  return {
    __esModule: true,
    ...originalModule,
    getPagesMeta: jest.fn(),
  }
})

const getPagesMetaMock = jest.mocked(getPagesMeta)

describe('usePagesMeta', () => {
  it('should return the number of pages', async () => {
    getPagesMetaMock.mockResolvedValue({
      data: {
        __typename: 'CollectionMetadata',
        count: 1,
      },
      error: undefined,
    })

    const { result } = renderHook(() => usePagesMeta())

    await waitFor(() => {
      expect(result.current.numberOfPages).toEqual(1)
    })
  })
})
