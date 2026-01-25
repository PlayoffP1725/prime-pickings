import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'PrimePickings - Best Amazon Deals & Discounts';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />

        {/* Price tag icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
              fill="url(#tagGrad)"
              stroke="white"
              strokeWidth="1.5"
            />
            <circle cx="7" cy="7" r="2" fill="white" />
            <defs>
              <linearGradient id="tagGrad" x1="2" y1="2" x2="22" y2="22">
                <stop stopColor="#FACC15" />
                <stop offset="1" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main title */}
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 16,
            textShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          PrimePickings
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: 'rgba(255,255,255,0.9)',
            marginBottom: 40,
          }}
        >
          Best Daily Deals & Discounts
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: 30,
            padding: '12px 32px',
          }}
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: 'white',
            }}
          >
            Save Up To 60% Off
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            display: 'flex',
            fontSize: 20,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          primepickings.co
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
