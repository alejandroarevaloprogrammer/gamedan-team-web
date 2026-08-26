import Image from "next/image";
import Link from "next/link";
import { getFeaturedGame } from "@/lib/games";
import styles from "./FeaturedGame.module.css";

function formatStatus(status: string): string {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function FeaturedGame() {
  const featuredGame = getFeaturedGame();
  const trailer = featuredGame.media.trailer;

  return (
    <section
      className={styles.section}
      aria-labelledby="featured-game-title"
    >
      <div className={styles.heading}>
        <p className="eyebrow">Featured Game</p>
        <h2 id="featured-game-title">Discover our current highlight.</h2>
      </div>

      <article className={styles.showcase}>
        <div className={styles.media}>
          <Image
            src={featuredGame.media.cover}
            alt={`${featuredGame.title} cover art`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
            className={styles.cover}
          />

          <div className={styles.overlay} />

          <span className={styles.status}>
            {formatStatus(featuredGame.status)}
          </span>
        </div>

        <div className={styles.content}>
          <p className={styles.genres}>
            {featuredGame.genres.join(" · ")}
          </p>

          <h3>{featuredGame.title}</h3>

          <p className={styles.description}>
            {featuredGame.description}
          </p>

          <div className={styles.actions}>
            {trailer && (
              <a
                href={trailer.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
              >
                Watch Trailer
              </a>
            )}

            <Link
              href={`/games/${featuredGame.slug}`}
              className={styles.secondaryAction}
            >
              View Game
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}