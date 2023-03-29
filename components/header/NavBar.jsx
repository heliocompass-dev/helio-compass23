import styles from './navBar.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import snsInfo from '../../data/snsInfo';

export default function NavBar({setIsOpen}) {
    const navItem = Object.values(navLinkItem)
    const [about, start, live, connect] = navItem
    
    const menuCloseHandler = () => {
        setIsOpen(false)
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.navCat}>
                <h4>地球暦について</h4>
                <ul>
                    {about.map((item, i) => (
                        <li key={i}><Link onClick={menuCloseHandler} href={`/${item.link}`}>{item.title}<br/><span>{item.subTitle}</span></Link></li>
                    ))}
                </ul>
            </div>

            <div className={styles.navCat}>
                <h4>地球暦をはじめる</h4>
                <ul>
                    <li className={styles.navLinkToShop}><a href={'https://heliostera.theshop.jp/'} target={'blank'}>購入する<br/><span>purchase</span></a></li>
                    {start.map((item, i) => (
                        <li key={i}><Link onClick={menuCloseHandler} href={`/${item.link}`}>{item.title}<br/><span>{item.subTitle}</span></Link></li>
                    ))}
                </ul>
            </div>

            <div className={styles.navCat}>
                <h4>地球暦と暮らす</h4>
                <ul>
                    {live.map((item, i) => (
                        <li key={i}><Link onClick={menuCloseHandler} href={`/${item.link}`}>{item.title}<br/><span>{item.subTitle}</span></Link></li>
                    ))}
                </ul>
            </div>

            <div className={styles.navCat}>
                <h4>地球暦と繋がる</h4>
                <ul>
                    {connect.map((item, i) => (
                        <li key={i}><Link onClick={menuCloseHandler} href={`/${item.link}`}>{item.title}<br/><span>{item.subTitle}</span></Link></li>
                    ))}
                </ul>
            </div>

            <div className={styles.sns}>
            <ul>
                {snsInfo.map((item) => (
                <li key={item.title}><a href={item.url} target={'blank'}><Image src={`/icon/${item.title}.svg`} width={item.width} height={20} alt={item.title} /></a></li>
                ))}
            </ul>
            </div>
        </nav>
    );
}


const navLinkItem = {
    about: [ //地球暦について
        {
            title: '地球暦の概要',
            subTitle: 'over view',
            link: 'About',
        },
        {
           title: 'ビジョン',
           subTitle: 'vision',
           link: 'Vision', 
        },
        {
           title: 'イベント情報',
           subTitle: 'event',
           link: 'EventList', 
        }
    ],
    start: [ //地球暦をはじめる
        {
            title: '読み方',
            subTitle: 'how to read',
            link: 'Read',
        },
        {
            title: '使い方',
            subTitle: 'how to use',
            link: 'Use',
        },
    ],
    live: [ //地球暦と暮らす
        {
            title: '時環図',
            subTitle: 'circle of time',
            link: 'CircleOfTime',
        },
        {
            title: '太陽系の世界',
            subTitle: 'wonder of world',
            link: 'WonderOfWorld',
        },
        {
            title: '二十四節気',
            subTitle: 'twenty-four divisions',
            link: 'TwentyFourDivision',
        },
        {
            title: '惑星会合',
            subTitle: 'planty alignments',
            link: 'PlantyAlignments',
        },
        {
            title: '月めくり',
            subTitle: 'geometric moon movement',
            link: 'GeometricMoonMovement',
        },
        {
            title: '遡弦望',
            subTitle: 'phases of the moon',
            link: 'PhasesOfTheMoon',
        },
        {
            title: '太陽系をはかる',
            subTitle: 'measure the solar system',
            link: 'Measure',
        },
    ],
    connect: [ //地球暦と繋がる
        {
            title: 'コンタクト',
            subTitle: 'contact',
            link: 'Contact',
        },
        {
            title: 'パートナー',
            subTitle: 'partner & shop',
            link: 'Partners',
        },
    ]
}

