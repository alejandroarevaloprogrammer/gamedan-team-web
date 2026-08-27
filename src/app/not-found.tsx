import Link from "next/link";

import { brand } from "@/config/brand";

import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <section
        className={styles.content}
        aria-labelledby="not-found-title"
      >
        <p className="eyebrow">404 Error</p>

        <h1 id="not-found-title">
          This page could not be found.
        </h1>

        <p className={styles.description}>
          The page you are looking for does not exist or may have
          been moved.
        </p>

        <div className={styles.actions}>
          <Link
            href="/"
            className={styles.primaryAction}
          >
            Back to Home
          </Link>

          <Link
            href="/games"
            className={styles.secondaryAction}
          >
            Explore Games
          </Link>
        </div>

        <p className={styles.brand}>
          {brand.name}
        </p>
      </section>
    </main>
  );
}