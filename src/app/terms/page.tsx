import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PrimePickings terms of service - the rules and guidelines for using our website.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: January 26, 2026</p>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600">
            By accessing and using PrimePickings (primepickings.co), you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Description of Service</h2>
          <p className="text-gray-600">
            PrimePickings is a deal aggregation website that curates and displays discounts and
            deals available on Amazon.com. We provide links to Amazon product pages where you can
            make purchases. We do not sell products directly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Affiliate Disclosure</h2>
          <p className="text-gray-600 mb-4">
            PrimePickings is a participant in the Amazon Services LLC Associates Program, an
            affiliate advertising program designed to provide a means for sites to earn advertising
            fees by advertising and linking to Amazon.com.
          </p>
          <p className="text-gray-600">
            When you click on product links on our website and make a purchase on Amazon, we may
            receive a small commission at no additional cost to you. This commission helps us
            maintain and improve our service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Accuracy of Information</h2>
          <p className="text-gray-600 mb-4">
            We strive to provide accurate and up-to-date deal information. However:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Prices and availability are subject to change without notice</li>
            <li>Deals may expire or sell out before we can update our listings</li>
            <li>Final prices are determined by Amazon at the time of purchase</li>
            <li>We are not responsible for pricing errors on Amazon&apos;s website</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Always verify the final price on Amazon before completing your purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Warranty</h2>
          <p className="text-gray-600">
            PrimePickings is provided &quot;as is&quot; without any warranties, express or implied. We do not
            guarantee the accuracy, completeness, or reliability of any deal information. We are not
            responsible for any purchases you make through Amazon or any issues with products
            purchased through our affiliate links.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Third-Party Links</h2>
          <p className="text-gray-600">
            Our website contains links to Amazon.com and potentially other third-party websites.
            We are not responsible for the content, privacy policies, or practices of these
            third-party sites. Your interactions with Amazon are governed by Amazon&apos;s terms
            of service and privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Newsletter Subscription</h2>
          <p className="text-gray-600 mb-4">
            By subscribing to our newsletter:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>You agree to receive deal alerts and promotional emails from us</li>
            <li>You confirm that the email address provided is yours</li>
            <li>You can unsubscribe at any time using the link in each email</li>
            <li>We will not sell or share your email address with third parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Intellectual Property</h2>
          <p className="text-gray-600">
            The PrimePickings name, logo, and website content are our property. Product images,
            descriptions, and trademarks belong to their respective owners (primarily Amazon and
            product manufacturers). You may not reproduce, distribute, or create derivative works
            from our content without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600">
            To the fullest extent permitted by law, PrimePickings shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including but not
            limited to loss of profits, data, or other intangible losses, resulting from your use
            of our website or any products purchased through our affiliate links.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Conduct</h2>
          <p className="text-gray-600 mb-4">You agree not to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Use our website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of our website</li>
            <li>Scrape or collect data from our website without permission</li>
            <li>Use automated systems to access our website excessively</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting to the website. Your continued use of the website
            after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Governing Law</h2>
          <p className="text-gray-600">
            These Terms of Service shall be governed by and construed in accordance with the laws
            of the United States, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Questions?</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please reach out to us through
            our social media channels linked in the footer.
          </p>
        </section>
      </div>
    </div>
  );
}
