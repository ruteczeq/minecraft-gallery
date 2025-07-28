import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Minecraft Randomizer</Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/items" className={styles.link}>Itemy</Link>
        </li>
        <li>
          <Link href="/blocks" className={styles.link}>Bloki</Link>
        </li>
        <li>
          <Link href="/crafting" className={styles.link}>Craftingi</Link>
        </li>
      </ul>
    </nav>
  );
}
