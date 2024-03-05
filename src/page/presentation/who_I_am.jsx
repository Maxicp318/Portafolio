import Btn from '../../components/buttons/button'
import Foto_Perfil_2 from '../../public/img/Foto_Perfil_2.png';
import 'animate.css';
import styles from './who_i_am.module.css';

function Presentation() {
  return (
        <div className={styles.containerPresentation} id='who_i_am'>  
            <Btn addStyle={styles.btnDescarga} props={'Descargar Cv'} link={'https://drive.google.com/file/d/1FGIrCaZSOscZpCJo1ogAGVGxRgK34BNx/view?usp=sharing'} pagina={"_blank"}/>    
            <img className={styles.perfil} src={Foto_Perfil_2} alt="foto_perfil"/>      
            <h1 className={`animate__animated animate__backInDown ${styles.titulos}`}>Hola, soy Maximiliano Perez</h1>
            <h2 className={`animate__animated animate__backInDown ${styles.titulos}`}>Tecnico Superior En Programacion</h2>
            <article className={styles.containerText}>
                <p className={`animate__animated animate__fadeInDown who_I_am ${styles.textPresentation}`}>
                    Recibido del Instituto Superior Teclab.
                    <br />Me describo como una persona comprometida, proactivo y siempre con actitud positiva.
                    <br />Me destaco por mi empatia para formar buenas relaciones personales
                    y adaptarme muy bien al trabajar en equipo.
                    <br/>Cuento con muchos conocimientos y estoy abierto ha aprender nuevas tecnologias 
                    e habilidades que me complementen para seguir creciendo en mi desarrollo profesional
                    <br />
                    Mi objetivo es entrar a la industria IT; 
                    sumar experiencia para lograr ser un gran profesional en el mundo de la Proramacion. 
                </p>
            </article>
        </div>
    )  
}

export default Presentation;