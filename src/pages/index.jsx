import Link from "next/link";
import styles from "../styles/index.module.css";

export default function HomePage() {
  return (
    <div className={styles.fullscreen}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>What would you like to draw today?</h1>
        <div className={styles.buttonRow}>
          <Link href="/items" className={styles.choiceButton}>
            <span>Items</span>
          </Link>
          <Link href="/blocks" className={styles.choiceButton}>
            <span>Blocks</span>
          </Link>
          <Link href="/crafting" className={styles.choiceButton}>
            <span>Craftings</span>
          </Link>
        </div>
        <p className={styles.subtitle}>
          Pick a category and find out what you get this time!
        </p>
      </div>
    </div>
  );
}
