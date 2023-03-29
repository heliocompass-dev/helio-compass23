import Link from 'next/link';
import styles from './pagination.module.scss'

export default function Pagination({ totalCount, perPage }){

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className={styles.numbers}>
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
        <li key={index}>
          <Link href={ `/news/page/${number}`}>
            {number}
          </Link>
        </li>
      ))} 
    </ul>
  );
};