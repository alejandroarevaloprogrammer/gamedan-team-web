import type { Metadata } from "next";
import { BackgroundFX } from "@/components/ui/BackgroundFX/BackgroundFX";
import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { brand } from "@/config/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: brand.name,
  description: brand.description,
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
