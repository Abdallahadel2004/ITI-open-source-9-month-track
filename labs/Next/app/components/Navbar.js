import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        E-commerce Store
      </div>
      <div className={styles.links}>
        <Link href="/products" className={styles.link}>Products</Link>
        <Link href="/login" className={styles.link}>Login</Link>
        <Link href="/register" className={styles.authBtn}>Register</Link>
      </div>
    </nav>
  );
}
