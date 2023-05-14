import React from "react";
import Background from "../background/Background";
import Preference from "../preferences/Preference";
import Quotes from "../quotes/Quotes";

interface Props {
  type: string;
}

const CatergoryContent: React.FC<Props> = ({ type }) => {
  return (
    <div
      style={{ marginBottom: "12rem" }}
      className="flex p-4 text-gray-900 justify-center ">
      {type === "Preferences" && <Preference />}
      {type === "Quotes" && <Quotes />}
      {type === "Background" && <Background />}
    </div>
  );
};

export default CatergoryContent;
