import { Deal } from '@/types/deal';

export function searchDeals(deals: Deal[], query: string): Deal[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return deals;

  return deals.filter(
    (deal) =>
      deal.title.toLowerCase().includes(searchTerm) ||
      deal.description.toLowerCase().includes(searchTerm) ||
      deal.category.toLowerCase().includes(searchTerm)
  );
}

export function formatTimeRemaining(expiresAt: string): string {
  const now = new Date().getTime();
  const expiry = new Date(expiresAt).getTime();
  const diff = expiry - now;

  if (diff <= 0) return 'Expired';

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  return `${minutes}m ${seconds}s`;
}

export function getCategoryName(slug: string): string {
  const names: Record<string, string> = {
    electronics: 'Electronics',
    home: 'Home & Kitchen',
    fashion: 'Fashion',
    beauty: 'Beauty',
    toys: 'Toys & Games',
    sports: 'Sports & Outdoors',
    grocery: 'Grocery',
  };
  return names[slug] || slug;
}
