import { eventsFormatter } from './eventsFormatter'

describe('eventsFormatter', () => {
  it('should return undefined if there is no concert', async () => {
    expect(eventsFormatter({ allConcerts: [] })).toEqual([])
  })

  it('should return an object', async () => {
    expect(
      eventsFormatter({
        allConcerts: [
          {
            __typename: 'ConcertRecord',
            id: 'some-id',
            _updatedAt: '2023-08-14T09:37:24+01:00',
            _createdAt: '2023-09-01T13:32:36+01:00',
            locations: [
              {
                id: 'locations-id',
                location: {
                  id: 'location-id',
                },
              },
            ],
            persons: [{ id: 'some-id' }],
          },
        ],
      })
    ).toEqual([
      {
        id: 'some-id',
        image: undefined,
        locations: [{ id: 'location-id', startTime: '' }],
        title: '',
        persons: [{ id: 'some-id', name: '', role: '' }],
      },
    ])
  })
})
