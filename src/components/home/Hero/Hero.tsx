import { HeroContent } from "./HeroContent";
import { HeroMedia } from "./HeroMedia";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <HeroContent />
      <HeroMedia />
    </section>
  );
}
