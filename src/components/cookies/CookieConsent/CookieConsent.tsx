"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./CookieConsent.module.css";

type ConsentStatus = "pending" | "accepted" | "rejected";

const STORAGE_KEY = "gamedan-cookie-consent";
const CONSENT_EVENT = "gamedan-consent-change";

export function CookieConsent() {
  const [consent, setConsent] =
    useState<ConsentStatus | null>(null);

  useEffect(() => {
    function handleConsentChange(event: Event) {
      const customEvent = event as CustomEvent<ConsentStatus>;
      setConsent(customEvent.detail);
    }

    window.addEventListener(
      CONSENT_EVENT,
      handleConsentChange,
    );

    const storedConsent = localStorage.getItem(STORAGE_KEY);

    const initialConsent: ConsentStatus =
      storedConsent === "accepted" || storedConsent === "rejected"
        ? storedConsent
        : "pending";

    const timeoutId = window.setTimeout(() => {
      setConsent(initialConsent);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);

      window.removeEventListener(
        CONSENT_EVENT,
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
      new CustomEvent(CONSENT_EVENT, {
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
            your choice later from Cookie settings. See our{" "}
            <Link href="/cookies">Cookie Policy</Link> for more
            information.
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