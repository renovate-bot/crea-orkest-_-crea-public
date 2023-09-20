import { locationFormatter } from './locationFormatter'

describe('locationFormatter', () => {
  it('should return a location object', async () => {
    expect(locationFormatter({})).toEqual({
      address: '',
      id: '',
      lat: undefined,
      lon: undefined,
      title: '',
    })
  })
})
