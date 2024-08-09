import useLocalizedContent from "../../hooks/useLocalizedContent";
import "./index.css";

const Contacto = () => {
  const { contactoSection } = useLocalizedContent();
  return (
    <section id="contacto" className="bg-white">
      <div className="container">
        <div className="titulo">
          <h1>{contactoSection.titulo}</h1>
          <h2>{contactoSection.subTitulo}</h2>
        </div>
        <div className="nombre"></div>
        <div className="email"></div>
        <div className="telefono"></div>
        <div className="empresa"></div>
        <div className="mensaje"></div>
        <div className="boton"></div>
        <div className="contenido"></div>
      </div>
    </section>
  );
};
export default Contacto;
