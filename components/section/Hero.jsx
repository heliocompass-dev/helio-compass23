import Image from 'next/image';
import styles from './hero.module.scss'
import { useState, useEffect } from 'react';
import {motion as m, AnimatePresence,  useTransform, useViewportScroll} from 'framer-motion'

const images = ["/home/hero1.jpg", "/home/hero2.jpg", "/home/hero3.jpg", "/home/hero4.jpg"];
export default function Hero() {

    const [spView, setSpView] = useState()
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          if (prevIndex === images.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 6500);
  
      return () => clearInterval(interval);
    }, []);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const posX = (x / width - 0.5) * 4;
      const posY = (y / height - 0.5) * 1.75;
      setMousePosition({ x: posX, y: posY });
    };

    const { scrollX } = useViewportScroll();
    const height = useTransform(scrollX, [0, scrollY.max], ['100%', '110%']);


    const variants = {
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            }
        },
        hidden: { opacity: 0,
    },
      }
      const textItem = {
        visible: {
            opacity: 1,
  
            transition: {
                duration: 2,
                delay: 1,
            }
        },
        hidden: {
            opacity: 0,
           
        }
      }
      const copy = {
        visible: {
            opacity: 1,
            transition: {
                duration: 2.5,
            }
        },
        hidden: {
            opacity: 0,
            x: -5,
        }
      }

    useEffect(() => {
        window.innerWidth > 600 ? setSpView(true) : setSpView(false)
    },[])

    return (
        <>
        <m.section onMouseMove={handleMouseMove} className={styles.container}>
        <m.div className={styles.disc} variants={variants} initial={'hidden'} animate={'visible'}   >
                <m.h4 variants={textItem}>太陽系の視点で日常を俯瞰すると<br/>絶え間なく時空間を移動し続ける<br/>一瞬一瞬の連続であることに、<br/>気づきます。</m.h4>
                <m.h2 variants={copy} >helio <br className='not-lg'/>compass</m.h2>
                <m.p variants={textItem} >ユニバーサルな視点をもつ<br/>太陽系時空間地図 地球暦 / HELIO COMPASS は、<br/>太陽を中心とした地球の一年の動きを<br className='only-sm'/>見ることができる暦です。</m.p>
        </m.div>
            <m.div layout layoutId={'hero-image'} height={height} className={styles.eyecatch} style={{ overflow: 'hidden',}} >
                <AnimatePresence  >
                    <m.div key={currentImageIndex} initial={{ opacity: 0}} animate={{ opacity: 0.95}} exit={{opacity: 0}} transition={{ duration: 2, ease: "easeInOut" }}   style={{width: '110%', height: '110%', position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%,-50%) translateX(${mousePosition.x}%) translateY(${mousePosition.y}%)`, }}>
                        <Image priority src={images[currentImageIndex]} fill loading={'eager'} style={{objectFit: 'cover'}} alt={'hero image'} />
                    </m.div>
                </AnimatePresence>
            </m.div>
         </m.section>
        
        </>
        
    );
}