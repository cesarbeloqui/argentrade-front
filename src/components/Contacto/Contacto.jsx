import useLocalizedContent from "../../hooks/useLocalizedContent";
import "./index.css";

const Contacto = () => {
  const { contactoSection } = useLocalizedContent();
  const {
    titulo,
    subTitulo,
    nombre,
    email,
    telefono,
    empresa,
    mensaje,
    contenido,
    subContenido,
    boton,
  } = contactoSection;
  const stylesInputs =
    "w-full h-[3.5vw] border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary";

  return (
    <section id="contacto" className="bg-white">
      <form action="">
        <div className="container-contacto pl-[10vw] pt-[4vw]">
          <div className="titulo mb-[2vw]">
            <h1 className="text-secondary text-left font-bold text-[2.7vw]">
              {titulo}
            </h1>
            <h2 className="text-secondary text-left font-semibold text-[1.5vw]">
              {subTitulo}
            </h2>
          </div>
          <div className="nombre">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              name="nombre"
              id="nombre"
              className={stylesInputs}
              placeholder={nombre}
            />
          </div>
          <div className="email">
            <input className={stylesInputs} type="email" placeholder={email} />
          </div>
          <div className="telefono">
            <input
              className={stylesInputs}
              type="text"
              placeholder={telefono}
            />
          </div>
          <div className="empresa">
            <input className={stylesInputs} type="text" placeholder={empresa} />
          </div>
          <div className="mensaje h-[15vw]">
            <textarea
              className="w-full h-full border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary resize-none"
              placeholder={mensaje}
            />
          </div>
          <div className="boton">
            <button
              type="button"
              className="rounded-md bg-naranja px-3.5 py-2.5 text-sm font-semibold text-white shadow-gray-900 shadow-md hover:bg-azul focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul w-full"
            >
              {boton}
            </button>
          </div>
          <div className="contenido">
            {contenido} {subContenido}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
