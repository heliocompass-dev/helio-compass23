import styles from './articleList.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import ConvertDate from '../../function/convertDate';
import { useState, useEffect } from 'react';
import {motion as m} from 'framer-motion'

export default function ArticleList({news}) {

    const [spMdView, setSpMdView] = useState()

    useEffect(() => {
        window.innerWidth < 1024 && setSpMdView(true) 
    }, [])


    const variants = {
        hidden: { 
            opacity: 0,
        },
        visible: { 
            opacity: 1
        },
        transition:{
            staggerChildren: 0.3
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
        <>
           <m.div variants={variants} layout initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={styles.contentTitle}>
                     <m.span variants={item} className={styles.organizer}>主催</m.span>
                     <m.span variants={item} className={styles.eventDate}>開催日</m.span>
                     <m.div variants={item}>
                        <p>タイトル</p>
                        <p>開催場所</p>
                     </m.div>


                </m.div>

                <m.ul layout variants={variants} initial={'hidden'} whileInView={'visible'}>
                {news.map((item) => (
                    <m.li variants={item} key={item.id}>
                    <Link className={styles.contentItem} href={`/news/${item.id}`}>
                        <span className={styles.organizer}>{item.organizer}</span>
                        <span className={styles.eventDate}><ConvertDate convertDate={item.eventDate} /></span>
                        <div>
                            <p>{item.title}</p>
                            <p>{item.place}</p>
                        </div>
                        { spMdView &&
                        <div className={styles.mainVisualContainer}>
                            <Image src={item.mainVisual.url} fill  quality={50} alt={item.title} />
                        </div>
                        }
                    </Link>   
                    </m.li>
                ))}
                       
         </m.ul>
        </>
    );
}