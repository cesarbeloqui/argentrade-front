import { ChevronRightIcon } from "@heroicons/react/20/solid";

const RightCard = ({ items }) => {
  return (
    <div className="sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-5">
      <ul
        role="list"
        className="flex flex-col gap-y-3 w-full h-[35vw]"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="relative flex flex-col items-center py-5 px-[3vw] bg-white sm:h-full sm:w-full scroll-trans-x"
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
        ))}
      </ul>
    </div>
  );
};

export default RightCard;
