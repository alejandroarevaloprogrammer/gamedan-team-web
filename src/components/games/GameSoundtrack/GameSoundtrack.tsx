import type { GameSoundtrack as GameSoundtrackData } from "@/types/game";

import { ExternalMedia } from "@/components/cookies/ExternalMedia/ExternalMedia";

import styles from "./GameSoundtrack.module.css";

type GameSoundtrackProps = {
  gameTitle: string;
  soundtrack: GameSoundtrackData;
};

export function GameSoundtrack({
  gameTitle,
  soundtrack,
}: GameSoundtrackProps) {
  const provider = soundtrack.embedUrl.includes("soundcloud.com")
    ? "SoundCloud"
    : "Bandcamp";

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
        <ExternalMedia provider={provider}>
          <iframe
            src={soundtrack.embedUrl}
            title={`${gameTitle} ${soundtrack.title}`}
            width="100%"
            height={soundtrack.height ?? 180}
            loading="lazy"
            allow="autoplay"
            className={styles.iframe}
          />
        </ExternalMedia>
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