import dayjs from 'dayjs';
import styles from './convertDate.module.scss'


export default function ConvertDate({ convertDate,children}) {
  const year = dayjs(convertDate).format(`YYYY`);
  const monthDate = dayjs(convertDate).format('MM/DD')
  

  return (
    <time dateTime={convertDate} className={styles.container} >
      {year}<span className={styles.monthDate}>{monthDate}{children}</span>
    </time>
  );
}