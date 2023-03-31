
import Head from 'next/head'
import styles from './index.module.scss'
import Hero from '../components/section/Hero'
import News from '../components/section/News'
import About from '../components/section/About'
import Sale from '../components/section/Sale'
import Start from '../components/section/Start'
import Live from '../components/section/Live'
import Deco from '../components/section/Deco'
import CaseStudy from '../components/section/CaseStudy'
import Connect from '../components/section/Connect'
import Link from 'next/link'
import Image from 'next/image'
import Artwork from '../components/section/Artwork'
import Closing from '../components/section/Closing'
import { Timeline } from 'react-twitter-widgets'
import {client} from '../libs/client'
import IgFeed from '../components/items/IgFeed'
import { useEffect, useState } from 'react'



export default function Home({note, news, IG}) {

  const twitterId = 'helio_compass' 
  const [windowWidth, setWindowWIdth] = useState()
  const [spView, setSpView] = useState()
  const [optimizeNum, setOptimizeNum] = useState(6)
   
  useEffect(() => {
    setWindowWIdth(window.innerWidth)
    windowWidth < 600 && setSpView*(true) && setOptimizeNum(3)
  }, [spView, windowWidth])
  

  
  return (
    <div className={styles.container}>
         <Head>
           <title>地球暦 HELIO COMPASS Official Website</title>
        </Head>


      <main className={styles.main}>
        <Hero />
        <Sale />
        <Start />
        <CaseStudy />
        <News news={news}/>
        <About />
        <Deco/>
        <Live />
        <Artwork />
       <Connect>
        <div className={styles.snsContainer}>
        <div className={styles.noteContainer}>
           <a className={styles.snsTitle} href='https://note.com/helio_compass/' target={'blank'}>note</a>
            <ul>
                {note.slice(0,optimizeNum).map((article) => ( 
                <li key={article.id}>         
                    <Link href={article.noteUrl} target={'blank'}>
                      <article>
                        {/* <Image src={article.eyecatch} width={300} height={150} alt='eyecatch' /> */}
                        {/* ↑インスタOK後 ↓OK前 */}
                        <Image src={article.eyecatch} width={spView ? windowWidth * 0.9 : 640 * 0.5} height={spView ? (windowWidth * 0.9) * (335 / 640) : 335 * 0.5} alt='eyecatch' />
                        <span style={{fontSize: '13px'}}>{article.name.slice(0, 17)}</span> 
                        {article.name.slice(24)}
                    </article>
                    </Link>
                </li>
                ))}
            </ul>
        </div>

        <div className={styles.twitterContainer}>
        <a className={styles.snsTitle} href='https://twitter.com/helio_compass' target={'blank'}>twitter</a>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: twitterId 
          }}
          options={{
            height: '720'
          }}
        />
     </div>

        {/* <div className={styles.instagramContainer}>
          <a className={styles.snsTitle} href='https://www.instagram.com/helio_compass/' target={'blank'}>instagram</a>
          <IgFeed data={IG} />
        </div> */}

        </div>

  
       </Connect>
       <Closing />
       
      </main>

    </div>
  )
}

export const getStaticProps = async() => {
  //noteの取得
  const userName = 'helio_compass'
  const NoteUrl = `https://note.com/api/v2/creators/${userName}/contents?kind=note&page=1`;
  const json = await fetch(NoteUrl).then((res) => res.json())
  const articles = json.data.contents 

  //microCMSの取得
  const data = await client.get({ endpoint: "news", queries: { limit: 20, offset: 0, limit: 3 } });
  
  //Instagramの取得
  const IGurl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${process.env.IG_ACCESS_TOKEN}`
  const IGjson = await fetch(IGurl).then((res) => res.json())
  const IGdata= IGjson.data

  return {
    props: {
     note: articles,
     news: data.contents,
     IG: IGdata
    },
  };
}


