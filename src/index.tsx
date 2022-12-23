import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import App from "./App";
import Loader from "./components/common/Loader";
import store from "./Redux/Store";

import "./styles/tailwind.css";

ReactDOM.render(
  <Provider store={store}>{<App /> ? <App /> : <Loader />}</Provider>,
  document.getElementById("root") as HTMLElement
);

serviceWorker.unregister();
