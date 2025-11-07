import Icon from "../../icon_lenguajes.json";

const Footer = () => {
    const whatsapp = Icon.redesSociales.find((r) => r.name === "WhatsApp")?.icon;
    const gmail = Icon.redesSociales.find((r) => r.name === "Gmail-Redondeado")?.icon;
    const linkedin = Icon.redesSociales.find((r) => r.name === "Linkedin")?.icon;
    const gitHub = Icon.tools.find((r) => r.name === "GitHub")?.icon;

    return (
        <footer
            className="w-full h-[10vh] mt-12 p-2 bg-black text-gray-300 text-sm border-t-2 
            border-purple-800 grid grid-cols-2 grid-rows-2 justify-items-center md:flex flex-row items-center 
            justify-between md:px-4 lg:px-10"
        >
            <span className="col-span-2 justify-self-center pt-6 md:p-0">
                © {new Date().getFullYear()} - Maxi Perez — Todos los derechos
                reservados.
            </span>
            <div className="col-start-1 row-start-1 flex gap-4 lg:gap-8 mt-2 sm:mt-0">
                <a
                    href="https://api.whatsapp.com/send?phone=3518109801"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 inline-block transition transform hover:scale-110 hover:brightness-110  lg:w-10 lg:h-10"
                >
                    <img src={whatsapp} alt="Icono de whatsApp" />
                </a>
                <a
                    href="https://github.com/Maxicp318"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 inline-block transition transform hover:scale-110 hover:brightness-110  lg:w-10 lg:h-10"
                >
                    <img src={gitHub} alt="Icono de gitHub" />
                </a>
                <a
                    href="https://www.linkedin.com/in/maxi-perez-3a0953228"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 inline-block transition transform hover:scale-110 hover:brightness-110  lg:w-10 lg:h-10"
                >
                    <img src={linkedin} alt="Icono de linkedIn" />
                </a>
                <a
                    href="mailto:maxiperez283@gmail.com"
                    class="w-10 h-10 inline-block transition transform hover:scale-110 hover:brightness-110  lg:w-10 lg:h-10"
                >
                    <img src={gmail} alt="Icono de gmail" />
                </a>
            </div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="col-start-2 row-start-1 text-purple-400 hover:text-purple-600 transition-colors"
            >
                ↑ Volver arriba
            </button>
        </footer>
    );
};

export default Footer;
