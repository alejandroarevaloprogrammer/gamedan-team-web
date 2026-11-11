
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./GameDownloadModal.module.css";

type GameDownloadModalProps = {
  gameTitle: string;
  windowsX64Url?: string;
  windowsArm64Url?: string;
  triggerClassName: string;
};

export function GameDownloadModal({
  gameTitle,
  windowsX64Url,
  windowsArm64Url,
  triggerClassName,
}: GameDownloadModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "Tab") {
        const focusableElements =
          modalRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href]'
          );

        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement =
          focusableElements[focusableElements.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === firstElement
        ) {
          event.preventDefault();
          lastElement.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        Download for free
      </button>

      {isOpen &&
        createPortal(
          <div
            className={styles.backdrop}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <section
              ref={modalRef}
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="download-modal-title"
              aria-describedby="download-modal-description"
            >
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close download window"
              >
                ×
              </button>

              <p className={styles.eyebrow}>
                GAMEDAN TEAM
              </p>

              <h2 id="download-modal-title">
                Download {gameTitle}
              </h2>

              <p
                id="download-modal-description"
                className={styles.description}
              >
                Choose your Windows version to download the game
                for free.
              </p>

              <div className={styles.downloadOptions}>
                {windowsX64Url && (
                  <div className={styles.downloadOption}>
                    <div className={styles.optionHeader}>
                      <h3>Windows 64-bit (x64)</h3>

                      <span className={styles.recommended}>
                        Recommended
                      </span>
                    </div>

                    <p>
                      For most Windows computers with Intel or AMD
                      processors.
                    </p>

                    <a
                      href={windowsX64Url}
                      download
                      className={styles.downloadButton}
                    >
                      Download ZIP
                    </a>
                  </div>
                )}

                {windowsArm64Url && (
                  <div className={styles.downloadOption}>
                    <div className={styles.optionHeader}>
                      <h3>Windows ARM64</h3>
                    </div>

                    <p>
                      For Windows computers with ARM-based
                      processors.
                    </p>

                    <a
                      href={windowsArm64Url}
                      download
                      className={styles.downloadButton}
                    >
                      Download ZIP
                    </a>
                  </div>
                )}
              </div>

              <p className={styles.footerNote}>
                Free download · ZIP archive
              </p>
            </section>
          </div>,
          document.body
        )}
    </>
  );
}
