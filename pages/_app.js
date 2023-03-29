import Footer from '../components/Footer'
import Header from '../components/header/Header'
import '../styles/style.scss'
import Loading from '../components/items/Loading'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import IntroAnime from '../components/items/IntroAnime'


function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false)
  const [introAnime, setIntroAnime] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIntroAnime(false)
    }, 100);
  }, [])
  

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setPageLoading(true)
    const handleComplete = () => setPageLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })


  return (
    <>
    {introAnime ? <IntroAnime /> : <Header />}
    {pageLoading && <Loading/> }
    {introAnime ||
     <Component {...pageProps} />
    }
       <Footer />
    </>
  )
}

export default MyApp
