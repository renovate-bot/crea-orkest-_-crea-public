import type { GetPageSeoQuery } from 'graphql/generated/graphql'
import { metadataFormatter } from './metadataFormatter'

describe('metadataFormatter', () => {
  it('should return defaults', async () => {
    expect(metadataFormatter(undefined, 'some-page')).toEqual({
      alternates: {
        canonical: 'https://creaorkest.nl/some-page',
      },
      description: undefined, // TODO: can we fix this?
      manifest: 'https://creaorkest.nl/manifest.json',
      metadataBase: expect.objectContaining({
        host: 'creaorkest.nl',
        hostname: 'creaorkest.nl',
        href: 'https://creaorkest.nl/',
        origin: 'https://creaorkest.nl',
      }),
      openGraph: {
        description: undefined, // TODO: not good
        images: [
          {
            height: 900,
            url: '', // TODO: not good
            width: 1200,
          },
        ],
        locale: undefined, // TODO: not good
        siteName: 'Het Crea Orkest',
        title: 'Het Crea Orkest',
        type: 'article',
        url: 'https://creaorkest.nl/some-page',
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
  it('should return correct homepage values', async () => {
    expect(metadataFormatter(undefined, 'homepage')).toEqual(
      expect.objectContaining({
        alternates: expect.objectContaining({
          canonical: 'https://creaorkest.nl',
        }),
        metadataBase: expect.objectContaining({
          host: 'creaorkest.nl',
          hostname: 'creaorkest.nl',
          href: 'https://creaorkest.nl/',
          origin: 'https://creaorkest.nl',
        }),
        openGraph: expect.objectContaining({
          url: 'https://creaorkest.nl',
        }),
      })
    )
  })

  const mockData: GetPageSeoQuery['page'] = {
    _seoMetaTags: [
      { attributes: null, content: 'Contact', tag: 'title' },
      {
        attributes: { property: 'og:title', content: 'Contact' },
        content: null,
        tag: 'meta',
      },
      {
        attributes: { name: 'twitter:title', content: 'Contact' },
        content: null,
        tag: 'meta',
      },
      {
        attributes: {
          name: 'description',
          content: 'Kom in contact met het Crea Orkest',
        },
        content: null,
        tag: 'meta',
      },
      {
        attributes: {
          property: 'og:description',
          content: 'Kom in contact met het Crea Orkest',
        },
        content: null,
        tag: 'meta',
      },
      {
        attributes: {
          name: 'twitter:description',
          content: 'Kom in contact met het Crea Orkest',
        },
        content: null,
        tag: 'meta',
      },
      {
        attributes: {
          property: 'og:image',
          content:
            'https://www.datocms-assets.com/103931/1692002208-pxl_20230324_183549112.jpg?auto=format&fit=max&w=1200',
        },
        content: null,
        tag: 'meta',
      },
      {
        attributes: {
          name: 'twitter:image',
          content:
            'https://www.datocms-assets.com/103931/1692002208-pxl_20230324_183549112.jpg?auto=format&fit=max&w=1200',
        },
        content: null,
        tag: 'meta',
      },
      {
        attributes: { property: 'og:locale', content: 'en' },
        content: null,
        tag: 'meta',
      },
      {
        attributes: { property: 'og:type', content: 'article' },
        content: null,
        tag: 'meta',
      },
      {
        attributes: {
          property: 'article:modified_time',
          content: '2023-09-01T12:32:36Z',
        },
        content: null,
        tag: 'meta',
      },
      {
        attributes: { name: 'twitter:card', content: 'summary' },
        content: null,
        tag: 'meta',
      },
    ],
    seo: {
      description: 'Kom in contact met het Crea Orkest',
      image: {
        id: '65318740',
        alt: null,
        width: 4032,
        height: 3024,
        title: null,
        url: 'https://www.datocms-assets.com/103931/1692002208-pxl_20230324_183549112.jpg',
        video: null,
      },
      title: 'Contact',
      twitterCard: 'summary',
    },
  }

  it('should return correct page values', async () => {
    expect(metadataFormatter(mockData, 'some-page')).toEqual({
      alternates: {
        canonical: 'https://creaorkest.nl/some-page',
      },
      description: 'Kom in contact met het Crea Orkest',
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
        url: 'https://creaorkest.nl/some-page',
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
      title: 'Contact',
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
})
