"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { brand } from "@/config/brand";

import styles from "./Navbar.module.css";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/games",
    label: "Games",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export function Navbar() {
  const pathname = usePathname();

  function isActive(href: string): boolean {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className={styles.header}>
      <Link
        className={styles.brand}
        href="/"
        aria-label={`${brand.name} home`}
      >
        <span className={styles.brandIcon}>
          <Image
            src={brand.assets.icon}
            alt=""
            width={40}
            height={40}
          />
        </span>
      </Link>

      <nav
        className={styles.nav}
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              data-active={active}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}