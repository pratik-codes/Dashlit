import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";

import Svg from "../../common/Svg";
import {
  getAllPublicQuotesService,
  getFavouriteService
} from "../../../firebase/functions/QuotesActions";
import { RootStore } from "../../../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { getMyQuotesAction } from "../../../Redux/Actions/Quotes.actions";
import MyPictures from "./components/MyPictures";
import UploadPictureModal from "./components/UploadPictureModal";
import { getAllImages } from "../../../firebase/functions/UploadActions";

const Background = () => {
  const [activeTab, setActiveTab] = useState("my_pictures");
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [publicQuotes, setPublicQuotes] = useState({});
  const [favQuotes, setFavQuotes] = useState({});
  const [images, setImages] = useState(undefined);

  const getImages = async () => {
    const res = await getAllImages();
    setImages(res);
  };

  useEffect(() => {
    getImages();
  }, []);

  const MyQuotesRedux: any = useSelector(
    (state: RootStore) => state.myQuotesData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyQuotesAction());
  }, []);

  return (
    <div className="w-full h-full">
      <div className="div flex justify-between w-full p-2">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li onClick={() => setActiveTab("my_pictures")} className="mr-2">
              <button
                className={`focus:outline-none inline-block py-4 px-4 text-md font-bold text-center text-gray-700 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:text-gray-400 transition duration-300 ease-out ${
                  activeTab === "my_pictures"
                    ? "border-gray-900 text-gray-900 "
                    : ""
                }`}>
                My Pictures
              </button>
            </li>
            <li
              onClick={() => setActiveTab("public_pictures")}
              className="mr-2">
              <button
                className={`focus:outline-none inline-block py-4 px-4 text-md font-bold text-center text-gray-700 rounded-t-lg border-b-2 border-transparent hover:text-gray-900 hover:border-gray-900 dark:text-gray-400 transition duration-300 ease-out ${
                  activeTab === "public_pictures"
                    ? "border-gray-900 text-gray-900 "
                    : ""
                }`}>
                Public Pictures
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
          {activeTab === "my_pictures" && (
            <button
              onClick={() => setIsUploadModal(true)}
              className="p-2 m-1 text-gray-900 font-bold bg-transparent border border-gray-900 rounded-lg focus:outline-none">
              <Svg type="add" />
            </button>
          )}
        </div>
      </div>
      <UploadPictureModal
        isOpen={isUploadModal}
        openModal={() => setIsUploadModal(true)}
        closeModal={() => setIsUploadModal(false)}
      />
      <div className="flex justify-start">
        {activeTab === "my_pictures" && <MyPictures data={images} />}
      </div>
    </div>
  );
};

export default Background;
