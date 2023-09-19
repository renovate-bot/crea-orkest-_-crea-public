import { locationsFormatter } from './locationsFormatter'

describe('locationsFormatter', () => {
  it('should return an empty array', async () => {
    expect(locationsFormatter({ allLocations: [] })).toEqual([])
  })
  it('should return a locations array', async () => {
    expect(
      locationsFormatter({ allLocations: [{ id: 'location-id' }] })
    ).toEqual([
      {
        address: '',
        id: 'location-id',
        lat: undefined,
        lon: undefined,
        title: '',
      },
    ])
  })
})
