import Btn from '../../components/buttons/button'
import Foto_Perfil_2 from '../../public/img/Foto_Perfil_2.png';
import 'animate.css';
import styles from './who_i_am.module.css';

function Presentation() {
  return (
        <div className={styles.containerPresentation} id='who_i_am'>  
            <Btn addStyle={styles.btnDescarga} props={'Descargar Cv'} link={'https://drive.google.com/file/d/1FGIrCaZSOscZpCJo1ogAGVGxRgK34BNx/view?usp=sharing'} pagina={"_blank"}/>    
            <img className={styles.perfil} src={Foto_Perfil_2} alt="foto_perfil"/>      
            <h1 className='animate__animated animate__backInDown'>Hola, soy Maximiliano Perez</h1>
            <article className={styles.containerText}>
                <p className={`animate__animated animate__fadeInDown who_I_am ${styles.textPresentation}`}>Un estudiante de la carrera Tecnico Superior En
                    Programacion en el Instituto Superior Teclab.
                    <br />Me describo como una persona comprometida, responsable y muy apasionada en el aprendisaje;
                    <br /> Cuento con gran motivación para avanzar en mi carrera
                    profesional y seguir adquiriendo nuevos conocimientos dia a dia siendo autodidacta.<br/>
                    Me destaco por trabajar en equipo y poder adaptarme muy bien al cambios. <br/>
                    Mi objetivo es encontrar una empresa que me permita aplicar mis conocimientos o
                    adquirir nuevos que sirvan para la productividad de la misma.
                </p>
            </article>
        </div>
    )  
}

export default Presentation;