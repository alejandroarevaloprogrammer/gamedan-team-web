import Image from "next/image";
import Link from "next/link";
import { getFeaturedGame } from "@/lib/games";
import styles from "./Hero.module.css";

export function HeroMedia() {
  const featuredGame = getFeaturedGame();

  return (
    <div className={styles.mediaColumn}>
      <Link href={`/games/${featuredGame.slug}`} className={styles.featuredCard} aria-label={`View ${featuredGame.title}`}>
        <div className={styles.mediaFrame}>
          <Image src={featuredGame.media.cover} alt={`${featuredGame.title} cover art`} fill priority sizes="(max-width: 900px) 100vw, 58vw" className={styles.coverImage} />
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
