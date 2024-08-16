import { lazy } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
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
    if (activeSection) {
      document.title = `${activeSection} | Argentrade`;
    }
  }, [activeSection]);
  return (
    <Router>
      <Header reff={sectionHeader} />
      <Whatsapp />
      <QueHacemos reff={sectionQueHacemos} />
      <ParaQuienes reff={sectionParaQuienes} />
      <ChinaSection />
      <ServiciosYProdustos reff={sectionServiciosYProductos} />
      <Contacto reff={sectionContacto} />
      <Footer />
    </Router>
  );
}

export default App;
