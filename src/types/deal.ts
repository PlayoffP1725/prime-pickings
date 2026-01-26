export interface Deal {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  originalPrice: number;
  salePrice: number;
  discountPercentage: number;
  category: string;
  affiliateUrl: string;
  rating: number;
  reviewCount: number;
  isPrime: boolean;
  dealType: 'lightning' | 'daily' | 'coupon' | 'sale';
  expiresAt?: string;
}

export type DealCategory =
  | 'electronics'
  | 'home'
  | 'fashion'
  | 'beauty'
  | 'health'
  | 'haul'
  | 'baby'
  | 'tools'
  | 'all';
