import { MetadataRoute } from 'next';
import { categories } from '@/data/mockDeals';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://primepickings.co';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lightning`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 0.9,
    },
  ];

  // Category pages (excluding 'all')
  const categoryPages = categories
    .filter((cat) => cat.id !== 'all')
    .map((category) => ({
      url: `${baseUrl}/categories/${category.id}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }));

  return [...staticPages, ...categoryPages];
}
