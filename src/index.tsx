import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/Store";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}><App /></Provider>
);

serviceWorker.unregister();
