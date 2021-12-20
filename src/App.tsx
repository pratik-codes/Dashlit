import React from "react";

import Auth from "./screens/Auth";
import Home from "./screens/Home";
import "./styles/index.css";

const App = () => {
  // const [currentView, setcurrentView] = useState("home");
  const AccessToken = localStorage.getItem("user");

  return (
    <div className="App">{AccessToken === null ? <Auth /> : <Home />}</div>
  );
};

export default App;
