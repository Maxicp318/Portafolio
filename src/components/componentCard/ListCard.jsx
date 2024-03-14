import styles from './listCard.module.css'
import CardCertification from './cardCertification'
import img from '../../img.json';


function ListCard(){

    return(
        <div>
            <ul className={styles.listadoGrid}>
                {img.map((i) => <CardCertification key={i.id} props={i}/>)}
            </ul>
        </div>
    )
}

export default ListCard;