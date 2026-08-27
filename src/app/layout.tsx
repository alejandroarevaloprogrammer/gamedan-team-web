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
  },

  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
  },

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
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