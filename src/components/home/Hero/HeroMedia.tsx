import styles from "./Hero.module.css";

export function HeroMedia() {
  return (
    <div className={styles.right}>
      <div className={styles.trailer}>
        <button className={styles.playButton} aria-label="Play trailer">
          <span>▶</span>
        </button>

        <span className={styles.trailerLabel}>Featured Trailer</span>
      </div>
    </div>
  );
}