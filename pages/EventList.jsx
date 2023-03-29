import Head from 'next/head';
import styles from './eventList.module.scss'
import {client} from '../libs/client'
import PageTitle from '../components/items/PageTitle'
import Image from 'next/image';
import ArticleList from '../components/items/ArticleList';
import Pagination from '../components/items/Pagination'
import { getSortedEventData } from '../function/getSortedEventData';


export default function EventList({news, totalCount}) {

    return (
        <>
        <Head>
            <title>イベント情報 / Event</title>
        </Head>
        <main className={styles.container}>
        <PageTitle 
            style={{color: '#333'}}
            styleBorder={{background: '#333'}}
            titleEn={'events\nlist'}
            titleJp={'イベント一覧'}
        ></PageTitle>

        <div className={styles.content}>
            <div className={styles.eyecatch}>
                    <Image  src={news[0].mainVisual.url} width={250} height={250} style={{objectFit: 'contain'}} alt={news[0].title} />
            </div>
            <div className={styles.articleList}>

                <ArticleList news={news} />

                {/* <div className={styles.pagination}>
                    <Pagination totalCount={totalCount} />
                </div> */}
            </div>
        </div>
  
        </main>
        </>
    );
}

//SSG
export const getStaticProps = async() => {
    const data = await client.get({ endpoint: "news", queries: { limit: 20, offset: 0, limit: 20 } });
    const sortedEventData = getSortedEventData(data);
    
      return{
        props: {
          news: data.contents,
          totalCount: data.totalCount
        }
      }
    }