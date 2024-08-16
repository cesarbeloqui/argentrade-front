import "./App.css";

import ParaQuienes from "./components/ParaQuienes/ParaQuienes";
import ChinaSection from "./components/ChinaSection/ChinaSection";
import ServiciosYProdustos from "./components/ServiciosYProductos/ServiciosYProdustos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import { useRef } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import QueHacemos from "./components/QueHacemos/QueHacemos";

function App() {
  const sectionHeader = useRef(null);
  const sectionQueHacemos = useRef(null);
  const sectionParaQuienes = useRef(null);
  const sectionServiciosYProductos = useRef(null);
  const sectionContacto = useRef(null);
  const activeSection = useIntersectionObserver([
    sectionHeader,
    sectionQueHacemos,
    sectionParaQuienes,
    sectionServiciosYProductos,
    sectionContacto,
  ]);
  useEffect(() => {
    // Actualiza el título de la página cuando activeSection cambia
    if (activeSection) {
      document.title = `${activeSection} | Argentrade`;
    }
  }, [activeSection]);
  useEffect(() => {
    // Realiza el scroll a la sección indicada por el hash en la URL
    if (window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <Header reff={sectionHeader} />
      <Whatsapp />
      <QueHacemos reff={sectionQueHacemos} />
      <ParaQuienes reff={sectionParaQuienes} />
      <ChinaSection />
      <ServiciosYProdustos reff={sectionServiciosYProductos} />
      <Contacto reff={sectionContacto} />
      <Footer />
    </>
  );
}

export default App;
