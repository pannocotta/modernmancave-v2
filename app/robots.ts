import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/launch'] },
    sitemap: 'https://modernmancave.com.au/sitemap.xml',
  }
}
