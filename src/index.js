import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <>
      <a className="skip-to-content-link" href="#main">
        Skip To Content
      </a>
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
