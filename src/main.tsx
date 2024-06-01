import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import "./i18next/i18next.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
