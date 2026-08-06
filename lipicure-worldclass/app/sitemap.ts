import { MetadataRoute } from 'next';
import { getAllPublished, hrefFor } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lipicure.com';
  const routes = [
    '',
    '/about',
    '/technology',
    '/pearl-x',
    '/marine-bioprocess-intelligence',
    '/research',
    '/team',
    '/contact',
    '/founder-story',
    '/founders-journey',
    '/build-together',
    '/ai-biotech-research',
    '/collaboration',
    '/philosophy',
    '/knowledge',
    '/insights',
    '/founders-desk',
    '/news',
    '/blue-bioeconomy',
    '/resources',
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const publishedRoutes: MetadataRoute.Sitemap = getAllPublished().map((item) => ({
    url: `${base}${hrefFor(item)}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...publishedRoutes];
}
