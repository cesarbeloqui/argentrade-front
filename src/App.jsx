import { lazy } from "react";

import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";

const Header = lazy(() => import("./components/Header/Header"));
const QueHacemos = lazy(() => import("./components/QueHacemos/QueHacemos"));

function App() {
  return (
    <Router>
      <Header />
      <QueHacemos />
    </Router>
  );
}

export default App;
