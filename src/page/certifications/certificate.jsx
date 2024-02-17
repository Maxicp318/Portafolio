import ListCard from "../../components/componentCard/ListCard";
import styles from'./certificate.module.css';
import img from '../../img.json';
import { Card } from '../../components/componentCard/cardCertification'

function Certificate(){
    return(
        <div className={styles.containerCertificate}>
            <h2 className={styles.titulo}>Certificaciones</h2>
            <ListCard props={img} componentH={Card}/>
        </div>
    )
}

export default Certificate;