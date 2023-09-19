import { isValidUrl } from './isValidUrl'

describe('isValidUrl', () => {
  it('should return false', async () => {
    expect(isValidUrl('homepage')).toEqual(false)
    expect(isValidUrl('/homepage')).toEqual(false)
  })

  it('should handle http and https', async () => {
    expect(isValidUrl('http://example.com')).toEqual(true)
    expect(isValidUrl('https://example.com')).toEqual(true)
  })

  it('should handle mailto and tel', async () => {
    expect(isValidUrl('tel:248723498')).toEqual(true)
    expect(isValidUrl('mailto:test@test.test')).toEqual(true)
  })
})
