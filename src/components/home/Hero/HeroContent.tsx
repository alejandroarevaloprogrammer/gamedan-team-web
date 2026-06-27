import Link from "next/link";
import { hero } from "@/data/hero";
import styles from "./Hero.module.css";

export function HeroContent() {
  return (
    <div className={styles.left}>
      <p className="eyebrow">{hero.eyebrow}</p>

      <h1>
        {hero.title.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </h1>

      <p className={styles.description}>
        {hero.description}
      </p>

      <div className={styles.actions}>
        <Link
          href={hero.primaryButton.href}
          className="button"
        >
          {hero.primaryButton.text}
        </Link>

        <button className={styles.secondaryButton}>
          {hero.secondaryButton.text}
        </button>
      </div>
    </div>
  );
}