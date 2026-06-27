import Link from "next/link";
import { brand } from "@/config/brand";
import { getFeaturedGame } from "@/lib/games";
import styles from "./Hero.module.css";

export function HeroContent() {
  const featuredGame = getFeaturedGame();

  return (
    <div className={styles.content}>
      <p className="eyebrow">{brand.tagline}</p>
      <h1>{brand.name}</h1>
      <p className={styles.description}>{brand.description}</p>
      <div className={styles.actions}>
        <Link href="/games" className="button">Explore Games</Link>
        <Link href={`/games/${featuredGame.slug}`} className={styles.secondaryButton}>View Featured Game</Link>
      </div>
    </div>
  );
}
