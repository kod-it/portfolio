import { getTheoryPosts } from 'app/theories/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getTheoryPosts().map((post) => ({
    url: `${baseUrl}/theories/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/theories'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
