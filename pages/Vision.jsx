import Head from 'next/head'
import styles from './vision.module.scss'
import PageTitle from "../components/items/PageTitle"
import Image from 'next/image'
import Link from 'next/link'

export default function About(){
    
    return(
        <>
        <Head>
           <title>ビジョン / Vision</title>
        </Head>
        <section className={styles.hero}>
            <PageTitle 
            style={{color:'#fff'}}
            styleBorder={{background: '#fff'}}        
            titleEn={'vision'}
            titleJp={'ビジョン'}
            descTitle={''}
            desc={''}
            ></PageTitle>
            <Image fill src={'/vision/vision-img1.jpg'} alt={'hero background'} />

            <div className={styles.heroText}>
                <h2>OUR VISION</h2>
                <p> 
                    今、世界は多くの課題を抱え、混沌としています。<br/>世界各地で頻発する紛争。世界を覆う食料やエネルギーの問題。<br/> 感染症のパンデミック。貧富の格差。温暖化。<br/>私たちはこれらの課題を乗り越え、<br/>新しい時代を切り開くことができるでしょうか。<br/>私たちは、もしかすると地球暦がこれらの課題や対立を解決するきっかけ、<br/>またはそのためのツールになるのではないかと考えています。
                </p>
            </div>
        </section>

        <section className={styles.contentContainer}>
            <div className={`${styles.content} ${styles.content1}`}>
                <div className={styles.contentText}>
                    <h3>地球暦は太陽系の時空間地図</h3>
                    <p>
                        地球暦は、自然の形やプロセス、生態系の姿を学んで、そのデザインや機能を真似るという、バイオミクリーという発想で創発されました。<br/>ただ単に直線的に時間を捉えるこれまでの時間やカレンダーの概念とは異なり、地球と社会との動きを同期させる地球暦は、この太陽系の地図の上で、惑星の動きを通じて、時の流れを俯瞰し、地球の現在位置を宇宙から感覚することができるツールです。
                    </p>
                </div>
                <div className={styles.contentImg}>
                    <Image src='/vision/vision-img2.jpg' fill style={{objectFit: 'cover'}} alt='background image' />    
                </div>
            </div>    

            <div className={`${styles.content} ${styles.content2}`}>
                    <Image src='/vision/vision-img3.jpg' fill style={{objectFit: 'cover'}} alt='background image' />    
            </div>    

            <div className={`${styles.content} ${styles.content3}`}>
                <div className={styles.contentImg}>
                    <Image src='/vision/vision-img4.jpg' fill style={{objectFit: 'cover'}} alt='background image' />    
                </div>
                <div className={styles.contentText}>
                    <h3>あらゆる時代・民族・文化を内包できるツール</h3>
                    <p>
                     また地球暦は、あらゆる時代、あらゆる地域、あらゆる民族、あらゆる文化における、季節性や祝祭性を超越し、盤面状に指し示すことができます。<br/>資源の可視化や、年表の立体化、空間的なデザイン、それから製造や生産のトレーサビリティー、農産物の管理など、実に多くのこと可能にする多次元的なデバイスです。<br/>つまり私たちは地域・民族・文化などの多様性を維持しつつ、人類で共有できる暦、時空間地図を手にすることができるのです。
                    </p>
                </div>
            </div>    

            <div className={`${styles.content} ${styles.content4}`}>
                <div className={styles.contentImg}>
                    <Image src='/vision/vision-img3.jpg' fill style={{objectFit: 'cover'}} alt='background image' />    
                </div>
                <div className={styles.contentText}>
                    <h3>暦は社会システムを司る指揮者</h3>
                    <p>
                    暦は実態が不確かな「時間」というものに対して、全体に同じ認識をもたらして、コミュニティ単位で機能するものです。したがって、暦はある意味、社会システムを動かしているオーケストラの指揮者と言えるかも知れません。<br/>
人やモノが動く時、そこには必ず時が存在します。時の認識も変わり、時の認識が変わるとき、社会システムも変わっていきます。自然の循環から着想を得て、自然は元より太陽系全体との調和を図っていく地球暦。もし、我々人類が地球暦を活用できるようになるならば、私たちは、多様性を維持しながらさまざまな対立を超越し、エコシステムと調和した新しい社会システムを構築できるかもしれません。
                    </p>    
                </div>
            </div>    

            <div className={`${styles.content} ${styles.content5}`}>
            <Image src='/vision/vision-img6.jpg' fill style={{objectFit: 'cover', }} alt='background image' />    

                    <h3>BEYOND THE FUTURE</h3>
                    <p>太陽系という俯瞰した視点を獲得し、<br/>
                        文化・歴史・地域の多様性を維持しながら、自然と調和した循環型社会システムを実現する。<br/>
                        これがわたしたち地球暦が目指すビジョンです。
                    </p>
            </div>   
        </section>
        <div className={styles.links}>
            <Link href='read'>地球暦の読み方を知る<span>Overview</span><Image src='/icon/arrow-yellow.svg' width={18} height={18} alt="arrow icon" /></Link>
            <Link href='use'>地球暦の使い方を知る<span>How to</span><Image src='/icon/arrow-yellow.svg' width={18} height={18} alt="arrow icon" /></Link>
        </div>

        </>
    )
}