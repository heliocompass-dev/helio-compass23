import styles from './igFeed.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function IgFeed({data}) {
console.log(data);

    return (
      <ul className={styles.container}>
        {data.slice(0,3).map((item, i) => (
            <li key={item.id}>
                <Link href={item.permalink} target={'blank'}>
                    <Image width={350} height={200} style={{objectFit: 'cover', borderRadius: '3px', marginBottom: '10px'}} src={item.media_url} alt={`instagram フィード${i}`} />
                    {/* <p>{item.caption.slice(3,20)}</p> */}
                </Link>
            </li>
        ))}
      </ul>
    );
}