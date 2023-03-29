import styles from './imgExpandPopup.module.scss'
import {motion as m, AnimatePresence} from 'framer-motion'
import Image from 'next/image';

export default function ImgExpandPopup({imgSrc, onClose, }) {
    
    //高さ 90vhにして、縦横比を
    const height = window.innerHeight * 0.9
    const verticalImgWidth = height * 0.71

    return (
        <AnimatePresence>
        <m.div
          className={styles.container}
          width={verticalImgWidth}
          height={height}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}>

            <m.div className={styles.img}>
                <Image
                src={imgSrc}
                width={verticalImgWidth}
                height={height}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                alt={'tap image'}
                />
            </m.div>
        </m.div>
      </AnimatePresence>
    );
}