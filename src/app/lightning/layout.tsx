import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lightning Deals',
  description:
    'Limited-time lightning deals with the deepest discounts. Grab these deals before they expire! New lightning deals added throughout the day.',
  keywords: [
    'lightning deals',
    'flash sales',
    'limited time deals',
    'amazon lightning deals',
    'time-limited discounts',
    'flash discounts',
  ],
  openGraph: {
    title: 'Lightning Deals | PrimePickings',
    description:
      'Limited-time lightning deals with the deepest discounts. Grab these deals before they expire!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lightning Deals | PrimePickings',
    description:
      'Limited-time lightning deals with the deepest discounts. Grab these deals before they expire!',
  },
};

export default function LightningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
