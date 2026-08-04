import type { GameTrailer as GameTrailerData } from "@/types/game";
import styles from "./GameTrailer.module.css";

type GameTrailerProps = {
  gameTitle: string;
  trailer: GameTrailerData;
};

export function GameTrailer({
  gameTitle,
  trailer,
}: GameTrailerProps) {
  return (
    <section
      id="trailer"
      className={styles.section}
      aria-labelledby="game-trailer-title"
    >
      <div className={styles.header}>
        <p className="eyebrow">Official Trailer</p>

        <h2 id="game-trailer-title">
          Watch {gameTitle}
        </h2>

        <p>
          Discover the world, characters and gameplay of {gameTitle}.
        </p>
      </div>

      <div className={styles.player}>
        {trailer.type === "youtube" ? (
          <iframe
            src={trailer.embedUrl}
            title={`${gameTitle} official trailer`}
            className={styles.iframe}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <video
            className={styles.video}
            controls
            preload="metadata"
            poster={trailer.thumbnail}
          >
            <source src={trailer.url} type="video/mp4" />

            Your browser does not support HTML5 video.
          </video>
        )}
      </div>
    </section>
  );
}