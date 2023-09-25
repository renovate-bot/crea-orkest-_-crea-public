import { locationFormatter } from './locationFormatter'

describe('locationFormatter', () => {
  it('should return a location object', async () => {
    expect(locationFormatter({ id: 'some-id' })).toEqual({
      address: undefined,
      id: 'some-id',
      lat: undefined,
      lon: undefined,
      title: undefined,
    })
  })
})
