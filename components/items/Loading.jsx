import styles from './loading.module.scss'
import { CircleLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className={styles.container}>
            <CircleLoader color={"#2d2d2d"} />
        </div>
    );
}