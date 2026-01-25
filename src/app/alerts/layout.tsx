import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deal Alerts - Get Notified of the Best Deals',
  description:
    'Sign up for free deal alerts and never miss a discount. Get personalized notifications for lightning deals, price drops, and exclusive finds.',
  keywords: [
    'deal alerts',
    'price drop alerts',
    'discount notifications',
    'deal newsletter',
    'amazon deal alerts',
    'shopping alerts',
  ],
  openGraph: {
    title: 'Deal Alerts | PrimePickings',
    description:
      'Sign up for free deal alerts and never miss a discount. Get personalized notifications delivered to your inbox.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deal Alerts | PrimePickings',
    description:
      'Sign up for free deal alerts and never miss a discount. Get personalized notifications delivered to your inbox.',
  },
};

export default function AlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
