import React from "react";

interface Props {
  name: string;
  setView: any;
}

const CategoryButtons: React.FC<Props> = ({ name, setView }) => {
  return (
    <div>
      <div
        onClick={() => setView(name)}
        className="font-bold text-sm p-1 px-2 border-b border-gray-800 hover:border-white my-2 focus:outline-none w-full cursor-pointer transition duration-200 ease-out ">
        {name}
      </div>
    </div>
  );
};

export default CategoryButtons;
