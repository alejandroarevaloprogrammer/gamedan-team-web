"use client";

import { useEffect, useState } from "react";

import styles from "./ExternalMedia.module.css";

type ConsentStatus = "pending" | "accepted" | "rejected";

type ExternalMediaProps = {
  provider: string;
  children: React.ReactNode;
};

const STORAGE_KEY = "gamedan-cookie-consent";

export function ExternalMedia({
  provider,
  children,
}: ExternalMediaProps) {
  const [consent, setConsent] = useState<ConsentStatus>("pending");

  useEffect(() => {
    function readConsent() {
      const storedConsent = localStorage.getItem(STORAGE_KEY);

      if (storedConsent === "accepted" || storedConsent === "rejected") {
        setConsent(storedConsent);
      } else {
        setConsent("pending");
      }
    }

    function handleConsentChange(event: Event) {
      const customEvent = event as CustomEvent<
        "accepted" | "rejected"
      >;

      setConsent(customEvent.detail);
    }

    readConsent();

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

  if (consent === "accepted") {
    return <>{children}</>;
  }

  return (
    <div className={styles.placeholder}>
      <p className={styles.title}>External media blocked</p>

      <p className={styles.text}>
        This content is provided by {provider}. Accept external media
        cookies to view it.
      </p>
    </div>
  );
}