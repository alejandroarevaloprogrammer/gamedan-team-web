import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className="eyebrow">Indie Studio · Anime Visual Novels</p>

        <h1>
          Stories
          <br />
          that glow
          <br />
          after midnight.
        </h1>

        <p className={styles.description}>
          Emotional stories, unforgettable characters and beautiful
          anime-inspired worlds.
        </p>

        <div className={styles.actions}>
          <Link href="/games" className="button">
            Explore Games
          </Link>

          <button className={styles.secondaryButton}>
            Watch Trailer
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.trailer}>
          <button className={styles.playButton} aria-label="Play trailer">
            <span>▶</span>
          </button>

          <span className={styles.trailerLabel}>Featured Trailer</span>
        </div>
      </div>
    </section>
  );
}