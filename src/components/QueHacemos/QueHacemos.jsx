import useLocalizedContent from "../../hooks/useLocalizedContent";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const QueHacemos = () => {
  const { queHacemosSection } = useLocalizedContent();
  console.log(queHacemosSection);
  return (
    <section id="que-hacemos" className="h-[90vh]">
      <div className="grid grid-cols-8 gap-28 mx-20 ">
        <LeftCard
          titulo={queHacemosSection.titulo}
          contenido={queHacemosSection.contenido}
        />
        <RightCard />
      </div>
    </section>
  );
};

export default QueHacemos;
