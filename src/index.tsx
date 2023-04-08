import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import Loader from "./components/common/Loader";
import store from "./Redux/Store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root") as HTMLElement
);

serviceWorker.unregister();
