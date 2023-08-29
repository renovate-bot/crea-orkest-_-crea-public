import { DefaultPage } from './defaultPage'
import type { Props } from './defaultPage'
import React from 'react'
import { getPage } from 'graphql/getters/getPage'
import { resolvedComponent } from '../../testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getPage', () => {
  return {
    __esModule: true,
    getPage: jest.fn(),
  }
})

const getPageMock = jest.mocked(getPage)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getPageMock.mockResolvedValueOnce({
      data: {
        id: 'id',
        title: 'title',
        slug: 'contact',
      },
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(DefaultPage, {
      slug: 'contact',
    })

    render(<Resolved />)

    expect(screen.getByText('title')).toBeTruthy()
  })
})
