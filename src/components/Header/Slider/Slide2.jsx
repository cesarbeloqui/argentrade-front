import tick from "../../../assets/tick.svg";

const Slide2 = ({ slider, bg }) => {
  return (
    <div
      className={`relative h-[65vh] sm:h-[39.88vw] sm:w-full ${bg} bg-no-repeat bg-fixed bg-cover flex justify-center sm:justify-left bg-[-50vw_top] sm:bg-[0] items-middle`}
    >
      <div className="animate-zoom-in flex flex-col items-left justify-center  md:w-[70%] sm:w-[60%] w-fullh-full z-10 ">
        {slider.map((item, index) => (
          <div key={item.id} className="flex sm:w-full justify-start ">
            <img
              src={tick}
              alt=""
              className="relative w-[7vw] sm:w-[4vw] h-auto"
            />
            <h3 className="text-white sm:text-3xl font-extrabold mt-4 w-[80%] text-left sm:leading-7 ml-3 sm:ml-6">
              {item.titulo}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
