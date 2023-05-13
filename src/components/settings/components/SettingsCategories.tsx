import React, { useState } from "react";
import Sidebar from "../Sidebar";
import CatergoryContent from "./CatergoryContent";

const SettingsCategories = () => {
  const [view, setView] = useState("Preferences");

  return (
    <div>
      <div className=" div flex text-gray-900 ">
        <div className="div w-2/12">
          <Sidebar setView={setView} view={view} />
        </div>
        <div className="div w-10/12">
          <CatergoryContent type={view} />
        </div>
      </div>
    </div>
  );
};

export default SettingsCategories;
