import tick from "../../../assets/tick.svg";

const Slide2 = ({ slider, bg }) => {
  return (
    <div
      className={`relative h-[65vh] sm:h-[39.88vw] sm:w-full ${bg} bg-no-repeat bg-center bg-fixed bg-cover flex justify-left items-middle`}
    >
      <div className="animate-zoom-in flex flex-col md:items-center md:justify-start sm:pl-[15vw] sm:py-[13%] w-full sm:w-[60%] h-full z-10">
        {slider.map((item, index) => (
          <div key={item.id} className="flex w-full justify-start">
            <img
              src={tick}
              alt=""
              className="relative w-[24vw] sm:w-[4vw] h-auto"
            />
            <h3 className="text-white text-3xl font-extrabold mt-4 w-[100%] text-left sm:leading-7 ml-6">
              {item.titulo}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
