import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import MyQuotes from "./MyQuotes";

const QuotesTabs = () => {
  const [activeTab, setActiveTab] = useState("My quotes");

  return (
    <div className="w-full h-full">
      <div className="div flex justify-center mx-auto">
        <div className="border border-gray-900 rounded-lg mx-4">
          <button
            onClick={() => setActiveTab("My quotes")}
            className="py-2 my-2 mx-4 px-4 rounded-lg focus:bg-white cursor-pointer transition duration-300 ease-out text-gray-900 focus:outline-none font-bold">
            My quotes
          </button>
          <button
            onClick={() => setActiveTab("Public quotes")}
            className="py-2 my-2 mx-4 px-4 rounded-lg focus:bg-white cursor-pointer transition duration-300 ease-out   text-gray-900 focus:outline-none font-bold">
            Public quotes
          </button>
          <button
            onClick={() => setActiveTab("Public quotes")}
            className="py-2 my-2 mx-4 px-4 rounded-lg focus:bg-white cursor-pointer transition duration-300 ease-out   text-gray-900 focus:outline-none font-bold">
            favourites
          </button>
        </div>
      </div>
      <div>{activeTab === "My quotes" && <MyQuotes />}</div>
    </div>
  );
};

export default QuotesTabs;
