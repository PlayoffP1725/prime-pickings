'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { mockDeals, sortDeals, SortOption } from '@/data/mockDeals';
import DealCard from '@/components/DealCard';
import SortDropdown from '@/components/SortDropdown';
import { searchDeals } from '@/lib/utils';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const results = searchDeals(mockDeals, query);
  const sortedResults = sortDeals(results, sortBy);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="mb-4">
          <Link href="/" className="text-purple-600 hover:text-purple-700">
            &larr; Back to all deals
          </Link>
        </nav>
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-gray-500">
            {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
            <span className="font-semibold text-gray-900">&quot;{query}&quot;</span>
          </p>
        )}
      </div>

      {/* Results */}
      {!query ? (
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Enter a Search Term
          </h3>
          <p className="mt-2 text-gray-500">
            Use the search bar above to find deals.
          </p>
        </div>
      ) : sortedResults.length > 0 ? (
        <>
          {/* Sort Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <p className="text-sm text-gray-600">
              Showing {sortedResults.length} {sortedResults.length === 1 ? 'result' : 'results'}
            </p>
            <SortDropdown currentSort={sortBy} onSortChange={setSortBy} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedResults.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </>
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
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No Results Found
          </h3>
          <p className="mt-2 text-gray-500">
            Try searching for something else, or browse our categories.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              View all deals
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/categories"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Browse categories
            </Link>
          </div>
        </div>
      )}

      {/* Search Tips */}
      <div className="mt-12 bg-gray-100 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-700 mb-3">Search Tips</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            Try searching for product names, brands, or categories
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            Use specific terms like &quot;headphones&quot; or &quot;kitchen&quot;
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            Check spelling if you&apos;re not finding what you expect
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-xl h-64"></div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
