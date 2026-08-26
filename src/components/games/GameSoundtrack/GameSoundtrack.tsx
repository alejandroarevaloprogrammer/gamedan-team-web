import type { GameSoundtrack as GameSoundtrackData } from "@/types/game";

import styles from "./GameSoundtrack.module.css";

type GameSoundtrackProps = {
  gameTitle: string;
  soundtrack: GameSoundtrackData;
};

export function GameSoundtrack({
  gameTitle,
  soundtrack,
}: GameSoundtrackProps) {
  return (
    <section
      className={styles.section}
      aria-labelledby="game-soundtrack-title"
    >
      <div className={styles.header}>
        <p className="eyebrow">Soundtrack</p>

        <h2 id="game-soundtrack-title">
          {soundtrack.title}
        </h2>

        <p>
          Original music created for <strong>{gameTitle}</strong>.
        </p>
      </div>

      <div className={styles.player}>
        <iframe
          src={soundtrack.embedUrl}
          title={`${gameTitle} ${soundtrack.title}`}
          width="100%"
          height={soundtrack.height ?? 180}
          loading="lazy"
          allow="autoplay"
          className={styles.iframe}
        />
      </div>

      {soundtrack.externalUrl && (
        <a
          href={soundtrack.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          {soundtrack.externalLabel ?? "Listen to the soundtrack"}
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </section>
  );
}