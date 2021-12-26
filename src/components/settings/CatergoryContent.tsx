import React from "react";
import Preference from "./preferences/Preference";

interface Props {
  type: string;
}

const CatergoryContent: React.FC<Props> = ({ type }) => {
  return (
    <div className="flex p-4 text-gray-900">
      {type === "Preferences" && <Preference />}
    </div>
  );
};

export default CatergoryContent;
