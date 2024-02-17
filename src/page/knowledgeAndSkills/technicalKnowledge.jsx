import styles from './technicalKnowledge.module.css';

function TechnicalKnowledge({ logo }){
    return(
        <div className={styles.containerKnowledge}>  
            <li className={styles.containerLi}>
                <img width={40} height={40} src={logo.logo} alt={logo.nombre} />
            </li>
            <h5 className={styles.titulo}>{logo.nombre}</h5>
        </div>
    )
}

export default TechnicalKnowledge;