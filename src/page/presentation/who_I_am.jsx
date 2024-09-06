import Btn from '../../components/buttons/button'
import Foto_Perfil_2 from '../../public/img/Foto_Perfil_1.png';
import 'animate.css';
import styles from './who_i_am.module.css';

function Presentation() {
  return (
        <div className={styles.containerPresentation} id='who_i_am'>  
            <Btn addStyle={styles.btnDescarga} props={'Descargar Cv'} link={'https://drive.google.com/file/d/11QIXr-WDzJZG2H7JKn2uioqPARVyPylN/view?usp=sharing'} pagina={"_blank"}/>    
            <img className={styles.perfil} src={Foto_Perfil_2} alt="foto_perfil"/>      
            <h1 className={`animate__animated animate__backInDown ${styles.titulos}`}>Hola, soy Maximiliano Perez</h1>
            <h2 className={`animate__animated animate__backInDown ${styles.titulos}`}>Técnico Superior En Programación</h2>
            <article className={styles.containerText}>
            <p className={`animate__animated animate__fadeInDown who_I_am ${styles.textPresentation}`}>
                    Recibido del Instituto Superior Teclab.
                    <br />Me describo como una persona comprometida y positiva.
                    <br />Me destaco por mi empatía que me ayuda a formar buenas relaciones personales
                    y me permite adaptarme muy bien al trabajo en equipo.
                    <br/>Cuento con muchos conocimientos y estoy abierto ha aprender nuevas tecnologías 
                    e habilidades que me complementen para seguir creciendo en mi desarrolló personal.
                    <br />
                    Mi objetivo es ser parte del mundo IT;
                    sumar experiencia para lograr ser un gran profesional.
                </p>
            </article>
        </div>
    )  
}

export default Presentation;
