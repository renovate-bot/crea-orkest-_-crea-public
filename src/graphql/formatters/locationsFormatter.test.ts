import { locationsFormatter } from './locationsFormatter'

describe('locationsFormatter', () => {
  it('should return an empty array', async () => {
    expect(locationsFormatter([])).toEqual([])
  })
  it('should return a locations array', async () => {
    expect(locationsFormatter([{ id: 'location-id' }])).toEqual([
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
