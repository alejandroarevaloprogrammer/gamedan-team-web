import Link from "next/link";
import Image from "next/image";
import { getFeaturedGame } from "@/lib/games";
import styles from "./Hero.module.css";

export function HeroMedia() {
  const featuredGame = getFeaturedGame();

  return (
    <div className={styles.right}>
      <Link
        href={`/games/${featuredGame.slug}`}
        className={styles.featuredCard}
      >
        <div className={styles.mediaFrame}>
          <Image
            src={featuredGame.media.cover}
            alt={`${featuredGame.title} cover art`}
            fill
            priority
            className={styles.coverImage}
          />

          <div className={styles.mediaOverlay} />

          <span className={styles.statusBadge}>{featuredGame.status}</span>
        </div>

        <div className={styles.featuredInfo}>
          <p className="eyebrow">{featuredGame.genres.join(" · ")}</p>
          <h2>{featuredGame.title}</h2>
          <p>{featuredGame.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
}