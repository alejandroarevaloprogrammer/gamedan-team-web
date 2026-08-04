import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  prototype: "Prototype",
  "coming-soon": "Coming Soon",
};

const platformLabels: Record<GamePlatform, string> = {
  windows: "Windows",
  mac: "macOS",
  linux: "Linux",
  web: "HTML5",
  android: "Android",
  ios: "iOS",
  steam: "Steam",
  itch: "itch.io",
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
                <span className={styles.genreBadge} key={genre}>
                  {genre}
                </span>
              ))}
            </div>

            <p className={styles.description}>
              {game.description}
            </p>

            <div className={styles.platformBlock}>
              <p className={styles.metaLabel}>Available for</p>

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

            {game.releaseYear && (
              <p className={styles.releaseYear}>
                Released in {game.releaseYear}
              </p>
            )}

            <div className={styles.actions}>
              {game.links.steam && (
                <a
                  href={game.links.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryAction}
                >
                  View on Steam
                </a>
              )}

              {game.links.itch && (
                <a
                  href={game.links.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryAction}
                >
                  Play on itch.io
                </a>
              )}

              {trailer && (
                <a
                  href={trailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
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

      {game.media.screenshots &&
        game.media.screenshots.length > 0 && (
          <section
            className={styles.gallerySection}
            aria-labelledby="screenshots-title"
          >
            <div className={styles.galleryHeader}>
              <p className="eyebrow">Gallery</p>
              <h2 id="screenshots-title">Screenshots</h2>

              <p>
                A closer look at the world, characters and gameplay
                of {game.title}.
              </p>
            </div>

            <div className={styles.gallery}>
              {game.media.screenshots.map(
                (screenshot, index) => (
                  <div
                    className={styles.screenshot}
                    key={screenshot}
                  >
                    <Image
                      src={screenshot}
                      alt={`${game.title} screenshot ${index + 1}`}
                      width={1600}
                      height={900}
                      sizes="(max-width: 700px) 100vw, 50vw"
                      className={styles.screenshotImage}
                    />
                  </div>
                ),
              )}
            </div>
          </section>
        )}
    </main>
  );
}