import styles from './sale.module.scss'
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import {useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Sale() {

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
        
      const { ref, inView } = useInView({
        // オプション
        // rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
        // triggerOnce: true, // 最初の一度だけ実行
      });

    return (
        <section ref={ref}  className={`${styles.container} ${inView && styles.active}`}>
            <div className={styles.intro}>
                <div className={styles.title}>
                    <h2>2023年度版<br className='only-sm'/><span>地球暦販売開始</span></h2>
                    <span className={styles.line}></span>
                    <p>最新版 地球暦2023年度版が発売されました。太陽系を1兆分の1（10の12乗）のスケールで表したA1サイズのポスターは、西暦・旧暦・二十四節気・朔弦望に加えて、惑星の動きまで一目瞭然。太陽系の大きな広がりに思いを馳せてください！</p>
                </div>
                <div className={styles.toShop}>
                    <a href={'https://heliostera.theshop.jp/'} target={'blank'}>ご購入は<br/>こちらへ</a>
                </div>
            </div>

            <Splide options={sliderOptions} extensions={{ AutoScroll }} key={perPage} className={styles.sliderContainer} tag="section" hasTrack={ false } aria-label="product images">
                <div className="splide__arrows" >
                    <button className={`splide__arrow splide__arrow--prev ${styles.prevBtn}`}>←</button>
                    <button className={`splide__arrow splide__arrow--next ${styles.nextBtn}`}>→</button>
                </div>
                
            <SplideTrack className={styles.slideImgs}>
            { [1,2,3,4].map((i) => (
                        <SplideSlide key={i}>
                            <Image priority src={`/home/sale${i}.jpg`} width={spView ? smImgSize.width : imgSize.width} height={spView ? smImgSize.height : imgSize.height} alt={'product image'}/>
                        </SplideSlide>
                    ))} 
            </SplideTrack>

            </Splide>
 
        </section>
    );
}