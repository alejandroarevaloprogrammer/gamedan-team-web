import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { brand } from "@/config/brand";
import { getAllGames, getGameBySlug } from "@/lib/games";

import { PlayGamePlayer } from "./PlayGamePlayer";

import styles from "./PlayGame.module.css";

type PlayPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllGames()
    .filter(
      (game) =>
        game.distribution.internalPlayUrl &&
        game.media.html5Entry,
    )
    .map((game) => ({
      slug: game.slug,
    }));
}

export async function generateMetadata({
  params,
}: PlayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (
    !game?.distribution.internalPlayUrl ||
    !game.media.html5Entry
  ) {
    return {
      title: `Game not found | ${brand.name}`,
    };
  }

  return {
    title: `Play ${game.title} | ${brand.name}`,
    description: `Play ${game.title} directly on the official GameDan Team website.`,
  };
}

export default async function PlayPage({
  params,
}: PlayPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (
    !game?.distribution.internalPlayUrl ||
    !game.media.html5Entry
  ) {
    notFound();
  }

  const gameSource = game.media.html5Entry;

  return (
    <main className={styles.main}>
      <section
        className={styles.header}
        aria-labelledby="play-game-title"
      >
        <div>
          <p className="eyebrow">Play Online</p>

          <h1 id="play-game-title">
            {game.title}
          </h1>

          <p>{game.shortDescription}</p>
        </div>

        <div className={styles.actions}>
          <Link
            href={`/games/${game.slug}`}
            className={styles.secondaryAction}
          >
            Game details
          </Link>
        </div>
      </section>

      <PlayGamePlayer
        gameTitle={game.title}
        gameSource={gameSource}
      />
    </main>
  );
}