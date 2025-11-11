import { useState } from "react";

const Card = ({ props, type }) => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group w-80 h-auto rounded-2xl overflow-hidden bg-black/70 border-2 
        border-purple-800 transition-all duration-500 shadow-own-hard lg:hover:max-h-[600px]"
        data-aos="flip-up"
      >
        <h1 className="py-4 text-2xl text-center underline decoration-4 tracking-wide decoration-purple-800
          underline-offset-8"
        >
          {props.name}
        </h1>

        {type === "projects"? (
          <img
            className="w-full h-40 rounded-2xl object-cover transition-transform duration-500 
            lg:group-hover:scale-110"
            src={props.img}
            alt={props.name}
          /> ) : (
          <img
            className="w-full h-40 rounded-2xl object-cover transition-transform duration-500 cursor-pointer
            lg:group-hover:scale-110"
            src={props.img}
            alt={props.name}
            onClick={() => setOpen(true)}
          />)
        }

        <section 
          className="overflow-hidden transition-all duration-700 whitespace-pre-line lg:max-h-0
          lg:group-hover:max-h-[400px]"
        >
          <p className="py-4 px-2 tracking-wide">{props.description}</p>

          {type === "projects" ? (
            <div className="flex justify-evenly pb-4">
              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-30 border-2 cursor-pointer bg-black hover:bg-gray-900 hover:border-0 
                rounded-2xl p-2 text-center"
              >
                Código
              </a>
              <a
                href={props.video}
                target="_blank"
                rel="noopener noreferrer"
                className="w-30 border-2 cursor-pointer bg-red-600 hover:bg-red-700 hover:border-0 
                rounded-2xl p-2 text-center"
              >
                Video
              </a>
            </div> ) : (<span></span>)
          }
        </section>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex justify-center items-center transition-all 
          duration-500"
          onClick={() => setOpen(false)}
        >
          <img
            src={props.img}
            alt={props.name}
            className="w-full h-full object-contain cursor-pointer transition-transform duration-400"
          />
        </div>)
      }
    </>
  );
};

export default Card;