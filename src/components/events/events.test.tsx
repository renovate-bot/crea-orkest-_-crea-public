import { Events } from './events'
import type { Props } from './events'
import React from 'react'
import { getEvents } from 'graphql/getters/getEvents'
import { resolvedComponent } from '../../utils/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getEvents', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getEvents')
  return {
    __esModule: true,
    ...originalModule,
    getEvents: jest.fn(),
  }
})

const getEventsMock = jest.mocked(getEvents)

describe('Events component', () => {
  it('shows all the data', async () => {
    getEventsMock.mockResolvedValueOnce({
      data: [
        {
          id: 'id',
          title: 'title',
          image: undefined,
          locations: [{ startTime: 'time', id: 'loc' }],
        },
      ],
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(Events, {
      skip: 0,
      first: 3,
    })

    render(<Resolved />)

    expect(screen.getByText('title')).toBeTruthy()
  })
})
