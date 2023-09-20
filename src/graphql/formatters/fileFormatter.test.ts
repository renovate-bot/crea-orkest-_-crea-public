import { fileFormatter } from './fileFormatter'

describe('fileFormatter', () => {
  it('should return an object', async () => {
    expect(
      fileFormatter({
        id: 'file-id',
        url: 'url',
      })
    ).toEqual({
      description: '',
      height: undefined,
      id: 'file-id',
      title: '',
      url: 'url',
      width: undefined,
    })
  })
})
