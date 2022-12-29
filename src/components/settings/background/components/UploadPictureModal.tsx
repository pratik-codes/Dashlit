import { Dialog, Transition } from "@headlessui/react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import Compressor from "compressorjs";
import React, { Fragment, useState } from "react";

import {
  addImageURL,
  uploadBackgroundImage
} from "../../../../firebase/functions/UploadActions";
import Button from "../../../common/button/button";
import Loader from "../../../common/Loader";
import { triggerMessage } from "../../../common/SnackBar";

import "../../../../styles/AntdStyles/Upload.css";

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
    new Compressor(data.file, {
      quality: 0.8,
      success: async (compressedResult: any) => {
        const isUploaded = await uploadBackgroundImage(compressedResult);
        if (isUploaded)
          triggerMessage("Image uploaded successfully", "success");
        else triggerMessage("Image upload failed :(", "error");
        loadPictures();
        setIsUploading(false);
      }
    });
  };

  const pictureLinkAddHandler = async () => {
    if (pictureUrl?.length === 0) {
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
            className="fixed h-full inset-0 rounded-lg w-full z-10"
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
                className="align-middle h-screen inline-block"
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
                  className="align-middle glass inline-block my-8 overflow-hidden overflow-y-auto p-6 rounded shadow-xl text-left transform transition-all w-4/12"
                  style={{ borderRadius: "10px" }}>
                  <h1 className="font-bold text-gray-900 text-xl">
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
                        className="bg-transparent border border-dashed border-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:outline-none font-medium h-40 items-center justify-center mr-3 mt-4 px-4 py-2 text-sm w-full">
                        {isUploading ? (
                          <>
                            <Loader />
                          </>
                        ) : (
                          <>
                            {" "}
                            <h1 className="font-bold text-blue-900 text-lg">
                              UPLOAD HERE
                            </h1>
                            <p className="font-medium text-blue-900">
                              or drag and drop your file.
                            </p>
                          </>
                        )}
                      </button>
                    </Upload>
                  </ImgCrop>

                  <div className="">
                    <div className="font-bold my-6 text-center text-gray-900 text-lg">
                      OR
                    </div>
                    <div className="font-bold mb-2 text-gray-900 text-lg">
                      Add your picture link
                    </div>
                    <div className="flex flex-col justify-start">
                      <input
                        type="text"
                        onChange={e => setPictureUrl(e.target.value)}
                        placeholder="Picture Link"
                        className="bg-transparent border border-gray-900 focus:outline-none focus:ring font-bold mb-1 mt-3 outline-none p-1 placeholder-gray-900 placeholder-opacity-50 px-3 py-2 relative text-gray-900 text-lg w-full"
                      />
                      <div className="flex justify-start mt-4 space-x-2 w-full">
                        <Button
                          kind="elevated"
                          className="focus:outline-none"
                          onClick={pictureLinkAddHandler}>
                          Add
                        </Button>
                        <Button
                          kind="elevated"
                          className="focus:outline-none"
                          onClick={closeHandler}>
                          Cancel
                        </Button>
                      </div>
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
