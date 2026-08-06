import type { MetadataRoute } from 'next';
import { contentItems } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lipicure.com';
  const staticRoutes = [
    '',
    '/about',
    '/technology',
    '/marine-bioprocess-intelligence',
    '/research',
    '/team',
    '/contact',
    '/collaboration',
    '/founder-story',
    '/founders-journey',
    '/build-together',
    '/ai-biotech-research',
    '/knowledge',
    '/insights',
    '/founders-desk',
    '/news',
    '/philosophy',
  ];
  const dynamic = contentItems.map((item) => ({
    url: `${base}/${item.kind === 'insight' ? 'insights' : item.kind === 'founder' ? 'founders-desk' : 'news'}/${item.slug}`,
    lastModified: new Date(item.date),
  }));
  return [...staticRoutes.map((route) => ({ url: base + route, lastModified: new Date() })), ...dynamic];
}
