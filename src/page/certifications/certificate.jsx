import ListCard from "../../components/componentCard/ListCard";
import styles from'./certificate.module.css';

function Certificate(){
    return(
        <div className={styles.containerCertificate}>
            <h2 className={styles.titulo}>Certificaciones</h2>
            <ListCard />
        </div>
    )
}

export default Certificate;