import { motion as m, AnimatePresence } from "framer-motion";
import styles from './popup.module.scss'
import Image from "next/image";
import { useState, useEffect } from "react";

const Popup = ({ imageSrc, onClose, popupImgSize }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
      };
      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      }
    }, []);
   
    const popupPosition = {
      left: mousePosition.x - (popupImgSize.width / 5),
      top: mousePosition.y + 50,
      // left: 0,
      // bottom: 40,
    };
  
    const handleImgSize = 0.4
    
    return (
      <AnimatePresence>
        <m.div
          className={`${styles.container} active`}
          width={popupImgSize.width * handleImgSize }
          height={popupImgSize.height * handleImgSize }
          style={popupPosition}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <m.div className={styles.img}>
            <Image
              src={imageSrc}
              width={popupImgSize.width* handleImgSize}
              height={popupImgSize.height* handleImgSize}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              alt={'hover image'}
            />
          </m.div>
        </m.div>
      </AnimatePresence>
    );
  };
  


export default Popup;
