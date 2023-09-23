import type { Props as EventProps } from '../event'
import { Events } from './events'
import type { Props } from './events'
import React from 'react'
import { getEvents } from 'graphql/getters/getEvents'
import { mockEvent } from './mocks/mockEvents'
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

jest.mock('../event/event', () => {
  const originalModule = jest.requireActual('../event/event')
  return {
    __esModule: true,
    ...originalModule,
    Event: (props: EventProps) => (
      <div>
        [Event]: <span>{props.id}</span>
      </div>
    ),
  }
})

const getEventsMock = jest.mocked(getEvents)

describe('Events component', () => {
  it('shows all the data', async () => {
    getEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const ResolvedEvents = await resolvedComponent<Props>(Events, {
      skip: 0,
      first: 3,
    })

    const { container } = render(<ResolvedEvents />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('mock-id')).toBeInTheDocument()
  })
})
