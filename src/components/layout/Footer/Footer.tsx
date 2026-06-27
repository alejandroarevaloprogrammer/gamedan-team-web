import { brand } from "@/config/brand";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 {brand.name} · {brand.tagline}</p>
    </footer>
  );
}
