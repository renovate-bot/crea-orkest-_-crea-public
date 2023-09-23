import { getConcertPage } from 'graphql/getters/getConcertPage'

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string[] | undefined }
}

const Page = async ({ params: { slug } }: PageProps) => {
  const { data } = await getConcertPage({ slug })
  return (
    <code>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </code>
  )
}

export default Page
