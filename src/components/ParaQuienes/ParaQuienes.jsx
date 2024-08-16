import "./index.css";
import SvgCirculo from "./SvgCirculo";
import useLocalizedContent from "../../hooks/useLocalizedContent";


const ParaQuienes = ({reff}) => {
  const { paraQuienesSection } = useLocalizedContent();
  return (
    <section
      id="para-quienes"
      ref={reff}
      data-section="¿Para Quienes?"
      className="flex flex-col relative bg-secondary items-center p-4 sm:p-8"
    >
      <div className="sm:w-[39vw] sm:mb-[1vw]">
        <h2 className="text-center sm:text-[2.5vw] font-bold text-white sm:mb-[1.2vw]">
          {paraQuienesSection.titulo}
        </h2>
        <h3 className="sm:text-center sm:text-[1.4vw] font-bold text-white sm:mb-[.5vw]">
          {paraQuienesSection.subTitulo}
        </h3>
        {/* Contenido */}
        <p className="sm:text-center sm:text-xl font-semibold text-naranja">
          {paraQuienesSection.contenido}
        </p>
      </div>
      <div className={``}>
        <SvgCirculo
          className={`relative left-[4vw] sm:left-[2vw] mt-3 sm:mt-0 h-[70vw] w-[90vw] sm:h-[35vw] sm:w-[50vw] animated-zoom-in`}
        />
      </div>
    </section>
  );
};

export default ParaQuienes;
