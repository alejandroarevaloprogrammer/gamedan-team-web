import { GameCard } from "@/components/games/GameCard";
import { getAllGames } from "@/lib/games";
import styles from "./GamesPage.module.css";

export default function GamesPage() {
  const games = getAllGames();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className="eyebrow">Game Library</p>

        <h1>Our Games</h1>

        <p className={styles.intro}>
          Explore the retro and anime-inspired games created by GameDan Team,
          from visual novels to casual arcade experiences.
        </p>
      </section>

      <section
        className={styles.library}
        aria-labelledby="games-library-title"
      >
        <div className={styles.header}>
          <div>
            <p className="eyebrow">All Games</p>
            <h2 id="games-library-title">Discover our projects.</h2>
          </div>

          <p className={styles.count}>
            {games.length} {games.length === 1 ? "game" : "games"}
          </p>
        </div>

        <div className={styles.grid}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
}