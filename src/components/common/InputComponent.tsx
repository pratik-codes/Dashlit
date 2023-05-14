import React from "react";

const InputComponent = (props: any) => {
  const { inputType = "primary" } = props;

  return (
    <input
      {...props}
      className={`rounded-[15px] flex focus:outline-none font-bold my-2 placeholder-white placeholder-opacity-50 px-3 py-2 relative text-gray-100 text-lg text-white border-purple w-full ${inputType == "primary" ? "bg-grey2" : "bg-grey1"}`}
    />
  );
};

export default InputComponent;
