import { Button } from "@cred/neopop-web/lib/components";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { getAllImages } from "../../../firebase/functions/UploadActions";
import Svg from "../../common/Svg";
import FavouritePictures from "./components/FavouritePictures";
import MyPictures from "./components/MyPictures";
import PublicPictures from "./components/PublicPictures";
import UploadPictureModal from "./components/UploadPictureModal";

const Background = () => {
  const [activeTab, setActiveTab] = useState("my_pictures");
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [publicQuotes, setPublicQuotes] = useState({});
  const [favQuotes, setFavQuotes] = useState({});
  const [images, setImages] = useState(undefined);

  const getImages = async () => {
    const res: any = await getAllImages();
    setImages(res);
  };

  useEffect(() => {
    getImages();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="h-full w-full">
      <div className="div flex justify-between p-2 w-full">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="-mb-px flex flex-wrap">
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
        {activeTab === "my_pictures" && (
          <Button
            kind="elevated"
            className="focus:outline-none"
            onClick={() => setIsUploadModal(true)}>
            <Svg type="add" />
          </Button>
        )}
      </div>
      <UploadPictureModal
        isOpen={isUploadModal}
        openModal={() => setIsUploadModal(true)}
        closeModal={() => setIsUploadModal(false)}
        loadPictures={() => getImages()}
      />
      <div className="flex justify-start">
        {activeTab === "my_pictures" && (
          <MyPictures data={images} refreshPictures={getImages} />
        )}
        {activeTab === "Favourites" && <FavouritePictures />}
        {activeTab === "public_pictures" && <PublicPictures />}
      </div>
    </div>
  );
};

export default Background;
