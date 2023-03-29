import Head from 'next/head'
import styles from './measure.module.scss'
import PageTitle from '../components/items/PageTitle'
import PageCompass from '../components/items/PageCompass'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Measure(){

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
      });
    
      useEffect(() => {
        if (typeof window !== "undefined") {
          const handleResize = () => {
            setWindowSize({
              width:  
               window.innerWidth,
              height: window.innerHeight,
            });
          };
    
          window.addEventListener("resize", handleResize);
          handleResize();
          return () => window.removeEventListener("resize", handleResize);
        } else {
          return;
        }
      }, []);
     

    const optimizedCompassImage = () => {
        if(windowSize.width > 700){
           return <PageCompass src={"/measure/measure-compass.png"} style={{width: '80vw',transform: 'scale(1.2)',left: '13vw', top: '100px'}}></PageCompass>
        } else{
            return <PageCompass src={"/measure/measure-compass-sm.png"} style={{width: '100vw',transform: 'scale(1.2)',left: '-35vw', top: '0px'}}></PageCompass>

        }
    }
    const optimizedInnerImage = () => {
        if(windowSize.width > 700){
           return   <Image src='/measure/measure-inner.png' fill style={{objectFit: 'contain'}} alt='inner planets'/>

        } else{
            return  <Image src='/measure/measure-inner-sm.png' fill style={{objectFit: 'contain'}} alt='inner planets'/>

        }
    }

    return(
        <>
        <Head>
          <title>太陽系を測る / Measure The Solar System</title>
        </Head>

        <PageTitle 
        style={{color: '#333'}}
        styleBorder={{background: '#333'}}
        titleEn={'MEASURE\nTHE\nSOLAR SYSTEM'}
        titleJp={'太陽系をはかる'}
        descTitle={''}
        desc={''}
        ></PageTitle>
        {optimizedCompassImage()}


        <div className={styles.inner}>
            {optimizedInnerImage()}
        </div>

        <div className={styles.human}>
            <div className={styles.humanImg}>
            <Image src='/measure/measure-human.png' fill style={{objectFit: 'contain'}} alt='inner planets'/>    
            </div>
            <div className={styles.humanText}>
                <h3>太陽系をはかる</h3>
                <p>太陽から地球までは光の速さで8分19秒、距離にして約1億5千万キロ。地球暦はこの天文単位を1兆分の1に縮尺した時空間の地図です。水星軌道は握りこぶし、金星軌道は手のひら、地球軌道は手首から肘までの長さ（約30センチ）と、身長尺に近いスケールで太陽系を捉えています。</p>
                </div>
        </div>

        </>

    )
}