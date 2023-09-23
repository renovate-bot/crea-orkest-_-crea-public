import { Event } from './event'
import type { Props } from './event'
import React from 'react'
import { getEvent } from 'graphql/getters/getEvent'
import { mockEvent } from './mocks/mockEvent'
import { resolvedComponent } from '../../utils/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../location/location', () => {
  const originalModule = jest.requireActual('../location/location')
  return {
    __esModule: true,
    ...originalModule,
    Location: jest.fn(() => <p>Location Component</p>),
  }
})

jest.mock('../../graphql/getters/getEvent', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getEvent')
  return {
    __esModule: true,
    ...originalModule,
    getEvent: jest.fn(),
  }
})

const getEventMock = jest.mocked(getEvent)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getEventMock.mockResolvedValueOnce({
      data: mockEvent,
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(Event, {
      id: 'some id',
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()

    expect(screen.getByText('name')).toBeTruthy()
    expect(screen.getByText('Location Component')).toBeTruthy()
  })
})
