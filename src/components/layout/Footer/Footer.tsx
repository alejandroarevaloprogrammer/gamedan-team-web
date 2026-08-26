import Link from "next/link";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { brand } from "@/config/brand";

import styles from "./Footer.module.css";

const startingYear = 2019;
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brandColumn}>
          <h3>{brand.name}</h3>

          <p>{brand.description}</p>
        </div>

        <div className={styles.column}>
          <h4>Navigation</h4>

          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/games">Games</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.column}>
          <h4>Discover</h4>

          <nav
            className={styles.links}
            aria-label="Discover GameDan Team"
          >
            <Link href="/games#game-library">
              Game Library
            </Link>

            <Link href="/games#featured-game">
              Featured Game
            </Link>

            <Link href="/games#in-development">
              Games in Development
            </Link>

            <Link href="/games#released-games">
              Released Games
            </Link>
          </nav>
        </div>

        <div className={styles.column}>
          <h4>Follow</h4>

          <nav aria-label="Follow GameDan Team">
            <a
              href={brand.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon name="youtube" />
              <span>YouTube</span>
            </a>

            <a
              href={brand.social.steam}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon name="steam" />
              <span>Steam</span>
            </a>

            <a
              href={brand.social.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon name="x" />
              <span>X</span>
            </a>

            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon name="instagram" />
              <span>Instagram</span>
            </a>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {startingYear}–{currentYear} {brand.name}. All rights
          reserved.
        </p>

        <p className={styles.tagline}>{brand.tagline}</p>
      </div>
    </footer>
  );
}