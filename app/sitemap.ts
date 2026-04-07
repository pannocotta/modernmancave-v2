import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://modernmancave.com.au'

  const routes = [
    '', '/team', '/community', '/prices', '/locations',
    '/mobile-barber', '/mobile-barber-enquiry', '/franchise',
    '/booking', '/shop', '/app',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
