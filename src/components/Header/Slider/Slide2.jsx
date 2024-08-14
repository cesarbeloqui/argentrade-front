import tick from "../../../assets/tick.svg";

const Slide2 = ({ slider, bg }) => {
  return (
    <div
      className={`relative h-[65vh] sm:h-[39.88vw] sm:w-full ${bg} bg-no-repeat bg-center bg-fixed bg-cover flex justify-left items-middle`}
    >
      <div className="animate-zoom-in flex flex-col my-16 ml-5 md:items-center md:justify-start sm:pl-[4vw]  sm:py-[50%] md:pl-[15%] lg:py-[5%] md:py-[0%] w-full md:w-[70%] sm:w-[60%] h-full z-10">
        {slider.map((item, index) => (
          <div key={item.id} className="flex w-full justify-start">
            <img
              src={tick}
              alt=""
              className="relative w-[7vw] sm:w-[4vw] h-auto"
            />
            <h3 className="text-white sm:text-3xl font-extrabold mt-4 w-[100%] text-left sm:leading-7 ml-6">
              {item.titulo}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
