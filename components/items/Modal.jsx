import styles from './modal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'


export default function Modal({show, setShow}){
    const closeModal = () =>{
        setShow(false)
    }

    if(show){
        return(
            <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShow(false)}>
                            Sent<FontAwesomeIcon className={styles.faIcon} icon={faThumbsUp} />
                            </button>
                    </div>
                </div>
        )
    }else{
        return null;
    }

}