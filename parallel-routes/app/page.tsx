import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Home</p>
      <Link href="/shop">
        <button>Ir para SHOP</button>
      </Link>
    </div>
  );
}
