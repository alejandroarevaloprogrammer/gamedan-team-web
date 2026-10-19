
import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/types/game";
import styles from "./GameCard.module.css";

type GameCardProps = {
  game: Game;
  badge?: "free";
};

const freeOnReleaseGames = new Set([
  "ona-bar",
  "hacker-friend",
]);

function formatStatus(status: Game["status"]): string {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function GameCard({ game, badge }: GameCardProps) {
  const isFreeToPlay = badge === "free" || game.status === "released";

  const badgeText = isFreeToPlay
    ? "Free to Play"
    : formatStatus(game.status);

  const showFreeOnRelease =
    game.status === "in-development" &&
    freeOnReleaseGames.has(game.slug);

  return (
    <article className={styles.card}>
      <Link
        href={`/games/${game.slug}`}
        className={styles.link}
        aria-label={`View ${game.title}`}
      >
        <div className={styles.media}>
          <Image
            src={game.media.cover}
            alt={`${game.title} cover art`}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className={styles.cover}
          />

          <div className={styles.overlay} />

          <span
            className={`${styles.status} ${isFreeToPlay ? styles.freeBadge : ""}`}
          >
            {badgeText}
          </span>

          {showFreeOnRelease && (
            <span className={styles.freeOnRelease}>
              Free on Release
            </span>
          )}
        </div>

        <div className={styles.content}>
          <p className={styles.genres}>{game.genres.join(" · ")}</p>

          <h3>{game.title}</h3>

          <p className={styles.description}>{game.shortDescription}</p>

          <span className={styles.action}>
            View game
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
