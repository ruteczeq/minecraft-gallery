import Link from "next/link";
import styles from "../styles/index.module.css";

export default function HomePage() {
  return (
    <div className={styles.fullscreen}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Co chcesz dzisiaj wylosowac?</h1>
        <div className={styles.buttonRow}>
          <Link href="/items" className={styles.choiceButton}>
            <span>Itemy</span>
          </Link>
          <Link href="/blocks" className={styles.choiceButton}>
            <span>Bloki</span>
          </Link>
          <Link href="/crafting" className={styles.choiceButton}>
            <span>Craftingi</span>
          </Link>
        </div>
        <p className={styles.subtitle}>
          Wybierz kategorie i sprawdz, co tym razem wypadnie z losowania!
        </p>
      </div>
    </div>
  );
}
