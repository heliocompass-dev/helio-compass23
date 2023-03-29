// pages/news/[id].js
import { client } from "../../libs/client";
import styles from './article.module.scss'
import Image from "next/image";
import Link from "next/link";
import ConvertDate from "../../function/convertDate";
import dayjs from "dayjs";
import ja from 'dayjs/locale/ja'
dayjs.locale(ja)

export default function newsId({ news }) {
  const day = dayjs(news.eventDate).format('dd')
  const time = dayjs(news.eventDate).format('HH:mm')

  return (
    <main className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.thumbnail}>
          <Image width={300} height={300} src={news.mainVisual.url} style={{objectFit: 'contain'}} alt={'thumbail'}/>
        </div>  
        <div className={styles.overview}>
          <h2>{news.title}</h2>
          <ul>
            <li><span className={styles.infoTitle}>開催日</span><ConvertDate convertDate={news.eventDate}><span className={styles.day}>{day}</span><span className={styles.time}>{time}</span></ConvertDate></li>
            <li><span className={styles.infoTitle}>主催</span>{news.organizer}</li>
            {news.facilitator === null || <li><span className={styles.infoTitle} >ファシリテーター</span><Link href={`/facilitator/${news.facilitator.id}`}>{news.facilitator.name}<Image className={styles.arrowIcon} width={12} height={12} src={'/icon/arrow-yellow.svg'} alt={'arrow icon'} /></Link></li> }
            <li><span className={styles.infoTitle}>料金</span>¥ {news.price.toLocaleString()}</li> 
            <li><span className={styles.infoTitle}>開催場所</span>{news.place}</li>
          </ul>
        </div>

      </div>
 
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${news.body}`,
        }}
      />
      <div className={styles.links}>
        <Link href='/'>ホーム<Image src='/icon/arrow-yellow.svg' width={15} height={15} alt="arrow icon" /></Link>
            <Link href='/EventList'>イベント一覧<Image src='/icon/arrow-yellow.svg' width={15} height={15} alt="arrow icon" /></Link>
            <Link href='/FacilitatorList'>ファシリテーター一覧<Image src='/icon/arrow-yellow.svg' width={15} height={15} alt="arrow icon" /></Link>
        </div>

    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};