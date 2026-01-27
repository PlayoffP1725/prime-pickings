import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about PrimePickings - your trusted source for the best Amazon deals and discounts.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">About PrimePickings</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At PrimePickings, we believe everyone deserves access to great deals without spending hours
            searching for them. Our mission is simple: to curate the best Amazon deals and discounts
            so you can save money on quality products you actually want.
          </p>
          <p className="text-gray-600">
            Every day, our team scours Amazon for the hottest discounts, lightning deals, and hidden
            gems. We verify prices, check reviews, and only share deals that offer genuine value.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Daily Deal Curation</h3>
              <p className="text-gray-600 text-sm">
                We hand-pick the best deals across electronics, home, beauty, fashion, and more.
                No junk, no filler - just deals worth your attention.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Lightning Deal Alerts</h3>
              <p className="text-gray-600 text-sm">
                Time-sensitive deals require fast action. We track lightning deals and notify
                our subscribers so they never miss out.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Price Verification</h3>
              <p className="text-gray-600 text-sm">
                We check that discounts are real and prices are actually reduced.
                No inflated "original prices" or fake deals here.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Category Organization</h3>
              <p className="text-gray-600 text-sm">
                Find what you need quickly with our organized categories, from budget-friendly
                hauls under $20 to premium electronics.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Make Money</h2>
          <p className="text-gray-600 mb-4">
            PrimePickings is an Amazon affiliate site. When you click on a deal and make a purchase
            on Amazon, we may earn a small commission at no additional cost to you. This is how we
            keep the site running and continue finding great deals for you.
          </p>
          <p className="text-gray-600">
            Our affiliate relationship with Amazon means our interests are aligned with yours: we only
            succeed when we share deals that you actually want to buy. That&apos;s why we focus on quality
            over quantity.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Promise</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>We only share deals we believe offer genuine value</li>
            <li>We verify discounts are real before posting</li>
            <li>We respect your inbox - no spam, just deals</li>
            <li>We&apos;re transparent about our affiliate relationships</li>
            <li>We continuously improve based on community feedback</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6 opacity-90">
            Get the best deals delivered to your inbox. Join thousands of smart shoppers
            who save money every day with PrimePickings.
          </p>
          <a
            href="/alerts"
            className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Sign Up for Deal Alerts
          </a>
        </section>
      </div>
    </div>
  );
}
