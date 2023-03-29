import styles from './readContent.module.scss'
import Image from 'next/image'

export default function ReadContent({src, title,disc}){

    return(
        <div className={styles.container}>
        <div className={styles.img}>
            <Image src={src} fill style={{objectFit: 'contain'}}  alt="content image" />     
        </div>
        <div className={styles.text}>
            <h3>{title}</h3>
            <p>{disc}</p>
        </div>
        </div>

    )
}