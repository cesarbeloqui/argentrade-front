import { lazy } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ParaQuienes from "./components/ParaQuienes/ParaQuienes";
import ChinaSection from "./components/ChinaSection/ChinaSection";
import ServiciosYProdustos from "./components/ServiciosYProductos/ServiciosYProdustos";
import Contacto from "./components/Contacto/Contacto";

const Header = lazy(() => import("./components/Header/Header"));
const QueHacemos = lazy(() => import("./components/QueHacemos/QueHacemos"));

function App() {
  return (
    <Router>
      <Header />
      <QueHacemos />
      <ParaQuienes />
      <ChinaSection />
      <ServiciosYProdustos />
      <Contacto/>
    </Router>
  );
}

export default App;
