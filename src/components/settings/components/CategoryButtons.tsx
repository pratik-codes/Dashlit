import React from "react";

interface Props {
  name: string;
  setView: any;
  view: string;
}

const CategoryButtons: React.FC<Props> = ({ name, setView, view }) => {
  console.log({ view, name });
  return (
    <div>
      <div
        onClick={() => setView(name)}
        className={`font-bold text-md py-1 my-1 px-2 link focus:outline-none w-full cursor-pointer transition duration-200 ease-out w-8/12 ${
          view === name ? "text-purple" : "text-white"
        }`}>
        {name}
      </div>
    </div>
  );
};

export default CategoryButtons;
