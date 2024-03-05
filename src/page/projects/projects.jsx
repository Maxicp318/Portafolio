import styles from './projects.module.css'
import Project from './project'
import project1 from '../../public/img/proyecto-1.png'
import project2 from '../../public/img/proyecto-2.png'
import project3 from '../../public/img/proyecto-3.png'

function Projects(){
  
  return (
    <div className={styles.containerProjects}>
      <h2 className={styles.titulo}>Proyectos</h2>
      <div className={styles.project}>
        <Project 
          img={project1} 
          description="primer proyecto"
          title="Land page" 
          text="Primer proyecto hecho en el curso de full stack en el Instituto MundosE,
          Land page creada con Html, Ccs, Sass, Bootstrap, JavaScript, React.js"
          web="https://pin-fullstack.netlify.app/"
          codigo="https://github.com/Maxicp318/Pin-FontEnd"/>

        <Project 
          img={project2} 
          description="segundo proyecto"
          title="Pagina de club de futbol Argentino" 
          text="Proyecto web de futbol argentino esta creado con Html5, modulos Css, usos de componentes
          React.js y archivos json para cargar la info de cada equipo" 
          web="https://lista-de-equipos-argentinos.netlify.app/"
          codigo="https://github.com/Maxicp318/List-Of-Teams"/>

        <Project 
          img={project3} 
          description="tercer proyecto"
          title="Portafolio" 
          text="Proyecto portafolio creada con Html5, modulos css, usos de Componentes, Hook, Router
          de react.js, archivos json para cargar  imagenes de certificaciones 
          y logos de lenguajes de programacion" 
          web="https://portafoliomaxi.netlify.app/"
          codigo="https://github.com/Maxicp318/Portafolio"/>
      </div>
    </div>
  )
}

export default Projects;
