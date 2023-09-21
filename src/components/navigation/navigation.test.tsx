import { Navigation } from './navigation'
import React from 'react'
import { getGeneralInfo } from 'graphql/getters/getGeneralInfo'
import { mockMenuData } from './mocks/mockMenuData'
import { resolvedComponent } from '../../utils/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getGeneralInfo', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getLocation')
  return {
    __esModule: true,
    ...originalModule,
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
