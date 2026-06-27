import Link from "next/link";
import { getFeaturedGame } from "@/lib/games";
import styles from "./Hero.module.css";

const studioDescription =
  "An independent game development studio creating memorable retro and anime-inspired games.";

export function HeroContent() {
  const featuredGame = getFeaturedGame();

  return (
    <div className={styles.left}>
      <p className="eyebrow">Enjoy your gaming lifestyle.</p>

      <h1>GameDan Team</h1>

      <p className={styles.description}>{studioDescription}</p>

      <div className={styles.actions}>
        <Link href="/games" className="button">
          Explore Games
        </Link>

        <Link
          href={`/games/${featuredGame.slug}`}
          className={styles.secondaryButton}
        >
          Featured Game
        </Link>
      </div>
    </div>
  );
}