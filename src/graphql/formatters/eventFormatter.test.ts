import { eventFormatter } from './eventFormatter'

describe('eventFormatter', () => {
  it('should return undefined if there is no concert', async () => {
    expect(eventFormatter({ concert: undefined })).toBeUndefined()
  })

  it('should return an object', async () => {
    expect(
      eventFormatter({
        concert: {
          id: 'some-id',
          locations: [
            {
              id: 'location-id',
            },
          ],
          persons: [{ id: 'person-id' }],
        },
      })
    ).toEqual({
      id: 'some-id',
      image: undefined,
      locations: [
        {
          id: '',
          startTime: undefined,
        },
      ],
      title: '',
    })
  })
})
