import { Element } from "react-scroll";
import FotoPerfil from "../assets/perfil_2.png";
import Fondo from "../assets/bg_home.jpg";
import Contact from '../components/contact.jsx';
import "aos/dist/aos.css";

const Home = () => {

  return (
    <Element 
      name="Inicio" 
      className="pt-12 px-2 flex font-bold justify-center md:pt-6 lg:pb-8"
    >
      <section
        className="mt-16 py-10 rounded-2xl shadow-own-hard bg-cover flex flex-col items-center gap-6 w-3xl 
        md:w-2xl md:mt-20 md:px-2 md:grid md:grid-cols-4 md:grid-rows-4 md:gap-0 lg:w-5xl lg:grid-cols-5 
        lg:grid-rows-4 lg:px-4"
        style={{backgroundImage: `url(${Fondo})`}}
      >
        <a 
          href="https://drive.google.com/uc?export=download&id=1in1HI0wufcesthEO8e4EbRTqPIAshV6E"
          className="ml-2 p-4 justify-self-center self-start bg-opacity border-2 border-purple-800
          rounded-2xl cursor-pointer tracking-wide md:col-start-4 md:mr-2 md:justify-self-end
          lg:col-start-5 lg:p-4"
          data-aos="flip-left"
        >
          Descargar Cv
        </a>
        <img
          src={FotoPerfil}
          alt="foto perfil"
          className="w-40 h-40 bg-black/75 object-cover border-2 border-purple-800 rounded-full md:mb-8 
          md:ml-4 md:self-end md:justify-self-center md:row-span-2 md:row-start-1 lg:mb-4"
          data-aos="flip-right"
        />

        <h1 
          className="text-4xl pl-6 bg-opacity sm:text-5xl md:w-md md:col-span-3 md:justify-self-center 
          md:self-center lg:w-3xl lg:col-span-4"
          data-aos="fade-right"
        >
          Hola, soy Maximiliano Perez
        </h1>
        <h2
          className="text-2xl pl-2 bg-opacity sm:text-4xl md:p-0 md:col-span-4 md:text-center
          md:self-center md:justify-center lg:col-span-5"
          data-aos="flip-left"
        >
          Desarrollador Java | FullStack
        </h2>
        <div className="md:col-span-4 md:justify-self-center md:self-start lg:col-span-5 lg:self-center">
          <Contact />
        </div>
      </section>
    </Element>
  );
};

export default Home;