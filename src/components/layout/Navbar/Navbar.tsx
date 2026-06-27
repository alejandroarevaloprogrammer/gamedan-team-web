import Link from 'next/link';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Game Dan Team home">
        <span className={styles.brandMark}>GDT</span>
        <span>Game Dan Team</span>
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}