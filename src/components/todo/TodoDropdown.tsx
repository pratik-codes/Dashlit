import React, { useEffect, useState } from "react";
import SvgButton from "../button/SvgButton";
import Svg from "../common/Svg";

const TodoDropdown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  useEffect(() => {
    console.log({ openDropDown });
  }, [openDropDown]);

  return (
    <div>
      <div onClick={() => setOpenDropDown(!openDropDown)}>
        <SvgButton type="todo" position="bottom-0 right-0" />
      </div>
      <div
        className={` ${
          openDropDown === true ? "" : "hidden"
        }  text-gray-700 pt-4 absolute bottom-0 right-0 mb-16 mr-6`}>
        <ul className="">
          <div
            style={{
              minWidth: "20rem",
              minHeight: "8rem",
              maxHeight: "40rem",
              overflowY: "auto",
              overflowX: "hidden"
            }}
            className="glasstodo w-full">
            <div className="flex my-auto absolute top-0">
              <h1 className="font-bold text-white m-2 text-lg	">Today</h1>
              <div className="div my-auto">
                <Svg type="dropdown" />
              </div>
            </div>
            <input
              className="absolute bottom-0 w-full p-1 border-none focus:outline-none bg-transparent m-1 text-white"
              placeholder="add todo"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TodoDropdown;
