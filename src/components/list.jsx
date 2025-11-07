const List = ({ props, title }) => {
  return (
      <ul className="w-full">
        <h2
          className="border-2 border-purple-800 p-2 text-center text-lg bg-opacity rounded-2xl tracking-wide 
          lg:w-2xl lg:justify-self-center"
          data-aos="flip-left"
        >
          {title}
        </h2>

        <div 
          className="grid grid-cols-3 justify-items-center py-4 gap-4 sm:grid-cols-4 lg:grid-cols-6"
        >
          {props.map((item, index) => (
            <li
              key={index}
              className="bg-opacity shadow-2xl rounded-2xl w-30 h-30 justify-items-center hover:scale-125 
              transform transition-all duration-500" 
              data-aos="fade-down" data-aos-delay="300"
            >
              <img src={item.icon} alt={item.id} className="w-15 h-15" />
              <p className="pt-2 text-white text-[0.7rem] text-center tracking-widest">
                {item.name}
              </p>
            </li>
          ))}
        </div>
      </ul>
  );
};
export default List;