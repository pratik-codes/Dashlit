import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createMemoryHistory } from "history";

import Auth from "./screens/Auth";
import Home from "./screens/Home";
import "./styles/index.css";

const App = () => {
  // const [currentView, setcurrentView] = useState("home");
  const AccessToken = localStorage.getItem("AccessToken");

  return (
    <div className="App">{AccessToken === null ? <Home /> : <Home />}</div>
  );
};

export default App;
