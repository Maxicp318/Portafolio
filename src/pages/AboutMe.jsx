import { Element } from "react-scroll";
import Fondo from '../assets/bg_aboutme.jpg';
import Img from "../assets/perfil_1.png";
import "aos/dist/aos.css";

const AboutMe = () => {

  return (
    <Element 
      name="SobreMi" 
      className="px-2 flex items-center md:justify-center"
    >
      <section 
        className="py-10 mt-16 flex flex-col items-center rounded-2xl shadow-own-hard 
        bg-cover px-1 gap-4 sm:py-20 md:py-4 md:px-8 md:w-2xl lg:w-5xl"
        style={{backgroundImage: `linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 90%)), url(${Fondo})`}}
        data-aos="fade-right"
      >
        <h1 
          className="h-auto w-2xs bg-gradient-own title sm:w-xl md:mb-2 lg:w-4xl"
          data-aos="fade-down-right" data-aos-duration="1500"
        >
          Sobre mi
        </h1>
        <div 
          className="px-8 py-4 bg-opacity "
        >
          <img 
            src={Img} 
            alt="Imagen de unas computadoras"
            className="hidden md:block w-35 h-45 border-2 border-purple-800 rounded-2xl mr-4 mt-4 float-left
            lg:mb-2" 
            data-aos="flip-down"
          />
          <p 
            className="pb-6 text-lg whitespace-pre-line tracking-wide md:pt-4 md:pb-4" 
            data-aos="fade-right" 
            data-aos-duration="800"
          >
            {`Soy una persona comprometida, con actitud positiva y gran capacidad de adaptación. \t
            Me destaco por mi empatía y habilidades interpersonales, lo que me permite integrarme
            fácilmente a equipos de trabajo colaborativos.`}
          </p>
          <p 
            className="pb-6 text-lg tracking-wide md:pb-4" 
            data-aos="fade-right" 
            data-aos-duration="800"
          >
            Cuento con conocimientos en desarrollo frontend, utilizando tecnologías como HTML, CSS,
            JavaScript y React, pero mi principal enfoque y especialización se orientan hacia el backend,
            donde disfruto trabajar con Java, Spring Boot y la gestión de bases de datos.
          </p>
          <p 
            className="text-lg tracking-wide md:pb-4" 
            data-aos="fade-right" 
            data-aos-duration="800"
          >
            Mi objetivo es formar parte del mundo IT, aportar valor desde el aprendizaje constante
            y continuar desarrollándome como profesional del software.
          </p>
        </div>
      </section>
    </Element>
  );
};

export default AboutMe;
