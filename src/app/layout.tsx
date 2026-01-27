import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://primepickings.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PrimePickings - Best Amazon Deals & Discounts",
    template: "%s | PrimePickings",
  },
  description:
    "Find the best Amazon deals, discounts, and lightning deals. Save up to 60% with curated daily deals across electronics, home, fashion, beauty, and health products.",
  keywords: [
    "amazon deals",
    "amazon discounts",
    "lightning deals",
    "amazon coupons",
    "daily deals",
    "best amazon deals",
    "amazon haul",
    "budget deals",
    "amazon savings",
    "prime deals",
    "electronics deals",
    "home deals",
    "beauty deals",
  ],
  authors: [{ name: "PrimePickings" }],
  creator: "PrimePickings",
  publisher: "PrimePickings",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "PrimePickings",
    title: "PrimePickings - Best Amazon Deals & Discounts",
    description:
      "Find the best Amazon deals, discounts, and lightning deals. Save up to 60% with curated daily deals across electronics, home, fashion, and more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PrimePickings - Best Daily Deals & Discounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimePickings - Best Amazon Deals & Discounts",
    description:
      "Find the best Amazon deals, discounts, and lightning deals. Save up to 60% on electronics, home, fashion, and more.",
    images: ["/twitter-image"],
    creator: "@primepickings",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
