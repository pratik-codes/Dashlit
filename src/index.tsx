import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

import { Provider } from "react-redux";
import Loader from "./components/common/Loader";
import store from "./Redux/Store";

ReactDOM.render(
  <Provider store={store}>{<App /> ? <App /> : <Loader />}</Provider>,
  document.getElementById("root") as HTMLElement
);

serviceWorker.unregister();
