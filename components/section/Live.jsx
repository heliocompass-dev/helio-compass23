import styles from './live.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {motion as m} from 'framer-motion'
import Popup from '../items/Popup'

export default function Live(){

    const popupImgSize = {width: 768 / 2, height: 1510 / 2}

    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imgSrc) => {
      setPopupImage(imgSrc);
    };
  
    const closePopup = () => {
      setPopupImage(null);
    };
  

    return(
        <section className={styles.container}>
            <div className={styles.title}>
                <h2><span>地球暦と</span><br/>暮らす</h2>
                <p>惑星のリズム、地球のリズムを体感できる地球暦。<br className='not-sm'/>生きものにとって自然なあり方を、地球暦はやさしく指し示してくれます。</p>
            </div>
            <div className={styles.content}>
                {liveContent.map((item, i) => (
                    <Link href={item.link}  key={i}>
                        <div className={styles.item}
                         >
                        <m.div className={styles.eyecatch}
                          whileHover={true}
                         onMouseEnter={() => openPopup(`${item.hoverImg}`)}
                         onMouseLeave={closePopup}>
                        <Image
                            src={`/home/${item.eyecatch}`}
                            width={item.width}
                            height={item.height}
                            alt={item.subTitle}
                        />
                        </m.div>
                        <div className={styles.itemTitle}>
                            <m.h3
                             whileHover={true}
                             onMouseEnter={() => openPopup(`${item.hoverImg}`)}
                             onMouseLeave={closePopup}
                            >
                                {item.title}
                            </m.h3>
                            <m.h4
                                whileHover={true}
                                onMouseEnter={() => openPopup(`${item.hoverImg}`)}
                                onMouseLeave={closePopup}
                            >
                                {item.subTitle}
                            </m.h4>
                        </div>
                        <div className={styles.itemCaption}>
                            <m.p 
                                whileHover={true}
                                onMouseEnter={() => openPopup(`${item.hoverImg}`)}
                                onMouseLeave={closePopup}
                            >{item.caption}</m.p>
                        </div>
                        <div className={styles.icon}>
                         <Image width={20} height={20} src={'/icon/arrow-yellow.svg'} alt={'arrow'} />
                        </div>
                    </div>
                    </Link>
                ))}
                    {/* {popupImage && (
            <Popup popupImgSize={popupImgSize} imageSrc={popupImage} onClose={closePopup} />
            )} */}
            </div>
        </section>
    )
}

const liveContent = [
    {
        title: '時環図',
        subTitle: 'circle of time',
        caption: '人は古来より地球や月の公転周期を日々の暮らしに生かして来ました。',
        eyecatch: 'cot.svg',
        width: 70,
        height: 70,
        link: '/CircleOfTime',
        hoverImg: '/cot/h-cot.png'
    },
    {
        title: '太陽系の世界',
        subTitle: 'wonder of world',
        caption: '太陽系を彩る個性豊かな惑星たちのものがたり。',
        eyecatch: 'wow.svg',
        width: 120,
        height: 70,
        link: '/WonderOfWorld',
        hoverImg: '/cot/h-cot.png'
    },
    {
        title: '遡弦望',
        subTitle: 'phases of the moon',
        caption: '遡弦望は、満月・新月・上弦・下弦など、月の満ち欠けの周期です。',
        eyecatch: 'potm.svg',
        width: 100,
        height: 70,
        link: '/PhasesOfTheMoon',
        hoverImg: '/cot/h-cot.png'
    },
    {
        title: '二十四節気',
        subTitle: 'twenty-four division',
        caption: '二十四節気は一年を二十四等分し、季節を表す区分です。四季を感じてください。',
        eyecatch: 'tfd.svg',
        width: 110,
        height: 70,
        link: '/TwentyFourDivision',
        hoverImg: '/cot/h-cot.png'
    },
    {
        title: '惑星会合',
        subTitle: 'planetly alignments',
        caption: '各惑星の位置関係は、調和的な周期を持っていることがわかります',
        eyecatch: 'pa.svg',
        width: 120,
        height: 80,
        link: '/PlantyAlignments',
        hoverImg: '/cot/h-cot.png'
    },
    {
        title: '月めくり',
        subTitle: 'geometric moon movement',
        caption: '「年月日」を「太陽-月-地球」の位置関係として理解することができます。',
        eyecatch: 'gmm.svg',
        width: 110,
        height: 70,
        link: '/GeometricMoonMovement',
        hoverImg: '/cot/h-cot.png'
    },
    {
        title: '太陽系をはかる',
        subTitle: 'measure the solar system',
        caption: '1兆分の1に縮尺した太陽系のスケールを身体尺で実感してください。',
        eyecatch: 'measure.svg',
        width: 110,
        height: 90,
        link: '/Measure',
        hoverImg: '/cot/h-cot.png'
    },
]