import useLocalizedContent from "../../hooks/useLocalizedContent";
import ReasaltarTexto from "../ReasaltarTexto/ResaltarTexto";

const ChinaSection = () => {
  const { chinaSection } = useLocalizedContent();
  return (
    <div className="relative h-[65vh] sm:h-[30vw] sm:w-full bg-china-section bg-no-repeat bg-center bg-cover flex justify-end items-middle p-14 sm:p-0">
      <div className="sm:w-[49%] sm:pt-[4vw] sm:pr-[4vw]">
        <h1 className="sm:text-[2.2vw] font-extrabold text-stroke-1-white text-left">
          {chinaSection.lead}
        </h1>
        <h1 className="sm:text-[3.55vw] text-white font-extrabold text-left sm:-mt-2">
          {chinaSection.titulo}
        </h1>
        <h2 className="sm:text-[1.8vw] text-white text-left sm:mt-[4.5vw] font-medium">
          <ReasaltarTexto text={chinaSection.contenido} className="font-bold" />
        </h2>
      </div>
    </div>
  );
};
export default ChinaSection;
