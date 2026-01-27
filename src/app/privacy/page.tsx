import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PrimePickings privacy policy - how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: January 26, 2026</p>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
          <p className="text-gray-600">
            PrimePickings (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
            protecting your personal information. This Privacy Policy explains how we collect, use,
            and safeguard your information when you visit our website primepickings.co.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-medium text-gray-700 mb-2">Information You Provide</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li><strong>Email Address:</strong> When you subscribe to our deal alerts newsletter</li>
            <li><strong>Category Preferences:</strong> The deal categories you select when signing up</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-700 mb-2">Information Collected Automatically</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li><strong>Usage Data:</strong> Pages visited, time spent on site, click patterns</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
            <li><strong>IP Address:</strong> For analytics and security purposes</li>
            <li><strong>Cookies:</strong> To remember preferences and improve your experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>To send you deal alerts and newsletters you&apos;ve subscribed to</li>
            <li>To personalize deals based on your category preferences</li>
            <li>To improve our website and user experience</li>
            <li>To analyze site traffic and usage patterns</li>
            <li>To prevent fraud and ensure security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Third-Party Services</h2>

          <h3 className="text-xl font-medium text-gray-700 mb-2">Amazon Associates Program</h3>
          <p className="text-gray-600 mb-4">
            PrimePickings is a participant in the Amazon Services LLC Associates Program, an affiliate
            advertising program. When you click on Amazon links on our site, Amazon may collect
            information as described in their privacy policy.
          </p>

          <h3 className="text-xl font-medium text-gray-700 mb-2">Analytics</h3>
          <p className="text-gray-600 mb-4">
            We use analytics services to understand how visitors use our site. These services may
            collect information about your visits using cookies and similar technologies.
          </p>

          <h3 className="text-xl font-medium text-gray-700 mb-2">Hosting</h3>
          <p className="text-gray-600">
            Our website is hosted by Vercel. Please refer to Vercel&apos;s privacy policy for information
            about how they handle data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cookies</h2>
          <p className="text-gray-600 mb-4">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Remember your preferences (like dark mode settings)</li>
            <li>Understand how you use our site</li>
            <li>Improve our services</li>
          </ul>
          <p className="text-gray-600 mt-4">
            You can control cookies through your browser settings. Note that disabling cookies may
            affect site functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information. However,
            no method of transmission over the Internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Unsubscribe from our emails at any time using the link in each email</li>
            <li>Request deletion of your email from our mailing list</li>
            <li>Access information we have about you</li>
            <li>Request correction of inaccurate information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-600">
            Our website is not intended for children under 13 years of age. We do not knowingly
            collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Questions?</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please reach out to us through
            our social media channels linked in the footer.
          </p>
        </section>
      </div>
    </div>
  );
}
