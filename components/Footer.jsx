import styles from './footer.module.scss'
import Link from 'next/link'

export default function Footer(){
  return (
   <footer className={styles.container}>
       <div className={styles.policy}>
          <a href='https://heliostera.theshop.jp/law' target='_blank' rel="noreferrer">特定商取引法に基づく表記<br className='not-lg'></br>および個人情報保護方針</a>
       </div>
       <div className={styles.pageTitle}>
           <Link href='/'><h2>HELIO COMPASS <br></br><span>太陽系空間地図 地球暦</span></h2></Link>
       </div>
       <div className={styles.copyright}>
       <Link href='/'>© HELIOSTERA<br className='not-lg'></br>All Rights Reserved</Link>
          
       </div>
   </footer>

  
  )
}
