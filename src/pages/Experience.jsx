import { Element } from "react-scroll";
import FondoExperience from '../assets/bg_experience.jpg';

const Experience = () => {
  return (
    <Element name="Experiencias" className="px-2 flex items-center justify-center">
        <section 
            className="w-full py-10 mt-16 rounded-2xl shadow-own-hard bg-cover flex flex-col items-center px-2 
            gap-6 md:gap-10 md:w-2xl lg:w-5xl lg:py-18 lg:gap-6"
            style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 90%)), url(${FondoExperience})` }}
            data-aos="flip-right"
        >
            <h1 className="h-auto w-2xs bg-gradient-own title sm:w-xl md:mb-2 lg:w-4xl"
                data-aos="fade-right"
            >
                Experiencias
            </h1>
            <div className="border-l-4 border-purple-800 pl-4 py-2 md:w-lg">
                <h2 className="text-3xl text-center pb-2"
                    data-aos="zoom-in"
                >
                    Capacitación - Ayi Group
                </h2>
                <h3 className="text-xl text-center pb-2 sm:text-2xl"
                    data-aos="zoom-in"
                >
                    19 agosto 2024 | 22 diciembre 2024
                </h3>
                <p className="text-lg bg-black/85 py-2 px-4 rounded-2xl whitespace-pre-line"
                    data-aos="flip-up"
                >
                    {`Capacitación en la empresa Ayi Group.\t
                    Adquisicion de conocimientos en desarrollo backend con Java, Spring Boot y Node.js. 
                    Fundamentos de desarrollo frontend con React.js.`}
                </p>
            </div>
        </section>
    </Element>
  )
}

export default Experience
