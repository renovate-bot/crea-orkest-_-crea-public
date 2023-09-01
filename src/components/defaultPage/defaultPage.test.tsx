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
        title: 'title',
        slug: 'contact',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
        id: 'unique-id',
        _seoMetaTags: [
          {
            tag: 'seo-tag',
          },
        ],
        content: [],
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
