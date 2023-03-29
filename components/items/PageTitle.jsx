import styles from './pageTitle.module.scss'
import { motion } from 'framer-motion'

export default function PageTitle(props){

    return(
        <div className={styles.container}>
        <div className={styles.title}>
            <motion.h1 style={props.style}  initial={{opacity: 0, x: -15,}} animate={{opacity: 1, x: 0, transition: {duration: 0.7, delay: 0.5}, ease: 'easeIn'}}>{props.titleEn}</motion.h1>
            <motion.span style={props.styleBorder}  initial={{scaleX: 0, x: -20,}} animate={{scaleX: 1, x: 0, transition: {duration: 0.7, delay: 0.2}, ease: 'easeIn'}}></motion.span>
            <motion.h2 style={props.style} initial={{opacity: 0, x: -15,}} animate={{opacity: 1, x: 0, transition: {duration: 0.7, delay: 0.5}, ease: 'easeIn'}}>{props.titleJp}</motion.h2>
        </div>
        <motion.div style={props.styleBorder} className={styles.border} initial={{scaleY: 0,}} animate={{scaleY: 1,  transition: {duration: 1, delay: 0.1}, ease: 'easeIn'}}></motion.div>
        <div className={styles.desc}>
            {/* <motion.h3 style={props.style} initial={{opacity: 0, x: -15,}} animate={{opacity: 1, x: 0, transition: {duration: 0.7, delay: 0.3}, ease: 'easeIn'}}>{props.descTitle}</motion.h3> */}
            <motion.p style={props.style} initial={{opacity: 0, x: -15,}} animate={{opacity: 1, x: 0, transition: {duration: 0.7, delay: 0.6}, ease: 'easeIn'}}>{props.desc}</motion.p>
        </div>
        </div>

    )

}