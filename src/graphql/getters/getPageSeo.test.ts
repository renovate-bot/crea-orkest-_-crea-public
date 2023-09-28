import { GetPageSeoDocument } from 'graphql/generated/graphql'
import { client } from 'graphql/gqlClient'
import { getPageSeo } from './getPageSeo'

jest.mock('../../graphql/gqlClient', () => {
  const originalModule = jest.requireActual('../../graphql/gqlClient')
  return {
    __esModule: true,
    ...originalModule,
    client: {
      ...originalModule,
      query: jest.fn(),
    },
  }
})

const mockedQuery = jest.mocked(client.query)

describe('getPageSeo', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {},
      operation: {
        key: 1,
        query: GetPageSeoDocument,
        variables: {},
        kind: 'query',
        context: {
          url: 'https://main--crea-orkest-p7nmyh.apollographos.net/graphql',
          requestPolicy: 'cache-first',
        },
      },
      stale: false,
      hasNext: false,
    })
    const { data } = await getPageSeo({ slug: '' })
    expect(data).toEqual({
      alternates: {
        canonical: 'https://creaorkest.nl/',
      },
      description: undefined,
      manifest: 'https://creaorkest.nl/manifest.json',
      metadataBase: expect.objectContaining({
        host: 'creaorkest.nl',
        hostname: 'creaorkest.nl',
        href: 'https://creaorkest.nl/',
        origin: 'https://creaorkest.nl',
      }),
      openGraph: {
        description: undefined,
        images: [
          {
            height: 900,
            url: '',
            width: 1200,
          },
        ],
        locale: undefined,
        siteName: 'Het Crea Orkest',
        title: 'Het Crea Orkest',
        type: 'article',
        url: 'https://creaorkest.nl/',
      },
      themeColor: [
        {
          color: 'cyan',
          media: '(prefers-color-scheme: light)',
        },
        {
          color: 'black',
          media: '(prefers-color-scheme: dark)',
        },
      ],
      title: 'Het Crea Orkest',
      twitter: {
        card: 'summary_large_image',
        description: '',
        images: [''],
        title: 'Het Crea Orkest',
      },
      viewport: {
        initialScale: 1,
        maximumScale: 1,
        width: 'device-width',
      },
    })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getPageSeo({ slug: '' })
    expect(data).toEqual({
      alternates: { canonical: 'https://creaorkest.nl/' },
      description: undefined,
      manifest: 'https://creaorkest.nl/manifest.json',
      metadataBase: expect.objectContaining({
        host: 'creaorkest.nl',
        hostname: 'creaorkest.nl',
        href: 'https://creaorkest.nl/',
        origin: 'https://creaorkest.nl',
      }),
      openGraph: {
        description: undefined,
        images: [{ height: 900, url: '', width: 1200 }],
        locale: undefined,
        siteName: 'Het Crea Orkest',
        title: 'Het Crea Orkest',
        type: 'article',
        url: 'https://creaorkest.nl/',
      },
      themeColor: [
        { color: 'cyan', media: '(prefers-color-scheme: light)' },
        { color: 'black', media: '(prefers-color-scheme: dark)' },
      ],
      title: 'Het Crea Orkest',
      twitter: {
        card: 'summary_large_image',
        description: '',
        images: [''],
        title: 'Het Crea Orkest',
      },
      viewport: { initialScale: 1, maximumScale: 1, width: 'device-width' },
    })
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
