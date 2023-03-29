import styles from './connect.module.scss'
import snsInfo from '../../data/snsInfo'
import Image from 'next/image';
import BtnToChild from '../button/BtnToChild'
import {motion as m} from 'framer-motion'

export default function Connect({children}) {
    return (
        <section className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.title}>
                    <h2><span>地球暦と</span>繋がる</h2>
                    <span className={styles.line}></span>
                </div>
                <ul className={styles.sns}>
                    {snsInfo.map((item) => (
                        <m.li key={item.title}  whileHover={{
                            rotate: -360,
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.5 },
                        }} >
                            <a href={item.url} target={'blank'}>
                                <Image src={`/icon/${item.title}-circle.svg`}  width={45} height={45} alt={`${item.title} icon`}/>
                            </a>
                        </m.li>
                    ))}
                </ul>
            </div>

            {/* ↓noteの記事を取得はindexページで */}
            {children}

            <div className={styles.bottomContainer}>
                <div className={styles.decoImg}>
                    <Image fill src={'/home/connect-deco.jpg'} alt={'decoration image'}/>
                </div>
                <div className={styles.toChildContainer}>
                <div className={`${styles.toChildBox} ${styles.toPartner}`}>
                        <h3>パートナー&ショップ</h3>
                        <p className={styles.childBoxSubTitle}>partner & shop</p>
                        <p className={styles.childBoxCap}>全国の提携店にてお買い求めいただけます。<br/>販売代理店・パートナーも募集しております。</p>
                        <BtnToChild href={'/Partners'} white={true} >一覧を見る</BtnToChild>
                </div>
                <div className={`${styles.toChildBox} ${styles.toContact}`}>
                    <h3>お問い合わせ</h3>
                    <p className={styles.childBoxSubTitle}>contact</p>
                        <p className={styles.childBoxCap}>講演やワークショップ開催のご依頼や、地球暦の<br/>お取り扱いなどお気軽にご連絡ください。</p>
                        <BtnToChild href={'/Contact'} white={true} >お問い合わせフォーム</BtnToChild>
                </div>
                </div>
            </div>
        </section>
    );
}