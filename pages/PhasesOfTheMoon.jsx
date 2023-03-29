import Head from 'next/head';
import styles from './phasesOfTheMoon.module.scss'
import Image from 'next/image';
import PageTitle from '../components/items/PageTitle'
import PageCompass from '../components/items/PageCompass'

export default function PhasesOfTheMoon() {
    return (
        <>
        <Head>
            <title>遡弦望 / Phases Of The Moon</title>
        </Head>
        
        <main style={{background: '#2B4352'}}>
        <PageTitle 
        style={{color: '#ffffff'}}
        styleBorder={{background: '#ffffff'}}
        titleEn={'phases\nof\nthe moon'}
        titleJp={'朔弦望'}
        descTitle={'朔弦望とは?'}
        desc={'月は日常的に馴染みのある天体ですが、複雑な周期性があり、知れば知るほど奥深い存在です。最もシンプルなのは「新月（朔）・上弦・満月（望）・下弦」の4つの月相に区切って捉えることです。毎月の新月を1日（ついたち）とし、睦月・如月・弥生…のように月を和名で数える旧暦も「遡弦望」が基本となっています。'}
        ></PageTitle>

        <PageCompass src={"/potm/compass.svg"} style={{left: '12vw', top: '70px'}}></PageCompass>

        <div className={styles.monthesContainer}>
            <p className='only-sm'>詳細は月をタップ</p>
            <ul>
                {potmMonths.map((month, i) => (
                    <li key={i}>{month}<span className={styles.monthHover}><Image src={`/potm/${i}.svg`} width={250} height={150} style={{objectFit: 'contain'}} alt={month} /></span></li>
                ))}
            </ul>
        </div>
       
        </main>
        </>
    );
}

const potmMonths = ['閏如月','弥生','卯月','皐月','水無月','文月','葉月','長月','神無月','霜月','師走','睦月','如月',]