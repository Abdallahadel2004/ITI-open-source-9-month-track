import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.thumbnail} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
        <Link href={`/products/${product.id}`} className={styles.link}>
          View Details
        </Link>
      </div>
    </div>
  );
}
