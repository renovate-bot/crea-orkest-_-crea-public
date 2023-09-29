import { getLocation } from 'graphql/getters/getLocation'
import { useLocation } from './useLocation'
import { renderHook, waitFor } from '@testing-library/react'

jest.mock('../graphql/getters/getLocation', () => {
  const originalModule = jest.requireActual('../graphql/getters/getLocation')
  return {
    __esModule: true,
    ...originalModule,
    getLocation: jest.fn(),
  }
})

const getLocationMock = jest.mocked(getLocation)

describe('useLocation', () => {
  it('should return the number of pages', async () => {
    getLocationMock.mockResolvedValue({
      data: {
        id: 'some-id',
      },
      error: undefined,
    })

    const { result } = renderHook(() => useLocation({ id: 'some-id' }))

    await waitFor(() => {
      expect(result.current).toEqual({ id: 'some-id' })
    })
  })
})
