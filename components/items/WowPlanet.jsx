import styles from './wowPlanet.module.scss'
import Image from 'next/image'

export default function WowPlanet({styleSize, number, titleJp, titleEn, srcImg, disc}){

    return(
        <div className={styles.container}>
            <div className={styles.visible}>
                 <div className={styles.planetIcon} style={styleSize}>
                    <span className={styles.planetCircle}></span>
                    {/* <Image src={srcIcon} layout="fill" objectFit='contain' alt='planet icon'/> */}
                </div>    
                <div className={styles.title}>
                   <h4> <span className={styles.number}>{number}</span>{titleJp}<span className={styles.titleEn}>{titleEn}</span></h4>
                </div>
            </div>
            <div className={styles.hover}>
            <div className={styles.hoverImg}>
                 <Image src={srcImg} fill style={{objectFit: 'contain'}} loading='lazy' alt='planet image' />
            </div> 
            <div className={styles.hoverText}>
                 <h3> <span className={styles.number}>{number}</span>{titleJp}<span className={styles.titleEn}>{titleEn}</span></h3>
                <p>{disc}</p>
            </div>   
            </div>
        </div>

    )
}