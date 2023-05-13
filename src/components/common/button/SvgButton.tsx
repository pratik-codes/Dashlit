import PropTypes from "prop-types";
import React, { useState } from "react";
import Svg from "../Svg";

interface Props {
  type: string;
  position: string;
  cta?: string;
}

const SvgButton: React.FC<Props> = ({ type, position, cta }) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  return (
    <button
      onMouseEnter={(e) => setMouseEntered(true)}
      onMouseLeave={(e) => setMouseEntered(false)}
      className={`absolute ${position} rounded-lg border-none text-white border-none shadow-lg text-sm glass font-bold p-2 m-4 focus:outline-none text-white hover:text-purple hover:border-purple flex justify-between`}>
      <Svg type={type} />
      {mouseEntered &&
      <div className="mx-2 ">
        {cta}
      </div>
}
    </button>
  );
};

export default SvgButton;

SvgButton.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};
