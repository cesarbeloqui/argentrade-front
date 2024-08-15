
import PropTypes from "prop-types";

const ListaDeItems = ({ items, efect }) => {

  return (
    <div className="sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-5">
      <ul role="list" className="flex flex-col gap-y-3 w-full md:pl-[4.2vw]">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              id={item.id}
              className={`relative flex flex-col items-center py-5 px-[3vw] bg-white sm:h-full sm:w-full animated-enter-${efect}`}
            >
              <div className="flex relative sm:absolute sm:z-10 sm:inset-0 h-[14vw] w-[14vw] sm:h-[4.5vw] sm:w-[4.5vw] sm:-left-8 my-auto rounded-full justify-center items-center bg-naranja">
                <img
                  className="h-[12vw] sm:h-[3vw] object-cover p-2 sm:p-0"
                  src={item.iconUrl}
                  alt=""
                />
              </div>
              <div className="sm:flex sm:items-left sm:gap-x-4 sm:w-[100%] ml-[2vw]">
                <p className="sm:text-[1.3vw] font-semibold sm:text-left text-secondary">
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

ListaDeItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListaDeItems;
/* 

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>


*/