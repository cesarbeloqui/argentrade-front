import { useRef } from "react";
import useLocalizedContent from "../../hooks/useLocalizedContent";
import "./index.css";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const SUCESS = "SUCCESS";
const FAILED = "FAILED";

// Función simulada de sendForm
const simulateSendForm = (serviceId, templateId, form, options) => {
  return new Promise((resolve, reject) => {
    // Simular un tiempo de respuesta
    setTimeout(() => {
      // Simular éxito o error aleatoriamente
      const isSuccess = true;

      if (isSuccess) {
        resolve(); // Simular respuesta exitosa
      } else {
        reject({ text: "Error simulado" }); // Simular error
      }
    }, 3000); // 1 segundo de tiempo de espera
  });
};

const Contacto = ({ reff }) => {
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
    boton,
  } = contactoSection;
  const stylesInputs =
    "w-[90vw] sm:w-full m-2 sm:m-0 sm:h-[3.5vw] border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary";
  const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [noEnviado, setNoEnviado] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    // Aquí deberías recoger los datos del formulario
    const form2 = form.current; // Sustituye con los datos del formulario

    setEnviando(true);
    setEnviado(false);
    setNoEnviado(false);
    setMostrarBoton(false); // Oculta el botón al enviar

    /*     simulateSendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, {
      publicKey: YOUR_PUBLIC_KEY,
    })
      .then(() => {
        setEnviado(true);
        setEnviando(false);
        form2.reset();
        setMostrarBoton(true);
      })
      .catch(() => {
        setNoEnviado(true);
        setEnviando(false);
        setTimeout(() => {
          setNoEnviado(false); // Oculta el mensaje de error después de un tiempo
          setMostrarBoton(true); // Muestra el botón nuevamente
        }, 3000); // Tiempo en milisegundos (3000 ms = 3 segundos)
      }); */
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          setEnviado(true);
          setEnviando(false);
          form2.reset();
          setMostrarBoton(true);
        },
        () => {
          setNoEnviado(true);
          setEnviando(false);
          setTimeout(() => {
            setNoEnviado(false); // Oculta el mensaje de error después de un tiempo
            setMostrarBoton(true); // Muestra el botón nuevamente
          }, 3000); // Tiempo en milisegundos (3000 ms = 3 segundos)
        }
      );
  };

  return (
    <section
      ref={reff}
      data-section="Contactanos"
      id="contacto"
      className="scroll-contacto bg-white bg-contacto bg-right-bottom bg-no-repeat bg-[length:90%_auto] sm:bg-[length:40%_auto] pb-[10%]"
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
              required
              name="name"
              id="nombre"
              className={stylesInputs}
              placeholder={nombre}
            />
          </div>
          <div className="email">
            <input
              required
              className={stylesInputs}
              type="email"
              placeholder={email}
              name="email"
            />
          </div>
          <div className="telefono">
            <input
              required
              className={stylesInputs}
              type="text"
              placeholder={telefono}
              name="phone"
            />
          </div>
          <div className="empresa">
            <input
              required
              className={stylesInputs}
              type="text"
              placeholder={empresa}
              name="empresa"
            />
          </div>
          <div className="mensaje sm:h-[15vw]">
            <textarea
              required
              className="w-[90vw] sm:w-full h-[30vh] sm:h-full border-0 shadow-sm ring-2 ring-inset ring-naranja focus:ring-2 focus:ring-inset focus:ring-secondary resize-none"
              placeholder={mensaje}
              name="message"
            />
          </div>
          <div className="boton">
            {/*             <button
              type="submit"
              className="rounded-md bg-naranja sm:px-3.5 sm:py-2.5 text-sm font-semibold text-white shadow-gray-900 shadow-md hover:bg-azul focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul w-[90vw] sm:w-full h-[6vh] sm:h-auto"
            > */}
            {mostrarBoton && (
              <button
                type="submit"
                disabled={enviado || enviando}
                className="rounded-md bg-naranja sm:px-3.5 sm:py-2.5 text-sm font-semibold text-white shadow-gray-900 shadow-md hover:bg-azul focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul w-[90vw] sm:w-full h-[6vh] sm:h-auto"
              >
                {boton}
              </button>
            )}
            {enviado && (
              <p className="flex flex-row justify-center mt-3">
                Enviado <CheckCircleIcon className="h-5 w-5 text-green-500" />
              </p>
            )}
            {enviando && (
              <p className="flex flex-row justify-center mt-3">Enviando...</p>
            )}
            {noEnviado && !mostrarBoton && (
              <p className="flex flex-row justify-center mt-3">
                No enviado. Inténtalo de nuevo.{" "}
                <XCircleIcon className="h-5 w-5 text-red-500" />
              </p>
            )}
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
