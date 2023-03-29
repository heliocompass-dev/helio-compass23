 import Head from 'next/head';
import styles from './plantyAlignments.module.scss'
import Image from 'next/image';
import PageTitle from '../components/items/PageTitle';
import { useState, useEffect } from 'react';

export default function PlantyAlignments() {

    const [selectedFirstHalf, setSelectedFirlsHalf] = useState(true)
    const [selectedMonth, setSelectedMonth] = useState(null)
      
    // alignmentsListの中からfirstHalfの真偽値に応じて、上半期と下半期を入れ替える
    const halfItems = alignmentsList.filter((obj) => obj.firstHalf === selectedFirstHalf)

    // alignmentsListのすべてのdataの配列を一つにつなげる
    const halfItemsDatas = halfItems.reduce((acc, currentObj) => {
        return acc.concat(currentObj.data)
    }, [])

    const toggleHalfYear = () => {
        setSelectedFirlsHalf(prev => !prev)
        setSelectedMonth(null)
    }

    const handleMonthBtn = (e) => {
        setSelectedMonth(e.target.value)
    }
    

    return (
        <>
        <main className={styles.container}>
           <PageTitle
                style={{color: '#333'}}
                styleBorder={{background: '#333'}}
                titleEn={'planetly\nalignments'}
                titleJp={'惑星会合'}
                descTitle={'PLANETLY ALIGNMENTS'}
                desc={'ふたつの惑星が一列に並ぶときや、太陽を挟んで向かい合う位置関係を天文用語では「合」や「衝」と呼びます。地球暦では分かりやすく惑星の会合を「結び（最も近い時）」と「開き（最も遠い時）」とし、これらが円盤上で美しい幾何学的な動きをしていることから、各惑星が調和的な周期を持っていることがわかります。365日の地球の一年の軌道に慣れたら、次は584日の金星や、780日の火星などの会合周期に乗ってみてください。'}
                />
        
        <div className={styles.intro}>
            <div className={styles.halfYearBtns}>
                <button disabled={selectedFirstHalf} onClick={toggleHalfYear}>上半期 / the 1st half of the year</button>
                <button disabled={!selectedFirstHalf} onClick={toggleHalfYear}>下半期 / the 2nd half of the year</button>
            </div>

            <div className={styles.months}>
            <p className={styles.monthsCaption}>各月の惑星会合データ</p>
                <ul className={styles.monthsBtn}>
                    {halfItems.map((item) => (
                        <li key={item.id}> <button value={item.id} onClick={handleMonthBtn} disabled={item.id === selectedMonth}>{item.name}</button> </li>
                        ))}

                    {selectedFirstHalf
                    ? <p>total / 49times</p>
                    : <p>total / 48times</p>
                    }

                    </ul>
                {halfItems.map((item) => (
                    <ul className={styles.monthsData} key={item.id}>
                        {selectedMonth === item.id &&
                        item.data.map((data, i) => <li key={i}>{data}</li>)
                    }
                    </ul>
                ))}
            </div>
        </div>

        <div className={styles.content} >
            {
                halfItemsDatas.map((item, i) => (
                    selectedFirstHalf ?
                    <div className={styles.imgContainer} key={i}>
                        <Image width={300} height={200} quality={75} style={{objectFit: 'contain'}} src={`/pa/first/${i}.png`} alt={i} />
                    </div>
                    :
                    <div className={styles.imgContainer} key={i}>
                    <Image width={300} height={200}  quality={75} style={{objectFit: 'contain'}} src={`/pa/second/${i}.png`} alt={i} />
                    </div>
                    ))
                }
        </div>

        </main>
    </>
    );
}

const alignmentsList = [
    {
        id: '2303',
        name: '3月',
        firstHalf: true,
        data: [
            '03/22/2023 MER & JUP 0°',
            '03/27/2023 MCR & URA 0°'
        ],
    },
    {
        id: '2304',
        name: '4月',
        firstHalf: true,
        data: [
           '04/07/2023 MER & PLU 180° MER & VEN 0°',
           '04/09/2023 VEN & PLU 180°',
           '04/10/2023 MCR & MAR 0°',
           '04/12/2023 EAR & JUP 180°',
           '04/13/2023  MER & SAT 180°',
           '04/19/2023 MCR & NEP 180°',
           '04/22/2023 VEN & MAR 0°',
           '04/26/2023 MER & JUP 180°',
           '04/29/2021 VEN & SAT 180°'
        ],
    },
    {
        id: '2305',
        name: '5月',
        firstHalf: true,
        data: [
            '05/02/2023 MCR & CAR 0°',
            '05/04/2023 MER & URA 180',
            '05/10/2023 EAR & URA 180',
            '05/14/2023 VIN & NEP 180',
            '05/17/2023 MAR & SAT 180',
            '05/29/2023 MER & PLU 0°',
        ],
    },
    {
        id: '2306',
        name: '6月',
        firstHalf: true,
        data: [
            '06/03/2023 VIN & JUP 180',
            '06/07/2023 MCR & SAT 0°',
            '06/10/2023 MER & MAR 180°',
            '06/13/2023 MER & NEP 0°',
            '06/17/2023 VEN & URA 180”',
            '06/19/2023 MER & JUP 0°',
            '06/23/2023 MCR & URA 0°',
            '06/25/2023 MER & VEN 180',
        ],
    },
    {
        id: '2307',
        name: '7月',
        firstHalf: true,
        data: [
            '07/01/2023 MER & EAR 180',
            '07/04/2023 MER & PLU 180',
            '07/11/2023 MER & SAT 180',
            '07/14/2023 MAR & NEP 180',
            '07/16/2023 MER & NEP 180 MER & MAR 0°',
            '07/22/2023 EAR & PLU 0°',
            '07/26/2023 MCR & JUP 180',
            '07/31/2023 VEN & PLU 0°',
        ],
    },
    {
        id: '2308',
        name: '8月',
        firstHalf: true,
        data: [
            '08/01/2023 MER & URA 180°',
            '08/13/2023 VIN & EAR 0°',
            '08/22/2023 VEN & SAT 0°',
            '08/25/2023 MER & PLU 0°',
            '08/27/2023 EAR & SAT 0°',
        ],
    },
    {
        id: '230901',
        name: '9月',
        firstHalf: true,
        data: [
            '09/04/2023 MCR & SAT 0°',
            '09/05/2023 VIN & NEP 0°',
            '09/06/2023 MER & CAR 0°',
            '09/09/2023 MER & NEP 0',
            '09/11/2023 MER & VEN 0°',
            '09/15/2023 MER & MAR 180',
            '09/17/2023 MER & JUP',
            '09/19/2023 MER & URA 0° EAR & NEP 0',
        ],
    },
    {
        id: '230902',
        name: '9月',
        firstHalf: false,
        data: [
            '09/26/2023 VEN & MAR 180°',
            '09/30/2023 MER & PLU 180°',
        ],
    },
    {
        id: '2310',
        name: '10月',
        firstHalf: false,
        data: [
            '10/01/2023 VEN & JUP 0°',
            '10/07/2023 MER & SAT 180°',
            '10/09/2023 VEN & URA 0°',
            '10/12/2023 MER & NEP 180°',
            '10/15/2023 MAR & JUP 180°',
            '10/20/2023 MER & EAR 180°',
            '10/24/2023 MER & JUP180°',
            '10/26/2023 MER & MAR 0°',
            '10/28/2023 MER & URA 180°',
        ],
    },
    {
        id: '2311',
        name: '11月',
        firstHalf: false,
        data: [
            '11/03/2023 EAR & JUP 0°',
            '11/09/2023 MAR & URA 180°',
            '11/14/2023 EAR & URA 0°',
            '11/18/2023 EAR & MAR 180°',
            '11/21/2023 MER & PLU 0° VEN & PLU 180°',
            '11/22/2023 MER & VEN 180°',
        ],
    },
    {
        id: '2312',
        name: '12月',
        firstHalf: false,
        data: [
            '12/02/2023 MER & SAT 0°',
            '12/06/2023 MER & NEP 0°',
            '12/14/2023 VEN & SAT 180°',
            '12/15/2023 MER & JUP 0°',
            '12/16/2023 MER & URA 0°',
            '12/20/2023 MER & MAR 180°',
            '12/23/2023 MER & EAR 0°',
            '12/26/2023 VEN & NEP 180°',
            '12/27/2023 MER & PLU 180°',
            
        ],
    },
    {
        id: '2401',
        name: '1月',
        firstHalf: false,
        data: [
            '01/04/2024 MER & SAT 180°',
            '01/08/2024 MER & NEP 180°',
            '01/19/2024 MER & VEN 0°',
            '01/20/2024 EAR & PLU 180°',
            '01/23/2024 MER & JUP 180°',
            '01/24/2024 MER & URA 180°',
            '01/27/2024 VEN & JUP 180°',
            '01/29/2024 VEN & URA 180°',
        ],
    },
    {
        id: '2402',
        name: '2月',
        firstHalf: false,
        data: [
            '02/12/2024 MER & MAR 0°',
            '02/17/2024 MER & PLU 0°',
            '02/28/2024 MER & SAT 0° MER & EAR 180°',
            '02/29/2024 EAR & SAT 180°',
        ],
    },
    {
        id: '2403',
        name: '3月',
        firstHalf: false,
        data: [
            '03/03/2024 MER & NEP 0°',
            '03/12/2024 VEN & PLU 0° MAR & PLU 0°',
            '03/13/2024 VEN & MAR 0°',
            '03/14/2024 MER & URA 0° MER & JUP 0° JUP & URA 0°',
            '03/17/2024 EAR & NEP 180°',
        ],
    },
  
  
]
