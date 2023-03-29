import styles from './partnerContent.module.scss'


export default function PartnerContent({name, address, tel, web}){

    return(
        <div className={styles.box}>
            <h3>{name}</h3>
            <p className={styles.address}>{address}<br></br>{tel}</p>
            <a href={web} rel="noreferrer" target='_blank'>{web}</a>
        </div>
    )
}