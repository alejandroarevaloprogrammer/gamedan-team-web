import Link from "next/link";
import { GameCard } from "@/components/games/GameCard";
import { getNonFeaturedGames } from "@/lib/games";
import styles from "./GamesPreview.module.css";

export function GamesPreview() {
  const games = getNonFeaturedGames();

  if (games.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="games-preview-title">
      <div className={styles.header}>
        <div>
          <p className="eyebrow">More Games</p>
          <h2 id="games-preview-title">Explore our games.</h2>
        </div>

        <Link href="/games" className={styles.allGamesLink}>
          View all games
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={styles.grid}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}