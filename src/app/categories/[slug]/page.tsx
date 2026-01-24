'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { mockDeals, categories } from '@/data/mockDeals';
import DealCard from '@/components/DealCard';
import { getCategoryName } from '@/lib/utils';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const category = categories.find((c) => c.id === slug);
  const filteredDeals = mockDeals.filter((deal) => deal.category === slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The category you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/categories"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Browse all categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link href="/categories" className="text-gray-500 hover:text-gray-700">
              Categories
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium">{getCategoryName(slug)}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{category.emoji}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
            {category.name}
          </h1>
        </div>
        <p className="text-gray-500">
          {filteredDeals.length} {filteredDeals.length === 1 ? 'deal' : 'deals'}{' '}
          available
        </p>
      </div>

      {/* Sort/Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="discount">Biggest Discount</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Showing {filteredDeals.length} results
          </span>
        </div>
      </div>

      {/* Deals Grid */}
      {filteredDeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
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
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No Deals in This Category
          </h3>
          <p className="mt-2 text-gray-500">
            Check back soon! New deals are added daily.
          </p>
          <Link
            href="/categories"
            className="mt-4 inline-block text-purple-600 hover:text-purple-700 font-medium"
          >
            Browse other categories
          </Link>
        </div>
      )}

      {/* Related Categories */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Explore Other Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories
            .filter((c) => c.id !== 'all' && c.id !== slug)
            .map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-colors"
              >
                <span>{cat.emoji}</span>
                <span className="text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
