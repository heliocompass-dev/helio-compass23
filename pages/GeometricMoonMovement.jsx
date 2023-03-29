import Head from 'next/head'
import styles from './geometricMoonMovement.module.scss'
import PageTitle from "../components/items/PageTitle"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"


export default function GeocentricMoonMovement(){
    const bgColor = '#335871'
    
    const [currentItem, setCurrentItem] = useState('1')
    const [spView, setSpView] = useState()
    console.log(spView);

    useEffect(() => {
     window.innerWidth > 600 ? setSpView(false) : setSpView(true)
    }, [])
    
    const handleItem = (e) => {
        setCurrentItem(e.target.value)
    }

    return(
        <>
        <Head>
            <title>月めくり / Geometric Moon Movement</title>
        </Head>

        <main style={{background: bgColor}}>
        <PageTitle 
        style={{color: '#fff'}}
        styleBorder={{background: '#fff'}}
        titleEn={'Geocentric\nMoon\nMovement'}
        titleJp={'月めくり'}
        desc={'太陽中心（ヘリオセントリック）での惑星たちの年間の動きを表した『地球暦』に対し、地球中心（ジオセントリック）に表したのが月めくりです。この2つの視座を手に入れることで、全景からさらに細かい動きが見て取れます。和暦の日付には、太陽系時空間での位置情報の意味が含まれていることを知り、「年月日」を「太陽-月-地球」の位置関係として理解することができます。'}
        ></PageTitle>

    <div className={styles.container}>
            {itemList.map((item, i) => ( 
                <div key={i}>
                    {currentItem === item.id && 
                        <div className={styles.intro} key={i}>
                        <div className={styles.introTitle}>
                            <h3>{item.title}</h3>
                            <p>{item.tanka}</p>
                        </div>
                        <div className={styles.introDate}>
                        <p className={styles.year}>{item.year}</p>
                        <p className={styles.date}><span>{item.fromMonth}</span>月<span>{item.fromDay}</span>日<Image src={'/icon/fromTo.svg'} width={30} height={30} alt={'from - to'} /><span>{item.toMonth}</span>月<span>{item.toDay}</span>日</p>
                        </div>
                    </div>
                    }
                </div>
            ))}
              <ul className={styles.monthList}>
                    {itemList.map((item) => (
                                <li key={item.id}><button value={item.id} disabled={currentItem === `${item.id}`} onClick={handleItem}>{item.title}</button></li>
                    ))}
              </ul>

            {itemList.map((item) => (
                <div key={item.id}>
                {currentItem === item.id &&
                    <div className={styles.content}>
                        <div className={styles.contentImg} style={{position: 'relative'}}>
                            <Image src={spView ? `/gmm/sm/${item.id}.jpg` : `/gmm/${item.id}.jpg`} fill alt={`gmm/${item.id}.jpg`} />
                        </div>
                        <div className={styles.message}>
                            {item.message}
                        </div>
                    </div>
                    }
                </div>
            ))}         
    </div>
 </main>
 </>
       
    )

      // 初期値を今日の日付にするDemo
    //  initialIdで任意のidは取得できる
    // 問題1 - useStateにinitialIdを初期値で持たせても反応しない
    // 問題2 - 2024年を考慮したデータの取得がまだ
    // 問題3 - 霜月が2023年と2024年にまたがっている問題をどうするか
    // const [initialId, setInitialId] = useState(null);
    // useEffect(() => {
    //   const today = new Date();
    //   const dd = today.getDate();
    //   const mm = today.getMonth() + 1;
  
    //   itemList.forEach((item) => {
    //     if (
    //       (mm === item.fromMonth && dd >= item.fromDay) ||
    //       (mm === item.toMonth && dd <= item.toDay) 
    //     ) {
    //       setInitialId(item.id);
    //       return;
    //     }
    //   });
    // }, []);
    // const [currentItem, setCurrentItem] = useState(initialId)
}

const itemList = [
    {
        id: '1',
        title: '睦月',
        tanka: 'あらたまの　年を迎えて　手をあわす　\n日月の巡り　結びつき',
        year: '2023',
        fromMonth: 1,
        fromDay: 22,
        toMonth: 2,
        toDay: 19,
        message: 'Happy Lunar New Year !! The First New Moon of the lunar year falls on January 22nd. \nAnother lunar cycle of the month begins on this day and spring is just around the corner!',
    },
    {
        id: '2',
        title: '如月',
        tanka: '春分の　目覚めの時ぞ　近づきて　\n春の陽気　さらに立つ',
        year: '2023',
        fromMonth: 2,
        fromDay: 20,
        toMonth: 3,
        toDay: 21,
        message: 'The Second New Moon of the lunar year falls on February 20th. Another lunar cycle of the month begins on this day and the vernal equinox is approaching!',
    },
    {
        id: '3',
        title: '如月閏',
        tanka: '新年度　宵の明星　輝きて　\n火星見上げる　春も夕暮れ',
        year: '2023',
        fromMonth: 3,
        fromDay: 22,
        toMonth: 4,
        toDay: 19,
        message: 'The Second New Moon(intercalary month) of the lunar year falls on March 22th. Another lunar cycle of the month begins on this day and the vernal equinox is approaching!',
    },
    {
        id: '4',
        title: '弥生',
        tanka: '土用明け　山から降りる　田の神が　\n一雨ごとに　咲かす花道',
        year: '2023',
        fromMonth: 4,
        fromDay: 20,
        toMonth: 5,
        toDay: 19,
        message: 'The third New Moon of the lunar year falls on April 20th. Another lunar cycle of the month begins on this day.',
    },
    {
        id: '5',
        title: '卯月',
        tanka: '稲光　天地の力が　ぶつかりて　\n役者が揃う　夏の幕開け',
        year: '2023',
        fromMonth: 5,
        fromDay: 20,
        toMonth: 6,
        toDay: 17,
        message: 'The fourth New Moon of the lunar year falls on May 20th. Another lunar cycle of the month begins on this day.',
    },
    {
        id: '6',
        title: '皐月',
        tanka: '北半球　光の頂点　定まりて　\n火金重なる　五日月',
        year: '2023',
        fromMonth: 6,
        fromDay: 18,
        toMonth: 7,
        toDay: 17,
        message: 'The fifth New Moon of the lunar year falls on June 18st. Another lunar cycle of the month begins on this day.',
    },
    {
        id: '7',
        title: '水無月',
        tanka: '満ちてくる　光も熱も　受けきって　\n夏を見送る　最近の月',
        year: '2023',
        fromMonth: 7,
        fromDay: 18,
        toMonth: 8,
        toDay: 15,
        message: 'The sixth New Moon of the lunar year falls on July 18th. Another lunar cycle of the month begins on this day.',
    },
    {
        id: '8',
        title: '文月',
        tanka: '中元の　膨らむ満月　もちもちと　\n明けの明星　最大光度',
        year: '2023',
        fromMonth: 8,
        fromDay: 16,
        toMonth: 9,
        toDay: 14,
        message: 'The seventh New Moon of the lunar year falls on August 16th. At the very beginning of autumn, another lunar cycle of the month commences.',
    },
    {
        id: '9',
        title: '葉月',
        tanka: 'さまざまな　恵みを受けて　秋本番　\n幕を下ろす　上半期',
        year: '2023',
        fromMonth: 9,
        fromDay: 15,
        toMonth: 10,
        toDay: 14,
        message: 'The eighth New Moon of the lunar year falls on September 15th. Another lunar cycle of the month begins on this day.',
    },
    {
        id: '10',
        title: '長月',
        tanka: '満ちる月　輝く木星　寄り添いて　\n秋から冬への　支度かな',
        year: '2023',
        fromMonth: 10,
        fromDay: 15,
        toMonth: 11,
        toDay: 12,
        message: 'The Ninth New Moon of the lunar year falls on October 15th. Another lunar cycle of the month begins on this day.',
    },
    {
        id: '11',
        title: '神無月',
        tanka: 'ひんやりと　夜風に吹かれる　オリオン座　\n有明月と　明けの明星',
        year: '2023',
        fromMonth: 11,
        fromDay: 13,
        toMonth: 12,
        toDay: 12,
        message: 'The Tenth New Moon of the lunar year falls on November 13th. With the advent of winter, another lunar cycle of the month commences.',
    },
    {
        id: '12',
        title: '霜月',
        tanka: '一年の　夜を越える　冬至にて　\n命の輪廻　北半球',
        year: '2023 - 2024',
        fromMonth: 12,
        fromDay: 13,
        toMonth: 1,
        toDay: 10,
        message: 'The eleventh New Moon of the lunar year falls on December 13th. Another lunar cycle of the month commences.',
    },
    {
        id: '13',
        title: '師走',
        tanka: '厳寒に　身体の芯を　温めて　\nじっくりと待つ　冬土用',
        year: '2024',
        fromMonth: 1,
        fromDay: 11,
        toMonth: 2,
        toDay: 9,
        message: 'The twelfth New Moon of the lunar year falls on January 11th. Another lunar cycle of the month begins on this day.',
    },
    {
        id: '14',
        title: '睦月',
        tanka: 'あらたまの　年を再び　迎え入れ　この足元に　春は訪れ',
        year: '2024',
        fromMonth: 2,
        fromDay: 10,
        toMonth: 3,
        toDay: 9,
        message: 'Happy Lunar New Year !!The First New Moon of the lunar year falls on February 10th. nother lunar cycle of the month begins on this day and spring is just around the corner!',
    },
    {
        id: '15',
        title: '如月',
        tanka: '地球号　新たな幕開け　新年度　\n最大会合　木天惑星',
        year: '2024',
        fromMonth: 3,
        fromDay: 10,
        toMonth: 4,
        toDay: 8,
        message: 'The Second New Moon of the lunar year falls on March 10th. Another lunar cycle of the month begins on this day and the vernal equinox is approaching!',
    },
] 