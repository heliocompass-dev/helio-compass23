import styles from './artwork.module.scss'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImgExpandPopup from '../items/ImgExpandPopup';

export default function Artwork() {

const [width, setWidth ] = useState(window.innerWidth)

 useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


const smWidth = width * 0.8
const lgWidth = (width / 2) - (width * 0.075)
const imgRatio = 0.65



const [popupImage, setPopupImage] = useState(null);
const openPopup = (imgSrc) => {
  setPopupImage(imgSrc);
};

const closePopup = () => {
  setPopupImage(null);
};

const [popupImageLg, setPopupImageLg] = useState(null);
const openPopupLg = (imgSrc) => {
  setPopupImageLg(imgSrc);
};
const closePopupLg = () => {
  setPopupImageLg(null);
};


    return (
        <section className={styles.container}>
            <div className={styles.intro}>
                <h2><span>地球暦</span>アートワーク</h2>
                <p>地球暦の思想にインスパイアされたアート作品のご紹介です。</p>
            </div>

            <div className={styles.content}>
                <div className={styles.smContentContainer}>
                    {[1,2,3].map((item) =>(
                        <div onClick={() => openPopup(`/home/artwork-sm${item}.jpg`)} key={item} className={`${styles.smContent} ${styles.smContent1}`} >
                         <Image width={width > 1024 ? lgWidth : smWidth} height={width > 1024 ? lgWidth * imgRatio : smWidth * imgRatio} src={`/home/artwork-sm${item}.jpg`} alt={'artwork'} />
                     </div>
                    ))}
            . 
                </div>
                {popupImage && (
                <ImgExpandPopup imgSrc={popupImage} onClose={closePopup} widthRatio={1.4} />
                )}
                <div className={styles.lgContent} onClick={() => openPopupLg(`/home/artwork-lg1.jpg`)} >
                    <Image width={width > 1024 ? lgWidth : smWidth} height={width > 1024 ? lgWidth * 1.77  : smWidth * 1.77} src={'/home/artwork-lg1.jpg'} alt={'artwork'} />
                </div>
                    {popupImageLg && (
                    <ImgExpandPopup imgSrc={popupImageLg} onClose={closePopupLg} widthRatio={0.56}/>
                )}
            </div>
        </section>
    );
}

