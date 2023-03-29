import styles from './about.module.scss'
import Image from 'next/image';
import BtnToChild from '../button/BtnToChild';
import colors from '../../data/colors';
import Link from 'next/link';
import {motion as m, useTransform, useMotionValue} from 'framer-motion'

export default function About() {

    const black = colors.black

    const scrollY = useMotionValue(0);

    const y1 = useTransform(scrollY, [0, window.innerHeight], [0, -window.innerHeight]);
    const y2 = useTransform(scrollY, [0, window.innerHeight], [0, window.innerHeight / 2]);

    const variants = {
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
            }
        },
        hidden: { opacity: 0,
    },
      }
    const variantsImg = {
        visible: { 
            opacity: 1,
            y: scrollY,
            transition: {
                staggerChildren: 0.4,
            }
        },
        hidden: { opacity: 0
    },
      }


      const item = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            }
        },
        hidden: {
            opacity: 0,
            y: 5
        }
      }

      const itemImg = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        },
        hidden: {
            opacity: 0,
        }
      }

      const itemLinkBtn = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
                delay: 1.5,
            }
        },
        hidden: {
            opacity: 0,
            y: 5
        }
      }


    return (
        <m.section layout variants={variants} initial={'hidden'} animate={'visible'} className={styles.container}>
            <m.div variants={variantsImg} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={styles.eyecatch}>
                <m.div style={{y: y1}} variants={itemImg}>
                    <Image width={300} height={400} src={'/home/about1.jpg'} style={{objectFit: 'cover'}} alt={'about eyecatch'} />
                </m.div>
                <m.div style={{y: y2}} variants={itemImg} width={270}>
                    <Image width={270} height={135} src={'/home/about2.jpg'} style={{objectFit: 'cover', filter: 'brightness(120%)', opacity: 0.9}}  alt={'about eyecatch'} />
                 </m.div>
            </m.div>
            <m.div variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={styles.content}>
                <m.h2 variants={item}>地球暦とは</m.h2>
                <m.span variants={item}></m.span>
                <m.p variants={item}>地球暦は私たちの住む太陽系を1兆分の1に縮尺した時空間の地図です。太陽を中心に丸い円で一年を表している地球暦は、日々変化する惑星の軌道や季節の変化を俯瞰して理解し、感じることができる暦です。太陽系の視点で眺めてみると、日々、惑星たちが規則正しく時を刻んていることがわかります。日常で使っている時計も、円盤の上で針が数字を指し示すだけの単純なものですが、多くの人々が使うことで生活の中に約束事を生み、社会を作っています。暦の日付が本質的に示しているのは、太陽、月、地球の位置関係です。</m.p>
                <m.p variants={item}>まずは地球のリズムに合わせることが、生きものにとって自然なあり方の道標です。あなたが地球のリズムとシンクロした時、目の前に広がるいつもの日常が違った風景に見えるはずです。<br/>星たちの奏でるリズムが自然を育み、季節を作ります。私たちの毎日が、星たちの運行によって彩られていることを地球暦で体感してみてください。</m.p>
                <m.ul variants={variants} initial={'hidden'} whileInView={'visible'} viewport={{once: true}} className={styles.linkBtns}>
                    <m.li variants={itemLinkBtn} > <Link href={'/About'} className={styles.btn} style={{borderLeft: `0.5px solid rgba(${black}, 0.5)`}} > <span style={{color: `${black}`}}>地球暦について</span>  <Image src={'/icon/arrow-yellow.svg'} width={16} height={16} alt={'arrow'} /> </Link></m.li>
                     <m.li variants={itemLinkBtn}> <Link href={'/Vision'} className={styles.btn} style={{border: `0.5px solid rgba(${black}, 0.5)`}} > <span style={{color: `${black}`}}>地球暦のビジョン</span>  <Image src={'/icon/arrow-yellow.svg'} width={16} height={16} alt={'arrow'} /> </Link></m.li>
                 
                </m.ul>
            </m.div>
        </m.section>
    );
}