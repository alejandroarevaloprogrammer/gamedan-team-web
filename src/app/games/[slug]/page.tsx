import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GameTrailer } from "@/components/games/GameTrailer";
import { GameSoundtrack } from "@/components/games/GameSoundtrack";
import { GameGallery } from "@/components/games/GameGallery";
import { brand } from "@/config/brand";
import { getAllGames, getGameBySlug } from "@/lib/games";
import type {
  GamePlatform,
  GameStatus,
} from "@/types/game";

import styles from "./GameDetail.module.css";

type GamePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const statusLabels: Record<GameStatus, string> = {
  released: "Released",
  "in-development": "In Development",
  "coming-soon": "Coming Soon",
};

const platformLabels: Record<GamePlatform, string> = {
  windows: "Windows",
  mac: "macOS",
  linux: "Linux",
  web: "HTML5",
  android: "Android",
  ios: "iOS",
  switch: "Nintendo Switch",
  playstation: "PlayStation",
  xbox: "Xbox",
};

export function generateStaticParams() {
  return getAllGames().map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: `Game not found | ${brand.name}`,
    };
  }

  return {
    title: `${game.title} | ${brand.name}`,
    description: game.shortDescription,
  };
}

export default async function GamePage({
  params,
}: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const trailer = game.media.trailer;

  return (
    <main className={styles.main}>
      <section
        className={styles.hero}
        aria-labelledby="game-detail-title"
      >
        <div className={styles.heroBackground}>
          <Image
            src={game.media.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.backgroundImage}
          />

          <div className={styles.backgroundOverlay} />
          <div className={styles.backgroundGlow} />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.coverPanel}>
            <div className={styles.coverFrame}>
              <Image
                src={game.media.cover}
                alt={`${game.title} cover art`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 54vw"
                className={styles.coverImage}
              />

              <div className={styles.coverOverlay} />
            </div>
          </div>

          <div className={styles.content}>
            <Link href="/games" className={styles.backLink}>
              <span aria-hidden="true">←</span>
              All games
            </Link>

            <div className={styles.statusRow}>
              <span
                className={styles.statusBadge}
                data-status={game.status}
              >
                <span
                  className={styles.statusDot}
                  aria-hidden="true"
                />

                {statusLabels[game.status]}
              </span>
            </div>

            <h1 id="game-detail-title">{game.title}</h1>

            <p className={styles.shortDescription}>
              {game.shortDescription}
            </p>

            <div
              className={styles.badgeGroup}
              aria-label="Game genres"
            >
              {game.genres.map((genre) => (
                <span
                  className={styles.genreBadge}
                  key={genre}
                >
                  {genre}
                </span>
              ))}
            </div>

            <p className={styles.description}>
              {game.description}
            </p>

            <div className={styles.platformBlock}>
              <p className={styles.metaLabel}>
                Available for
              </p>

              <div
                className={styles.badgeGroup}
                aria-label="Game platforms"
              >
                {game.platforms.map((platform) => (
                  <span
                    className={styles.platformBadge}
                    key={platform}
                  >
                    {platformLabels[platform]}
                  </span>
                ))}
              </div>
            </div>

            {game.releaseDate && (
              <p className={styles.releaseYear}>
                Release date: {game.releaseDate}
              </p>
            )}

            <div className={styles.actions}>
              {game.distribution.internalPlayUrl && (
                <Link
                  href={game.distribution.internalPlayUrl}
                  className={styles.primaryAction}
                >
                  Play now
                </Link>
              )}

              {game.distribution.steamUrl && (
                <a
                  href={game.distribution.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryAction}
                >
                  View on Steam
                </a>
              )}

              {game.distribution.itchUrl && (
                <a
                  href={game.distribution.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    game.distribution.internalPlayUrl
                      ? styles.secondaryAction
                      : styles.primaryAction
                  }
                >
                  View on itch.io
                </a>
              )}

              {game.distribution.downloadUrl && (
                <a
                  href={game.distribution.downloadUrl}
                  className={styles.primaryAction}
                >
                  Download
                </a>
              )}

              {game.distribution.websiteUrl && (
                <a
                  href={game.distribution.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAction}
                >
                  Official website
                </a>
              )}

              {game.distribution.pressKitUrl && (
                <a
                  href={game.distribution.pressKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAction}
                >
                  Press kit
                </a>
              )}

              {trailer && (
                <a
                  href="#trailer"
                  className={styles.secondaryAction}
                >
                  <span aria-hidden="true">▶</span>
                  Watch trailer
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {trailer && (
        <GameTrailer
          gameTitle={game.title}
          trailer={trailer}
        />
      )}

      {game.soundtrack && (
        <GameSoundtrack
          gameTitle={game.title}
          soundtrack={game.soundtrack}
        />
      )}

      {game.media.screenshots &&
        game.media.screenshots.length > 0 && (
          <GameGallery
            gameTitle={game.title}
            screenshots={
              game.media.screenshots
            }
          />
        )}
    </main>
  );
}