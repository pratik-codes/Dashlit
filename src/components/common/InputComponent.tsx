import React from "react";

const InputComponent = (props: any) => {
  console.log(
    "🚀 ~ file: InputComponent.tsx:5 ~ InputComponent ~ props",
    props
  );

  return (
    <input
      {...props}
      className="rounded bg-transparent flex focus:outline-none font-bold my-2 placeholder-white placeholder-opacity-50 px-3 py-2 relative text-gray-100 text-lg text-white border-purple w-full"
    />
  );
};

export default InputComponent;
