import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css"; // Подключение стилей
import { BrowserRouter } from "react-router-dom";
import "./i18n"; // Подключение i18next

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
