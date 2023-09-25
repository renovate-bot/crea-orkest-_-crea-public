import { getEventPage } from 'graphql/getters/getEventPage'

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string[] | undefined }
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
