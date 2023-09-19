import { slugFormatter } from './slugFormatter'

describe('slugFormatter', () => {
  it('should return the homepage', async () => {
    slugFormatter('homepage')

    expect(slugFormatter('homepage')).toEqual('/')
  })

  it('should prefix with a slash', async () => {
    slugFormatter('test')

    expect(slugFormatter('test')).toEqual('/test')
  })
})
