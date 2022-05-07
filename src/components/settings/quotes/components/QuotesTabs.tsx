import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import AddQuotesModal from "./AddQuotesModal";
import Svg from "../../../common/Svg";
import {
  getAllPublicQuotesService,
  getFavouriteService
} from "../../../../firebase/functions/QuotesActions";
import MyQuotes from "./MyQuotes";
import PublicQuotes from "./PublicQuotes";
import { RootStore } from "../../../../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { getMyQuotesAction } from "../../../../Redux/Actions/Quotes.actions";
import Favourites from "./Favourites";

const QuotesTabs = () => {
  const [activeTab, setActiveTab] = useState("My quotes");
  const [isAddQuotesModalOpen, setIsAddQuotesModalOpen] = useState(false);
  const [publicQuotes, setPublicQuotes] = useState({});
  const [favQuotes, setFavQuotes] = useState({});

  const MyQuotesRedux: any = useSelector(
    (state: RootStore) => state.myQuotesData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyQuotesAction());
  }, []);

  const getPublicQuotes = async () => {
    const res = await getAllPublicQuotesService();
    console.log(res);
    setPublicQuotes(res);
  };

  const getFavouriteQuotes = async () => {
    const res = await getFavouriteService();
    setFavQuotes(res);
  };

  useEffect(() => {
    getPublicQuotes();
    getFavouriteQuotes();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="div flex justify-between w-full p-2">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li onClick={() => setActiveTab("My quotes")} className="mr-2">
              <button
                className={`focus:outline-none inline-block py-4 px-4 text-md font-bold text-center text-gray-700 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:text-gray-400 transition duration-300 ease-out ${
                  activeTab === "My quotes"
                    ? "border-gray-900 text-gray-900 "
                    : ""
                }`}>
                My quotes
              </button>
            </li>
            <li onClick={() => setActiveTab("Public quotes")} className="mr-2">
              <button
                className={`focus:outline-none inline-block py-4 px-4 text-md font-bold text-center text-gray-700 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:text-gray-400 transition duration-300 ease-out ${
                  activeTab === "Public quotes"
                    ? "border-gray-900 text-gray-900 "
                    : ""
                }`}>
                Public quotes
              </button>
            </li>
            <li onClick={() => setActiveTab("Favourites")} className="">
              <button
                className={`focus:outline-none inline-block py-4 px-4 text-md font-bold text-center text-gray-700 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:text-gray-400 transition duration-300 ease-out ${
                  activeTab === "Favourites"
                    ? "border-gray-900 text-gray-900 "
                    : ""
                }`}>
                favourites
              </button>
            </li>
          </ul>
        </div>
        <div>
          {activeTab === "My quotes" && (
            <button
              onClick={() => setIsAddQuotesModalOpen(true)}
              className="p-2 m-1 text-gray-900 font-bold bg-transparent border border-gray-900 rounded-lg focus:outline-none">
              <Svg type="add" />
            </button>
          )}
          <AddQuotesModal
            isOpen={isAddQuotesModalOpen}
            openModal={() => setIsAddQuotesModalOpen(true)}
            closeModal={() => setIsAddQuotesModalOpen(false)}
            type="add"
          />
        </div>
      </div>
      <div className="flex justify-start">
        {activeTab === "My quotes" && (
          <MyQuotes MyQuotesRedux={MyQuotesRedux} />
        )}
        {activeTab === "Public quotes" && (
          <PublicQuotes publicQuotesData={publicQuotes} />
        )}
        {activeTab === "Favourites" && (
          <Favourites
            favQuotesData={favQuotes}
            getFavQuotes={() => getFavouriteQuotes()}
          />
        )}
      </div>
    </div>
  );
};

export default QuotesTabs;
