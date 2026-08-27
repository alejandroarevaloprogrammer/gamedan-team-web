import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { BackgroundFX } from "@/components/ui/BackgroundFX/BackgroundFX";
import { brand } from "@/config/brand";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.website),

  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },

  description: brand.description,

  applicationName: brand.name,

  authors: [
    {
      name: brand.name,
      url: brand.website,
    },
  ],

  creator: brand.name,
  publisher: brand.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: brand.name,
    title: brand.name,
    description: brand.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} social preview`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.website,
  logo: `${brand.website}${brand.assets.logo}`,
  description: brand.description,
  email: brand.email,
  sameAs: [
    brand.social.youtube,
    brand.social.instagram,
    brand.social.x,
    brand.social.steam,
    brand.social.itch,
    brand.social.bandcamp,
    brand.social.soundcloud,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <div className="site-shell">
          <BackgroundFX />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}