import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { CloseCircleFilled } from "@ant-design/icons";

import "../../../../styles/AntdStyles/Upload.css";
import {
  addImageURL,
  getAllImages,
  uploadBackgroundImage
} from "../../../../firebase/functions/UploadActions";
import { triggerMessage } from "../../../common/snackbar";
import SnackbarComponent from "../../../common/SnackbarComponent";
import Loader from "../../../common/Loader";

interface Props {
  isOpen: boolean;
  closeModal: any;
  openModal: any;
  loadPictures: any;
}

const UploadPictureModal: React.FC<Props> = ({
  isOpen,
  closeModal,
  openModal,
  loadPictures
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [pictureName, setPictureName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const closeHandler = () => {
    closeModal();
  };

  const uploadPictureHandler = async (data: any) => {
    setIsUploading(true);
    const isUploaded = await uploadBackgroundImage(data.file);
    if (isUploaded) triggerMessage("Image uploaded successfully", "success");
    else triggerMessage("Image upload failed :(", "error");
    loadPictures();
    setIsUploading(false);
  };

  const pictureLinkAddHandler = async () => {
    if (pictureName?.length === 0 || pictureUrl?.length === 0) {
      triggerMessage("Please add link url and name", "fail");
      return;
    }
    await addImageURL(pictureUrl, pictureName);
    triggerMessage("Picture added.", "success");
    loadPictures();
  };

  return (
    <div>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 rounded-lg w-full h-full"
            onClose={() => null}>
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <div
                  className="inline-block w-4/12 p-6 my-8 text-left align-middle overflow-y-auto transition-all transform shadow-xl rounded glass  overflow-hidden"
                  style={{ borderRadius: "10px" }}>
                  <div
                    onClick={closeHandler}
                    className="absolute text-xl right-0 top-0 cursor-pointer mt-2 mr-3">
                    <CloseCircleFilled />
                  </div>
                  <h1 className="font-bold text-gray-900 text-lg">
                    Upload Background Picture
                  </h1>
                  <ImgCrop aspect={16 / 9}>
                    <Upload
                      multiple={false}
                      accept=".png,.jpeg,.jpg"
                      customRequest={uploadPictureHandler}
                      showUploadList={false}>
                      <button
                        type="button"
                        style={{ borderRadius: "10px" }}
                        className="w-full h-40 mt-4 mr-3 justify-center items-center	px-4 py-2 text-sm font-medium bg-transparent border  border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                        {isUploading ? (
                          <>
                            <Loader />
                          </>
                        ) : (
                          <>
                            {" "}
                            <h1 className="font-bold text-blue-900 text-lg ">
                              UPLOAD HERE
                            </h1>
                            <p className="font-medium text-blue-900 ">
                              or drag and drop your file.
                            </p>
                          </>
                        )}
                      </button>
                    </Upload>
                  </ImgCrop>

                  <div className="text-center mt-6">
                    <div className="font-bold text-gray-900 text-lg">OR</div>
                    <div className="font-bold text-gray-900 text-lg">
                      Add your picture link
                    </div>
                    <div className="flex flex-col justify-start">
                      <input
                        type="text"
                        onChange={e => setPictureName(e.target.value)}
                        placeholder="Picture Name"
                        className="px-3 py-2 mt-3 mb-1 border-opacity-50  placeholder-gray-900 relative bg-transparent border border-gray-900 rounded text-gray-900 text-base outline-none focus:outline-none focus:ring w-full"
                      />
                      <input
                        type="text"
                        onChange={e => setPictureUrl(e.target.value)}
                        placeholder="Picture Link"
                        className="px-3 py-2 mt-3 mb-1 border-opacity-50  placeholder-gray-900 relative bg-transparent border border-gray-900 rounded text-gray-900 text-base outline-none focus:outline-none focus:ring w-full"
                      />
                      <button
                        type="button"
                        className="mt-3 mb-1 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 placeholder-gray-900 bg-transparent border border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
                        onClick={pictureLinkAddHandler}>
                        add
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default UploadPictureModal;
