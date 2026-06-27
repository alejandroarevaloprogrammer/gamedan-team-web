import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Game Dan Team',
  description: 'Indie games and anime visual novels by Game Dan Team.',
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link className="brand" href="/" aria-label="Game Dan Team home">
              <span className="brand-mark">GDT</span>
              <span>Game Dan Team</span>
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <p>© 2026 Game Dan Team · Indie games, visual novels & neon feelings.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
