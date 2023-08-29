import { Authors } from './authors'
import { PersonModelOrderBy } from 'graphql/generated/graphql'
import type { Props } from './authors'
import React from 'react'
import { getAuthors } from 'graphql/getters/getAuthors'
import { resolvedComponent } from '../../testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getAuthors', () => {
  return {
    __esModule: true,
    getAuthors: jest.fn(),
  }
})

const getAuthorsMock = jest.mocked(getAuthors)

describe('Authors component', () => {
  it('shows all the data', async () => {
    getAuthorsMock.mockResolvedValueOnce({
      data: [
        {
          id: 'id',
          name: 'name',
          description: 'role',
        },
      ],
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(Authors, {
      skip: 0,
      first: 1,
      order: PersonModelOrderBy.CreatedAtAsc,
    })

    render(<Resolved />)

    expect(screen.getByText('name')).toBeTruthy()
  })
})
