import styles from "./BackgroundFX.module.css";

export function BackgroundFX() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.stars} />
      <div className={styles.glowPink} />
      <div className={styles.glowPurple} />
      <div className={styles.glowCyan} />
      <div className={styles.grid} />
    </div>
  );
}
