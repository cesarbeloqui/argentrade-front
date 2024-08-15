import useLocalizedContent from "../../hooks/useLocalizedContent";
import ReasaltarTexto from "../ReasaltarTexto/ResaltarTexto";

const ChinaSection = () => {
  const { chinaSection } = useLocalizedContent();
  return (
    <div className="relative h-[40vh] sm:h-[30vw] sm:w-full bg-china-section bg-no-repeat bg-[-2rem] sm:bg-center bg-cover flex justify-end items-center p-14 sm:p-0">
      <div className="flex flex-col pt-[20vh] sm:pt-0 sm:w-[49%] sm:pr-[4vw]">
        <h1 className="sm:text-[2.2vw] font-extrabold text-stroke-1-white text-left">
          {chinaSection.lead}
        </h1>
        <h1 className="sm:text-[3.55vw] text-white font-extrabold text-left sm:-mt-2">
          {chinaSection.titulo}
        </h1>
        <h2 className="sm:text-[1.8vw] text-white text-left sm:mt-[2vw] font-medium">
          <ReasaltarTexto text={chinaSection.contenido} className="font-bold" />
        </h2>
      </div>
    </div>
  );
};
export default ChinaSection;
