
import Image from "next/image";
import Link from "next/link";
import { getGameBySlug } from "@/lib/games";
import styles from "./FeaturedGame.module.css";

export function FeaturedGame() {
  const featuredGame = getGameBySlug("suicide-cliff");

  if (!featuredGame) {
    throw new Error(
      "Suicide Cliff not found in src/data/games.ts",
    );
  }

  const trailer = featuredGame.media.trailer;

  return (
    <section
      className={styles.section}
      aria-labelledby="featured-game-title"
    >
      <div className={styles.heading}>
        <p className="eyebrow">Our Biggest Hit</p>

        <h2 id="featured-game-title">
          A little game with a big impact.
        </h2>
      </div>

      <article className={styles.showcase}>
        <Link
          href={`/games/${featuredGame.slug}`}
          className={styles.media}
          aria-label={`View ${featuredGame.title}`}
        >
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
            Free to Play
          </span>
        </Link>

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
