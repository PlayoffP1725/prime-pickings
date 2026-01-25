import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PrimePickings - Best Amazon Deals',
    short_name: 'PrimePickings',
    description:
      'Find the best Amazon deals, discounts, and lightning deals. Save up to 60% daily.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f9fafb',
    theme_color: '#7C3AED',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
