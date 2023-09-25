import { eventFormatter } from './eventFormatter'

describe('eventFormatter', () => {
  it('should return a location object', async () => {
    expect(
      eventFormatter({
        __typename: 'ConcertRecord',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
        id: 'some-id',
        locations: [
          {
            id: 'ignore-this-id',
            location: {
              id: 'location-id',
            },
          },
        ],
        persons: [{ id: 'person-id' }],
      })
    ).toEqual({
      id: 'some-id',
      image: undefined,
      locations: [
        {
          id: 'location-id',
          startTime: undefined,
        },
      ],
      title: undefined,
      persons: [{ id: 'person-id', name: '', description: '' }],
    })
  })
})
