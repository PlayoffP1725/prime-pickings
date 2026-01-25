import { Metadata } from 'next';
import { categories } from '@/data/mockDeals';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  const categoryDescriptions: Record<string, string> = {
    haul: 'Budget-friendly deals under $20. Perfect Amazon haul finds including LED lights, gadgets, beauty tools, and everyday essentials.',
    electronics:
      'Best deals on electronics including AirPods, Echo devices, headphones, and tech accessories. Save big on top-rated gadgets.',
    home: 'Home essentials deals on cleaning supplies, batteries, and household items. Quality products at discounted prices.',
    fashion:
      'Fashion deals on popular brands like Crocs and more. Save on shoes, clothing, and accessories.',
    beauty:
      'Beauty and skincare deals on CeraVe, COSRX, and more. Discounts on moisturizers, serums, and beauty tools.',
    health:
      'Health and supplement deals on vitamins, probiotics, protein powder, and hydration products from trusted brands.',
  };

  const description =
    categoryDescriptions[slug] ||
    `Shop the best ${category.name} deals. Find discounts and savings on top-rated products.`;

  return {
    title: `${category.name} Deals`,
    description,
    keywords: [
      `${category.name.toLowerCase()} deals`,
      `amazon ${category.name.toLowerCase()}`,
      `${category.name.toLowerCase()} discounts`,
      `best ${category.name.toLowerCase()} deals`,
    ],
    openGraph: {
      title: `${category.name} Deals | PrimePickings`,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Deals | PrimePickings`,
      description,
    },
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
