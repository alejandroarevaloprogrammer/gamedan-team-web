"use client";

import { useRef } from "react";

import styles from "./PlayGame.module.css";

type PlayGamePlayerProps = {
  gameTitle: string;
  gameSource: string;
};

export function PlayGamePlayer({
  gameTitle,
  gameSource,
}: PlayGamePlayerProps) {
  const fullscreenContainerRef =
    useRef<HTMLDivElement>(null);

  async function openFullscreen() {
    const container = fullscreenContainerRef.current;

    if (!container) {
      return;
    }

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }

      await container.requestFullscreen();
    } catch (error) {
      console.error(
        "Fullscreen mode could not be opened:",
        error,
      );
    }
  }

  return (
    <section
      className={styles.playerSection}
      aria-label={`${gameTitle} game player`}
    >
      <div className={styles.playerToolbar}>
        <p className={styles.notice}>
          Click inside the game before using the keyboard.
        </p>

        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={openFullscreen}
        >
          Open fullscreen
        </button>
      </div>

      <div
        ref={fullscreenContainerRef}
        className={styles.fullscreenContainer}
      >
        <div className={styles.playerFrame}>
          <iframe
            src={gameSource}
            title={`Play ${gameTitle}`}
            className={styles.iframe}
            allow="fullscreen; autoplay"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}