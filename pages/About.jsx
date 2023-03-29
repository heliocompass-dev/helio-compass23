import Head from 'next/head'
import styles from './about.module.scss'
import PageTitle from "../components/items/PageTitle"
import Image from 'next/image'
import Link from 'next/link'

export default function About(){
    
    return(
        <>
        <Head>
           <title>地球暦とは / What Is Helio Compass</title>
        </Head>
        <section className={styles.hero}>
            <PageTitle 
            style={{color:'#fff'}}
            styleBorder={{background: '#fff'}}        
            titleEn={'what is\nhelio\ncompass'}
            titleJp={'地球暦とは'}
            descTitle={''}
            desc={''}
            ></PageTitle>

            <div className={styles.heroText}>
                <h2>BEYOND<br className='only-sm'></br> THE<br className='only-sm'></br> DREAM <br className='only-sm'></br>SPHERE</h2>
                <p> 
                あなたが最後に夜空を見上げたのはいつですか。<br></br>
                目まぐるしい変化の時代の中で、多忙な日々を送る私たちは、<br></br>
                もしかしたら人本来のリズムや、自然のあり方を少し忘れているのかもしれません。<br></br>
                星を見つめて少し深呼吸。<br></br>
                一年間を白い円盤にデザインされた地球暦は、太陽系の惑星の動きや季節の変化を感じることのできる暦です。<br></br>
                私たちの日常を太陽系全体から俯瞰すると、これまでにない視点や、インスピレーションを得れるかもしれません。<br></br>
                星の巡りや自然の変化とともに生きる暮らし。<br></br>
                地球暦で新しい暮らしをはじめてみませんか。
                </p>
            </div>
        </section>
        <section className={styles.contentContainer}>
            <div className={`${styles.content} ${styles.content1}`}>
                <div className={styles.contentText}>
                    <h3>星が刻む時の流れ</h3>
                    <p>
                    地球暦は太陽系を1兆分の1（10の12乗）に縮尺し、惑星の配列や季節の移り変わりを実感できる、太陽系を舞台にした時空間の「地図」。<br></br>
 春分からはじまる365日の惑星たちのの軌道や地球の動きを時間と空間の「位置」として捉えることができます。日々刻々と動いていく自分と宇宙との関係を俯瞰していると、私たちが太陽系という大きな自然の中で生きていることが実感できるはず。<br></br>
地球暦は宇宙のリズムと日々の暮らしを接続するデバイスです。
                    </p>
                </div>
                <div className={styles.contentImg}>
                    <Image src='/about/about-img2.jpg' fill style={{objectFit: 'cover'}} alt='background image' />    
                </div>
            </div>    

            <div className={`${styles.content} ${styles.content2}`}>
                    <Image src='/about/about-img3.jpg' fill style={{objectFit: 'cover'}} alt='background image' />    
            </div>    

            <div className={`${styles.content} ${styles.content3}`}>
                <div className={styles.contentImg}>
                    <Image src='/about/about-img4.jpg' fill style={{objectFit: 'cover'}} alt='background image' />    
                </div>
                <div className={styles.contentText}>
                    <h3>自然本位の暮らし</h3>
                    <p>
                    季節は巡り、時は星のリズムとともに移ろっていく。<br></br>
地球暦を使い始めると、日々、変化していく惑星の軌道や季節の移り変わりを、日々の暮らしの中で実感できるようになります。<br></br>
自分の生活を軸にして季節を感じるのではなく、季節の変化を軸としながら自分の生活を捉え直してみる。そこにはこれまでの日常とは違う風景が広がるはずです。 
                    </p>
                </div>
            </div>    

            <div className={`${styles.content} ${styles.content4}`}>
                <div className={styles.contentImg}>
                    <Image src='/about/about-img3.jpg' fill style={{objectFit: 'cover'}} alt='background image' />    
                </div>
                <div className={styles.contentText}>
                    <h3>季節の移ろいを感じる暮らし</h3>
                    <p>
                    地球暦は太陽系を1兆分の1（10の12乗）に縮尺した、時空間の「地図」。<br></br>
                    春分からはじまる1太陽年（365日）の地球の動きを、はっきり位置として捉えることができます。日々刻々と動いていく自分と宇宙との関係を俯瞰して、時空の旅を感じてみてください。<br></br>
宇宙の、太陽系の、地球の上、今、ここ、私。<br></br>
地球暦で、太陽系という自然の中で生きていることを感じて下さい。<br></br>
きっと、これまでの日常とは違う風景が広がるはずです。 
                    </p>    
                </div>
            </div>    

            <div className={`${styles.content} ${styles.content5}`}>
            <Image src='/about/about-img5.jpg' fill style={{objectFit: 'cover', objectPosition: '50% 0%'}} alt='background image' />    

                    <h3>BEYOND THE DREAM SPHERE</h3>
                    <p>地球暦は、宇宙や自然が奏でる旋律をホリスティックに感じるためのデバイスです。<br></br>
太陽系を舞台にした、星と自分を巡る時空間の旅。<br></br>
旅の途中、あなたはきっと、さまざまな発見をし、新たな視点を得ていくはずです。<br></br>
あなたも地球暦のある暮らしをはじめませんか？
                    </p>
            </div>   
        </section>
        <div className={styles.links}>
            <Link href='Read'>地球暦の読み方を知る<span>Overview</span><Image src='/icon/arrow-yellow.svg' width={18} height={18} alt="arrow icon" /></Link>
            <Link href='Use'>地球暦の使い方を知る<span>How to</span><Image src='/icon/arrow-yellow.svg' width={18} height={18} alt="arrow icon" /></Link>
        </div>

        </>
    )
}