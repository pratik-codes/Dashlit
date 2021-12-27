import React, { useState } from "react";
import { Tab } from "@headlessui/react";

const QuotesTabs = () => {
  return (
    <div className="w-full h-full">
      <div className="div flex justify-center mx-auto">
        <div className="border border-gray-900 rounded-lg mx-4">
          <button className="py-2 my-2 mx-4 px-4 rounded-lg focus:bg-white text-gray-900 focus:outline-none font-bold">
            My quotes
          </button>
          <button className="py-2 my-2 mx-4 px-4 rounded-lg focus:bg-white  text-gray-900 focus:outline-none font-bold">
            Dashlit Quotes
          </button>
          <button className="py-2 my-2 mx-4 px-4 rounded-lg focus:bg-white  text-gray-900 focus:outline-none font-bold ">
            favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotesTabs;
