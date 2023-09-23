import { DefaultPage } from './defaultPage'
import type { Props } from './defaultPage'
import React from 'react'
import { getPage } from 'graphql/getters/getPage'
import { resolvedComponent } from '../../utils/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../navigation', () => {
  const originalModule = jest.requireActual('../navigation')
  return {
    __esModule: true,
    ...originalModule,
    Navigation: jest.fn(() => <div>[Navigation]</div>),
  }
})

jest.mock('../../graphql/getters/getPage', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getPage')
  return {
    __esModule: true,
    ...originalModule,
    getPage: jest.fn(),
  }
})

const getPageMock = jest.mocked(getPage)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getPageMock.mockResolvedValueOnce({
      data: {
        __typename: 'PageRecord',
        title: 'title',
        slug: 'contact',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
        id: 'unique-id',
        content: [],
      },
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(DefaultPage, {
      slug: 'contact',
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('title')).toBeTruthy()
  })
})
