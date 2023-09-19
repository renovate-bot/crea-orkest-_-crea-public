import { Location } from './location'
import type { Props } from './location'
import React from 'react'
import { getLocation } from 'graphql/getters/getLocation'
import { resolvedComponent } from '../../testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getLocation', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getLocation')
  return {
    __esModule: true,
    ...originalModule,
    getLocation: jest.fn(),
  }
})

const getLocationMock = jest.mocked(getLocation)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getLocationMock.mockResolvedValueOnce({
      data: {
        title: 'title',
        address: 'some address lines',
        lat: 5,
        lon: 42,
        id: 'mock-ids',
      },
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(Location, {
      id: 'mock-id',
    })

    render(<Resolved />)

    expect(screen.getByText('title')).toBeTruthy()
  })
})
