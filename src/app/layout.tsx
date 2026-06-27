import type { Metadata } from 'next';
import { BackgroundFX } from "@/components/ui/BackgroundFX/BackgroundFX";
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Game Dan Team',
  description: 'Indie games and anime visual novels by Game Dan Team.',
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