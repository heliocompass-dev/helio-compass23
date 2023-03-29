import styles from './read.module.scss'
import Head from 'next/head'
import PageTitle from "../components/items/PageTitle"
import PageCompass from "../components/items/PageCompass"
import ReadContent from "../components/items/ReadContent"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'


export default function Read(){

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
    
          handleResize();
          return () => window.removeEventListener("resize", handleResize);
        } else {
          return;
        }
      }, []);

      console.log(windowSize.width);
    
    return(
        <>
        <Head>
            <title>地球暦の読み方 / How To Read</title>
        </Head>
        <PageTitle 
        style={{color: '#333'}}
        styleBorder={{background: '#333'}}
        titleEn={'HELIO\nCOMPASS\nOVERVIEW'}
        titleJp={'地球暦の読み方を知る'}
        descTitle={'読み方を知る。太陽系の地図を広げて、現在位置を知る。'}
        desc={'地球暦は私たちの住む太陽系を1兆分の1に縮尺した時空間の地図です。他のカレンダーと違って、一年間を太陽を中心にした円環で表しています。円環には二十四節気・満月や新月・惑星の軌道など、さまざまな情報が掲載され、惑星の軌道や季節の移り変わりを俯瞰して理解できるようにデザインされています。まずは地球暦の読み方を把握しましょう。'}
        ></PageTitle>
       
       {windowSize.width > 700
            ?  <PageCompass src={"/read/compass.png"} style={{marginTop: '50px',width: '70vw',left: '15vw', top: '0rem'}}></PageCompass>
            :  <PageCompass src={"/read/compass.png"} style={{margin: '50px auto',transform: 'translate(-2rem, 3rem)',height: '75vh', top: '50%', left: '-50vw'}}></PageCompass>
        }

        <div className={styles.content}>
            <ReadContent src={'/read/read-content1.jpg'} title={'月と地球'} disc={'月は地球の周りを平均29.5日で回っているため、約2週間ごとに新月と満月が交互にやってきます。月の位置が地球の軌道の内側（太陽の方向）にあるときは新月、外側（夜の方向）のときは満月になります。月が満月に向かっていく中間地点が上弦、新月に向かっていく中間点が下弦となり、月の見え方も変わります。'}></ReadContent>
            <ReadContent src={'/read/read-content2.jpg'} title={'春分'} disc={'春分は年度のはじまり。分度器の地心黄径0度にあたります。太陽の光量が北半球・南半球ともに等しく、地球の真ん中の赤道に光が当たります。また昼と夜の長さも等しく、太陽と地球の光の関係において最もバランスがとれたポイントです。まずは春分の惑星配置にピンをさして位置を確かめてみましょう！'}></ReadContent>
            <ReadContent src={'/read/read-content3.jpg'} title={'近日点・遠日点'} disc={'惑星の軌道上で、太陽に最も近くなる点が近日点、最も遠ざかるのが遠日点です。近日点の付近では惑星の進み方は遠くなり、反対に遠日点ではゆっくりになります。地球の近日点は1月上旬、遠日点は7月上旬です。'}></ReadContent>
            <ReadContent src={'/read/read-content4.jpg'} title={'軌道のぶれ幅(離心率)'} disc={'惑星の公転軌道（太陽の周りを回る軌道）は楕円形です。金星はぶれ幅が少ないのに対して、水星や火星はぶれ幅が大きく、遠近の差があります。運動場のトラックを回るときのように太陽に近いときほど遠く、遠いときほどゆっくり進むように動いています。'}></ReadContent>
            <ReadContent src={'/read/read-content5.jpg'} title={'惑星の軌道'} disc={'内惑星（水星・金星・火星）の軌道上にある赤い矢印は、毎月1日の惑星の位置を示しています。日数に応じて左回りで進めてください。 ※水星や金星は1年間で1周以上回るため、軌道に日付が重なってしめされていきます。'}></ReadContent>
            <ReadContent src={'/read/read-content6.jpg'} title={'上半期・下半期'} disc={'本年度は2022年3月20日から2023年3月20日までの365日間です。地球は円盤上を左回りで、1日ずつ動いていきます。軌道が楕円になっているため、上半期は187日間、下半期は179日間と、上半期の方が8日多く、日数の違いがあります。'}></ReadContent>
            <ReadContent src={'/read/read-content7.jpg'} title={'昇交点・降交点'} disc={'それぞれの軌道には、わずかに傾きがあります。軌道が上方向へ向かう点を昇交点、下方向へ向かう点が降交点です。太陽系を横から見ると惑星はほぼ平面状上を回っていると言えます。地球から見て低くなっている方向は濃いグレー、高くなっている方向を薄いグレーで表しています。'}></ReadContent>
            <ReadContent src={'/read/read-content8.png'} title={'惑星ピン'} disc={'惑星に見立てたピン（別売）を打つと、太陽系の現在の配置が見えてきます。水星・金星・地球・火星は毎日動き、木星・土星は月ごと、天王星・海王星・冥王星は1年ごとで動いています。'}></ReadContent>
         </div>

         <div className={styles.links}>
            <Link href='/Use'>地球暦の使い方を知る<span>overview</span><Image src='/icon/arrow-yellow.svg' width={18} height={18} alt="arrow icon" /></Link>
        </div>

        </>
    )
}