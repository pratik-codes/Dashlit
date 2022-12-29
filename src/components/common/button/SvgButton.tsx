import PropTypes from "prop-types";
import React from "react";
import Svg from "../Svg";

interface Props {
  // onClick: () => void,
  type: string;
  position: string;
}

const SvgButton: React.FC<Props> = ({ type, position }) => {
  return (
    <button
      className={`absolute ${position} rounded-lg border-none text-black border-none shadow-lg text-sm glass font-bold p-2 m-4 focus:outline-none`}>
      <Svg type={type} />
    </button>
  );
};

export default SvgButton;

SvgButton.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};
