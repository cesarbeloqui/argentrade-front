import { lazy } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ParaQuienes from "./components/ParaQuienes/ParaQuienes";
import ChinaSection from "./components/ChinaSection/ChinaSection";
import ServiciosYProdustos from "./components/ServiciosYProductos/ServiciosYProdustos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import Whatsapp from "./components/Whatsapp/Whatsapp";

const Header = lazy(() => import("./components/Header/Header"));
const QueHacemos = lazy(() => import("./components/QueHacemos/QueHacemos"));

function App() {
  return (
    <Router>
      <Header />
      <Whatsapp/>
      <QueHacemos />
      <ParaQuienes />
      <ChinaSection />
      <ServiciosYProdustos />
      <Contacto />
      <Footer />
    </Router>
  );
}

export default App;
