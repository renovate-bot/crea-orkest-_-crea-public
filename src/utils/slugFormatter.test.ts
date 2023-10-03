import { slugFormatter } from './slugFormatter'

describe('slugFormatter', () => {
  it('should return the homepage', async () => {
    expect(slugFormatter({ slug: 'homepage' })).toEqual('/')
  })

  it('should return the homepage', async () => {
    expect(slugFormatter({ slug: '/' })).toEqual('/')
  })

  it('should return the homepage', async () => {
    expect(slugFormatter({ slug: '/', prefix: '/' })).toEqual('/')
  })

  it('should return the homepage and ignore prefix', async () => {
    expect(slugFormatter({ slug: 'homepage', prefix: 'ignore' })).toEqual('/')
  })

  it('should return the homepage', async () => {
    expect(slugFormatter({ slug: '' })).toEqual('/')
  })

  it('should return an extranal url', async () => {
    expect(slugFormatter({ slug: 'https://example.com' })).toEqual(
      'https://example.com'
    )
  })

  it('should not double prefix with a slash', async () => {
    expect(slugFormatter({ slug: '/test' })).toEqual('/test')
  })

  it('should prefix with a slash', async () => {
    expect(slugFormatter({ slug: 'test' })).toEqual('/test')
  })

  it('should not double prefix the prefix with a slash', async () => {
    expect(slugFormatter({ slug: 'test', prefix: '/some' })).toEqual(
      '/some/test'
    )
  })

  it('should prefix', async () => {
    expect(slugFormatter({ slug: 'test', prefix: 'apply' })).toEqual(
      '/apply/test'
    )
  })
})
