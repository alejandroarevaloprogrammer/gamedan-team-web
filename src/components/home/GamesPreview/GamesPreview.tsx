
import Link from "next/link";
import { GameCard } from "@/components/games/GameCard";
import { getGameBySlug } from "@/lib/games";
import { homeGames } from "@/data/homeGames";
import type { Game } from "@/types/game";
import styles from "./GamesPreview.module.css";

function resolveGames(slugs: readonly string[]): Game[] {
  return slugs.map((slug) => {
    const game = getGameBySlug(slug);

    if (!game) {
      throw new Error(`Game "${slug}" not found in src/data/games.ts`);
    }

    return game;
  });
}

export function GamesPreview() {
  const freeGames = resolveGames(homeGames.playFree);
  const developmentGames = resolveGames(homeGames.inDevelopment);

  return (
    <>
      {freeGames.length > 0 && (
        <section
          className={styles.section}
          aria-labelledby="free-games-title"
        >
          <div className={styles.header}>
            <div>
              <p className="eyebrow">Play Free Games</p>
              <h2 id="free-games-title">Ready to play? Jump right in.</h2>
            </div>

            <Link href="/games" className={styles.allGamesLink}>
              View all games
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.grid}>
            {freeGames.map((game) => (
              <GameCard key={game.id} game={game} badge="free" />
            ))}
          </div>
        </section>
      )}

      {developmentGames.length > 0 && (
        <section
          className={styles.section}
          aria-labelledby="development-games-title"
        >
          <div className={styles.header}>
            <div>
              <p className="eyebrow">In Development</p>
              <h2 id="development-games-title">
                Take a look at what we&apos;re working on.
              </h2>
            </div>

            <Link href="/games" className={styles.allGamesLink}>
              View all games
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.grid}>
            {developmentGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
