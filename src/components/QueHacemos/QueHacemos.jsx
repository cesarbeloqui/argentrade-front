import useLocalizedContent from "../../hooks/useLocalizedContent";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const QueHacemos = () => {
  const { queHacemosSection } = useLocalizedContent();
  return (
    <section id="que-hacemos" className="sm:h-[90vh] mx-5 sm:mx-20 my-5 sm:my-10">
      <div className="sm:grid sm:grid-cols-2 sm:grid-rows-[0.5fr_1.1fr_1.1fr_1.1fr] sm:gap-x-[10vw]">
        <LeftCard
          titulo={queHacemosSection.titulo}
          contenido={queHacemosSection.contenido}
        />
        <RightCard items={queHacemosSection.items} />
      </div>
    </section>
  );
};

export default QueHacemos;
