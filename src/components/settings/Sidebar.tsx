import { Tooltip } from "antd";
import Button from "components/common/button/button";
import React from "react";
import CategoryButtons from "./components/CategoryButtons";

import { logoutHandler } from "firebase/functions/AuthActions";
import Svg from "components/common/Svg";
interface Props {
  setView: any;
  view: string;
}

const Sidebar: React.FC<Props> = ({ setView, view }) => {
  return (
    <div className="p-4 flex flex-col justify-between  h-full">
      <div>
        <CategoryButtons name="Preferences" setView={setView} view={view} />
        <CategoryButtons name="Background" setView={setView} view={view} />
        <CategoryButtons name="Quotes" setView={setView} view={view} />
      </div>

      <Button
          type="text"
          className="focus:outline-none absolute bottom-0 left-0 flex space-x-1 w-26 m-6 align-center items-center"
          onClick={() => {
            logoutHandler();
            window.location.reload();
          }}>
        <Svg type="logout" /> <span>Logout</span>
      </Button>
    </div>
  );
};

export default Sidebar;
