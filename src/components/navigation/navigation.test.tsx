import { Navigation } from './navigation'
import React from 'react'
import { getGeneralInfo } from 'graphql/getters/getGeneralInfo'
import { mockMenuData } from './mockData'
import { resolvedComponent } from '../../testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getGeneralInfo', () => {
  return {
    __esModule: true,
    getGeneralInfo: jest.fn(),
  }
})

const getGeneralInfoMock = jest.mocked(getGeneralInfo)

describe('Concert component', () => {
  it('shows all the data', async () => {
    getGeneralInfoMock.mockResolvedValueOnce({
      data: mockMenuData,
      error: undefined,
    })

    const Resolved = await resolvedComponent(Navigation, {})

    render(<Resolved />)

    expect(screen.getByText('contact')).toBeTruthy()
  })
})
