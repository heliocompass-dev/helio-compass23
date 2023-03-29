import styles from './useContent.module.scss'
import Image from 'next/image'
import { useEffect } from 'react'

export default function UseContent({number, titleJp,style, titleEn, src, src2, objectFit, disc, secondImg}){
    
    useEffect(() => {
      secondImg === null && secondImg === false
    }, [secondImg])
    
    return(
        <div className={styles.content}>
        <div className={styles.title}>
            <h2><soan className={styles.number}>{number}</soan>{titleJp}<soan className={styles.titleEn}>{titleEn}</soan></h2>
          </div>
            {secondImg ?
            <div className={styles.imgContainer}>
                <div>
                    <Image src={src} width={window.innerWidth > 626 ? 526 : window.innerWidth - 100} height={window.innerWidth > 626 ? 743 : (window.innerWidth - 100) * 1.41} style={{objectFit: 'contain'}} alt='how to use image' />
                </div>
                <div>
                <Image src={src2} width={window.innerWidth > 626 ? 526 : window.innerWidth - 100} height={window.innerWidth > 626 ? 743 : (window.innerWidth - 100) * 1.41} style={{objectFit: 'contain'}} alt='how to use image' />
                </div>
            </div> :
            <div className={styles.img}>
                <Image src={src} fill style={{objectFit: 'cover'}} alt='how to use image' />
            </div>
            }
         <div className={styles.disc}>
             <p>{disc}</p>
         </div>
        </div>
    )
}