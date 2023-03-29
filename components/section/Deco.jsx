import styles from './deco.module.scss'
import Image from 'next/image'
import {motion as m} from 'framer-motion'

export default function Deco(){

    const variants = {
        visible: { 
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.2,
            }
        },
        hidden: { opacity: 1
    },
      }
      const item = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5
            }
        },
        hidden: {
            opacity: 0,
            scale: 0.9,
        }
      }
  

    return(
        <m.section variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={styles.container}>

           <div className={styles.leftCenterContainer}>
             <div className={styles.lcTopContainer}>
                <m.div variants={item} className={styles.topLeft}>
                    <Image fill src={'/home/deco-top-left.jpg'} alt={'decoration image'} />
                </m.div>
                <m.div variants={item} className={styles.topCenter}>
                    <Image fill src={'/home/deco-top-center.jpg'} alt={'decoration image'} />
                </m.div>
             </div>
             <div className={styles.lcBottomContainer}>
                <m.div variants={item} className={styles.bottomLeft}>
                    <Image fill src={'/home/deco-bottom-left.jpg'} alt={'decoration image'} />
                </m.div>
                <m.div variants={item} className={styles.bottomCenter}>
                    <Image fill src={'/home/deco-bottom-center.jpg'} alt={'decoration image'} />
                </m.div>
             </div>
           </div>

           <div className={styles.rightContainer}>
              <m.div variants={item} className={styles.topRight}>
                    <Image fill src={'/home/deco-top-right.jpg'} alt={'decoration image'} />
                </m.div>
              <m.div variants={item} className={styles.bottomRight}>
                    <Image fill src={'/home/deco-bottom-right.jpg'} alt={'decoration image'} />
                </m.div>
           </div>
    </m.section>
    )
}