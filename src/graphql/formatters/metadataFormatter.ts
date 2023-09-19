import type { GetPageSeoQuery } from 'graphql/generated/graphql'
import type { Metadata } from 'next'

const base = 'https://creaorkest.nl' // TODO: runtime variable

export const metadataFormatter = (
  data: GetPageSeoQuery['page'],
  slug: string
): Metadata => ({
  title: data?.seo?.title,
  description: data?.seo?.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  metadataBase: new URL(base), // TODO: if there is no base, we have an error
  alternates: {
    canonical: slug === 'homepage' ? base : `${base}/${slug}`,
    // languages: {
    //   'en-US': '/en-US',
    //   'de-DE': '/de-DE',
    // },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' }, // TODO
    { media: '(prefers-color-scheme: dark)', color: 'black' }, // TODO
  ],
  manifest: `${base}/manifest.json`, // TODO
  openGraph: {
    title:
      data?._seoMetaTags.find(
        (tags) => tags?.attributes?.property === 'og:title'
      )?.content || undefined,
    description:
      data?._seoMetaTags.find(
        (tags) => tags?.attributes?.property === 'og:description'
      )?.content || undefined,
    url: slug === 'homepage' ? base : `${base}/${slug}`,
    siteName: 'Het Crea Orkest',
    type: 'article', // TODO: we only support this type at the moment
    images: [
      {
        url:
          data?._seoMetaTags.find(
            (tags) => tags?.attributes?.property === 'og:image'
          )?.content ?? '',
        width: 1200,
        height: 900,
      },
    ],
    locale:
      data?._seoMetaTags.find(
        (tags) => tags?.attributes?.property === 'og:locale'
      )?.content || undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title:
      data?._seoMetaTags.find(
        (tags) => tags?.attributes?.name === 'twitter:title'
      )?.content ?? '',
    description:
      data?._seoMetaTags.find(
        (tags) => tags?.attributes?.name === 'twitter:description'
      )?.content ?? '',
    // siteId: '24982498249824892498', // TODO: we need a twitter account for this
    // creator: '@creaOrkest', // TODO: we need a twitter account for this
    // creatorId: '24982498249824892498', // TODO: we need a twitter account for this
    images: [
      data?._seoMetaTags.find(
        (tags) => tags?.attributes?.name === 'twitter:image'
      )?.content ?? '',
    ],
  },
  // icons: {
  //   icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://example.com')], // TODO
  //   shortcut: ['/shortcut-icon.png'], // TODO
  //   apple: [
  //     { url: '/apple-icon.png' }, // TODO
  //     { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' }, // TODO
  //   ],
  //   other: [
  //     {
  //       rel: 'apple-touch-icon-precomposed', // TODO
  //       url: '/apple-touch-icon-precomposed.png', // TODO
  //     },
  //   ],
  // },
})
