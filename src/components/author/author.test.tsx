import { Author } from './author'
import type { Props } from './author'
import React from 'react'
import { getAuthor } from 'graphql/getters/getAuthor'
import { resolvedComponent } from '../../testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getAuthor', () => {
  return {
    __esModule: true,
    getAuthor: jest.fn(),
  }
})

const getAuthorMock = jest.mocked(getAuthor)

describe('Author component', () => {
  it('shows all the data', async () => {
    getAuthorMock.mockResolvedValueOnce({
      data: {
        id: 'id',
        name: 'name',
        description: 'role',
      },
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(Author, { id: 'some id' })

    render(<Resolved />)

    expect(screen.getByText('name')).toBeTruthy()
    expect(screen.getByText('role')).toBeTruthy()
  })
})
