import Icon from "../../icon_lenguajes.json";
import Fondo from '../assets/bg_knowledge.jpg'
import List from '../components/list.jsx';
import { Element } from "react-scroll";
import "aos/dist/aos.css";

const Knowledge = () => {
  const frontEnd = Icon.frontEnd.filter((i) => i.id >= 2 && i.id <= 7);
  const backEnd = Icon.backEnd.filter((i) => i.id >= 10 && i.id <= 14);
  const tools = Icon.tools.filter((i) => i.id >= 15 && i.id <= 18);

  return (
    <Element 
      name="Conocimientos" 
      className="px-2 flex items-center justify-center"
    >
      <section 
        className="w-full py-10 mt-16 rounded-2xl shadow-own-hard bg-cover flex flex-col items-center px-2
        gap-6 sm:gap-8 md:py-4 md:px-8 md:w-2xl lg:w-5xl"
        style={{backgroundImage: `linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 90%)),url(${Fondo})`}}
        data-aos="fade-down"      
      >
        <h1 
          className="h-auto w-2xs bg-gradient-own title sm:w-xl lg:w-4xl"
          data-aos="fade-right"
        >
          Conocimientos
        </h1>
        <List props={frontEnd} title={'Frond-End'}/>
        <List props={backEnd} title={'Back-End'}/>
        <List props={tools} title={'Herramientas'}/>
      </section>
    </Element>
  );
};

export default Knowledge;
