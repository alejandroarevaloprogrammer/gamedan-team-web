import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { brand } from "@/config/brand";
import { getAllGames, getGameBySlug } from "@/lib/games";

import styles from "./GameDetail.module.css";

type GamePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatStatus(status: string): string {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatPlatform(platform: string): string {
  const platformNames: Record<string, string> = {
    windows: "Windows",
    mac: "macOS",
    linux: "Linux",
    web: "HTML5",
    android: "Android",
    ios: "iOS",
    steam: "Steam",
    itch: "itch.io",
  };

  return platformNames[platform] ?? platform;
}

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

export default async function GamePage({ params }: GamePageProps) {
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
        <div className={styles.media}>
          <Image
            src={game.media.cover}
            alt={`${game.title} cover art`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
            className={styles.cover}
          />

          <div className={styles.overlay} />

          <span className={styles.status}>
            {formatStatus(game.status)}
          </span>
        </div>

        <div className={styles.content}>
          <Link href="/games" className={styles.backLink}>
            <span aria-hidden="true">←</span>
            All games
          </Link>

          <p className="eyebrow">{game.genres.join(" · ")}</p>

          <h1 id="game-detail-title">{game.title}</h1>

          <p className={styles.description}>{game.description}</p>

          <dl className={styles.details}>
            <div>
              <dt>Status</dt>
              <dd>{formatStatus(game.status)}</dd>
            </div>

            <div>
              <dt>Platforms</dt>
              <dd>
                {game.platforms.map(formatPlatform).join(" · ")}
              </dd>
            </div>

            {game.releaseYear && (
              <div>
                <dt>Release year</dt>
                <dd>{game.releaseYear}</dd>
              </div>
            )}
          </dl>

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
                Watch trailer
              </a>
            )}
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
            </div>

            <div className={styles.gallery}>
              {game.media.screenshots.map((screenshot, index) => (
                <div className={styles.screenshot} key={screenshot}>
                  <Image
                    src={screenshot}
                    alt={`${game.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className={styles.screenshotImage}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
    </main>
  );
}