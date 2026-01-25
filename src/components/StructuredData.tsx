export default function StructuredData() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PrimePickings',
    url: 'https://primepickings.co',
    description:
      'Find the best Amazon deals, discounts, and lightning deals. Save up to 60% with curated daily deals.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://primepickings.co/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PrimePickings',
    url: 'https://primepickings.co',
    logo: 'https://primepickings.co/opengraph-image',
    sameAs: [],
    description:
      'PrimePickings curates the best Amazon deals and discounts to help you save money on quality products.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
