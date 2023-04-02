import styles from './caseStudy.module.scss'
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import {motion as m} from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import ImgExpandPopup from '../items/ImgExpandPopup';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function CaseStudy() {

    const imgSize = {width: 420, height: 560}
    const smImgSize = {width: window.innerWidth * 0.9, height: (window.innerWidth * 0.9) * (560 / 420)}
    const [perPage, setPerPage] = useState()
    const [spView, setSpView] = useState()

    useEffect(() => {
      const calculatedPerPage = Math.floor(window.innerWidth / imgSize.width);
      setPerPage(calculatedPerPage === 0 ? 1 : calculatedPerPage);
  }, [imgSize.width]);

    useEffect(() =>{
        window.innerWidth < 520 ? setSpView(true) : setSpView(false)
    },[])

    const sliderOptions = {
    
        pagination: false,
        drag: 'free',
        perPage: perPage, // 1400px以上の場合の初期値
        gap: '5rem',
        type: 'loop',
        arrows: false,
        autoScroll: {
          rewind: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          speed: 0.5,
        },
        breakPoints: {
          600: {
           gap: '7rem'
          },
    
        }
      };
        
  
    const [popupImage, setPopupImage] = useState(null);
      const openPopup = (imgSrc) => {
        setPopupImage(imgSrc);
      };
    
      const closePopup = () => {
        setPopupImage(null);
      };


    return (
        <section className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.title}>
                <h2>活用<br/>事例</h2>
                </div>
                <p>地球暦ユーザーによる「わたしの地球暦」を紹介します。それぞれの地球暦を持ち寄る「地球暦クエスト」も毎年開催しています！</p>
            </div>
            
            <Splide options={sliderOptions} extensions={{ AutoScroll }} key={perPage} className={styles.sliderContainer} tag="section" hasTrack={ false } aria-label="product images">
        
            <SplideTrack className={styles.slides}>  
            {cases.map((item, i) => (
                        <SplideSlide key={i}>
                            <m.div      
                            onClick={() => openPopup(`/home/${item.imgSrc}`)}>
                            <Image src={`/home/${item.imgSrc}`}  width={spView ? smImgSize.width : imgSize.width} height={spView ? smImgSize.height : imgSize.height} style={{border: '0.5px solid #eee'}} alt={'product image'}/>
                            <p>{item.title}</p>
                            </m.div>
                        </SplideSlide>
                    ))} 
            </SplideTrack>

              {popupImage && (
            <ImgExpandPopup imgSrc={popupImage} widthRatio={0.71} onClose={closePopup} />
            )}

            </Splide>
            <ul className={styles.links}>
                <li><a href="https://hcquest.xyz/" target={'blank'}>自分だけの暦をつくる「地球暦クエスト」<br className='only-sm'/><span className={styles.onlySmInvisible}>- </span>オフィシャルサイト<Image src={'/icon/arrow-yellow.svg'} width={16} height={16} alt={'arrow icon'} /></a></li>
                <li><a href="https://note.com/hcquest/n/na9d6e7e87f2a" target={'blank'}>2022年度「地球暦クエスト」結果発表 <br className='only-sm'/><span className={styles.onlySmInvisible}>- </span>note<Image src={'/icon/arrow-yellow.svg'} width={16} height={16} alt={'arrow icon'} /></a></li>
            </ul>
        </section>
    );
}

const cases = [ 
    {
        title: '土屋商店',
        imgSrc: 'case-tsuchiya.jpg',
    },
    {
        title: '竹の地球暦',
        imgSrc: 'case-banboo.jpg',
    },
    {
        title: '干し野菜とWECK保存瓶の一年',
        imgSrc: 'case-dryvege.jpg',
    },
    {
        title: '人口動態統計 出生数',
        imgSrc: 'case-population.jpg',
    }
]
