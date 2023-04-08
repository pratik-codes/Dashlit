import React from "react";

import Auth from "./screens/Auth";
import Home from "./screens/Home";

import "antd/dist/antd.css";
import "./styles/AntdStyles/Common.css";
import "./styles/index.css";
import "./styles/tailwind.css";

const App = () => {
  const user_uid = localStorage.getItem("user_uid");

  return <div className="App">{user_uid === null ? <Auth /> : <Home />}</div>;
};

export default App;
