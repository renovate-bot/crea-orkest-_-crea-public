import React from 'react'
import { renderHook } from '@testing-library/react'
import { useIntersectionObserver } from './useIntersectionObserver'

describe('useIntersectionObserver', () => {
  test('should pass', () => {
    const mockObserver = {
      observe: jest.fn(),
      disconnect: jest.fn(),
    }
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockImplementation((callback) => {
      callback([{ isIntersecting: true }], mockObserver)
      return mockObserver
    })
    window.IntersectionObserver = mockIntersectionObserver

    const mockHTMLDivElement = document.createElement('div')
    const { result, unmount } = renderHook(() => {
      const elementRef = React.useRef<HTMLDivElement>(mockHTMLDivElement)
      return useIntersectionObserver({ enabled: true, ref: elementRef })
    })
    expect(result.current).toEqual([{ isIntersecting: true }])
    expect(mockIntersectionObserver).toBeCalledWith(
      expect.any(Function),
      undefined
    )
    expect(mockObserver.observe).toBeCalledWith(mockHTMLDivElement)

    unmount()

    expect(mockObserver.disconnect).toBeCalled()
  })
})
