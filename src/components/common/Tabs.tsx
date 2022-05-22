import React from "react";

interface Props {
  heading1: string;
  heading2: string;
  heading3: string;
  setCurrentView: any;
}

const Tabs: React.FC<Props> = ({
  heading1,
  heading2,
  heading3,
  setCurrentView
}) => {
  return (
    <div>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="mr-2">
          <button
            onClick={() => setCurrentView(heading1)}
            className="inline-block py-3 px-4 text-white focus:text-gray-900 rounded-lg active"
            aria-current="page">
            {heading1}
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setCurrentView(heading2)}
            className="inline-block py-3 px-4 rounded-lg focus:text-gray-900 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
            {heading2}
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setCurrentView(heading3)}
            className="inline-block py-3 px-4 rounded-lg focus:text-gray-900 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
            {heading3}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
