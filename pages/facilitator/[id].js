import { client } from "../../libs/client";
import styles from './article.module.scss'
import Image from "next/image";
import Link from "next/link";


export default function facilitatorId({ facilitator }) {


  return (
    <main className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.thumbnail}>
          <Image width={200} height={200} src={facilitator.thumbnail.url} style={{objectFit: 'contain', objectPosition: 'center right'}} alt={'thumbail'}/>
        </div>  
        <div className={styles.overview}>
          <h2>{facilitator.name}</h2>
          <ul>
            <li><span className={styles.infoTitle}>職業</span>{facilitator.occupation}</li>
            <li><span className={styles.infoTitle}>所属</span>{facilitator.company}</li>
            <li><span className={styles.infoTitle}>連絡先</span>{facilitator.contact}</li>
            <li><span className={styles.infoTitle}>HP</span><a href={facilitator.website} target={'_blank'} rel={'noreferrer'}>{facilitator.website}</a></li>
          </ul>
        </div>

      </div>
 
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${facilitator.body}`,
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
  const data = await client.get({ endpoint: "facilitator" });

  const paths = data.contents.map((content) => `/facilitator/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "facilitator", contentId: id });

  return {
    props: {
      facilitator: data,
    },
  };
};