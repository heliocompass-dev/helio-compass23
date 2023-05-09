import styles from './download.module.scss'
import Image from 'next/image';

export default function Download() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image fill src={'/download/worksheet-thumbnail.jpg'} alt={'thumnail image'} />
            </div>
            <a className={styles.btn} href="/download/worksheet.pdf" download>Download PDF</a>
        </div>
    );
}