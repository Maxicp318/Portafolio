import { Link } from 'react-router-dom'
import styles from './cardCertification.module.css'

export function Card({ props }){

    return(
        <Link className={styles.link} to={"/detailsCard/" + props.id}>
            <li>
                <img className={styles.img} width={200} height={200} src={props.url} alt="" />
            </li>
            <h5 className={styles.titulo}>{props.nombre}</h5>
        </Link>
    )
}

