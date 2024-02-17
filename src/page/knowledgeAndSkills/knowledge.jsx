import styles from './knowledge.module.css';
import logos from '../../logo.json';
import SoftSkills from './softSkills';
import TechnicalKnowledge from './technicalKnowledge';

function Knowlege(){
    return(
        <div className={styles.containerKnowledgeAndSkills}>
            <div className={styles.containerKnowledge}>
                <h2 className={styles.titulo}>Comocimientos Tecnicos</h2>
                <ul className={styles.containerUl}>
                    {logos.map((l) => <TechnicalKnowledge key={l.id} logo={l}/>)}
                </ul>
            </div> 
           <SoftSkills />
        </div>
    )
}

export default Knowlege;