'use client';

import { useState } from 'react';
import { mockDeals, sortDeals, SortOption } from '@/data/mockDeals';
import DealCard from '@/components/DealCard';
import CountdownTimer from '@/components/CountdownTimer';
import SortDropdown from '@/components/SortDropdown';

export default function LightningDealsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const lightningDeals = mockDeals.filter((deal) => deal.dealType === 'lightning');
  const sortedDeals = sortDeals(lightningDeals, sortBy);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold">Limited Time Only</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
          Lightning Deals
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          These deals won&apos;t last long! Grab them before they&apos;re gone.
          New lightning deals added throughout the day.
        </p>
      </div>

      {/* Active Countdown Banner */}
      {sortedDeals.length > 0 && sortedDeals[0].expiresAt && (
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 mb-8 text-white text-center">
          <p className="text-sm uppercase tracking-wide mb-2">Next Deal Expires In</p>
          <div className="text-3xl font-bold">
            <CountdownTimer expiresAt={sortedDeals[0].expiresAt} />
          </div>
        </div>
      )}

      {/* Sort Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <p className="text-sm text-gray-600">
          Showing {sortedDeals.length} {sortedDeals.length === 1 ? 'deal' : 'deals'}
        </p>
        <SortDropdown currentSort={sortBy} onSortChange={setSortBy} />
      </div>

      {/* Deals Grid */}
      {sortedDeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedDeals.map((deal) => (
            <div key={deal.id} className="relative">
              {deal.expiresAt && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 bg-white rounded-full px-3 py-1 shadow-md">
                  <CountdownTimer expiresAt={deal.expiresAt} />
                </div>
              )}
              <DealCard deal={deal} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No Lightning Deals Right Now
          </h3>
          <p className="mt-2 text-gray-500">
            Check back soon! New lightning deals are added throughout the day.
          </p>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-12 bg-gray-100 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          How Lightning Deals Work
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Limited Time</h3>
              <p className="text-sm text-gray-600">
                Each deal runs for a few hours or until sold out
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Deep Discounts</h3>
              <p className="text-sm text-gray-600">
                Often the lowest prices you&apos;ll find all year
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Act Fast</h3>
              <p className="text-sm text-gray-600">
                Popular items sell out quickly - don&apos;t wait!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
