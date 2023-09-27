import { slugFormatter } from './slugFormatter'

describe('slugFormatter', () => {
  it('should return the homepage', async () => {
    expect(slugFormatter('homepage')).toEqual('/')
  })

  it('should return an extranal url', async () => {
    expect(slugFormatter('https://example.com')).toEqual('https://example.com')
  })

  it('should not double prefix with a slash', async () => {
    expect(slugFormatter('/test')).toEqual('/test')
  })

  it('should prefix with a slash', async () => {
    expect(slugFormatter('test')).toEqual('/test')
  })
})
