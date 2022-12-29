import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPublicQuotesService,
  getFavouriteService
} from "../../../../firebase/functions/QuotesActions";
import { getMyQuotesAction } from "../../../../Redux/Actions/Quotes.actions";
import { RootStore } from "../../../../Redux/Store";
import Button from "../../../common/button/button";
import Svg from "../../../common/Svg";
import AddQuotesModal from "./AddQuotesModal";
import Favourites from "./Favourites";
import MyQuotes from "./MyQuotes";
import PublicQuotes from "./PublicQuotes";

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
    setPublicQuotes(res);
  };

  const getFavouriteQuotes = async () => {
    const res = await getFavouriteService();
    console.log(res);
    setFavQuotes(res);
  };

  useEffect(() => {
    getPublicQuotes();
    getFavouriteQuotes();
  }, []);

  return (
    <div className="h-full w-full">
      <div className="div flex justify-between p-2 w-full">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="-mb-px flex flex-wrap">
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
        {activeTab === "My quotes" && (
          <Button
            kind="elevated"
            className="focus:outline-none"
            onClick={() => setIsAddQuotesModalOpen(true)}>
            <Svg type="add" />
          </Button>
        )}
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
        <AddQuotesModal
          isOpen={isAddQuotesModalOpen}
          openModal={() => setIsAddQuotesModalOpen(true)}
          closeModal={() => setIsAddQuotesModalOpen(false)}
          type="add"
        />
      </div>
    </div>
  );
};

export default QuotesTabs;
