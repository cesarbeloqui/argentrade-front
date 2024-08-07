const Slide1 = ({ carrusel, subTittle, isologo }) => {
  return (
    <div className="relative h-[65vh] sm:h-[39.88vw] sm:w-full bg-hero-1 bg-no-repeat bg-center bg-fixed bg-cover flex justify-left items-middle">
      <div className="animate-zoom-in flex flex-col items-center justify-center md:items-center md:justify-start sm:pt-[9vw] w-full sm:w-[63%] h-full z-10">
        <img
          src={carrusel}
          alt=""
          className="animate-zoom-in relative w-[70vw] sm:w-[37.8vw] h-auto"
        />
        <h3 className="text-white text-xs sm:text-[1.5153vw] font-medium mt-4 w-[49%]">
          {subTittle}
        </h3>
      </div>
      <img
        src={isologo}
        alt=""
        className="absolute sm:left-[-9.5%] bottom-0 opacity-15 sm:w-[79.5vw] z-0"
      />
    </div>
  );
};

export default Slide1;
