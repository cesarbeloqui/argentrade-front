import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PreloadImage from "./components/PreloadImage/PreloadImage.jsx";
import { store, persistor } from "./redux/store.js"; // Ajustado aquí
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <PreloadImage>
          <App />
        </PreloadImage>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
