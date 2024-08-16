import useLocalizedContent from "../../hooks/useLocalizedContent";
import ListaDeItems from "../ListaDeItems/ListaDeItems";

const ServiciosYProdustos = ({ reff}) => {
  const { serviciosYProductosSection } = useLocalizedContent();
  return (
    <section id="servicios-y-productos"
      ref={reff} data-section="Servicios y Productos"
      className="bg-secondary px-[6vw] py-[3vh] bg-mapa bg-contain">
      <div className="sm:h-[98%] sm:w-[40%] text-left">
        <ListaDeItems items={serviciosYProductosSection.items} efect="left" />
      </div>
    </section>
  );
};
export default ServiciosYProdustos;
