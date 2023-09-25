import { authorsFormatter } from './authorsFormatter'

describe('authorsFormatter', () => {
  it('should return an empty array if there are no people', async () => {
    expect(authorsFormatter([])).toEqual([])
  })

  it('should return an author object', async () => {
    expect(
      authorsFormatter([
        {
          id: 'some-id',
        },
      ])
    ).toEqual([
      {
        id: 'some-id',
        name: '',
        description: '',
      },
    ])
  })
})
