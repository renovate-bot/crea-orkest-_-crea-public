import type { GetGeneralInfoQuery } from 'graphql/generated/graphql'

export const mockMenuData: GetGeneralInfoQuery = {
  general: {
    id: '187236701',
    title: 'algemene info',
    menu: [
      {
        id: '187236699',
        label: 'contact',
        link: {
          __typename: 'PageRecord',
          _createdAt: 'some date time string',
          _updatedAt: 'some date time string',
          id: 'unique-id',
          slug: 'contact',
        },
      },
      {
        id: '187236700',
        label: 'homepage',
        link: {
          __typename: 'PageRecord',
          _createdAt: 'some date time string',
          _updatedAt: 'some date time string',
          id: 'unique-id',
          slug: 'homepage',
        },
      },
      {
        id: '194164583',
        label: 'level 1',
        menu: [
          {
            id: '194164581',
            label: 'level 2 - contact',
            link: {
              __typename: 'PageRecord',
              _createdAt: 'some date time string',
              _updatedAt: 'some date time string',
              id: 'unique-id',
              slug: 'contact',
            },
          },
          {
            id: '194164582',
            label: 'level 2 - specific page',
            link: {
              __typename: 'PageRecord',
              _createdAt: 'some date time string',
              _updatedAt: 'some date time string',
              id: 'unique-id',
              slug: 'specific/page',
            },
          },
        ],
      },
    ],
    logo: {
      id: '65318740',
      alt: null,
      width: 4032,
      height: 3024,
      title: null,
      url: 'https://www.datocms-assets.com/103931/1692002208-pxl_20230324_183549112.jpg',
      video: null,
    },
  },
}
