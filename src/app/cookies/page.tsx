import type { Metadata } from "next";
import Link from "next/link";

import { brand } from "@/config/brand";

import styles from "./CookiesPage.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn how GameDan Team uses external media and manages consent for services such as YouTube, SoundCloud and Bandcamp.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy",
    description:
      "Learn how GameDan Team uses external media and manages consent for services such as YouTube, SoundCloud and Bandcamp.",
    url: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className={styles.main}>
      <section
        className={styles.hero}
        aria-labelledby="cookies-title"
      >
        <p className="eyebrow">Legal</p>

        <h1 id="cookies-title">Cookie Policy</h1>

        <p className={styles.heroText}>
          This page explains how {brand.name} uses cookies and similar
          technologies in connection with external media.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Overview</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>How external media works on this website</h2>

          <p>
            Some pages on this website include media provided by third-party
            services such as YouTube, SoundCloud and Bandcamp.
          </p>

          <p>
            These services may use cookies or similar technologies and may
            receive information about your device or browser when their
            content is loaded.
          </p>

          <p>
            For this reason, external media is blocked by default until you
            choose to accept it.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Consent</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Your choice</h2>

          <p>
            When you first visit the website, you can choose whether to accept
            or reject external media.
          </p>

          <p>
            If you reject it, embedded content from supported third-party
            services remains blocked.
          </p>

          <p>
            If you accept it, those embedded players may be loaded and the
            corresponding third-party service may use cookies or similar
            technologies according to its own policies.
          </p>

          <p>
            Your choice is stored locally in your browser so that the website
            can remember your preference.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Services</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>External media providers</h2>

          <div className={styles.providerList}>
            <article className={styles.provider}>
              <h3>YouTube</h3>

              <p>
                Used to display official game trailers and other video
                content.
              </p>
            </article>

            <article className={styles.provider}>
              <h3>SoundCloud</h3>

              <p>
                Used to display embedded soundtrack players for selected
                games.
              </p>
            </article>

            <article className={styles.provider}>
              <h3>Bandcamp</h3>

              <p>
                Used to display embedded soundtrack players for selected
                games.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Settings</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Changing your preference</h2>

          <p>
            You can change your external media preference at any time by
            selecting <strong>Cookie settings</strong> in the website footer.
          </p>

          <p>
            Rejecting external media prevents supported embedded players from
            being loaded until you accept them again.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Third Parties</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Third-party policies</h2>

          <p>
            Third-party providers are responsible for their own cookies,
            technologies and data processing practices.
          </p>

          <p>
            You can review their privacy and cookie information directly on
            their respective websites.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Contact</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Questions about this policy</h2>

          <p>
            If you have questions about this Cookie Policy, you can contact us
            through our contact page.
          </p>

          <Link href="/contact" className="button">
            Contact GameDan Team
          </Link>
        </div>
      </section>
    </main>
  );
}