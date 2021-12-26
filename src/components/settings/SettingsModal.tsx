import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { addLinksService } from "../../firebase/functions/LinksActions";
import SnackbarComponent from "../common/SnackbarComponent";
import { useDispatch } from "react-redux";
import { getLinksList } from "../../Redux/Actions/User.actions";
import Svg from "../common/Svg";
import SettingsCategories from "./SettingsCategories";
import { logoutHandler } from "../../firebase/functions/AuthActions";

interface Props {
  isOpen: boolean;
  closeModal: any;
  openModal: any;
}

const SettingsModal: React.FC<Props> = ({ isOpen, closeModal, openModal }) => {
  // dialogbox state
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#1A202C");

  const dispatch = useDispatch();

  const cleanUpHandler = () => {
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto rounded-lg w-full h-full"
          onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block  h-screen align-middle"
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
              <div className="inline-block w-8/12 p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-lg glass">
                <div style={{ height: "35rem" }}>
                  <div className="flex justify-between">
                    <Dialog.Title
                      as="h3"
                      className="leading-6 text-gray-900 text-3xl font-bold flex">
                      Settings
                    </Dialog.Title>
                    <div
                      onClick={() => {
                        logoutHandler();
                        window.location.reload();
                      }}
                      className="flex px-2 py-1 text-sm font-bold text-bg-gray-900 focus:outline-none cursor-pointer border border-gray-900 rounded-lg">
                      <Svg type="logout" />
                    </div>
                  </div>
                  <br />
                  <SettingsCategories />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <SnackbarComponent
        message={message}
        color={color}
        setOpen={snackbar}
        setSnackbarOpen={setSnackbar}
      />
    </>
  );
};

export default SettingsModal;
