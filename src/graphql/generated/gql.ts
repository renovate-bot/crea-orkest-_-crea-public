/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment author on PersonRecord {\n    id\n    name\n    role\n  }\n':
    types.AuthorFragmentDoc,
  '\n  fragment colors on ColorField {\n    alpha\n    blue\n    cssRgb\n    green\n    hex\n    red\n  }\n':
    types.ColorsFragmentDoc,
  '\n  fragment concertDetail on ConcertRecord {\n    ...identifiable\n    title\n    slug\n    locations {\n      ...locationItem\n    }\n    poster {\n      ...file\n    }\n    persons {\n      ...author\n    }\n  }\n  \n  \n  \n  \n':
    types.ConcertDetailFragmentDoc,
  '\n  fragment concertLink on ConcertRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n':
    types.ConcertLinkFragmentDoc,
  '\n  fragment coordinates on LatLonField {\n    latitude\n    longitude\n  }\n':
    types.CoordinatesFragmentDoc,
  '\n  fragment eventLink on ConcertRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n':
    types.EventLinkFragmentDoc,
  '\n  fragment events on ConcertListRecord {\n    ...identifiable\n    pinnedConcerts {\n      ...concertDetail\n    }\n    showAllConcerts\n  }\n  \n  \n':
    types.EventsFragmentDoc,
  '\n  fragment file on FileField {\n    id\n    alt\n    width\n    height\n    title\n    url\n    video {\n      ...videoUpload\n    }\n  }\n  \n  \n  \n  \n':
    types.FileFragmentDoc,
  '\n  fragment focalPoint on focalPoint {\n    x\n    y\n  }\n':
    types.FocalPointFragmentDoc,
  '\n  fragment generalInfo on GeneralRecord {\n    id\n    title\n    menu {\n      ... on MenuItemRecord {\n        ...menuItem\n      }\n      ... on SubmenuItemRecord {\n        ...submenuItem\n      }\n    }\n    logo {\n      ...file\n    }\n  }\n  \n  \n  \n':
    types.GeneralInfoFragmentDoc,
  '\n  fragment identifiable on RecordInterface {\n    __typename\n    _createdAt\n    _firstPublishedAt\n    _publishedAt\n    _updatedAt\n    id\n  }\n':
    types.IdentifiableFragmentDoc,
  '\n  fragment responsiveImage on ResponsiveImage {\n    title\n    alt\n    sizes\n    aspectRatio\n    bgColor\n    src\n    height\n    width\n  }\n':
    types.ResponsiveImageFragmentDoc,
  '\n  fragment mediaItem on MediaItemRecord {\n    ...identifiable\n    title\n    item {\n      ...file\n    }\n    itemUrl\n  }\n  \n  \n':
    types.MediaItemFragmentDoc,
  '\n  fragment image on ImageRecord {\n    ...identifiable\n    item {\n      ...mediaItem\n    }\n  }\n  \n  \n':
    types.ImageFragmentDoc,
  '\n  fragment link on LinkRecord {\n    id\n    internalTitle\n    externalUrl\n    page {\n      ...pageLink\n    }\n  }\n  \n':
    types.LinkFragmentDoc,
  '\n  fragment location on LocationRecord {\n    id\n    title\n    addressTitle\n    address {\n      ...coordinates\n    }\n  }\n  \n':
    types.LocationFragmentDoc,
  '\n  fragment locationItem on LocationItemRecord {\n    id\n    dateTime\n    location {\n      ...location\n    }\n  }\n  \n':
    types.LocationItemFragmentDoc,
  '\n  fragment menuItem on MenuItemRecord {\n    id\n    label\n    link {\n      ...pageLink\n    }\n  }\n  \n':
    types.MenuItemFragmentDoc,
  '\n  fragment page on PageRecord {\n    ...identifiable\n    title\n    slug\n    content {\n      ... on ConcertListRecord {\n        id\n      }\n      ... on TextBlockRecord {\n        id\n      }\n      ... on TwoColumnRecord {\n        id\n      }\n    }\n  }\n  \n  \n  \n':
    types.PageFragmentDoc,
  '\n  fragment pageDetail on PageRecord {\n    ...identifiable\n    title\n    slug\n    content {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on TextBlockRecord {\n        ...textBlock\n      }\n      ... on TwoColumnRecord {\n        ...twoColum\n      }\n    }\n  }\n  \n  \n  \n  \n':
    types.PageDetailFragmentDoc,
  '\n  fragment pageDetailSeo on PageRecord {\n    _seoMetaTags {\n      ...tag\n    }\n    seo {\n      ...seo\n    }\n  }\n  \n  \n':
    types.PageDetailSeoFragmentDoc,
  '\n  fragment pageLink on PageRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n':
    types.PageLinkFragmentDoc,
  '\n  fragment seo on SeoField {\n    description\n    image {\n      ...file\n    }\n    title\n    twitterCard\n  }\n  \n':
    types.SeoFragmentDoc,
  '\n  fragment seoSettings on GlobalSeoField {\n    facebookPageUrl\n    siteName\n    titleSuffix\n    twitterAccount\n    fallbackSeo {\n      ...seo\n    }\n  }\n  \n':
    types.SeoSettingsFragmentDoc,
  '\n  fragment submenuItem on SubmenuItemRecord {\n    id\n    label\n    menu {\n      ...menuItem\n    }\n  }\n  \n':
    types.SubmenuItemFragmentDoc,
  '\n  fragment tag on Tag {\n    attributes\n    content\n    tag\n  }\n':
    types.TagFragmentDoc,
  '\n  fragment textBlockContent on TextBlockModelContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n':
    types.TextBlockContentFragmentDoc,
  '\n  fragment leftContent on TwoColumnModelLeftContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n':
    types.LeftContentFragmentDoc,
  '\n  fragment rightContent on TwoColumnModelRightContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n':
    types.RightContentFragmentDoc,
  '\n  fragment textBlock on TextBlockRecord {\n    ...identifiable\n    content {\n      ...textBlockContent\n    }\n  }\n  \n  \n':
    types.TextBlockFragmentDoc,
  '\n  fragment twoColum on TwoColumnRecord {\n    ...identifiable\n    leftContent {\n      ...leftContent\n    }\n    rightContent {\n      ...rightContent\n    }\n  }\n  \n  \n  \n':
    types.TwoColumFragmentDoc,
  '\n  fragment videoUpload on UploadVideoField {\n    mp4Url\n    muxAssetId\n    muxPlaybackId\n    streamingUrl\n    thumbnailUrl\n  }\n':
    types.VideoUploadFragmentDoc,
  '\n  fragment video on VideoRecord {\n    ...identifiable\n    title\n    media {\n      ...videoField\n    }\n    thumbnail {\n      ...mediaItem\n    }\n  }\n  \n  \n':
    types.VideoFragmentDoc,
  '\n  fragment videoField on VideoField {\n    height\n    provider\n    providerUid\n    thumbnailUrl\n    title\n    url\n    width\n  }\n':
    types.VideoFieldFragmentDoc,
  '\n  query getAuthor($id: ItemId!) {\n    person(filter: { id: { eq: $id } }) {\n      ...author\n    }\n  }\n  \n':
    types.GetAuthorDocument,
  '\n  query getAuthors(\n    $first: IntType!\n    $skip: IntType!\n    $order: [PersonModelOrderBy]\n  ) {\n    allPeople(first: $first, skip: $skip, orderBy: $order) {\n      ...author\n    }\n  }\n  \n':
    types.GetAuthorsDocument,
  '\n  query getAuthorsMeta {\n    _allPeopleMeta {\n      count\n    }\n  }\n':
    types.GetAuthorsMetaDocument,
  '\n  query getEvent($id: ItemId!) {\n    concert(filter: { id: { eq: $id } }) {\n      ...concertDetail\n    }\n  }\n  \n':
    types.GetEventDocument,
  '\n  query getEventPage($slug: String!) {\n    concert(filter: { slug: { eq: $slug } }) {\n      ...concertDetail\n    }\n  }\n  \n':
    types.GetEventPageDocument,
  '\n  query getEventsUrls(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      ...eventLink\n    }\n  }\n  \n':
    types.GetEventsUrlsDocument,
  '\n  query getEvents(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      ...concertDetail\n    }\n  }\n  \n':
    types.GetEventsDocument,
  '\n  query getEventsMeta {\n    _allConcertsMeta {\n      count\n    }\n  }\n':
    types.GetEventsMetaDocument,
  '\n  query getGeneralInfo {\n    general {\n      ...generalInfo\n    }\n  }\n  \n':
    types.GetGeneralInfoDocument,
  '\n  query getLocation($id: ItemId) {\n    location(filter: { id: { eq: $id } }) {\n      ...location\n    }\n  }\n  \n':
    types.GetLocationDocument,
  '\n  query getLocations(\n    $first: IntType\n    $skip: IntType\n    $order: [LocationModelOrderBy]\n  ) {\n    allLocations(first: $first, skip: $skip, orderBy: $order) {\n      ...location\n    }\n  }\n  \n':
    types.GetLocationsDocument,
  '\n  query getPage($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetail\n    }\n  }\n  \n':
    types.GetPageDocument,
  '\n  query getPageSeo($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetailSeo\n    }\n  }\n  \n':
    types.GetPageSeoDocument,
  '\n  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {\n    allPages(first: $first, skip: $skip, orderBy: $order) {\n      ...pageLink\n    }\n  }\n  \n':
    types.GetPagesDocument,
  '\n  query getPagesMeta {\n    _allPagesMeta {\n      count\n    }\n  }\n':
    types.GetPagesMetaDocument,
  '\n  query getSiteInfo {\n    _site {\n      locales\n      globalSeo {\n        ...seoSettings\n      }\n    }\n  }\n  \n':
    types.GetSiteInfoDocument,
  '\n  query getSubmenu {\n    general {\n      menu {\n        ... on SubmenuItemRecord {\n          ...submenuItem\n        }\n      }\n    }\n  }\n  \n':
    types.GetSubmenuDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment author on PersonRecord {\n    id\n    name\n    role\n  }\n'
): (typeof documents)['\n  fragment author on PersonRecord {\n    id\n    name\n    role\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment colors on ColorField {\n    alpha\n    blue\n    cssRgb\n    green\n    hex\n    red\n  }\n'
): (typeof documents)['\n  fragment colors on ColorField {\n    alpha\n    blue\n    cssRgb\n    green\n    hex\n    red\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment concertDetail on ConcertRecord {\n    ...identifiable\n    title\n    slug\n    locations {\n      ...locationItem\n    }\n    poster {\n      ...file\n    }\n    persons {\n      ...author\n    }\n  }\n  \n  \n  \n  \n'
): (typeof documents)['\n  fragment concertDetail on ConcertRecord {\n    ...identifiable\n    title\n    slug\n    locations {\n      ...locationItem\n    }\n    poster {\n      ...file\n    }\n    persons {\n      ...author\n    }\n  }\n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment concertLink on ConcertRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n'
): (typeof documents)['\n  fragment concertLink on ConcertRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment coordinates on LatLonField {\n    latitude\n    longitude\n  }\n'
): (typeof documents)['\n  fragment coordinates on LatLonField {\n    latitude\n    longitude\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment eventLink on ConcertRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n'
): (typeof documents)['\n  fragment eventLink on ConcertRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment events on ConcertListRecord {\n    ...identifiable\n    pinnedConcerts {\n      ...concertDetail\n    }\n    showAllConcerts\n  }\n  \n  \n'
): (typeof documents)['\n  fragment events on ConcertListRecord {\n    ...identifiable\n    pinnedConcerts {\n      ...concertDetail\n    }\n    showAllConcerts\n  }\n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment file on FileField {\n    id\n    alt\n    width\n    height\n    title\n    url\n    video {\n      ...videoUpload\n    }\n  }\n  \n  \n  \n  \n'
): (typeof documents)['\n  fragment file on FileField {\n    id\n    alt\n    width\n    height\n    title\n    url\n    video {\n      ...videoUpload\n    }\n  }\n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment focalPoint on focalPoint {\n    x\n    y\n  }\n'
): (typeof documents)['\n  fragment focalPoint on focalPoint {\n    x\n    y\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment generalInfo on GeneralRecord {\n    id\n    title\n    menu {\n      ... on MenuItemRecord {\n        ...menuItem\n      }\n      ... on SubmenuItemRecord {\n        ...submenuItem\n      }\n    }\n    logo {\n      ...file\n    }\n  }\n  \n  \n  \n'
): (typeof documents)['\n  fragment generalInfo on GeneralRecord {\n    id\n    title\n    menu {\n      ... on MenuItemRecord {\n        ...menuItem\n      }\n      ... on SubmenuItemRecord {\n        ...submenuItem\n      }\n    }\n    logo {\n      ...file\n    }\n  }\n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment identifiable on RecordInterface {\n    __typename\n    _createdAt\n    _firstPublishedAt\n    _publishedAt\n    _updatedAt\n    id\n  }\n'
): (typeof documents)['\n  fragment identifiable on RecordInterface {\n    __typename\n    _createdAt\n    _firstPublishedAt\n    _publishedAt\n    _updatedAt\n    id\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment responsiveImage on ResponsiveImage {\n    title\n    alt\n    sizes\n    aspectRatio\n    bgColor\n    src\n    height\n    width\n  }\n'
): (typeof documents)['\n  fragment responsiveImage on ResponsiveImage {\n    title\n    alt\n    sizes\n    aspectRatio\n    bgColor\n    src\n    height\n    width\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment mediaItem on MediaItemRecord {\n    ...identifiable\n    title\n    item {\n      ...file\n    }\n    itemUrl\n  }\n  \n  \n'
): (typeof documents)['\n  fragment mediaItem on MediaItemRecord {\n    ...identifiable\n    title\n    item {\n      ...file\n    }\n    itemUrl\n  }\n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment image on ImageRecord {\n    ...identifiable\n    item {\n      ...mediaItem\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment image on ImageRecord {\n    ...identifiable\n    item {\n      ...mediaItem\n    }\n  }\n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment link on LinkRecord {\n    id\n    internalTitle\n    externalUrl\n    page {\n      ...pageLink\n    }\n  }\n  \n'
): (typeof documents)['\n  fragment link on LinkRecord {\n    id\n    internalTitle\n    externalUrl\n    page {\n      ...pageLink\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment location on LocationRecord {\n    id\n    title\n    addressTitle\n    address {\n      ...coordinates\n    }\n  }\n  \n'
): (typeof documents)['\n  fragment location on LocationRecord {\n    id\n    title\n    addressTitle\n    address {\n      ...coordinates\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment locationItem on LocationItemRecord {\n    id\n    dateTime\n    location {\n      ...location\n    }\n  }\n  \n'
): (typeof documents)['\n  fragment locationItem on LocationItemRecord {\n    id\n    dateTime\n    location {\n      ...location\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment menuItem on MenuItemRecord {\n    id\n    label\n    link {\n      ...pageLink\n    }\n  }\n  \n'
): (typeof documents)['\n  fragment menuItem on MenuItemRecord {\n    id\n    label\n    link {\n      ...pageLink\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment page on PageRecord {\n    ...identifiable\n    title\n    slug\n    content {\n      ... on ConcertListRecord {\n        id\n      }\n      ... on TextBlockRecord {\n        id\n      }\n      ... on TwoColumnRecord {\n        id\n      }\n    }\n  }\n  \n  \n  \n'
): (typeof documents)['\n  fragment page on PageRecord {\n    ...identifiable\n    title\n    slug\n    content {\n      ... on ConcertListRecord {\n        id\n      }\n      ... on TextBlockRecord {\n        id\n      }\n      ... on TwoColumnRecord {\n        id\n      }\n    }\n  }\n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment pageDetail on PageRecord {\n    ...identifiable\n    title\n    slug\n    content {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on TextBlockRecord {\n        ...textBlock\n      }\n      ... on TwoColumnRecord {\n        ...twoColum\n      }\n    }\n  }\n  \n  \n  \n  \n'
): (typeof documents)['\n  fragment pageDetail on PageRecord {\n    ...identifiable\n    title\n    slug\n    content {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on TextBlockRecord {\n        ...textBlock\n      }\n      ... on TwoColumnRecord {\n        ...twoColum\n      }\n    }\n  }\n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment pageDetailSeo on PageRecord {\n    _seoMetaTags {\n      ...tag\n    }\n    seo {\n      ...seo\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment pageDetailSeo on PageRecord {\n    _seoMetaTags {\n      ...tag\n    }\n    seo {\n      ...seo\n    }\n  }\n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment pageLink on PageRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n'
): (typeof documents)['\n  fragment pageLink on PageRecord {\n    ...identifiable\n    title\n    slug\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment seo on SeoField {\n    description\n    image {\n      ...file\n    }\n    title\n    twitterCard\n  }\n  \n'
): (typeof documents)['\n  fragment seo on SeoField {\n    description\n    image {\n      ...file\n    }\n    title\n    twitterCard\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment seoSettings on GlobalSeoField {\n    facebookPageUrl\n    siteName\n    titleSuffix\n    twitterAccount\n    fallbackSeo {\n      ...seo\n    }\n  }\n  \n'
): (typeof documents)['\n  fragment seoSettings on GlobalSeoField {\n    facebookPageUrl\n    siteName\n    titleSuffix\n    twitterAccount\n    fallbackSeo {\n      ...seo\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment submenuItem on SubmenuItemRecord {\n    id\n    label\n    menu {\n      ...menuItem\n    }\n  }\n  \n'
): (typeof documents)['\n  fragment submenuItem on SubmenuItemRecord {\n    id\n    label\n    menu {\n      ...menuItem\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment tag on Tag {\n    attributes\n    content\n    tag\n  }\n'
): (typeof documents)['\n  fragment tag on Tag {\n    attributes\n    content\n    tag\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment textBlockContent on TextBlockModelContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n'
): (typeof documents)['\n  fragment textBlockContent on TextBlockModelContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment leftContent on TwoColumnModelLeftContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n'
): (typeof documents)['\n  fragment leftContent on TwoColumnModelLeftContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment rightContent on TwoColumnModelRightContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n'
): (typeof documents)['\n  fragment rightContent on TwoColumnModelRightContentField {\n    value\n    links {\n      ... on ConcertRecord {\n        ...concertLink\n      }\n      ... on PageRecord {\n        ...pageLink\n      }\n    }\n    blocks {\n      ... on ConcertListRecord {\n        ...events\n      }\n      ... on ImageRecord {\n        ...image\n      }\n      ... on VideoRecord {\n        ...video\n      }\n    }\n  }\n  \n  \n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment textBlock on TextBlockRecord {\n    ...identifiable\n    content {\n      ...textBlockContent\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment textBlock on TextBlockRecord {\n    ...identifiable\n    content {\n      ...textBlockContent\n    }\n  }\n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment twoColum on TwoColumnRecord {\n    ...identifiable\n    leftContent {\n      ...leftContent\n    }\n    rightContent {\n      ...rightContent\n    }\n  }\n  \n  \n  \n'
): (typeof documents)['\n  fragment twoColum on TwoColumnRecord {\n    ...identifiable\n    leftContent {\n      ...leftContent\n    }\n    rightContent {\n      ...rightContent\n    }\n  }\n  \n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment videoUpload on UploadVideoField {\n    mp4Url\n    muxAssetId\n    muxPlaybackId\n    streamingUrl\n    thumbnailUrl\n  }\n'
): (typeof documents)['\n  fragment videoUpload on UploadVideoField {\n    mp4Url\n    muxAssetId\n    muxPlaybackId\n    streamingUrl\n    thumbnailUrl\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment video on VideoRecord {\n    ...identifiable\n    title\n    media {\n      ...videoField\n    }\n    thumbnail {\n      ...mediaItem\n    }\n  }\n  \n  \n'
): (typeof documents)['\n  fragment video on VideoRecord {\n    ...identifiable\n    title\n    media {\n      ...videoField\n    }\n    thumbnail {\n      ...mediaItem\n    }\n  }\n  \n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment videoField on VideoField {\n    height\n    provider\n    providerUid\n    thumbnailUrl\n    title\n    url\n    width\n  }\n'
): (typeof documents)['\n  fragment videoField on VideoField {\n    height\n    provider\n    providerUid\n    thumbnailUrl\n    title\n    url\n    width\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getAuthor($id: ItemId!) {\n    person(filter: { id: { eq: $id } }) {\n      ...author\n    }\n  }\n  \n'
): (typeof documents)['\n  query getAuthor($id: ItemId!) {\n    person(filter: { id: { eq: $id } }) {\n      ...author\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getAuthors(\n    $first: IntType!\n    $skip: IntType!\n    $order: [PersonModelOrderBy]\n  ) {\n    allPeople(first: $first, skip: $skip, orderBy: $order) {\n      ...author\n    }\n  }\n  \n'
): (typeof documents)['\n  query getAuthors(\n    $first: IntType!\n    $skip: IntType!\n    $order: [PersonModelOrderBy]\n  ) {\n    allPeople(first: $first, skip: $skip, orderBy: $order) {\n      ...author\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getAuthorsMeta {\n    _allPeopleMeta {\n      count\n    }\n  }\n'
): (typeof documents)['\n  query getAuthorsMeta {\n    _allPeopleMeta {\n      count\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getEvent($id: ItemId!) {\n    concert(filter: { id: { eq: $id } }) {\n      ...concertDetail\n    }\n  }\n  \n'
): (typeof documents)['\n  query getEvent($id: ItemId!) {\n    concert(filter: { id: { eq: $id } }) {\n      ...concertDetail\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getEventPage($slug: String!) {\n    concert(filter: { slug: { eq: $slug } }) {\n      ...concertDetail\n    }\n  }\n  \n'
): (typeof documents)['\n  query getEventPage($slug: String!) {\n    concert(filter: { slug: { eq: $slug } }) {\n      ...concertDetail\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getEventsUrls(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      ...eventLink\n    }\n  }\n  \n'
): (typeof documents)['\n  query getEventsUrls(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      ...eventLink\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getEvents(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      ...concertDetail\n    }\n  }\n  \n'
): (typeof documents)['\n  query getEvents(\n    $skip: IntType!\n    $first: IntType!\n    $order: [ConcertModelOrderBy]\n  ) {\n    allConcerts(first: $first, skip: $skip, orderBy: $order) {\n      ...concertDetail\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getEventsMeta {\n    _allConcertsMeta {\n      count\n    }\n  }\n'
): (typeof documents)['\n  query getEventsMeta {\n    _allConcertsMeta {\n      count\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getGeneralInfo {\n    general {\n      ...generalInfo\n    }\n  }\n  \n'
): (typeof documents)['\n  query getGeneralInfo {\n    general {\n      ...generalInfo\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getLocation($id: ItemId) {\n    location(filter: { id: { eq: $id } }) {\n      ...location\n    }\n  }\n  \n'
): (typeof documents)['\n  query getLocation($id: ItemId) {\n    location(filter: { id: { eq: $id } }) {\n      ...location\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getLocations(\n    $first: IntType\n    $skip: IntType\n    $order: [LocationModelOrderBy]\n  ) {\n    allLocations(first: $first, skip: $skip, orderBy: $order) {\n      ...location\n    }\n  }\n  \n'
): (typeof documents)['\n  query getLocations(\n    $first: IntType\n    $skip: IntType\n    $order: [LocationModelOrderBy]\n  ) {\n    allLocations(first: $first, skip: $skip, orderBy: $order) {\n      ...location\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getPage($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetail\n    }\n  }\n  \n'
): (typeof documents)['\n  query getPage($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetail\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getPageSeo($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetailSeo\n    }\n  }\n  \n'
): (typeof documents)['\n  query getPageSeo($slug: String!) {\n    page(filter: { slug: { eq: $slug } }) {\n      ...pageDetailSeo\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {\n    allPages(first: $first, skip: $skip, orderBy: $order) {\n      ...pageLink\n    }\n  }\n  \n'
): (typeof documents)['\n  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {\n    allPages(first: $first, skip: $skip, orderBy: $order) {\n      ...pageLink\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getPagesMeta {\n    _allPagesMeta {\n      count\n    }\n  }\n'
): (typeof documents)['\n  query getPagesMeta {\n    _allPagesMeta {\n      count\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getSiteInfo {\n    _site {\n      locales\n      globalSeo {\n        ...seoSettings\n      }\n    }\n  }\n  \n'
): (typeof documents)['\n  query getSiteInfo {\n    _site {\n      locales\n      globalSeo {\n        ...seoSettings\n      }\n    }\n  }\n  \n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getSubmenu {\n    general {\n      menu {\n        ... on SubmenuItemRecord {\n          ...submenuItem\n        }\n      }\n    }\n  }\n  \n'
): (typeof documents)['\n  query getSubmenu {\n    general {\n      menu {\n        ... on SubmenuItemRecord {\n          ...submenuItem\n        }\n      }\n    }\n  }\n  \n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
