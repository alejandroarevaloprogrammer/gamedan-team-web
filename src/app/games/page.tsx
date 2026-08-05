import { GameCard } from "@/components/games/GameCard";
import { getAllGames } from "@/lib/games";
import type { Game } from "@/types/game";

import styles from "./GamesPage.module.css";

type GameSectionProps = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  games: Game[];
};

function GameSection({
  id,
  title,
  eyebrow,
  description,
  games,
}: GameSectionProps) {
  if (games.length === 0) {
    return null;
  }

  return (
    <section
      id={id}
      className={styles.librarySection}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.sectionHeader}>
        <div>
          <p className="eyebrow">{eyebrow}</p>

          <h2 id={`${id}-title`}>
            {title}
          </h2>

          <p className={styles.sectionDescription}>
            {description}
          </p>
        </div>

        <p className={styles.count}>
          {games.length} {games.length === 1 ? "game" : "games"}
        </p>
      </div>

      <div className={styles.grid}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </section>
  );
}

export default function GamesPage() {
  const games = getAllGames();

  const featuredGames = games.filter(
    (game) => game.featured,
  );

  const inDevelopmentGames = games.filter(
    (game) =>
      game.status === "in-development" &&
      !game.featured,
  );

  const releasedGames = games.filter(
    (game) => game.status === "released",
  );

  const comingSoonGames = games.filter(
    (game) => game.status === "coming-soon",
  );

  return (
    <main className={styles.main}>
      <section
        id="game-library"
        className={styles.hero}
      >
        <p className="eyebrow">Game Library</p>

        <h1>Our Games</h1>

        <p className={styles.intro}>
          Explore the retro and anime-inspired games created by
          GameDan Team, from visual novels to casual arcade
          experiences.
        </p>

        <p className={styles.total}>
          {games.length} {games.length === 1 ? "game" : "games"} in
          our current library
        </p>
      </section>

      <div className={styles.library}>
        <GameSection
          id="featured-game"
          eyebrow="Featured Game"
          title="Our current highlight."
          description="The project currently at the centre of GameDan Team."
          games={featuredGames}
        />

        <GameSection
          id="in-development"
          eyebrow="In Development"
          title="Games we are currently building."
          description="Projects that are actively evolving and will receive more updates in the future."
          games={inDevelopmentGames}
        />

        <GameSection
          id="coming-soon"
          eyebrow="Coming Soon"
          title="Upcoming releases."
          description="Games that are preparing for their next major release."
          games={comingSoonGames}
        />

        <GameSection
          id="released-games"
          eyebrow="Released"
          title="Games you can already discover."
          description="Completed GameDan Team projects currently available to players."
          games={releasedGames}
        />
      </div>
    </main>
  );
}