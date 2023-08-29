const URL = 'https://creaorkest.nl'

export default async function sitemap() {
  const routes = ['', '/portfolio', '/blog'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
