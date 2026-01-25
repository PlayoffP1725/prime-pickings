'use client';

import EmailSignup from '@/components/EmailSignup';

export default function AlertsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
          Deal Alerts
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Never miss a deal again. Get personalized notifications when we find
          discounts on products you care about.
        </p>
      </div>

      {/* Signup Card */}
      <div className="max-w-md mx-auto mb-16">
        <EmailSignup showCategories={true} />
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-yellow-600"
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
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
          <p className="text-gray-600 text-sm">
            Get notified within minutes of new deals going live. Be the first to grab limited-time offers.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Personalized</h3>
          <p className="text-gray-600 text-sm">
            Choose the categories you care about. Only get alerts for deals that match your interests.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 mb-2">No Spam</h3>
          <p className="text-gray-600 text-sm">
            We only send deals worth your time. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>

      {/* What You Get Section */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          What You&apos;ll Get
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Daily Deal Digest</h3>
              <p className="text-gray-600 text-sm">
                A curated email with the day&apos;s best deals across all categories.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Lightning Deal Alerts</h3>
              <p className="text-gray-600 text-sm">
                Instant notifications when time-sensitive deals go live.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Price Drop Alerts</h3>
              <p className="text-gray-600 text-sm">
                Know when popular products hit their lowest prices ever.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Exclusive Finds</h3>
              <p className="text-gray-600 text-sm">
                Special deals and hidden discounts we find just for subscribers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow-sm p-4 group">
            <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
              How often will I receive emails?
              <svg
                className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              You&apos;ll receive 1-2 emails per day max, depending on your preferences. We never spam -
              quality over quantity is our motto.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-4 group">
            <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
              Can I change my category preferences later?
              <svg
                className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              Yes! Every email includes a link to update your preferences. You can add or remove
              categories anytime.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-4 group">
            <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
              Is it really free?
              <svg
                className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              100% free, forever. We make money through affiliate commissions when you make a purchase,
              so our interests are aligned - we only share deals worth buying!
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-4 group">
            <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
              How do I unsubscribe?
              <svg
                className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              Click the unsubscribe link at the bottom of any email. It&apos;s one click and instant -
              no hoops to jump through.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
