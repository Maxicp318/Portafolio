import styles from './listCard.module.css'

function ListCard({ props, componentH }){
    
    const CardCertificado = componentH;

    return(
        <div>
            <ul className={styles.listadoGrid}>
                {props.map((i) => <CardCertificado key={i.id} props={i}/>)}
            </ul>
        </div>
    )
}

export default ListCard;