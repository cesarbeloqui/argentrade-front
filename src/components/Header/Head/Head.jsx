import isologo from "../../../assets/isologo.png";
import carrusel from "../../../assets/carrousel.png";

const Head = () => {
  const subTittle =
    "Facilitamos importaciones desde China para el éxito global de tu empresa";
  return (
    <>
      <div className="relative h-[39.88vw] bg-hero-1 bg-no-repeat bg-top bg-contain bg-naranja justify-left align-middle flex">
        <div className="flex flex-col items-center pt-[12.1vw] w-[63%] h-full z-10 ">
          <img src={carrusel} alt="" className="relative w-[37.8vw] h-auto" />
          <h3 className="text-white text-[1.5153vw] font-medium mt-4 w-[49%]">
            {subTittle}
          </h3>
        </div>
        <div></div>
        {/* Isologo */}
        <img
          src={isologo}
          alt=""
          className="absolute left-[-9.5%] bottom-0 opacity-15 w-[79.5%] z-0"
        />
      </div>
    </>
  );
};
export default Head;
