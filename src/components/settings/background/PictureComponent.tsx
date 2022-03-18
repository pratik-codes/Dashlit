import React from "react";
import Svg from "../../common/Svg";

const PictureComponent = () => {
  return (
    <div className="border border-gray-900 rounded-lg glasshover">
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1491613993002-8956ec08fddc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb)`,
          backgroundSize: "cover"
        }}
        className="h-56 m-1 rounded-lg">
        <div className="absolute top-0 right-0 mt-2 mr-3">
          <Svg type="dot-dot" size="6" />
        </div>
      </div>
    </div>
  );
};

export default PictureComponent;
