;import styles from './header.module.scss'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavBar from './NavBar';
import {motion as m} from 'framer-motion'

export default function Header() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [darkBgPage, setDarkBgPage] = useState(false)
    const [itemWhite, setItemWhite] = useState(false)
    const [spMenuIsOpen, setSpMenuIsOpen] = useState(false)

    useEffect(() => {
        if(window.innerWidth < 600 && isOpen){
          setSpMenuIsOpen(true)
        }else{
            setSpMenuIsOpen(false)
        }
      }, [isOpen])
    
    useEffect(() => {
        if(router.asPath === '/About' || router.asPath === '/WonderOfWorld' || router.asPath === '/PhasesOfTheMoon' || router.asPath === '/GeometricMoonMovement' || router.asPath === '/Vision'){
            setDarkBgPage(true)
        }else{
            setDarkBgPage(false)
        }
    }, [router.asPath])

    useEffect(() =>{
        if(darkBgPage && !isOpen){
            setItemWhite(true)
        } else {
            setItemWhite(false)
        }
    },[darkBgPage, isOpen])


    return (
        <m.header initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1}} className={styles.header}>
            <div className={styles.headerContainer}>
                 <div id="logo" className={styles.logo} style={{color: itemWhite && '#fff', top: spMenuIsOpen && 'calc(100% - 70px)', left: spMenuIsOpen &&  '50%', translate: spMenuIsOpen && '-50% 0'}}><Link href='/'><div id="logoNumber" className={styles.logoNumber}>10</div><div  id='logoText' className={styles.logoText}>太陽系空間地図 地球暦</div></Link></div>
                 <div className={styles.burgerContainer}>
                    <div className={styles.burger}  style={{border: itemWhite && '1px solid #fff'}} onClick={() => setIsOpen(!isOpen)}>
                        <span style={{rotate: isOpen ? '45deg' : '0deg', translate: isOpen ? '0 8.5px' : '0 0', background: itemWhite && '#fff'}}></span>
                        <span style={{opacity: isOpen ? 0 : 1, background: itemWhite && '#fff'}}></span>
                        <span style={{rotate: isOpen ? '-45deg' : '0deg', translate: isOpen ? '0 -8.5px' : '0 0', background: itemWhite && '#fff'}}></span>
                    </div>
                    <p style={{opacity: isOpen ? 0 : 1, color: itemWhite && '#fff'}}>menu</p>
                </div>
                <div className={styles.cart} >
                    <a href="https://heliostera.theshop.jp/" target={'blank'} rel={"noreferrer"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="19" viewBox="0 0 15.986 15.986" style={{fill: itemWhite && '#fff'}}>
                            <path id="headerCart" className={styles.headerCart} data-name="Icon material-shopping-cart" d="M6.3,15.789a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,6.3,15.789ZM1.5,3V4.6H3.1l2.878,6.067L4.9,12.624a1.545,1.545,0,0,0-.2.767,1.6,1.6,0,0,0,1.6,1.6h9.592v-1.6H6.632a.2.2,0,0,1-.2-.2l.024-.1.719-1.3H13.13a1.591,1.591,0,0,0,1.4-.823l2.862-5.188a.781.781,0,0,0,.1-.384.8.8,0,0,0-.8-.8H4.865L4.114,3ZM14.289,15.789a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,14.289,15.789Z" transform="translate(-1.5 -3)"  opacity="1"/>
                        </svg>
                        <p style={{color: itemWhite && '#fff'}}>ご購入はこちら</p>
                    </a>
                 </div>
            </div>

            {isOpen && <NavBar setIsOpen={setIsOpen}/>}

        </m.header>
    );
}
