import React from "react";
import Svg from "../../common/Svg";

interface Props {
  id: string;
  quotes: string;
  favourite: boolean;
}

const MyQuotesComponents: React.FC<Props> = ({ id, quotes, favourite }) => {
  return (
    <div className="glasshover flex w-full justify-between p-4">
      <div>
        <h1 className="font-bold text-gray-900 ">"{quotes}"</h1>
      </div>
      <div className="flex justify-end ml-6">
        {favourite ? <Svg type="heart-red" /> : <Svg type="heart" />}
        <Svg type="editTodo" />
        <Svg type="deleteTodoComponent" />
      </div>
    </div>
  );
};

export default MyQuotesComponents;
