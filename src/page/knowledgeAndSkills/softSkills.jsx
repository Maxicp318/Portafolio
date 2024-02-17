import styles from './knowledge.module.css';
import Btn from '../../components/buttons/button';

function SoftSkills(){
    return(
        <div className={styles.containerKnowledge}>
            <h2 className={styles.titulo}>Habilidades Blandas</h2>
            <div className={styles.containerDiv2}>
                <Btn addStyle={styles.softSkills} props={'Trabajo en equipo'}/>
                <Btn addStyle={styles.softSkills} props={'Escucha activa'}/>
                <Btn addStyle={styles.softSkills} props={'Actitud positiva'}/>
                <Btn addStyle={styles.softSkills} props={'Responsabilidad'}/>
                <Btn addStyle={styles.softSkills} props={'Flexibilidad'}/>
                <Btn addStyle={styles.softSkills} props={'Organizacion'}/>
                <Btn addStyle={styles.softSkills} props={'Proactividad'}/>
                <Btn addStyle={styles.softSkills} props={'Empatia'}/>
            </div>
        </div>
    )
}

export default SoftSkills;