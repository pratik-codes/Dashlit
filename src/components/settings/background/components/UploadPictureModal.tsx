import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

import "../../../../styles/AntdStyles/Upload.css";
import {
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
}

const UploadPictureModal: React.FC<Props> = ({
  isOpen,
  closeModal,
  openModal
}) => {
  const [isUploading, setIsUploading] = useState(false);

  const closeHandler = () => {
    closeModal();
  };

  const uploadPictureHandler = async (data: any) => {
    setIsUploading(true);
    const isUploaded = await uploadBackgroundImage(data.file);
    if (isUploaded) triggerMessage("Image uploaded successfully", "success");
    else triggerMessage("Image upload failed :(", "error");
    setIsUploading(false);
  };

  return (
    <div>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 rounded-lg w-full h-full"
            onClose={closeHandler}>
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
                  <h1 className="font-bold text-gray-900 text-lg ">
                    Upload Background Pictures
                  </h1>
                  {/* <ImgCrop rotate> */}
                  <Upload
                    multiple
                    accept=".png,.jpeg,.jpg"
                    customRequest={uploadPictureHandler}
                    showUploadList={false}>
                    <button
                      type="button"
                      style={{ borderRadius: "10px" }}
                      className="w-full h-40 mt-4 mr-3 justify-center items-center	px-4 py-2 text-sm font-medium bg-transparent border  border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                      {isUploading ? (
                        <Loader />
                      ) : (
                        <>
                          {" "}
                          <h1 className="font-bold text-blue-900 text-lg ">
                            UPLOAD HERE
                          </h1>
                          <p className="font-medium text-blue-900 ">
                            or drag and drop your files.
                          </p>
                        </>
                      )}
                    </button>
                  </Upload>
                  {/* </ImgCrop> */}
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
