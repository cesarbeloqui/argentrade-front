import "./index.css";
import svgCirculo from "../../assets/svgCirculo.svg";
import useIntersection from "../../hooks/useIntersection";
import palabras from "../../assets/palabras.png";
import useLocalizedContent from "../../hooks/useLocalizedContent";

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
      className="sm:flex flex-col h-[150vh] sm:bg-secondary sm:items-center sm:p-14"
    >
      <div className="sm:w-[39vw] sm:mb-[1.9vw]">
        <h2 className="sm:text-center sm:text-[2.5vw] sm:font-bold sm:text-white sm:mb-[2.7vw]">
          {paraQuienesSection.titulo}
        </h2>
        <h3 className="sm:text-center sm:text-[1.4vw] sm:font-bold sm:text-white sm:mb-[.5vw]">
          {paraQuienesSection.subTitulo}
        </h3>
        {/* Contenido */}
        <p className="sm:text-center sm:text-xl sm:font-semibold sm:text-naranja">
          {paraQuienesSection.contenido}
        </p>
      </div>
      <div className={`sm:relative sm:w-[90vw] sm:h-[100vh] sm:left-3`}>
        <img
          src={paraQuienesSection.palabras}
          alt=""
          className={`sm:absolute sm:top-0 sm:left-[5vw] sm:right-0 sm:bottom-0 sm:m-auto sm:h-[37vw] `}
        />
        <img
          id={elementId}
          ref={(el) => (elementsRef.current[elementId] = el)}
          src={svgCirculo}
          alt=""
          className={`sm:absolute sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:m-auto sm:h-[30vw] sm:w-[30vw] ${isVisible ? "animate-roll-in" : ""}`}
        />
      </div>
    </section>
  );
};

export default ParaQuienes;
