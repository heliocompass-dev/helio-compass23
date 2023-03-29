import Head from 'next/head';
import styles from './twentyFourDivision.module.scss'
import PageTitle from '../components/items/PageTitle'
import PageCompass from '../components/items/PageCompass'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TwentyFourDivision() {
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

    return (
      <>
      <Head>
        <title>二十四節気 / The 24 Seasonal Divisions</title>
      </Head>
        <main className={styles.wrapper}>
              <PageTitle 
                style={{color: '#555'}}
                styleBorder={{background: '#555'}}
                className={styles.pageTitle}
                titleEn={'the 24\nseasonal\ndivisions'}
                titleJp={'二十四節気および雑節'}
                descTitle={'二十四節気および雑節とは？'}
                desc={'二十四節気は黄道（地球から見た太陽の通り道）を24分割して定めた天文学的な節目です。古くから季節を知るための重要な要素として暦に取り入れられてきました。太陽を中心とした地球暦の視点で見てみると、地球の軌道を24分割した位置に二十四節気の節目があります。春分・夏至・秋分・冬至で区切る「四半期」や、立春・立夏・立秋・立冬で区切る「四季」など、まずは大きく一年をみてみましょう。雑節とは、五節句・二十四節気以外の、季節の移り変わりの目安となる日の総称です。'}
        ></PageTitle>

        {windowSize.width > 700
            ?  <PageCompass src={"/tfd/compass.svg"} style={{marginTop: '50px',width: '70vw',left: '15vw', top: '0em'}}></PageCompass>
            :  <PageCompass src={"/tfd/compass.svg"} style={{margin: '50px auto',transform: 'translate(-2rem, 1.5rem)',height: '75vh', top: '50%', left: '-50vw'}}></PageCompass>
        }

        <div className={styles.content}>
            {[1,2,3,4].map((item) => (
                    <div className={styles.quarter} key={item}>
                        <Image src={`/tfd/quater${item}.jpg`}fill style={{objectFit: 'contain'}} loading='lazy' alt='information of quearter of a year' />
                    </div>
        ) )}
  
        </div>
        </main>
        </>

    );
}