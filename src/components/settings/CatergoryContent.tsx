import React from "react";
import Preference from "./preferences/Preference";
import Quotes from "./quotes/Quotes";

interface Props {
  type: string;
}

const CatergoryContent: React.FC<Props> = ({ type }) => {
  return (
    <div
      style={{ marginBottom: "6rem" }}
      className="flex p-4 text-gray-900 justify-center ">
      {type === "Preferences" && <Preference />}
      {type === "Quotes" && <Quotes />}
    </div>
  );
};

export default CatergoryContent;
