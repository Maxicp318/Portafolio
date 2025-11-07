import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", to: "Inicio" },
    { name: "Sobre mi", to: "SobreMi" },
    { name: "Conocimientos", to: "Conocimientos" },
    { name: "Proyectos", to: "Proyectos" },
    { name: "Experiencias", to: "Experiencias" },
    { name: "Formacion", to: "Estudios" },
  ];

  return (
    <nav className="mt-4 border-b-2 text-purple-800 font-semibold px-6 py-4 fixed w-full z-1 bg-black/95
      shadow-own-hard"
    >
      <div className="flex">
        <button
          className="md:hidden hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex space-x-4 lg:space-x-12 w-full justify-center">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={800}
                offset={-30}
                spy={true}
                activeClass="text-white bg-purple-800 p-5 px-4 "
                className="hover:text-purple-400 cursor-pointer transition-transform duration-300 
                tracking-wide"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="flex flex-col justify-self-center mt-4 space-y-4 md:hidden">
          {links.map((link) => (
            <li className="text-center" key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={800}
                spy={true}
                offset={-50}
                activeClass="text-white bg-purple-800 p-2 px-4 rounded-2xl"
                className="hover:text-purple-400 cursor-pointer tracking-wide"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;