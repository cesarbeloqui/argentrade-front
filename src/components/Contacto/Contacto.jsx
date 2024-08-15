import { useRef } from "react";
import useLocalizedContent from "../../hooks/useLocalizedContent";
import "./index.css";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();
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
    "w-[90vw] sm:w-full m-2 sm:m-0 sm:h-[3.5vw] border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary";
  const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contacto"
      className="bg-white bg-contacto bg-right-bottom bg-no-repeat bg-[length:90%_auto] sm:bg-[length:40%_auto] pb-[10%]"
    >
      <form ref={form} onSubmit={sendEmail}>
        <div className="container-contacto sm:pl-[10vw] sm:pt-[4vw] ">
          <div className="titulo mb-[2vw]">
            <h1 className="text-secondary text-left font-bold text-3xl sm:text-[2.7vw] ml-5 mt-5 sm:m-0">
              {titulo}
            </h1>
            <h2 className="text-secondary text-left font-semibold sm:text-[1.5vw] ml-5 mt-5 sm:m-0">
              {subTitulo}
            </h2>
          </div>
          <div className="nombre">
            <input
              name="name"
              id="nombre"
              className={stylesInputs}
              placeholder={nombre}
            />
          </div>
          <div className="email">
            <input
              className={stylesInputs}
              type="email"
              placeholder={email}
              name="email"
            />
          </div>
          <div className="telefono">
            <input
              className={stylesInputs}
              type="text"
              placeholder={telefono}
              name="phone"
            />
          </div>
          <div className="empresa">
            <input
              className={stylesInputs}
              type="text"
              placeholder={empresa}
              name="empresa"
            />
          </div>
          <div className="mensaje sm:h-[15vw]">
            <textarea
              className="w-[90dvw] sm:w-full h-[30dvh] sm:h-full border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary resize-none"
              placeholder={mensaje}
              name="message"
            />
          </div>
          <div className="boton">
            <button
              type="submit"
              className="rounded-md bg-naranja sm:px-3.5 sm:py-2.5 text-sm font-semibold text-white shadow-gray-900 shadow-md hover:bg-azul focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul w-[90vw] sm:w-full h-[6vh] sm:h-auto"
            >
              {boton}
            </button>
          </div>
          <div className="contenido sm:pr-[40%] text-left text-secondary">
            {/*             <span className="font-medium">{contenido}</span>
            <br />
            <br />
            <span className="font-medium text-xl">{subContenido}</span> */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
