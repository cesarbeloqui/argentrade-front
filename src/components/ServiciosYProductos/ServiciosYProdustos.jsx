import useLocalizedContent from "../../hooks/useLocalizedContent";
import ListaDeItems from "../ListaDeItems/ListaDeItems";

const ServiciosYProdustos = () => {
  const { serviciosYProductosSection } = useLocalizedContent();
  return (
    <section id="servicios-y-productos" className="bg-secondary p-[6vw] bg-mapa bg-contain">
      <div className="h-[90vh] w-[40%] text-left">
        <ListaDeItems items={serviciosYProductosSection.items} efect="left" />
      </div>
    </section>
  );
};
export default ServiciosYProdustos;
