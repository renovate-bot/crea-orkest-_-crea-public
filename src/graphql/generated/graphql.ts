/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** Represents `true` or `false` values. */
  BooleanType: { input: boolean; output: boolean }
  CustomData: { input: Record<string, string>; output: Record<string, string> }
  /** A ISO 8601 compliant datetime value */
  DateTime: { input: string; output: string }
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: { input: number; output: number }
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: { input: number; output: number }
  ItemId: { input: string; output: string }
  JsonField: { input: unknown; output: unknown }
  MetaTagAttributes: {
    input: Record<string, string>
    output: Record<string, string>
  }
  UploadId: { input: string; output: string }
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata'
  count: Scalars['IntType']['output']
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField'
  alpha: Scalars['IntType']['output']
  blue: Scalars['IntType']['output']
  cssRgb: Scalars['String']['output']
  green: Scalars['IntType']['output']
  hex: Scalars['String']['output']
  red: Scalars['IntType']['output']
}

/** Block of type Concert lijst (concert_list) */
export type ConcertListRecord = RecordInterface & {
  __typename?: 'ConcertListRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  pinnedConcerts: Array<ConcertRecord>
  showAllConcerts?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Concert lijst (concert_list) */
export type ConcertListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ConcertModelContentField = TextBlockRecord | TwoColumnRecord

export type ConcertModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConcertModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ConcertModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  persons?: InputMaybe<LinksFilter>
  poster?: InputMaybe<FileFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export enum ConcertModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Concerten (concert) */
export type ConcertRecord = RecordInterface & {
  __typename?: 'ConcertRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content: Array<ConcertModelContentField>
  id: Scalars['ItemId']['output']
  locations: Array<LocationItemRecord>
  persons: Array<PersonRecord>
  poster?: Maybe<FileField>
  seo?: Maybe<SeoField>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Concerten (concert) */
export type ConcertRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

export type GeneralModelMenuField = MenuItemRecord | SubmenuItemRecord

/** Record of type Algemene info (general) */
export type GeneralRecord = RecordInterface & {
  __typename?: 'GeneralRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  logo?: Maybe<FileField>
  menu: Array<GeneralModelMenuField>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Algemene info (general) */
export type GeneralRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: Maybe<Scalars['String']['output']>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars['String']['output']>
  titleSuffix?: Maybe<Scalars['String']['output']>
  twitterAccount?: Maybe<Scalars['String']['output']>
}

/** Block of type Afbeelding (image) */
export type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  item?: Maybe<MediaItemRecord>
}

/** Block of type Afbeelding (image) */
export type ImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

export type LatLonField = {
  __typename?: 'LatLonField'
  latitude: Scalars['FloatType']['output']
  longitude: Scalars['FloatType']['output']
}

/** Specifies how to filter Geolocation fields */
export type LatLonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records within the specified radius in meters */
  near?: InputMaybe<LatLonNearFilter>
}

export type LatLonNearFilter = {
  latitude: Scalars['FloatType']['input']
  longitude: Scalars['FloatType']['input']
  radius: Scalars['FloatType']['input']
}

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export type LinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LinkModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  externalUrl?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  internalTitle?: InputMaybe<StringFilter>
  page?: InputMaybe<LinkFilter>
}

export enum LinkModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ExternalUrlAsc = 'externalUrl_ASC',
  ExternalUrlDesc = 'externalUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
}

export type LinkModelPageField = ConcertRecord | PageRecord

/** Record of type Links (link) */
export type LinkRecord = RecordInterface & {
  __typename?: 'LinkRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  externalUrl?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  internalTitle?: Maybe<Scalars['String']['output']>
  page?: Maybe<LinkModelPageField>
}

/** Record of type Links (link) */
export type LinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

/** Block of type Locatie item (location_item) */
export type LocationItemRecord = RecordInterface & {
  __typename?: 'LocationItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  dateTime?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['ItemId']['output']
  location?: Maybe<LocationRecord>
}

/** Block of type Locatie item (location_item) */
export type LocationItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type LocationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  address?: InputMaybe<LatLonFilter>
  addressTitle?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  title?: InputMaybe<StringFilter>
}

export enum LocationModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AddressTitleAsc = 'addressTitle_ASC',
  AddressTitleDesc = 'addressTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Locaties (location) */
export type LocationRecord = RecordInterface & {
  __typename?: 'LocationRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  address?: Maybe<LatLonField>
  addressTitle?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Locaties (location) */
export type LocationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type MediaItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaItemModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<MediaItemModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  item?: InputMaybe<FileFilter>
  itemUrl?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export enum MediaItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ItemUrlAsc = 'itemUrl_ASC',
  ItemUrlDesc = 'itemUrl_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Media item (media_item) */
export type MediaItemRecord = RecordInterface & {
  __typename?: 'MediaItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  item?: Maybe<FileField>
  itemUrl?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Media item (media_item) */
export type MediaItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Menu item (menu_item) */
export type MenuItemRecord = RecordInterface & {
  __typename?: 'MenuItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  label?: Maybe<Scalars['String']['output']>
  link?: Maybe<PageRecord>
}

/** Block of type Menu item (menu_item) */
export type MenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

export type PageModelContentField =
  | ConcertListRecord
  | TextBlockRecord
  | TwoColumnRecord

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Pagina's (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content: Array<PageModelContentField>
  id: Scalars['ItemId']['output']
  seo?: Maybe<SeoField>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Pagina's (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type PersonModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
  role?: InputMaybe<StringFilter>
}

export enum PersonModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
}

/** Record of type Personen (person) */
export type PersonRecord = RecordInterface & {
  __typename?: 'PersonRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  name?: Maybe<Scalars['String']['output']>
  role?: Maybe<Scalars['String']['output']>
}

/** Record of type Personen (person) */
export type PersonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query'
  /** Returns meta information regarding a record collection */
  _allConcertsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLinksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allLocationsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allMediaItemsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allConcerts: Array<ConcertRecord>
  /** Returns a collection of records */
  allLinks: Array<LinkRecord>
  /** Returns a collection of records */
  allLocations: Array<LocationRecord>
  /** Returns a collection of records */
  allMediaItems: Array<MediaItemRecord>
  /** Returns a collection of records */
  allPages: Array<PageRecord>
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a specific record */
  concert?: Maybe<ConcertRecord>
  /** Returns the single instance record */
  general?: Maybe<GeneralRecord>
  /** Returns a specific record */
  link?: Maybe<LinkRecord>
  /** Returns a specific record */
  location?: Maybe<LocationRecord>
  /** Returns a specific record */
  mediaItem?: Maybe<MediaItemRecord>
  /** Returns a specific record */
  page?: Maybe<PageRecord>
  /** Returns a specific record */
  person?: Maybe<PersonRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
}

/** The query root for this schema */
export type Query_AllConcertsMetaArgs = {
  filter?: InputMaybe<ConcertModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllLinksMetaArgs = {
  filter?: InputMaybe<LinkModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllLocationsMetaArgs = {
  filter?: InputMaybe<LocationModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllMediaItemsMetaArgs = {
  filter?: InputMaybe<MediaItemModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPeopleMetaArgs = {
  filter?: InputMaybe<PersonModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAllConcertsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ConcertModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ConcertModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LinkModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllLocationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LocationModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllMediaItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<MediaItemModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<MediaItemModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PersonModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryConcertArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ConcertModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ConcertModelOrderBy>>>
}

/** The query root for this schema */
export type QueryGeneralArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LinkModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LinkModelOrderBy>>>
}

/** The query root for this schema */
export type QueryLocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<LocationModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>
}

/** The query root for this schema */
export type QueryMediaItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<MediaItemModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<MediaItemModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPersonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PersonModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
}

export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage'
  alt?: Maybe<Scalars['String']['output']>
  aspectRatio: Scalars['FloatType']['output']
  base64?: Maybe<Scalars['String']['output']>
  bgColor?: Maybe<Scalars['String']['output']>
  height: Scalars['IntType']['output']
  sizes: Scalars['String']['output']
  src: Scalars['String']['output']
  srcSet: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  webpSrcSet: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<FileField>
  title?: Maybe<Scalars['String']['output']>
  twitterCard?: Maybe<Scalars['String']['output']>
}

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum SiteLocale {
  En = 'en',
  NlNl = 'nl_NL',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>
  pattern: Scalars['String']['input']
  regexp?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Block of type Submenu item (submenu_item) */
export type SubmenuItemRecord = RecordInterface & {
  __typename?: 'SubmenuItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  label?: Maybe<Scalars['String']['output']>
  menu: Array<MenuItemRecord>
}

/** Block of type Submenu item (submenu_item) */
export type SubmenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Tag = {
  __typename?: 'Tag'
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>
  content?: Maybe<Scalars['String']['output']>
  tag: Scalars['String']['output']
}

export type TextBlockModelContentBlocksField =
  | ConcertListRecord
  | ImageRecord
  | VideoRecord

export type TextBlockModelContentField = {
  __typename?: 'TextBlockModelContentField'
  blocks: Array<TextBlockModelContentBlocksField>
  links: Array<TextBlockModelContentLinksField>
  value: Scalars['JsonField']['output']
}

export type TextBlockModelContentLinksField = ConcertRecord | PageRecord

/** Block of type Tekst blok (text_block) */
export type TextBlockRecord = RecordInterface & {
  __typename?: 'TextBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content?: Maybe<TextBlockModelContentField>
  id: Scalars['ItemId']['output']
}

/** Block of type Tekst blok (text_block) */
export type TextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type TwoColumnModelLeftContentBlocksField =
  | ConcertListRecord
  | ImageRecord
  | VideoRecord

export type TwoColumnModelLeftContentField = {
  __typename?: 'TwoColumnModelLeftContentField'
  blocks: Array<TwoColumnModelLeftContentBlocksField>
  links: Array<TwoColumnModelLeftContentLinksField>
  value: Scalars['JsonField']['output']
}

export type TwoColumnModelLeftContentLinksField = ConcertRecord | PageRecord

export type TwoColumnModelRightContentBlocksField =
  | ConcertListRecord
  | ImageRecord
  | VideoRecord

export type TwoColumnModelRightContentField = {
  __typename?: 'TwoColumnModelRightContentField'
  blocks: Array<TwoColumnModelRightContentBlocksField>
  links: Array<TwoColumnModelRightContentLinksField>
  value: Scalars['JsonField']['output']
}

export type TwoColumnModelRightContentLinksField = ConcertRecord | PageRecord

/** Block of type Twee kolommen tekst blok (two_column) */
export type TwoColumnRecord = RecordInterface & {
  __typename?: 'TwoColumnRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  leftContent?: Maybe<TwoColumnModelLeftContentField>
  rightContent?: Maybe<TwoColumnModelRightContentField>
}

/** Block of type Twee kolommen tekst blok (two_column) */
export type TwoColumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  alt?: InputMaybe<UploadAltFilter>
  author?: InputMaybe<UploadAuthorFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  colors?: InputMaybe<UploadColorsFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  id?: InputMaybe<UploadIdFilter>
  inUse?: InputMaybe<InUseFilter>
  md5?: InputMaybe<UploadMd5Filter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  notes?: InputMaybe<UploadNotesFilter>
  orientation?: InputMaybe<OrientationFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  tags?: InputMaybe<UploadTagsFilter>
  title?: InputMaybe<UploadTitleFilter>
  type?: InputMaybe<TypeFilter>
  width?: InputMaybe<UploadWidthFilter>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export type UploadVideoField = {
  __typename?: 'UploadVideoField'
  duration?: Maybe<Scalars['Int']['output']>
  framerate?: Maybe<Scalars['Int']['output']>
  mp4Url?: Maybe<Scalars['String']['output']>
  muxAssetId: Scalars['String']['output']
  muxPlaybackId: Scalars['String']['output']
  streamingUrl: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
}

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>
  res?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

export type VideoField = {
  __typename?: 'VideoField'
  height: Scalars['IntType']['output']
  provider: Scalars['String']['output']
  providerUid: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

/** Block of type Video (video) */
export type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  media?: Maybe<VideoField>
  thumbnail?: Maybe<MediaItemRecord>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Video (video) */
export type VideoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type FocalPoint = {
  __typename?: 'focalPoint'
  x: Scalars['FloatType']['output']
  y: Scalars['FloatType']['output']
}

export type AuthorFragment = {
  __typename?: 'PersonRecord'
  id: string
  name?: string | null
  role?: string | null
}

export type ColorsFragment = {
  __typename?: 'ColorField'
  alpha: number
  blue: number
  cssRgb: string
  green: number
  hex: string
  red: number
}

export type ConcertLinkFragment = {
  __typename: 'ConcertRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type CoordinatesFragment = {
  __typename?: 'LatLonField'
  latitude: number
  longitude: number
}

export type EventDataFragment = {
  __typename: 'ConcertRecord'
  title?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  locations: Array<{
    __typename?: 'LocationItemRecord'
    id: string
    dateTime?: string | null
    location?: { __typename?: 'LocationRecord'; id: string } | null
  }>
  poster?: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  } | null
  persons: Array<{
    __typename?: 'PersonRecord'
    id: string
    name?: string | null
    role?: string | null
  }>
}

export type EventsFragment = {
  __typename: 'ConcertListRecord'
  showAllConcerts?: boolean | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  pinnedConcerts: Array<{
    __typename: 'ConcertRecord'
    title?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime?: string | null
      location?: { __typename?: 'LocationRecord'; id: string } | null
    }>
    poster?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
    persons: Array<{
      __typename?: 'PersonRecord'
      id: string
      name?: string | null
      role?: string | null
    }>
  }>
}

export type FileFragment = {
  __typename?: 'FileField'
  id: string
  alt?: string | null
  width?: number | null
  height?: number | null
  title?: string | null
  url: string
  video?: {
    __typename?: 'UploadVideoField'
    mp4Url?: string | null
    muxAssetId: string
    muxPlaybackId: string
    streamingUrl: string
    thumbnailUrl: string
  } | null
}

export type FocalPointFragment = {
  __typename?: 'focalPoint'
  x: number
  y: number
}

export type GeneralInfoFragment = {
  __typename?: 'GeneralRecord'
  id: string
  title?: string | null
  menu: Array<
    | {
        __typename?: 'MenuItemRecord'
        id: string
        label?: string | null
        link?: {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        } | null
      }
    | {
        __typename?: 'SubmenuItemRecord'
        id: string
        label?: string | null
        menu: Array<{
          __typename?: 'MenuItemRecord'
          id: string
          label?: string | null
          link?: {
            __typename: 'PageRecord'
            title?: string | null
            slug?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
          } | null
        }>
      }
  >
  logo?: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  } | null
}

type Identifiable_ConcertListRecord_Fragment = {
  __typename: 'ConcertListRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_ConcertRecord_Fragment = {
  __typename: 'ConcertRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_GeneralRecord_Fragment = {
  __typename: 'GeneralRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_ImageRecord_Fragment = {
  __typename: 'ImageRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_LinkRecord_Fragment = {
  __typename: 'LinkRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_LocationItemRecord_Fragment = {
  __typename: 'LocationItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_LocationRecord_Fragment = {
  __typename: 'LocationRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_MediaItemRecord_Fragment = {
  __typename: 'MediaItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_MenuItemRecord_Fragment = {
  __typename: 'MenuItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_PageRecord_Fragment = {
  __typename: 'PageRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_PersonRecord_Fragment = {
  __typename: 'PersonRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_SubmenuItemRecord_Fragment = {
  __typename: 'SubmenuItemRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_TextBlockRecord_Fragment = {
  __typename: 'TextBlockRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_TwoColumnRecord_Fragment = {
  __typename: 'TwoColumnRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

type Identifiable_VideoRecord_Fragment = {
  __typename: 'VideoRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type IdentifiableFragment =
  | Identifiable_ConcertListRecord_Fragment
  | Identifiable_ConcertRecord_Fragment
  | Identifiable_GeneralRecord_Fragment
  | Identifiable_ImageRecord_Fragment
  | Identifiable_LinkRecord_Fragment
  | Identifiable_LocationItemRecord_Fragment
  | Identifiable_LocationRecord_Fragment
  | Identifiable_MediaItemRecord_Fragment
  | Identifiable_MenuItemRecord_Fragment
  | Identifiable_PageRecord_Fragment
  | Identifiable_PersonRecord_Fragment
  | Identifiable_SubmenuItemRecord_Fragment
  | Identifiable_TextBlockRecord_Fragment
  | Identifiable_TwoColumnRecord_Fragment
  | Identifiable_VideoRecord_Fragment

export type ResponsiveImageFragment = {
  __typename?: 'ResponsiveImage'
  title?: string | null
  alt?: string | null
  sizes: string
  aspectRatio: number
  bgColor?: string | null
  src: string
  height: number
  width: number
}

export type MediaItemFragment = {
  __typename: 'MediaItemRecord'
  title?: string | null
  itemUrl?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  item?: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  } | null
}

export type ImageFragment = {
  __typename: 'ImageRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  item?: {
    __typename: 'MediaItemRecord'
    title?: string | null
    itemUrl?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    item?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type LinkFragment = {
  __typename?: 'LinkRecord'
  id: string
  internalTitle?: string | null
  externalUrl?: string | null
  page?:
    | { __typename?: 'ConcertRecord' }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | null
}

export type LocationFragment = {
  __typename?: 'LocationRecord'
  id: string
  title?: string | null
  addressTitle?: string | null
  address?: {
    __typename?: 'LatLonField'
    latitude: number
    longitude: number
  } | null
}

export type LocationsFragment = {
  __typename?: 'LocationItemRecord'
  id: string
  dateTime?: string | null
  location?: { __typename?: 'LocationRecord'; id: string } | null
}

export type MenuItemFragment = {
  __typename?: 'MenuItemRecord'
  id: string
  label?: string | null
  link?: {
    __typename: 'PageRecord'
    title?: string | null
    slug?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
  } | null
}

export type PageFragment = {
  __typename: 'PageRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  content: Array<
    | { __typename?: 'ConcertListRecord'; id: string }
    | { __typename?: 'TextBlockRecord'; id: string }
    | { __typename?: 'TwoColumnRecord'; id: string }
  >
}

export type PageDetailFragment = {
  __typename: 'PageRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  content: Array<
    | {
        __typename: 'ConcertListRecord'
        showAllConcerts?: boolean | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pinnedConcerts: Array<{
          __typename: 'ConcertRecord'
          title?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          locations: Array<{
            __typename?: 'LocationItemRecord'
            id: string
            dateTime?: string | null
            location?: { __typename?: 'LocationRecord'; id: string } | null
          }>
          poster?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
          persons: Array<{
            __typename?: 'PersonRecord'
            id: string
            name?: string | null
            role?: string | null
          }>
        }>
      }
    | {
        __typename: 'TextBlockRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        content?: {
          __typename?: 'TextBlockModelContentField'
          value: unknown
          links: Array<
            | { __typename?: 'ConcertRecord'; id: string; slug?: string | null }
            | { __typename?: 'PageRecord'; id: string; slug?: string | null }
          >
          blocks: Array<
            | {
                __typename: 'ConcertListRecord'
                showAllConcerts?: boolean | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pinnedConcerts: Array<{
                  __typename: 'ConcertRecord'
                  title?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  locations: Array<{
                    __typename?: 'LocationItemRecord'
                    id: string
                    dateTime?: string | null
                    location?: {
                      __typename?: 'LocationRecord'
                      id: string
                    } | null
                  }>
                  poster?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                  persons: Array<{
                    __typename?: 'PersonRecord'
                    id: string
                    name?: string | null
                    role?: string | null
                  }>
                }>
              }
            | {
                __typename: 'ImageRecord'
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                item?: {
                  __typename: 'MediaItemRecord'
                  title?: string | null
                  itemUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
                thumbnail?: {
                  __typename: 'MediaItemRecord'
                  title?: string | null
                  itemUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
          >
        } | null
      }
    | {
        __typename: 'TwoColumnRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        leftContent?: {
          __typename?: 'TwoColumnModelLeftContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'ConcertListRecord'
                showAllConcerts?: boolean | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pinnedConcerts: Array<{
                  __typename: 'ConcertRecord'
                  title?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  locations: Array<{
                    __typename?: 'LocationItemRecord'
                    id: string
                    dateTime?: string | null
                    location?: {
                      __typename?: 'LocationRecord'
                      id: string
                    } | null
                  }>
                  poster?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                  persons: Array<{
                    __typename?: 'PersonRecord'
                    id: string
                    name?: string | null
                    role?: string | null
                  }>
                }>
              }
            | {
                __typename: 'ImageRecord'
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                item?: {
                  __typename: 'MediaItemRecord'
                  title?: string | null
                  itemUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
                thumbnail?: {
                  __typename: 'MediaItemRecord'
                  title?: string | null
                  itemUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
          >
        } | null
        rightContent?: {
          __typename?: 'TwoColumnModelRightContentField'
          value: unknown
          links: Array<
            | {
                __typename: 'ConcertRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
            | {
                __typename: 'PageRecord'
                title?: string | null
                slug?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
              }
          >
          blocks: Array<
            | {
                __typename: 'ConcertListRecord'
                showAllConcerts?: boolean | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                pinnedConcerts: Array<{
                  __typename: 'ConcertRecord'
                  title?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  locations: Array<{
                    __typename?: 'LocationItemRecord'
                    id: string
                    dateTime?: string | null
                    location?: {
                      __typename?: 'LocationRecord'
                      id: string
                    } | null
                  }>
                  poster?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                  persons: Array<{
                    __typename?: 'PersonRecord'
                    id: string
                    name?: string | null
                    role?: string | null
                  }>
                }>
              }
            | {
                __typename: 'ImageRecord'
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                item?: {
                  __typename: 'MediaItemRecord'
                  title?: string | null
                  itemUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'VideoRecord'
                title?: string | null
                _createdAt: string
                _firstPublishedAt?: string | null
                _publishedAt?: string | null
                _updatedAt: string
                id: string
                media?: {
                  __typename?: 'VideoField'
                  height: number
                  provider: string
                  providerUid: string
                  thumbnailUrl: string
                  title: string
                  url: string
                  width: number
                } | null
                thumbnail?: {
                  __typename: 'MediaItemRecord'
                  title?: string | null
                  itemUrl?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename?: 'FileField'
                    id: string
                    alt?: string | null
                    width?: number | null
                    height?: number | null
                    title?: string | null
                    url: string
                    video?: {
                      __typename?: 'UploadVideoField'
                      mp4Url?: string | null
                      muxAssetId: string
                      muxPlaybackId: string
                      streamingUrl: string
                      thumbnailUrl: string
                    } | null
                  } | null
                } | null
              }
          >
        } | null
      }
  >
}

export type PageDetailSeoFragment = {
  __typename?: 'PageRecord'
  _seoMetaTags: Array<{
    __typename?: 'Tag'
    attributes?: Record<string, string> | null
    content?: string | null
    tag: string
  }>
  seo?: {
    __typename?: 'SeoField'
    description?: string | null
    title?: string | null
    twitterCard?: string | null
    image?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type PageLinkFragment = {
  __typename: 'PageRecord'
  title?: string | null
  slug?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
}

export type SeoFragment = {
  __typename?: 'SeoField'
  description?: string | null
  title?: string | null
  twitterCard?: string | null
  image?: {
    __typename?: 'FileField'
    id: string
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    url: string
    video?: {
      __typename?: 'UploadVideoField'
      mp4Url?: string | null
      muxAssetId: string
      muxPlaybackId: string
      streamingUrl: string
      thumbnailUrl: string
    } | null
  } | null
}

export type SeoSettingsFragment = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: string | null
  siteName?: string | null
  titleSuffix?: string | null
  twitterAccount?: string | null
  fallbackSeo?: {
    __typename?: 'SeoField'
    description?: string | null
    title?: string | null
    twitterCard?: string | null
    image?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type SubmenuItemFragment = {
  __typename?: 'SubmenuItemRecord'
  id: string
  label?: string | null
  menu: Array<{
    __typename?: 'MenuItemRecord'
    id: string
    label?: string | null
    link?: {
      __typename: 'PageRecord'
      title?: string | null
      slug?: string | null
      _createdAt: string
      _firstPublishedAt?: string | null
      _publishedAt?: string | null
      _updatedAt: string
      id: string
    } | null
  }>
}

export type TagFragment = {
  __typename?: 'Tag'
  attributes?: Record<string, string> | null
  content?: string | null
  tag: string
}

export type TextBlockContentFragment = {
  __typename?: 'TextBlockModelContentField'
  value: unknown
  links: Array<
    | { __typename?: 'ConcertRecord'; id: string; slug?: string | null }
    | { __typename?: 'PageRecord'; id: string; slug?: string | null }
  >
  blocks: Array<
    | {
        __typename: 'ConcertListRecord'
        showAllConcerts?: boolean | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pinnedConcerts: Array<{
          __typename: 'ConcertRecord'
          title?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          locations: Array<{
            __typename?: 'LocationItemRecord'
            id: string
            dateTime?: string | null
            location?: { __typename?: 'LocationRecord'; id: string } | null
          }>
          poster?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
          persons: Array<{
            __typename?: 'PersonRecord'
            id: string
            name?: string | null
            role?: string | null
          }>
        }>
      }
    | {
        __typename: 'ImageRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        item?: {
          __typename: 'MediaItemRecord'
          title?: string | null
          itemUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
    | {
        __typename: 'VideoRecord'
        title?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        media?: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        } | null
        thumbnail?: {
          __typename: 'MediaItemRecord'
          title?: string | null
          itemUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
  >
}

export type LeftContentFragment = {
  __typename?: 'TwoColumnModelLeftContentField'
  value: unknown
  links: Array<
    | {
        __typename: 'ConcertRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
  >
  blocks: Array<
    | {
        __typename: 'ConcertListRecord'
        showAllConcerts?: boolean | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pinnedConcerts: Array<{
          __typename: 'ConcertRecord'
          title?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          locations: Array<{
            __typename?: 'LocationItemRecord'
            id: string
            dateTime?: string | null
            location?: { __typename?: 'LocationRecord'; id: string } | null
          }>
          poster?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
          persons: Array<{
            __typename?: 'PersonRecord'
            id: string
            name?: string | null
            role?: string | null
          }>
        }>
      }
    | {
        __typename: 'ImageRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        item?: {
          __typename: 'MediaItemRecord'
          title?: string | null
          itemUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
    | {
        __typename: 'VideoRecord'
        title?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        media?: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        } | null
        thumbnail?: {
          __typename: 'MediaItemRecord'
          title?: string | null
          itemUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
  >
}

export type RightContentFragment = {
  __typename?: 'TwoColumnModelRightContentField'
  value: unknown
  links: Array<
    | {
        __typename: 'ConcertRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
    | {
        __typename: 'PageRecord'
        title?: string | null
        slug?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
      }
  >
  blocks: Array<
    | {
        __typename: 'ConcertListRecord'
        showAllConcerts?: boolean | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        pinnedConcerts: Array<{
          __typename: 'ConcertRecord'
          title?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          locations: Array<{
            __typename?: 'LocationItemRecord'
            id: string
            dateTime?: string | null
            location?: { __typename?: 'LocationRecord'; id: string } | null
          }>
          poster?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
          persons: Array<{
            __typename?: 'PersonRecord'
            id: string
            name?: string | null
            role?: string | null
          }>
        }>
      }
    | {
        __typename: 'ImageRecord'
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        item?: {
          __typename: 'MediaItemRecord'
          title?: string | null
          itemUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
    | {
        __typename: 'VideoRecord'
        title?: string | null
        _createdAt: string
        _firstPublishedAt?: string | null
        _publishedAt?: string | null
        _updatedAt: string
        id: string
        media?: {
          __typename?: 'VideoField'
          height: number
          provider: string
          providerUid: string
          thumbnailUrl: string
          title: string
          url: string
          width: number
        } | null
        thumbnail?: {
          __typename: 'MediaItemRecord'
          title?: string | null
          itemUrl?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename?: 'FileField'
            id: string
            alt?: string | null
            width?: number | null
            height?: number | null
            title?: string | null
            url: string
            video?: {
              __typename?: 'UploadVideoField'
              mp4Url?: string | null
              muxAssetId: string
              muxPlaybackId: string
              streamingUrl: string
              thumbnailUrl: string
            } | null
          } | null
        } | null
      }
  >
}

export type TextBlockFragment = {
  __typename: 'TextBlockRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  content?: {
    __typename?: 'TextBlockModelContentField'
    value: unknown
    links: Array<
      | { __typename?: 'ConcertRecord'; id: string; slug?: string | null }
      | { __typename?: 'PageRecord'; id: string; slug?: string | null }
    >
    blocks: Array<
      | {
          __typename: 'ConcertListRecord'
          showAllConcerts?: boolean | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          pinnedConcerts: Array<{
            __typename: 'ConcertRecord'
            title?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            locations: Array<{
              __typename?: 'LocationItemRecord'
              id: string
              dateTime?: string | null
              location?: { __typename?: 'LocationRecord'; id: string } | null
            }>
            poster?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
            persons: Array<{
              __typename?: 'PersonRecord'
              id: string
              name?: string | null
              role?: string | null
            }>
          }>
        }
      | {
          __typename: 'ImageRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename: 'MediaItemRecord'
            title?: string | null
            itemUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            item?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'VideoRecord'
          title?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          media?: {
            __typename?: 'VideoField'
            height: number
            provider: string
            providerUid: string
            thumbnailUrl: string
            title: string
            url: string
            width: number
          } | null
          thumbnail?: {
            __typename: 'MediaItemRecord'
            title?: string | null
            itemUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            item?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
          } | null
        }
    >
  } | null
}

export type TwoColumFragment = {
  __typename: 'TwoColumnRecord'
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  leftContent?: {
    __typename?: 'TwoColumnModelLeftContentField'
    value: unknown
    links: Array<
      | {
          __typename: 'ConcertRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
    >
    blocks: Array<
      | {
          __typename: 'ConcertListRecord'
          showAllConcerts?: boolean | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          pinnedConcerts: Array<{
            __typename: 'ConcertRecord'
            title?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            locations: Array<{
              __typename?: 'LocationItemRecord'
              id: string
              dateTime?: string | null
              location?: { __typename?: 'LocationRecord'; id: string } | null
            }>
            poster?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
            persons: Array<{
              __typename?: 'PersonRecord'
              id: string
              name?: string | null
              role?: string | null
            }>
          }>
        }
      | {
          __typename: 'ImageRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename: 'MediaItemRecord'
            title?: string | null
            itemUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            item?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'VideoRecord'
          title?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          media?: {
            __typename?: 'VideoField'
            height: number
            provider: string
            providerUid: string
            thumbnailUrl: string
            title: string
            url: string
            width: number
          } | null
          thumbnail?: {
            __typename: 'MediaItemRecord'
            title?: string | null
            itemUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            item?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
          } | null
        }
    >
  } | null
  rightContent?: {
    __typename?: 'TwoColumnModelRightContentField'
    value: unknown
    links: Array<
      | {
          __typename: 'ConcertRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
      | {
          __typename: 'PageRecord'
          title?: string | null
          slug?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
        }
    >
    blocks: Array<
      | {
          __typename: 'ConcertListRecord'
          showAllConcerts?: boolean | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          pinnedConcerts: Array<{
            __typename: 'ConcertRecord'
            title?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            locations: Array<{
              __typename?: 'LocationItemRecord'
              id: string
              dateTime?: string | null
              location?: { __typename?: 'LocationRecord'; id: string } | null
            }>
            poster?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
            persons: Array<{
              __typename?: 'PersonRecord'
              id: string
              name?: string | null
              role?: string | null
            }>
          }>
        }
      | {
          __typename: 'ImageRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          item?: {
            __typename: 'MediaItemRecord'
            title?: string | null
            itemUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            item?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'VideoRecord'
          title?: string | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          media?: {
            __typename?: 'VideoField'
            height: number
            provider: string
            providerUid: string
            thumbnailUrl: string
            title: string
            url: string
            width: number
          } | null
          thumbnail?: {
            __typename: 'MediaItemRecord'
            title?: string | null
            itemUrl?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            item?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
          } | null
        }
    >
  } | null
}

export type VideoUploadFragment = {
  __typename?: 'UploadVideoField'
  mp4Url?: string | null
  muxAssetId: string
  muxPlaybackId: string
  streamingUrl: string
  thumbnailUrl: string
}

export type VideoFragment = {
  __typename: 'VideoRecord'
  title?: string | null
  _createdAt: string
  _firstPublishedAt?: string | null
  _publishedAt?: string | null
  _updatedAt: string
  id: string
  media?: {
    __typename?: 'VideoField'
    height: number
    provider: string
    providerUid: string
    thumbnailUrl: string
    title: string
    url: string
    width: number
  } | null
  thumbnail?: {
    __typename: 'MediaItemRecord'
    title?: string | null
    itemUrl?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    item?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type VideoFieldFragment = {
  __typename?: 'VideoField'
  height: number
  provider: string
  providerUid: string
  thumbnailUrl: string
  title: string
  url: string
  width: number
}

export type GetAuthorQueryVariables = Exact<{
  id: Scalars['ItemId']['input']
}>

export type GetAuthorQuery = {
  __typename?: 'Query'
  person?: {
    __typename?: 'PersonRecord'
    id: string
    name?: string | null
    role?: string | null
  } | null
}

export type GetAuthorsQueryVariables = Exact<{
  first: Scalars['IntType']['input']
  skip: Scalars['IntType']['input']
  order?: InputMaybe<
    Array<InputMaybe<PersonModelOrderBy>> | InputMaybe<PersonModelOrderBy>
  >
}>

export type GetAuthorsQuery = {
  __typename?: 'Query'
  allPeople: Array<{
    __typename?: 'PersonRecord'
    id: string
    name?: string | null
    role?: string | null
  }>
}

export type GetConcertQueryVariables = Exact<{
  id: Scalars['ItemId']['input']
}>

export type GetConcertQuery = {
  __typename?: 'Query'
  concert?: {
    __typename?: 'ConcertRecord'
    id: string
    title?: string | null
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime?: string | null
      location?: { __typename?: 'LocationRecord'; id: string } | null
    }>
    persons: Array<{
      __typename?: 'PersonRecord'
      id: string
      name?: string | null
      role?: string | null
    }>
    poster?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type GetConcertPageQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetConcertPageQuery = {
  __typename?: 'Query'
  concert?: {
    __typename?: 'ConcertRecord'
    id: string
    title?: string | null
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime?: string | null
      location?: { __typename?: 'LocationRecord'; id: string } | null
    }>
    persons: Array<{
      __typename?: 'PersonRecord'
      id: string
      name?: string | null
      role?: string | null
    }>
    poster?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type GetConcertsQueryVariables = Exact<{
  skip: Scalars['IntType']['input']
  first: Scalars['IntType']['input']
  order?: InputMaybe<
    Array<InputMaybe<ConcertModelOrderBy>> | InputMaybe<ConcertModelOrderBy>
  >
}>

export type GetConcertsQuery = {
  __typename?: 'Query'
  allConcerts: Array<{
    __typename: 'ConcertRecord'
    title?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    locations: Array<{
      __typename?: 'LocationItemRecord'
      id: string
      dateTime?: string | null
      location?: { __typename?: 'LocationRecord'; id: string } | null
    }>
    poster?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
    persons: Array<{
      __typename?: 'PersonRecord'
      id: string
      name?: string | null
      role?: string | null
    }>
  }>
}

export type GetGeneralInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetGeneralInfoQuery = {
  __typename?: 'Query'
  general?: {
    __typename?: 'GeneralRecord'
    id: string
    title?: string | null
    menu: Array<
      | {
          __typename?: 'MenuItemRecord'
          id: string
          label?: string | null
          link?: {
            __typename: 'PageRecord'
            title?: string | null
            slug?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
          } | null
        }
      | {
          __typename?: 'SubmenuItemRecord'
          id: string
          label?: string | null
          menu: Array<{
            __typename?: 'MenuItemRecord'
            id: string
            label?: string | null
            link?: {
              __typename: 'PageRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            } | null
          }>
        }
    >
    logo?: {
      __typename?: 'FileField'
      id: string
      alt?: string | null
      width?: number | null
      height?: number | null
      title?: string | null
      url: string
      video?: {
        __typename?: 'UploadVideoField'
        mp4Url?: string | null
        muxAssetId: string
        muxPlaybackId: string
        streamingUrl: string
        thumbnailUrl: string
      } | null
    } | null
  } | null
}

export type GetLocationQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ItemId']['input']>
}>

export type GetLocationQuery = {
  __typename?: 'Query'
  location?: {
    __typename?: 'LocationRecord'
    id: string
    title?: string | null
    addressTitle?: string | null
    address?: {
      __typename?: 'LatLonField'
      latitude: number
      longitude: number
    } | null
  } | null
}

export type GetLocationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']['input']>
  skip?: InputMaybe<Scalars['IntType']['input']>
  order?: InputMaybe<
    Array<InputMaybe<LocationModelOrderBy>> | InputMaybe<LocationModelOrderBy>
  >
}>

export type GetLocationsQuery = {
  __typename?: 'Query'
  allLocations: Array<{
    __typename?: 'LocationRecord'
    id: string
    title?: string | null
    addressTitle?: string | null
    address?: {
      __typename?: 'LatLonField'
      latitude: number
      longitude: number
    } | null
  }>
}

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPageQuery = {
  __typename?: 'Query'
  page?: {
    __typename: 'PageRecord'
    title?: string | null
    slug?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    content: Array<
      | {
          __typename: 'ConcertListRecord'
          showAllConcerts?: boolean | null
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          pinnedConcerts: Array<{
            __typename: 'ConcertRecord'
            title?: string | null
            _createdAt: string
            _firstPublishedAt?: string | null
            _publishedAt?: string | null
            _updatedAt: string
            id: string
            locations: Array<{
              __typename?: 'LocationItemRecord'
              id: string
              dateTime?: string | null
              location?: { __typename?: 'LocationRecord'; id: string } | null
            }>
            poster?: {
              __typename?: 'FileField'
              id: string
              alt?: string | null
              width?: number | null
              height?: number | null
              title?: string | null
              url: string
              video?: {
                __typename?: 'UploadVideoField'
                mp4Url?: string | null
                muxAssetId: string
                muxPlaybackId: string
                streamingUrl: string
                thumbnailUrl: string
              } | null
            } | null
            persons: Array<{
              __typename?: 'PersonRecord'
              id: string
              name?: string | null
              role?: string | null
            }>
          }>
        }
      | {
          __typename: 'TextBlockRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          content?: {
            __typename?: 'TextBlockModelContentField'
            value: unknown
            links: Array<
              | {
                  __typename?: 'ConcertRecord'
                  id: string
                  slug?: string | null
                }
              | { __typename?: 'PageRecord'; id: string; slug?: string | null }
            >
            blocks: Array<
              | {
                  __typename: 'ConcertListRecord'
                  showAllConcerts?: boolean | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pinnedConcerts: Array<{
                    __typename: 'ConcertRecord'
                    title?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    locations: Array<{
                      __typename?: 'LocationItemRecord'
                      id: string
                      dateTime?: string | null
                      location?: {
                        __typename?: 'LocationRecord'
                        id: string
                      } | null
                    }>
                    poster?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                    persons: Array<{
                      __typename?: 'PersonRecord'
                      id: string
                      name?: string | null
                      role?: string | null
                    }>
                  }>
                }
              | {
                  __typename: 'ImageRecord'
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename: 'MediaItemRecord'
                    title?: string | null
                    itemUrl?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                  thumbnail?: {
                    __typename: 'MediaItemRecord'
                    title?: string | null
                    itemUrl?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
            >
          } | null
        }
      | {
          __typename: 'TwoColumnRecord'
          _createdAt: string
          _firstPublishedAt?: string | null
          _publishedAt?: string | null
          _updatedAt: string
          id: string
          leftContent?: {
            __typename?: 'TwoColumnModelLeftContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'ConcertListRecord'
                  showAllConcerts?: boolean | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pinnedConcerts: Array<{
                    __typename: 'ConcertRecord'
                    title?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    locations: Array<{
                      __typename?: 'LocationItemRecord'
                      id: string
                      dateTime?: string | null
                      location?: {
                        __typename?: 'LocationRecord'
                        id: string
                      } | null
                    }>
                    poster?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                    persons: Array<{
                      __typename?: 'PersonRecord'
                      id: string
                      name?: string | null
                      role?: string | null
                    }>
                  }>
                }
              | {
                  __typename: 'ImageRecord'
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename: 'MediaItemRecord'
                    title?: string | null
                    itemUrl?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                  thumbnail?: {
                    __typename: 'MediaItemRecord'
                    title?: string | null
                    itemUrl?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
            >
          } | null
          rightContent?: {
            __typename?: 'TwoColumnModelRightContentField'
            value: unknown
            links: Array<
              | {
                  __typename: 'ConcertRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
              | {
                  __typename: 'PageRecord'
                  title?: string | null
                  slug?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                }
            >
            blocks: Array<
              | {
                  __typename: 'ConcertListRecord'
                  showAllConcerts?: boolean | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  pinnedConcerts: Array<{
                    __typename: 'ConcertRecord'
                    title?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    locations: Array<{
                      __typename?: 'LocationItemRecord'
                      id: string
                      dateTime?: string | null
                      location?: {
                        __typename?: 'LocationRecord'
                        id: string
                      } | null
                    }>
                    poster?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                    persons: Array<{
                      __typename?: 'PersonRecord'
                      id: string
                      name?: string | null
                      role?: string | null
                    }>
                  }>
                }
              | {
                  __typename: 'ImageRecord'
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  item?: {
                    __typename: 'MediaItemRecord'
                    title?: string | null
                    itemUrl?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
              | {
                  __typename: 'VideoRecord'
                  title?: string | null
                  _createdAt: string
                  _firstPublishedAt?: string | null
                  _publishedAt?: string | null
                  _updatedAt: string
                  id: string
                  media?: {
                    __typename?: 'VideoField'
                    height: number
                    provider: string
                    providerUid: string
                    thumbnailUrl: string
                    title: string
                    url: string
                    width: number
                  } | null
                  thumbnail?: {
                    __typename: 'MediaItemRecord'
                    title?: string | null
                    itemUrl?: string | null
                    _createdAt: string
                    _firstPublishedAt?: string | null
                    _publishedAt?: string | null
                    _updatedAt: string
                    id: string
                    item?: {
                      __typename?: 'FileField'
                      id: string
                      alt?: string | null
                      width?: number | null
                      height?: number | null
                      title?: string | null
                      url: string
                      video?: {
                        __typename?: 'UploadVideoField'
                        mp4Url?: string | null
                        muxAssetId: string
                        muxPlaybackId: string
                        streamingUrl: string
                        thumbnailUrl: string
                      } | null
                    } | null
                  } | null
                }
            >
          } | null
        }
    >
  } | null
}

export type GetPageSeoQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPageSeoQuery = {
  __typename?: 'Query'
  page?: {
    __typename?: 'PageRecord'
    _seoMetaTags: Array<{
      __typename?: 'Tag'
      attributes?: Record<string, string> | null
      content?: string | null
      tag: string
    }>
    seo?: {
      __typename?: 'SeoField'
      description?: string | null
      title?: string | null
      twitterCard?: string | null
      image?: {
        __typename?: 'FileField'
        id: string
        alt?: string | null
        width?: number | null
        height?: number | null
        title?: string | null
        url: string
        video?: {
          __typename?: 'UploadVideoField'
          mp4Url?: string | null
          muxAssetId: string
          muxPlaybackId: string
          streamingUrl: string
          thumbnailUrl: string
        } | null
      } | null
    } | null
  } | null
}

export type GetPagesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['IntType']['input']>
  first?: InputMaybe<Scalars['IntType']['input']>
  order?: InputMaybe<
    Array<InputMaybe<PageModelOrderBy>> | InputMaybe<PageModelOrderBy>
  >
}>

export type GetPagesQuery = {
  __typename?: 'Query'
  allPages: Array<{
    __typename: 'PageRecord'
    title?: string | null
    slug?: string | null
    _createdAt: string
    _firstPublishedAt?: string | null
    _publishedAt?: string | null
    _updatedAt: string
    id: string
    content: Array<
      | { __typename?: 'ConcertListRecord'; id: string }
      | { __typename?: 'TextBlockRecord'; id: string }
      | { __typename?: 'TwoColumnRecord'; id: string }
    >
  }>
}

export type GetSiteInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetSiteInfoQuery = {
  __typename?: 'Query'
  _site: {
    __typename?: 'Site'
    locales: Array<SiteLocale>
    globalSeo?: {
      __typename?: 'GlobalSeoField'
      facebookPageUrl?: string | null
      siteName?: string | null
      titleSuffix?: string | null
      twitterAccount?: string | null
      fallbackSeo?: {
        __typename?: 'SeoField'
        description?: string | null
        title?: string | null
        twitterCard?: string | null
        image?: {
          __typename?: 'FileField'
          id: string
          alt?: string | null
          width?: number | null
          height?: number | null
          title?: string | null
          url: string
          video?: {
            __typename?: 'UploadVideoField'
            mp4Url?: string | null
            muxAssetId: string
            muxPlaybackId: string
            streamingUrl: string
            thumbnailUrl: string
          } | null
        } | null
      } | null
    } | null
  }
}

export type GetSubmenuQueryVariables = Exact<{ [key: string]: never }>

export type GetSubmenuQuery = {
  __typename?: 'Query'
  general?: {
    __typename?: 'GeneralRecord'
    menu: Array<
      | { __typename?: 'MenuItemRecord' }
      | {
          __typename?: 'SubmenuItemRecord'
          id: string
          label?: string | null
          menu: Array<{
            __typename?: 'MenuItemRecord'
            id: string
            label?: string | null
            link?: {
              __typename: 'PageRecord'
              title?: string | null
              slug?: string | null
              _createdAt: string
              _firstPublishedAt?: string | null
              _publishedAt?: string | null
              _updatedAt: string
              id: string
            } | null
          }>
        }
    >
  } | null
}

export const ColorsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'colors' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ColorField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'alpha' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cssRgb' } },
          { kind: 'Field', name: { kind: 'Name', value: 'green' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hex' } },
          { kind: 'Field', name: { kind: 'Name', value: 'red' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ColorsFragment, unknown>
export const FocalPointFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'focalPoint' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'focalPoint' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'x' } },
          { kind: 'Field', name: { kind: 'Name', value: 'y' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FocalPointFragment, unknown>
export const IdentifiableFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IdentifiableFragment, unknown>
export const PageLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageLinkFragment, unknown>
export const MenuItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MenuItemFragment, unknown>
export const SubmenuItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubmenuItemFragment, unknown>
export const VideoUploadFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoUploadFragment, unknown>
export const FileFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileFragment, unknown>
export const GeneralInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'generalInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GeneralRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'MenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'menuItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'SubmenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'submenuItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GeneralInfoFragment, unknown>
export const ResponsiveImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImage' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsiveImageFragment, unknown>
export const LinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'link' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LinkRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalTitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LinkFragment, unknown>
export const CoordinatesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CoordinatesFragment, unknown>
export const LocationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationFragment, unknown>
export const PageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'page' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragment, unknown>
export const LocationsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationsFragment, unknown>
export const AuthorFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AuthorFragment, unknown>
export const EventDataFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventDataFragment, unknown>
export const EventsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventsFragment, unknown>
export const MediaItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MediaItemFragment, unknown>
export const ImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageFragment, unknown>
export const VideoFieldFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFieldFragment, unknown>
export const VideoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoFragment, unknown>
export const TextBlockContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TextBlockContentFragment, unknown>
export const TextBlockFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TextBlockFragment, unknown>
export const ConcertLinkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConcertLinkFragment, unknown>
export const LeftContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LeftContentFragment, unknown>
export const RightContentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RightContentFragment, unknown>
export const TwoColumFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TwoColumFragment, unknown>
export const PageDetailFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDetailFragment, unknown>
export const TagFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TagFragment, unknown>
export const SeoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoFragment, unknown>
export const PageDetailSeoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetailSeo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDetailSeoFragment, unknown>
export const SeoSettingsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoSettings' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalSeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'facebookPageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterAccount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fallbackSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoSettingsFragment, unknown>
export const GetAuthorDocument = {
  __meta__: { hash: '69626f7356ee243d0a13a9401b5f6cf5612460c0' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAuthor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ItemId' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'person' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAuthorQuery, GetAuthorQueryVariables>
export const GetAuthorsDocument = {
  __meta__: { hash: '7be73ead65e34e702ae1a288a1c5a6ce402d81b9' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAuthors' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PersonModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPeople' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAuthorsQuery, GetAuthorsQueryVariables>
export const GetConcertDocument = {
  __meta__: { hash: '4ff89d4be2fb6b7ac8d2eaee5604261890185f77' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getConcert' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ItemId' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'concert' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'locations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'locations' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'persons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'author' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'poster' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertQuery, GetConcertQueryVariables>
export const GetConcertPageDocument = {
  __meta__: { hash: '64f033dd57b5dd1275bef524898446445d3ee2a4' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getConcertPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'concert' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'locations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'locations' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'persons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'author' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'poster' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'file' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertPageQuery, GetConcertPageQueryVariables>
export const GetConcertsDocument = {
  __meta__: { hash: 'ff06c7a1942b0f7872569a139000af6385dd96bd' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getConcerts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'IntType' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ConcertModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allConcerts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConcertsQuery, GetConcertsQueryVariables>
export const GetGeneralInfoDocument = {
  __meta__: { hash: '9b8d0c290d09996c5ff7d3ae7e5891772fa9a64e' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getGeneralInfo' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'general' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'generalInfo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'generalInfo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GeneralRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'MenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'menuItem' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'SubmenuItemRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'submenuItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetGeneralInfoQuery, GetGeneralInfoQueryVariables>
export const GetLocationDocument = {
  __meta__: { hash: '2988170369bdd85ab11bab2716b98046fd98ab77' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getLocation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ItemId' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'id' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>
export const GetLocationsDocument = {
  __meta__: { hash: 'a59c400e602ddb912052c3ea8dea546d27cc8bca' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getLocations' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LocationModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allLocations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'location' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'coordinates' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LatLonField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'location' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'addressTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'coordinates' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>
export const GetPageDocument = {
  __meta__: { hash: '3c35667e0a640cbe82810816c4344a75acdb5faf' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'locations' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LocationItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'location' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'author' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PersonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'eventData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'locations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'locations' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'poster' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'persons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'author' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'events' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertListRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinnedConcerts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'eventData' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'showAllConcerts' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'mediaItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MediaItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'itemUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ImageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'item' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoField' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
          { kind: 'Field', name: { kind: 'Name', value: 'providerUid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'video' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VideoRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoField' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'mediaItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlockContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockModelContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'textBlock' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TextBlockRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'textBlockContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'concertLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ConcertRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'leftContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelLeftContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'rightContent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnModelRightContentField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'links' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'concertLink' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'PageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'pageLink' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ImageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'image' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'VideoRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'video' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'twoColum' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'TwoColumnRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'leftContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'leftContent' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rightContent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'rightContent' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ConcertListRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'events' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TextBlockRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'textBlock' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'TwoColumnRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'twoColum' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageQuery, GetPageQueryVariables>
export const GetPageSeoDocument = {
  __meta__: { hash: 'fe96911de5c70db30801d88d31ee45088235cba6' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPageSeo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageDetailSeo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'tag' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageDetailSeo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_seoMetaTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'tag' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageSeoQuery, GetPageSeoQueryVariables>
export const GetPagesDocument = {
  __meta__: { hash: '5d7e6ff877205e511777abd6c1413cddb69b9849' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'IntType' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'order' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PageModelOrderBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'order' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'identifiable' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ConcertListRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'TextBlockRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'TwoColumnRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPagesQuery, GetPagesQueryVariables>
export const GetSiteInfoDocument = {
  __meta__: { hash: '282b0c2812b1baa6417228b8756fca0d1cea642b' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSiteInfo' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: '_site' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locales' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'globalSeo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'seoSettings' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'videoUpload' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadVideoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'mp4Url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxAssetId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'muxPlaybackId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamingUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FileField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'videoUpload' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'file' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterCard' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'seoSettings' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'GlobalSeoField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'facebookPageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'siteName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'titleSuffix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'twitterAccount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fallbackSeo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'seo' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSiteInfoQuery, GetSiteInfoQueryVariables>
export const GetSubmenuDocument = {
  __meta__: { hash: '241389efe065149421412a7f5dd5c8baf2a058c4' },
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSubmenu' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'general' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'menu' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'SubmenuItemRecord' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'submenuItem' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'identifiable' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'RecordInterface' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_firstPublishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: '_updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'pageLink' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'identifiable' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'menuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'link' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'pageLink' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'submenuItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'SubmenuItemRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'menuItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSubmenuQuery, GetSubmenuQueryVariables>
