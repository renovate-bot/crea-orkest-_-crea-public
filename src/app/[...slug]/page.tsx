import { DefaultPage } from 'components/defaultPage'
import type { Metadata } from 'next'
import { getPageSeo } from 'graphql/getters/getPageSeo'

interface PageProps {
  params: { slug: string[] }
  searchParams: { [key: string]: string[] | undefined }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: params.slug.join('/') })
  return data
}

const Page = async ({ params: { slug } }: PageProps) => {
  return <DefaultPage slug={slug.join('/')} />
}

export default Page
