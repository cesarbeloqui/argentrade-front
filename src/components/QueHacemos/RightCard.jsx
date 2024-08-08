import useIntersection from "../../hooks/useIntersection";
import PropTypes from "prop-types";

const RightCard = ({ items }) => {
  const [elementsRef, intersectingItems] = useIntersection(
/*     {
      threshold: 0.5,
    } */
  );

  return (
    <div className="sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-5">
      <ul role="list" className="flex flex-col gap-y-3 w-full">
        {items.map((item, index) => {
          const isActive = intersectingItems[item.id]; // Usar el id del item para verificar si está en la vista
          return (
            <li
              key={index}
              id={item.id} // Asegúrate de que cada item tenga un id único
              ref={(el) => (elementsRef.current[index] = el)} // Asigna la referencia al elemento
              className={`relative flex flex-col items-center py-5 px-[3vw] bg-white sm:h-full sm:w-full ${isActive ? "animated-enter" : "animate-out"}`}
            >
              <div className="flex relative sm:absolute sm:inset-0 h-[14vw] w-[14vw] sm:h-[4.5vw] sm:w-[4.5vw] sm:-left-8 my-auto rounded-full justify-center items-center bg-naranja">
                <img
                  className="h-[12vw] sm:h-[3vw] rounded-full"
                  src={item.iconUrl}
                  alt=""
                />
              </div>
              <div className="sm:flex sm:items-center sm:gap-x-4">
                <p className="sm:text-[1.2vw] font-semibold sm:text-left text-secondary">
                  {item.contenido}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

RightCard.propTypes = {
  items: PropTypes.array.isRequired,
};

export default RightCard;
