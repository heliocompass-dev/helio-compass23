import Head from 'next/head';
import styles from './facilitatorList.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '../components/items/PageTitle'
import { client } from '../libs/client';


export default function facilitator({facilitator}) {

    return (
      <>
      <Head>
        <title>ファシリテーター / Facilitator</title>
      </Head>
 
        <main className={styles.container}>
          <PageTitle
             style={{color: '#333'}}
             styleBorder={{background: '#333'}}
             titleEn={'facilitator\nlist'}
             titleJp={'ファシリテーター紹介'}
          />

          <div className={styles.content}>
            {facilitator.map((item, i) => (
                <Link key={item.id} className={styles.box} href={`/facilitator/${item.id}`}>
                    <Image src={item.thumbnail.url} width={150} height={150} alt={item.name} style={{objectFit: 'contain', objectPosition: 'center left'}} />
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.occupation}</p>
                        <p>{item.company}</p>
                        <Image width={16} height={16} src={'/icon/arrow-yellow.svg'} alt={'arrow icon'} />
                    </div>
                </Link>
            ))}
            
          </div>
        </main>
        </>
    );
}


//SSG
export const getStaticProps = async() => {
    const data = await client.get({ endpoint: "facilitator", queries: { limit: 20, offset: 0, limit: 20 } });
     
      return{
        props: {
          facilitator: data.contents,
          totalCount: data.totalCount
        }
      }
    }