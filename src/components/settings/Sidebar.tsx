import React, { useState } from "react";
import CategoryButtons from "./CategoryButtons";

interface Props {
  setView: any;
}

const Sidebar: React.FC<Props> = ({ setView }) => {
  return (
    <div className="">
      <CategoryButtons name="Preferences" setView={setView} />
      <CategoryButtons name="Background" setView={setView} />
      <CategoryButtons name="Quotes" setView={setView} />
    </div>
  );
};

export default Sidebar;
