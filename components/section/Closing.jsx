import styles from './closing.module.scss'
import Image from 'next/image';

export default function Closing() {
    return (
        <section className={styles.container}>
            <p>太陽系の視点で日常を俯瞰すると<br/>絶え間なく時空間を移動し続ける<br/>一瞬一瞬の連続であることに、<br className='only-sm'/>気づきます。</p>
            <Image width={225} height={225} src={'/home/compass.png'} alt={'compass image'} />
         </section>
    );
}