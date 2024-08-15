import "./index.css";
import SvgCirculo from "./SvgCirculo";
import useIntersection from "../../hooks/useIntersection";
import useLocalizedContent from "../../hooks/useLocalizedContent";
import CirculoSpanish from "../Circulo/CirculoSpanish";

const ParaQuienes = () => {
  const [elementsRef, intersectingItems] = useIntersection({
    threshold: 0.1,
  });
  const { paraQuienesSection } = useLocalizedContent();

  // Como solo necesitas un solo elemento, puedes usar un único id
  const elementId = "1";
  const isVisible = intersectingItems[elementId] || false;
  return (
    <section
      id="para-quienes"
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
        {/*         <img
          src={paraQuienesSection.palabras}
          alt=""
          className={`absolute left-1 lg:-top-20 sm:-top-16 sm:left-[6%] sm:right-0 sm:bottom-0 sm:m-auto sm:h-[100%] `}
        /> */}
        {/* <img
          id={elementId}
          ref={(el) => (elementsRef.current[elementId] = el)}
          src={svgCirculo}
          alt=""
          className={`relative top-[8vw] left-[16vw] sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:m-auto h-[80%] sm:h-[80%] sm:w-[32%] ${isVisible ? "animate-roll-in" : ""}`}
        /> */}
        <SvgCirculo
          className={`relative left-[4vw] sm:left-[2vw] mt-3 sm:mt-0 h-[70vw] w-[90vw] sm:h-[35vw] sm:w-[50vw] ${isVisible ? "animate-zoom-in" : ""}`}
          id={elementId}
          elementsRef={elementsRef}
        />
      </div>
    </section>
  );
};

export default ParaQuienes;
