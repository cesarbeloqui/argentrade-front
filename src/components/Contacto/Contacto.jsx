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
    "sm:w-full sm:h-[3.5vw] border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary";

  return (
    <section
      id="contacto"
      className="bg-white bg-contacto bg-right-bottom bg-no-repeat bg-[length:40%_auto] sm:pb-[10%]"
    >
      <form action="">
        <div className="container-contacto sm:pl-[10vw] sm:pt-[4vw]">
          <div className="titulo sm:mb-[2vw]">
            <h1 className="text-secondary text-left font-bold sm:text-[2.7vw]">
              {titulo}
            </h1>
            <h2 className="text-secondary text-left font-semibold sm:text-[1.5vw]">
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
          <div className="mensaje sm:h-[15vw]">
            <textarea
              className="sm:w-full sm:h-full border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary resize-none"
              placeholder={mensaje}
            />
          </div>
          <div className="boton">
            <button
              type="button"
              className="rounded-md bg-naranja sm:px-3.5 sm:py-2.5 text-sm font-semibold text-white shadow-gray-900 shadow-md hover:bg-azul focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul sm:w-full"
            >
              {boton}
            </button>
          </div>
          <div className="contenido sm:pr-[40%] text-left text-secondary">
            <span className="font-medium">{contenido}</span>
            <br />
            <br />
            <span className="font-medium text-xl">{subContenido}</span>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
