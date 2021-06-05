import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
