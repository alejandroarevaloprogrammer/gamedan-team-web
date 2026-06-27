import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label={`${brand.name} home`}>
        <span className={styles.brandIcon}>
          <Image src={brand.assets.icon} alt="" width={34} height={34} priority />
        </span>
        <span className={styles.brandName}>{brand.name}</span>
      </Link>
      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
