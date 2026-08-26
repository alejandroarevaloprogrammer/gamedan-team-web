import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { brand } from "@/config/brand";

import styles from "./AboutPage.module.css";

export const metadata: Metadata = {
  title: `About | ${brand.name}`,
  description:
    "Learn about GameDan Team, an independent game development studio creating retro and anime-inspired experiences.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* HERO */}

      <section
        className={styles.hero}
        aria-labelledby="about-title"
      >
        <p className="eyebrow">About GameDan Team</p>

        <h1 id="about-title">
          We create games we would love to play ourselves.
        </h1>

        <p className={styles.heroText}>
          GameDan Team is an independent game development studio
          creating retro and anime-inspired experiences with
          personality, memorable characters and worlds worth
          discovering.
        </p>
      </section>

      <section
        className={styles.brandMark}
        aria-label="GameDan Team logo"
      >
        <div className={styles.logoGlow}>
          <Image
            src={brand.assets.emblem}
            alt="GameDan Team"
            width={420}
            height={420}
            sizes="(max-width: 700px) 220px, 320px"
            className={styles.logoImage}
          />
        </div>
      </section>

      {/* WHO WE ARE */}

      <section
        className={styles.section}
        aria-labelledby="who-we-are-title"
      >
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Who We Are</p>
        </div>

        <div className={styles.sectionContent}>
          <h2 id="who-we-are-title">
            Games made with passion and purpose.
          </h2>

          <p>
            We are a small independent team brought together by a
            shared passion for games, storytelling and memorable
            characters.
          </p>

          <p>
            We want every project to feel like something we genuinely
            wanted to create, rather than something designed simply
            to follow what is popular.
          </p>
        </div>
      </section>

      {/* WHAT WE CREATE */}

      <section
        className={styles.section}
        aria-labelledby="what-we-create-title"
      >
        <div className={styles.sectionLabel}>
          <p className="eyebrow">What We Create</p>
        </div>

        <div className={styles.sectionContent}>
          <h2 id="what-we-create-title">
            Different genres. One identity.
          </h2>

          <p>
            We enjoy exploring different kinds of games while
            maintaining the personality and spirit that define
            GameDan Team.
          </p>

          <div
            className={styles.genreList}
            aria-label="Types of games we create"
          >
            <span>Visual Novels</span>
            <span>Retro Games</span>
            <span>Casual Games</span>
            <span>Action Games</span>
            <span>Puzzle Games</span>
            <span>Story-driven Experiences</span>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section
        className={styles.valuesSection}
        aria-labelledby="values-title"
      >
        <div className={styles.valuesHeader}>
          <p className="eyebrow">Our Values</p>

          <h2 id="values-title">
            What matters when we make a game.
          </h2>
        </div>

        <div className={styles.values}>
          <article className={styles.value}>
            <span className={styles.valueNumber}>01</span>

            <h3>Gameplay</h3>

            <p>
              Games should be fun, rewarding and enjoyable to play.
              Every mechanic should have a reason to exist.
            </p>
          </article>

          <article className={styles.value}>
            <span className={styles.valueNumber}>02</span>

            <h3>Emotion</h3>

            <p>
              We want our games to create moments of happiness,
              hope, surprise and emotion that players can remember.
            </p>
          </article>

          <article className={styles.value}>
            <span className={styles.valueNumber}>03</span>

            <h3>Personality</h3>

            <p>
              Every project should have its own identity, atmosphere
              and characters that players can become attached to.
            </p>
          </article>
        </div>
      </section>

      {/* BELIEFS */}

      <section
        className={styles.beliefsSection}
        aria-labelledby="beliefs-title"
      >
        <div className={styles.sectionLabel}>
          <p className="eyebrow">What We Believe</p>
        </div>

        <div className={styles.beliefs}>
          <h2 id="beliefs-title">
            We want every game to have a reason to exist.
          </h2>

          <div className={styles.statements}>
            <p>We don&apos;t chase trends.</p>

            <p>We don&apos;t build pay-to-win experiences.</p>

            <p>We don&apos;t copy other studios.</p>

            <p>We don&apos;t release unfinished games.</p>

            <p className={styles.highlightStatement}>
              We create games with personality and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        className={styles.cta}
        aria-labelledby="about-cta-title"
      >
        <p className="eyebrow">Our Games</p>

        <h2 id="about-cta-title">
          Discover the worlds we are building.
        </h2>

        <p>
          From stories and characters to retro challenges, explore
          the games that define GameDan Team.
        </p>

        <Link
          href="/games"
          className="button"
        >
          Explore Our Games
        </Link>
      </section>
    </main>
  );
}