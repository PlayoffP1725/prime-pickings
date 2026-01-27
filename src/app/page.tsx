'use client';

import { useState } from 'react';
import DealCard from '@/components/DealCard';
import CategoryFilter from '@/components/CategoryFilter';
import SortDropdown from '@/components/SortDropdown';
import NewsletterBanner from '@/components/NewsletterBanner';
import { mockDeals, sortDeals, SortOption } from '@/data/mockDeals';
import { DealCategory } from '@/types/deal';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<DealCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const filteredDeals =
    selectedCategory === 'all'
      ? mockDeals
      : mockDeals.filter((deal) => deal.category === selectedCategory);

  const sortedDeals = sortDeals(filteredDeals, sortBy);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
          Today&apos;s Best Deals
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Hand-picked discounts and lightning deals updated daily.
          Save big on top-rated products from electronics to home essentials.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-6 mb-8 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold">{mockDeals.length}</p>
            <p className="text-sm opacity-80">Active Deals</p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              {Math.max(...mockDeals.map((d) => d.discountPercentage))}%
            </p>
            <p className="text-sm opacity-80">Max Discount</p>
          </div>
          <div>
            <p className="text-3xl font-bold">
              {mockDeals.filter((d) => d.dealType === 'lightning').length}
            </p>
            <p className="text-sm opacity-80">Lightning Deals</p>
          </div>
          <div>
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm opacity-80">Deal Updates</p>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Banner */}
      <NewsletterBanner />

      {/* Sort and Results count */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <p className="text-sm text-gray-600">
          Showing {sortedDeals.length} {sortedDeals.length === 1 ? 'deal' : 'deals'}
        </p>
        <SortDropdown currentSort={sortBy} onSortChange={setSortBy} />
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>

      {/* Empty State */}
      {sortedDeals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No deals found in this category. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
