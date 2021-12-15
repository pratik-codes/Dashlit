import React from "react";
import Svg from "../Svg";

interface Props {
  // onClick: () => void,
  type: string;
  position: string;
}

const SvgButton = ({ type, position }) => {
  return (
    <button
      style={{ borderRadius: "20px" }}
      className={`absolute ${position} border-none text-gray-900 border-none shadow-lg text-sm glass font-bold px-3 m-4 py-1 focus:outline-none`}>
      <Svg type={type} />
    </button>
  );
};

export default SvgButton;
