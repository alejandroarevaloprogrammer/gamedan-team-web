"use client";

import { useEffect, useState } from "react";

import styles from "./CookieConsent.module.css";

type ConsentStatus = "pending" | "accepted" | "rejected";

const STORAGE_KEY = "gamedan-cookie-consent";

function getInitialConsent(): ConsentStatus {
  if (typeof window === "undefined") {
    return "pending";
  }

  const storedConsent = localStorage.getItem(STORAGE_KEY);

  if (storedConsent === "accepted" || storedConsent === "rejected") {
    return storedConsent;
  }

  return "pending";
}

export function CookieConsent() {
  const [consent, setConsent] =
    useState<ConsentStatus>(getInitialConsent);

  useEffect(() => {
    function handleConsentChange(event: Event) {
      const customEvent = event as CustomEvent<ConsentStatus>;

      setConsent(customEvent.detail);
    }

    window.addEventListener(
      "gamedan-consent-change",
      handleConsentChange,
    );

    return () => {
      window.removeEventListener(
        "gamedan-consent-change",
        handleConsentChange,
      );
    };
  }, []);

  function saveConsent(
    value: Exclude<ConsentStatus, "pending">,
  ) {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);

    window.dispatchEvent(
      new CustomEvent("gamedan-consent-change", {
        detail: value,
      }),
    );
  }

  if (consent !== "pending") {
    return null;
  }

  return (
    <aside
      className={styles.banner}
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Cookies & external media</h2>

          <p>
            We use external media from services such as YouTube,
            SoundCloud and Bandcamp. These services may use cookies
            or similar technologies when their content is loaded.
          </p>

          <p>
            You can accept or reject external media. You can change
            your choice later from Cookie settings.
          </p>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.button}
            onClick={() => saveConsent("rejected")}
          >
            Reject
          </button>

          <button
            type="button"
            className={styles.button}
            onClick={() => saveConsent("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}