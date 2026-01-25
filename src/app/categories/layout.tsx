import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop by Category',
  description:
    'Browse Amazon deals by category. Find discounts on electronics, home essentials, beauty, fashion, health supplements, and budget haul deals under $20.',
  keywords: [
    'amazon categories',
    'electronics deals',
    'home deals',
    'beauty deals',
    'fashion deals',
    'health deals',
    'amazon haul',
    'budget deals',
  ],
  openGraph: {
    title: 'Shop by Category | PrimePickings',
    description:
      'Browse Amazon deals by category. Find discounts on electronics, home, beauty, fashion, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop by Category | PrimePickings',
    description:
      'Browse Amazon deals by category. Find discounts on electronics, home, beauty, fashion, and more.',
  },
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
