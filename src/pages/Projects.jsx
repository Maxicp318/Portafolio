import { Element } from "react-scroll";
import Card from "../components/card";
import ProjectsOwn from "../../projects.json";
import FondoProjects from "../assets/bg_projects.jpg";

const Projects = () => {
  return (
    <Element name="Proyectos" className="px-2 flex items-center justify-center">
      <section
        className="w-full py-10 mt-16 rounded-2xl shadow-own-hard bg-cover flex flex-col items-center px-2 gap-6
        md:gap-10 md:w-2xl lg:w-5xl lg:py-4 lg:gap-6"
        style={{ backgroundImage: `url(${FondoProjects})` }}
        data-aos="flip-left"
      >
        <h1 
          className="h-auto w-2xs bg-gradient-own title sm:w-xl lg:w-4xl"
          data-aos="fade-right"
        >
          Proyectos
        </h1>
        <div 
          className='flex flex-col justify-center items-start gap-4 md:grid md:grid-cols-2 md:gap-4 lg:gap-6'
        >
          {
            ProjectsOwn.map((project) => (
              <Card key={project.id} props={project} type={"projects"}/>
            ))
          }
        </div>
        <a
          href="https://github.com/Maxicp318?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-800 p-4 hover:bg-purple-600 cursor-pointer tracking-wide rounded-2xl"
          data-aos="zoom-in"
        >
          Ver mas proyectos
        </a>
      </section>
    </Element>
  );
};

export default Projects;
