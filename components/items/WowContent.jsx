import styles from './wowContent.module.scss'
import Image from 'next/image'

export default function WowContent(props){

    return(

        <div className={styles.container}>
            <div className={styles.img} style={props.style}>
                <Image src={props.src} layout='fill' objectFit='contain' alt='object image' />
            </div>
            <div className={styles.text}>
            <h4><span className={styles.number}>{props.number}</span>{props.titleJp}<span className={styles.titleEn}>{props.titleEn}</span></h4>
            <p>{props.disc}</p>
            </div>
        </div>

    )
}