import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

import "./styles/tailwind.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root") as HTMLElement
);

serviceWorker.unregister();
