'use client';

import { categories } from '@/data/mockDeals';
import { DealCategory } from '@/types/deal';

interface CategoryFilterProps {
  selectedCategory: DealCategory;
  onCategoryChange: (category: DealCategory) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id as DealCategory)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <span className="mr-1">{category.emoji}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}
