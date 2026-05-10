'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Pagination.module.css';

export default function Pagination({ totalPages, currentPage }) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page) => {
    router.push(`${pathname}?page=${page}`);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <span className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={styles.button}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
}
