import Head from 'next/head'
import styles from './use.module.scss'
import PageTitle from "../components/items/PageTitle"
import UseContent from "../components/items/UseContent"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"


export default function Use(){

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
     

const optimizedImage = () => {
    if(windowSize.width > 1025){
        return <UseContent number={'06'} style={{height: '45rem'}} titleJp={'例えばこんなふうに'} titleEn={'For example, like this'} src={'/use/use-content6-1.jpg'} src2={'/use/use-content6-2'} disc={'地球暦で現在位置を把握したら、自分の日常や関心ごとをワークシートにレコードしてみましょう。自分の生活が天体の動きや季節の変化と連動していることに気づくはず。季節の移ろいを感じる毎日は、きっとあなたに新しい風景を見せてくれるはずです！'} objectFit={'contain'}></UseContent>
    } else if(windowSize.width < 1024 && windowSize.width > 601) {
        return <UseContent number={'06'} style={{height: '40rem'}} titleJp={'例えばこんなふうに'} titleEn={'For example, like this'} src={'/use/use-content6-1.jpg'} src2={'/use/use-content6-2'} objectfit={'responsive'} disc={'地球暦で現在位置を把握したら、自分の日常や関心ごとをワークシートにレコードしてみましょう。自分の生活が天体の動きや季節の変化と連動していることに気づくはず。季節の移ろいを感じる毎日は、きっとあなたに新しい風景を見せてくれるはずです！'}></UseContent>
    }else if(windowSize.width < 600){
        return <UseContent number={'06'} style={{height: '120vh'}} titleJp={'例えばこんなふうに'} titleEn={'For example, like this'} src={'/use/use-content6-1.jpg'} src2={'/use/use-content6-2'} objectfit={'responsive'} disc={'地球暦で現在位置を把握したら、自分の日常や関心ごとをワークシートにレコードしてみましょう。自分の生活が天体の動きや季節の変化と連動していることに気づくはず。季節の移ろいを感じる毎日は、きっとあなたに新しい風景を見せてくれるはずです！'}></UseContent>
    }
}
    
    return(
        <>
        <Head>
          <title>地球暦の使い方 / Overview</title>
        </Head>
        <PageTitle 
        style={{color: '#333'}}
        styleBorder={{background: '#333'}}
        titleEn={'HELIO\nCOMPASS\nOVERVIEW'}
        titleJp={'地球暦の使い方を知る'}
        descTitle={'使い方“を知る。太陽系の地図を広げて、現在位置を知る。'}
        desc={'地球暦の世界にようこそ。まずは地球暦を広げてみましょう。地球暦は太陽系を1兆分の1に縮尺し、一年を360度の円で表した暦です。そこにはそれぞれの惑星の軌道や季節の情報、月相などをはじめ、さまざまな情報がデザインされています。地球暦の読み方を知ったら、次は地球暦の使い方。ここでは地球暦の基本的な使い方を解説します。'}
        ></PageTitle>
       
       <div className={styles.contentContainer}>
          <UseContent number={'01'} titleJp={'地図を広げる'} titleEn={'Unfold the map'} src={'/use/use-content1.jpg'} disc={'まずは地球暦を広げてみましょう。これがわたしたちの太陽系（内惑星）を1兆分の1に縮尺した時空間の地図です。 地球暦は毎年春分からスタートします。上半期、四半期などの大きな節目から1年の中の今日＝現在位置を確認しましょう。'} objectFit={'cover'}></UseContent>
          <UseContent number={'02'} titleJp={'地球の一年は365日'} titleEn={'An earth year has 365 days'} src={'/use/use-content2.jpg'} disc={'地球の軌道には365日の一年の軌跡が描かれています。年度のはじまりである春分より左回りに一日約一度づつ進み、一年で一巡りします。15度ごとに通過する二十四節気や1ヶ月ごとの月のうごきなどの地球と月の節目も描かれていますので、地球暦をじっくりと眺めてみてください。'} objectFit={'cover'}></UseContent>
          <UseContent number={'03'} titleJp={'惑星ピンを刺す'} titleEn={'Put the planet pin'} src={'/use/use-content3.jpg'} disc={['別売の惑星ピンを地球暦に刺していきましょう。ピンを刺していくと、それぞれの惑星が描く軌道と、各惑星の現在位置が把握できます。日々、変化し移ろっていく惑星たち。きっと昨日の一日と今日は違うということが実感できると思います。こちらに地球暦ナビゲーターが書いた解説記事がありますので、ぜひ参照してください。',<br key="key-br"></br>,<span key="key-span" style={{marginTop: '10px', display: 'block', fontSize: '15px'}}><a href="https://note.com/helios_hama/n/nec6c02dd4fc9" target='_blank' rel="noreferrer">note <Image src='/icon/note.svg' width={12} height={12} alt="link icon" /> </a></span>]} objectFit={'contain'}></UseContent>
          <UseContent number={'04'} titleJp={'太陽系を俯瞰する'} titleEn={'Contemplate the solar system'} src={'/use/use-content3.jpg'} disc={'現在位置を確認してみましょう。動きの速い内惑星（水星・金星・地球・火星）は毎日一つずつ、動きの遅い外惑星（木星・土星・天王星・海王星・冥王星）は月単位、年単位でゆっくりと動いています。※冥王星は準惑星'} objectFit={'cover'}></UseContent>
          <UseContent number={'05'} titleJp={'動きを観察する'} titleEn={'Observe each movement'} src={'/use/use-content4.jpg'} disc={'現在の位置がわかると、未来のうごきが見えてきます。360度の円盤の上で全体を俯瞰しながら、自分の１年の動きを重ね合わせてみましょう。 生活のリズムの中で時を読む感覚が自然と身についていきます。ものごとの観察やプロジェクトの記録などには便利な「ワークシート」をご活用ください。'} objectFit={'cover'}></UseContent>
          {/* {optimizedImage()} */}
          <UseContent secondImg={true} number={'06'} style={{height: '45rem'}} titleJp={'例えばこんなふうに'} titleEn={'For example, like this'} src={'/use/use-content6-1.jpg'} src2={'/use/use-content6-2.jpg'} disc={'地球暦で現在位置を把握したら、自分の日常や関心ごとをワークシートにレコードしてみましょう。自分の生活が天体の動きや季節の変化と連動していることに気づくはず。季節の移ろいを感じる毎日は、きっとあなたに新しい風景を見せてくれるはずです！'} objectFit={'contain'}></UseContent>

        </div>

        <div className={styles.links}>
            <Link href='/Read'>地球暦の読み方を知る<span>overview</span><Image src='/icon/arrow-yellow.svg' width={18} height={18} alt="arrow icon" /></Link>
        </div>

        </>
    )
}