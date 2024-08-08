import { lazy } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ParaQuienes from "./components/ParaQuienes/ParaQuienes";


const Header = lazy(() => import("./components/Header/Header"));
const QueHacemos = lazy(() => import("./components/QueHacemos/QueHacemos"));

function App() {


  return (
    <Router>
      <Header />
      <QueHacemos />
      <ParaQuienes/>
    </Router>
  );
}

export default App;
