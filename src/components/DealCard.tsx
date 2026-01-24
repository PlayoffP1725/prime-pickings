'use client';

import { Deal } from '@/types/deal';
import Image from 'next/image';

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  const savings = deal.originalPrice - deal.salePrice;

  const getDealBadge = () => {
    switch (deal.dealType) {
      case 'lightning':
        return { text: 'Lightning Deal', color: 'bg-orange-500' };
      case 'daily':
        return { text: "Today's Deal", color: 'bg-blue-500' };
      case 'coupon':
        return { text: 'Coupon', color: 'bg-green-500' };
      default:
        return { text: 'Sale', color: 'bg-red-500' };
    }
  };

  const badge = getDealBadge();

  return (
    <a
      href={deal.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Badge */}
      <div className="relative">
        <span className={`absolute top-3 left-3 ${badge.color} text-white text-xs font-bold px-2 py-1 rounded-full z-10`}>
          {badge.text}
        </span>
        {deal.isPrime && (
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            Prime
          </span>
        )}

        {/* Image */}
        <div className="relative h-48 bg-gray-100">
          <Image
            src={deal.imageUrl}
            alt={deal.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">
          {deal.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(deal.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({deal.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${deal.salePrice.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${deal.originalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-semibold text-green-600">
              {deal.discountPercentage}% off
            </span>
            <span className="text-xs text-gray-500">
              Save ${savings.toFixed(2)}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <span className="mt-4 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-2 px-4 rounded-lg text-center hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-md hover:shadow-lg">
          View Deal
        </span>
      </div>
    </a>
  );
}
