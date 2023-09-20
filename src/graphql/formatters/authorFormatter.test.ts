import { authorFormatter } from './authorFormatter'

describe('authorFormatter', () => {
  it('should return undefined if there is no id', async () => {
    expect(authorFormatter({ person: undefined })).toBeUndefined()
  })

  it('should return an author object', async () => {
    expect(
      authorFormatter({
        person: {
          id: 'some-id',
        },
      })
    ).toEqual({
      id: 'some-id',
      name: '',
      description: '',
    })
  })
})
