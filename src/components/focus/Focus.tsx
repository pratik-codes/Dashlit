import { Checkbox } from "@cred/neopop-web/lib/components";
import { colorGuide } from "@cred/neopop-web/lib/primitives";
// import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import Svg from "../common/Svg";

type Props = {};

const Focus = (props: Props) => {
  const [focus, setFocus] = useState<any>(undefined);
  const [focusChecked, setFocusChecked] = useState<any>(undefined);

  const setNewFocus = (focus: any) => {
    setFocus(focus);
    localStorage.setItem("focus", focus);
    focusCheckedHandler(false);
  };

  const focusCheckedHandler = (value: boolean) => {
    const checked: any = JSON.stringify(value);
    setFocusChecked(checked);
    localStorage.setItem("focus-checked", checked);
  };

  useEffect(() => {
    setFocus(localStorage.getItem("focus"));
    setFocusChecked(localStorage.getItem("focus-checked"));
  }, []);

  const isChecked = focusChecked === "true";

  if (focus) {
    return (
      <div className="focus-container">
        <span className="m-0 text-xl">TODAY</span>
        <h1 className="flex group items-center justify-center text-20 text-medium text-white">
          <div
            className={`z-0 group-hover:block mr-3 mt-2 ${
              isChecked ? "block" : " hidden"
            }`}>
            <Checkbox
              handleChange={(e: any) => focusCheckedHandler(e.target.checked)}
              isChecked={isChecked}
              colorConfig={colorGuide.lightComponents.checkbox}
            />
          </div>
          <div className={isChecked ? "line-through" : ""}>{focus}</div>
          <div
            onClick={() => setNewFocus("")}
            className="group-hover:block hidden ml-2 mt-2">
            <Svg type="deleteWhite" />
          </div>
        </h1>
      </div>
    );
  }

  return (
    <div className="flex-col focus-container justify-center">
      <div>What is your main focus today?</div>
      <input
        onKeyPress={(e: any) =>
          e.key === "Enter" && setNewFocus(e.target.value)
        }
        className="bg-transparent outline-none p-2 text-center w-6/12"
      />
    </div>
  );
};

export default Focus;