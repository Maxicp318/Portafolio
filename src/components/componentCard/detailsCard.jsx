import { useParams } from 'react-router-dom';
import img from '../../img.json';
import styles from './detailsCard.module.css';
import { Link } from 'react-router-dom'

function DetailsCard(){

    let { imgId } = useParams();
    const imgSelect = img.find(i => i.id === imgId);

    return(
        <div className={styles.containerDetails}>
            <img className={styles.img} src={imgSelect.url} alt="" />
            <div className={styles.containerTitulo}>
                <p className={styles.titulo}>Titulo:</p>
                <p className={styles.p}>{imgSelect.titulo}</p>
            </div>
            <Link className={styles.btn} to="/certifications">volver</Link>
        </div>
    )
}

export default DetailsCard;