import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Privacy from "./Privacy.jsx";
import "./index.css";

const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {path === "/privacy" ? <Privacy /> : <App />}
  </React.StrictMode>
);