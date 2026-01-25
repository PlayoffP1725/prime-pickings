import Link from 'next/link';
import { categories } from '@/data/mockDeals';
import { mockDeals } from '@/data/mockDeals';

export default function CategoriesPage() {
  // Filter out 'all' from categories for the grid
  const categoryList = categories.filter((cat) => cat.id !== 'all');

  // Count deals per category
  const getDealCount = (categoryId: string) =>
    mockDeals.filter((deal) => deal.category === categoryId).length;

  // Get max discount per category
  const getMaxDiscount = (categoryId: string) => {
    const categoryDeals = mockDeals.filter((deal) => deal.category === categoryId);
    if (categoryDeals.length === 0) return 0;
    return Math.max(...categoryDeals.map((d) => d.discountPercentage));
  };

  const categoryColors: Record<string, string> = {
    haul: 'from-yellow-500 to-amber-600',
    electronics: 'from-blue-500 to-indigo-600',
    home: 'from-amber-500 to-orange-600',
    fashion: 'from-pink-500 to-rose-600',
    beauty: 'from-purple-500 to-violet-600',
    health: 'from-teal-500 to-cyan-600',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
          Browse by Category
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Find the best deals organized by category. Click any category to see
          all available discounts.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryList.map((category) => {
          const dealCount = getDealCount(category.id);
          const maxDiscount = getMaxDiscount(category.id);
          const colorClass = categoryColors[category.id] || 'from-gray-500 to-gray-600';

          return (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${colorClass} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-4xl">{category.emoji}</span>
                    <h2 className="text-2xl font-bold mt-3">{category.name}</h2>
                  </div>
                  {maxDiscount > 0 && (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-semibold">
                        Up to {maxDiscount}% off
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white/80">
                    {dealCount} {dealCount === 1 ? 'deal' : 'deals'} available
                  </span>
                  <svg
                    className="h-6 w-6 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* All Deals Link */}
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
        >
          <span>View All Deals</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
