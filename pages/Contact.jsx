import Head from 'next/head';
import styles from './contact.module.scss'
import { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import Modal from '../components/items/Modal';


export default function Contact(){
  const form = useRef();

  const [show, setShow] = useState(false)

  const openModal = () => {
    setShow(true)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('contact@heliostera.com', 'template_jgh6kq7', form.current, 'hRwsfY5PpZX-w8mkV')
      .then((result) => {
        openModal()
      }, (error) => {
          console.log(error.text, 'error');
      });
      e.target.reset()
  };


  return (
    <>
      <Head>
        <title>地球暦について / Overview</title>
      </Head>
      <main className={styles.main} style={{background: '#f6f6f6'}}>
       <div className={styles.pageTitle}>
         <h1>contact us</h1>
         <p>講演やワークショップ開催のご依頼や、<br className='only-sm'></br>地球暦のお取り扱いなどお気軽にご連絡ください</p>
       </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <Image src='/contact/hero.jpg' quality={50} fill alt='contact image' />
            </div>
          </div>
        
          <div className={styles.formContainer}>
            <form ref={form} onSubmit={sendEmail}>
              
              <label>お名前 / Name</label>
              <input type="text" name="from_name" placeholder='Your name' required />
              <label>件名 / Subject</label>
              <input type="text" name="from_subject" placeholder='Subject of Message' required/>
              <label>メール / Email</label>
              <input type="email" name="from_email" placeholder='xxx@example.com' required />
              <label>メッセージ / Message</label>
              <textarea name="message" placeholder='Hello!' required/>
              <input type="submit" value="Send" className={styles.sendBtn} />
              <Modal show={show} setShow={setShow}/>
            </form>
        </div>

    </div>
    </main>
    </>
  
  );
};