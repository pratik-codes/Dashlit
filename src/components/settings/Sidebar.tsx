import { Button } from "antd";
import React from "react";
import CategoryButtons from "./components/CategoryButtons";

interface Props {
  setView: any;
  view: string;
}

const Sidebar: React.FC<Props> = ({ setView, view }) => {
  return (
    <div className="p-4">
      <CategoryButtons name="PREFERENCES" setView={setView} view={view} />
      <CategoryButtons name="BACKGROUND" setView={setView} view={view} />
      <CategoryButtons name="QUOTES" setView={setView} view={view} />
    </div>
  );
};

export default Sidebar;
