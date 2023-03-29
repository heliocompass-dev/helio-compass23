import styles from './start.module.scss'
import Image from 'next/image';
import BtnToChild from '../../components/button/BtnToChild'

export default function Start() {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2><span className={styles.smText}>地球暦<span className={styles.xsText}>の</span></span><br/>はじめかた</h2>
                <span className={styles.line}></span>
                <p>地球暦は私たちの住む太陽系を1兆分の1に縮尺した時空間の地図です。他のカレンダーと違って、一年間を太陽を中心にした円環で表しています。<br/>
                    まずは地球暦の読み方を把握。地球暦の読み方を理解したら、地球暦の基本的な使い方を知りましょう！</p>
            </div>

            <div className={styles.content}>
                <div className={styles.contentItem}>
                    <h3>読み方を知る</h3>
                    <span className={styles.line}></span>
                    <p>地球暦には惑星の軌道や季節の行事など、<br/>さまざまな情報が掲載されています。</p>
                    <div className={styles.contentImgs}>
                        {[1,2,3].map((img) => (
                            <Image key={img} src={`/home/read${img}.jpg`} width={140} height={110} alt={'How to read image'}/>
                        ))}
                    </div>
                    <div className={styles.linkBtn}>       
                        <BtnToChild href={'/Read'} white={true}>地球暦の読み方</BtnToChild>
                    </div>
                </div>
                <div className={styles.contentItem}>
                    <h3>使い方を知る</h3>
                    <span className={styles.line}></span>
                    <p>地球暦の読み方がわかったら、次はいよいよ使い方。<br/>地球暦の自分の生活と重ね合わせると、いろんな発見があります。</p>
                    <div className={styles.contentImgs}>
                        {[1,2,3].map((img) => (
                            <Image key={img} src={`/home/use${img}.jpg`} width={140} height={110} alt={'How to read image'}/>
                        ))}
                    </div>
                    <div className={styles.linkBtn}>
                     <BtnToChild href={'/Use'} white={true}>地球暦の使い方</BtnToChild>
                    </div>
                </div>
            </div>
        </section>
    );
}