import styles from './btnToChild.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import colors from '../../data/colors';

export default function BtnToChild({children, href, white}) {
    
    const black = colors.black

    return (
        <Link href={href} className={styles.btn} style={{border: white ? '1px solid #fff' : `0.5px solid ${black}`}} >
            <span style={{color: white ? '#fff' : black}}>{children}</span>
           {
            white 
            ? <Image src={'/icon/arrow-white.svg'} width={16} height={16} alt={'arrow'} />
            : <Image src={'/icon/arrow-yellow.svg'} width={16} height={16} alt={'arrow'} />
           }
            
        </Link>
    );
}