import useLocalizedContent from "../../hooks/useLocalizedContent";
import ListaDeItems from "../ListaDeItems/ListaDeItems";
import LeftCard from "./LeftCard";

const QueHacemos = ({ reff }) => {
  const { queHacemosSection } = useLocalizedContent();
  return (
    <section
      id="que-hacemos"
      ref={reff}
      data-section="¿Que hacemos?"
      className="scroll-quehacemos inline-flex mx-5 sm:mx-20 my-5 sm:my-10"
    >
      <div className="sm:grid sm:grid-cols-2 sm:grid-rows-[0.5fr_1.1fr_1.1fr_1.1fr] sm:gap-x-[5vw]">
        <LeftCard
          titulo={queHacemosSection.titulo}
          contenido={queHacemosSection.contenido}
        />
        <ListaDeItems items={queHacemosSection.items} efect="right" />
      </div>
    </section>
  );
};

export default QueHacemos;
