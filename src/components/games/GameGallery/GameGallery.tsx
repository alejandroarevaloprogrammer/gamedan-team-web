"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./GameGallery.module.css";

type GameGalleryProps = {
  gameTitle: string;
  screenshots: string[];
};

export function GameGallery({
  gameTitle,
  screenshots,
}: GameGalleryProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const isOpen = selectedIndex !== null;

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrevious() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (
        currentIndex - 1 + screenshots.length
      ) % screenshots.length;
    });
  }

  function showNext() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex + 1) % screenshots.length;
    });
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          return (
            currentIndex - 1 + screenshots.length
          ) % screenshots.length;
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          return (
            currentIndex + 1
          ) % screenshots.length;
        });
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen, screenshots.length]);

  if (screenshots.length === 0) {
    return null;
  }

  return (
    <>
      <section
        className={styles.section}
        aria-labelledby="screenshots-title"
      >
        <div className={styles.header}>
          <p className="eyebrow">Gallery</p>

          <h2 id="screenshots-title">
            Screenshots
          </h2>

          <p>
            A closer look at the world, characters
            and gameplay of {gameTitle}.
          </p>
        </div>

        <div className={styles.grid}>
          {screenshots.map(
            (screenshot, index) => (
              <button
                type="button"
                className={styles.thumbnail}
                key={screenshot}
                onClick={() =>
                  setSelectedIndex(index)
                }
                aria-label={`Open ${gameTitle} screenshot ${
                  index + 1
                } of ${screenshots.length}`}
              >
                <span
                  className={
                    styles.thumbnailFrame
                  }
                >
                  <Image
                    src={screenshot}
                    alt={`${gameTitle} screenshot ${
                      index + 1
                    }`}
                    fill
                    unoptimized={screenshot
                      .toLowerCase()
                      .endsWith(".gif")}
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className={
                      styles.thumbnailImage
                    }
                  />
                </span>

                <span
                  className={
                    styles.thumbnailNumber
                  }
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )}
                </span>
              </button>
            ),
          )}
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${gameTitle} screenshot viewer`}
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeLightbox();
            }
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={closeLightbox}
            aria-label="Close screenshot viewer"
          >
            <span aria-hidden="true">×</span>
          </button>

          {screenshots.length > 1 && (
            <button
              type="button"
              className={`${styles.navigationButton} ${styles.previousButton}`}
              onClick={showPrevious}
              aria-label="Show previous screenshot"
            >
              <span aria-hidden="true">←</span>
            </button>
          )}

          <div className={styles.lightboxContent}>
            <div className={styles.imageFrame}>
              <Image
                src={screenshots[selectedIndex]}
                alt={`${gameTitle} screenshot ${
                  selectedIndex + 1
                } of ${screenshots.length}`}
                fill
                priority
                unoptimized={screenshots[
                  selectedIndex
                ]
                  .toLowerCase()
                  .endsWith(".gif")}
                sizes="100vw"
                className={styles.lightboxImage}
              />
            </div>

            <p
              className={styles.counter}
              aria-live="polite"
            >
              {selectedIndex + 1} /{" "}
              {screenshots.length}
            </p>
          </div>

          {screenshots.length > 1 && (
            <button
              type="button"
              className={`${styles.navigationButton} ${styles.nextButton}`}
              onClick={showNext}
              aria-label="Show next screenshot"
            >
              <span aria-hidden="true">→</span>
            </button>
          )}
        </div>
      )}
    </>
  );
}