import { LoadMoreEvents } from './loadMoreEvents'
import React from 'react'
import { getEvents } from 'graphql/getters/getEvents'
import { mockEvent } from './mocks/mockEvents'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getEvents', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getEvents')
  return {
    __esModule: true,
    ...originalModule,
    getEvents: jest.fn(),
  }
})

jest.mock('../../hooks/useEventsMeta', () => {
  const originalModule = jest.requireActual('../../hooks/useEventsMeta')
  return {
    __esModule: true,
    ...originalModule,
    useEventsMeta: () => ({ numberOfEvents: 10 }),
  }
})

const getEventsMock = jest.mocked(getEvents)

describe('Events component', () => {
  it('shows all the data', async () => {
    getEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const { container } = render(<LoadMoreEvents initialSkip={1} />)

    expect(screen.getByText('1 van 10 concerten')).toBeInTheDocument()
    expect(screen.getByText('load more elements')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
