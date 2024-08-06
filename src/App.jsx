import { lazy } from "react";

import "./App.css";

const Header = lazy(() => import("./components/Header/Header"));

function App() {
  return (
    <>
      <Header />
      <div style={{ height: "1000px" }}>
        <h1>Hola mundo</h1>
      </div>
    </>
  );
}

export default App;
