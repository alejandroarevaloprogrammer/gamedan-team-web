"use client";

import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "gamedan-cookie-consent";

export function CookieSettingsButton() {
  function openCookieSettings() {
    localStorage.removeItem(STORAGE_KEY);

    window.dispatchEvent(
      new CustomEvent("gamedan-consent-change", {
        detail: "pending",
      }),
    );
  }

  return (
    <button
      type="button"
      className={styles.settingsButton}
      onClick={openCookieSettings}
    >
      Cookie settings
    </button>
  );
}