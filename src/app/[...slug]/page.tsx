import { DefaultPage } from 'components/defaultPage'

interface PageProps {
  params: { slug: string[] }
  searchParams: { [key: string]: string[] | undefined }
}

const Page = async ({ params: { slug } }: PageProps) => {
  console.log(slug)
  return <DefaultPage slug={slug.join('/')} />
}

export default Page
