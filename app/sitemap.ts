import { getTheoryPosts } from 'app/theories/utils'
import { getProjectPosts } from 'app/projects/utils'

export const baseUrl = 'https://akashdip.com'

export default async function sitemap() {
  let theories = getTheoryPosts().map((post) => ({
    url: `${baseUrl}/theories/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))
  let projects = getProjectPosts().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))
  let routes = ['', '/theories'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...theories, ...projects]
}
