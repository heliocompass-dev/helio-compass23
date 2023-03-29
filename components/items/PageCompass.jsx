import Image from "next/image";
import styles from './pageCompass.module.scss'

export default function PageCompass(props){

    return(
        <div className={styles.container} style={props.style} >
            <Image className={styles.img} src={props.src} loading='eager' fill style={{objectFit: 'contain'}} quality={75} alt="compass image" />
        </div>
    )
}