import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PreloadImage from "./components/PreloadImage/PreloadImage.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreloadImage>
      <App />
    </PreloadImage>
  </React.StrictMode>
);
