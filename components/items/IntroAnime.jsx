import styles from './introAnime.module.scss'
import {AnimatePresence, motion as m} from 'framer-motion'

export default function IntroAnime() {
    const container = {
        hidden: { opacity:1},
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.5
          }
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 1
          }
        }
      };

      const item = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1
        },
      
      };

    return (
            <AnimatePresence>
            <m.div variants={container} initial={'hidden'} animate={'visible'} exit={'exit'} className={styles.container}>
                <m.p variants={item} transition={{duration: 2}} className={styles.jp}>太陽系空間地図 <span>地球暦</span></m.p>
                <m.p variants={item} transition={{duration: 2, delay: 0.5}} className={styles.en}>helio compass</m.p>
            </m.div>
            </AnimatePresence>
    );
}