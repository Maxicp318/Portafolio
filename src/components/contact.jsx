import Icon from '../../icon_lenguajes.json';

const contact = () => {

  const whatsapp = Icon.redesSociales.find(r => r.name === "WhatsApp")?.icon;
  const gmail = Icon.redesSociales.find(r => r.name === "Gmail-Redondeado")?.icon;
  const linkedin = Icon.redesSociales.find(r => r.name === "Linkedin")?.icon;
  const gitHub = Icon.tools.find(r => r.name === "GitHub")?.icon;

  return (
    <ul className="flex gap-8 mt-12 md:mt-0">
          <li data-aos="fade-up" data-aos-duration="1500">
            <a
              href="https://api.whatsapp.com/send?phone=3518109801"
              target="_blank"
              rel="noopener noreferrer"
              class="w-15 h-15 inline-block transition transform hover:scale-110 hover:brightness-110 md:w-20
              md:h-20 lg:w-16 lg:h-16"
            >
              <img src={whatsapp} alt="Icono de whatsApp" />
            </a> 
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <a
              href="mailto:maxiperez283@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-15 h-15 inline-block transition transform hover:scale-110 hover:brightness-110 md:w-20
              md:h-20 lg:w-16 lg:h-16"
            >
             <img src={gmail} alt="Icono de gmail" />
            </a>  
          </li>
          <li data-aos="fade-up" data-aos-delay="500">
            <a
              href="https://www.linkedin.com/in/maxi-perez-3a0953228"
              target="_blank"
              rel="noopener noreferrer"
              class="w-15 h-15 inline-block transition transform hover:scale-110 hover:brightness-110 md:w-20
              md:h-20 lg:w-16 lg:h-16"
            >
             <img className="rounded-full" src={linkedin} alt="Icono de linkedin"/>
            </a>  
          </li>
          <li data-aos="fade-up" data-aos-delay="800">
            <a
              href="https://github.com/Maxicp318"
              target="_blank"
              rel="noopener noreferrer"
              class="w-15 h-15 inline-block transition transform hover:scale-110 hover:brightness-110 md:w-20
              md:h-20 lg:w-16 lg:h-16"
            >
             <img src={gitHub} alt="Icono de gitHub" />
            </a>  
          </li>
        </ul>
  )
}

export default contact