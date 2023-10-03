import type { Metadata } from 'next'
import { getEventPage } from 'graphql/getters/getEventPage'
import { getEventPageSeo } from 'graphql/getters/getEventPageSeo'

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string[] | undefined }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { data } = await getEventPageSeo({ slug: params.slug })
  return data
}

const Page = async ({ params: { slug } }: PageProps) => {
  const { data } = await getEventPage({ slug })
  return (
    <code>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </code>
  )
}

export default Page
