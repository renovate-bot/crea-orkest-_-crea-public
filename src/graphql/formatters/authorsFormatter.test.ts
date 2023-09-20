import { authorsFormatter } from './authorsFormatter'

describe('authorsFormatter', () => {
  it('should return an empty array if there are no people', async () => {
    expect(authorsFormatter({ allPeople: [] })).toEqual([])
  })

  it('should return an author object', async () => {
    expect(
      authorsFormatter({
        allPeople: [
          {
            id: 'some-id',
          },
        ],
      })
    ).toEqual([
      {
        id: 'some-id',
        name: '',
        description: '',
      },
    ])
  })
})
