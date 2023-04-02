import styles from './news.module.scss'
import Image from 'next/image';
import BtnToChild from '../../components/button/BtnToChild'
import ArticleList from '../items/ArticleList';
import {motion as m} from 'framer-motion'

export default function News({news,}) {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1},
        transition:{
            staggerChildren: 0.5
        } ,
      }
      
      const item = {
          hidden: { opacity: 0, },
          visible: { opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.5
        } },
      }



    return (
        <section className={styles.container}> 
        <Image fill src={'/home/news-bg.jpg'} quality={75} style={{objectFit: 'cover'}} alt={'background image'} />
        <m.div layout className={styles.wrapper}>

        <m.div variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={styles.title}>
            <m.h2 variants={item}><span>イベント</span>開催情報</m.h2>
            {/* <m.h2 initial={{opacity: 0, skewX: 15, rotateX: 15}} whileInView={{opacity: 1, skewX:0, rotateX: 0}} transition={{delay: 0.5, duration: 0.5}}>これからのイベント</m.h2> */}
        </m.div>
        <m.div  variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={styles.contentContainer}>
            <m.div variants={item} className={styles.thumbnail} style={{position: 'relative'}}>
                {news.slice(0,1).map(item => (
                    <Image width={300} height={300} style={{objectFit: 'cover', objectPosition: 'center'}} key={item.id} src={item.mainVisual.url} alt={item.title} />
                ))}
            </m.div>
            <div className={styles.content}>
                <ArticleList news={news} numOfItem={3} />

                <ul className={styles.links}>
                    <li><BtnToChild href={'/EventList'} white={false}>イベント一覧</BtnToChild></li>
                    <li><BtnToChild href={'/FacilitatorList'} white={false}>ファシリテーター紹介</BtnToChild></li>
                </ul>
            </div>
           
        </m.div>

        </m.div>
        </section>
    );
}