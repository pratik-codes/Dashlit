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
import Sidebar from "./Sidebar";
import CatergoryContent from "./CatergoryContent";

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
  const [view, setView] = useState("Preferences");

  const dispatch = useDispatch();

  const cleanUpHandler = () => {
    closeModal();
  };
  //   className="leading-6 text-gray-900 text-3xl font-bold flex">
  //   Settings
  // </>
  // <div className="flex">
  //   <div
  //     onClick={() => {
  //       logoutHandler();
  //       window.location.reload();
  //     }}
  //     className="flex px-2 py-1 text-sm font-bold text-bg-gray-900 focus:outline-none cursor-pointer border border-gray-900 rounded-lg">
  //     <Svg type="logout" />
  //   </div>
  //     <div
  //       onClick={closeModal}
  //       className="ml-2 flex px-2 py-1 text-sm font-bold text-bg-gray-900 focus:outline-none cursor-pointer border border-gray-900 rounded-lg">
  //       <Svg type="modal-close" />
  //     </div>
  //   </div>
  // </div>
  // <br />
  return (
    <>
      {isOpen && (
        <div className="absolute top-0 bottom-0 left-0 right-0  my-16 ml-6 glasshover w-10/12 h-10/12 overflow-hidden">
          <div className="absolute top-0 w-full">
            <div className="flex justify-between">
              {/* top area */}
              <div className="leading-6 text-gray-900 text-3xl font-bold flex m-8">
                Settings
              </div>
              <div
                onClick={() => {
                  logoutHandler();
                  window.location.reload();
                }}
                className="flex px-2 h-8  mr-6 my-auto py-1 text-sm font-bold text-bg-gray-900 focus:outline-none cursor-pointer border border-gray-900 rounded-lg">
                <Svg type="logout" />
              </div>
            </div>
            {/* left side */}
            <div className="flex">
              <div className="h-full  w-2/12">
                <Sidebar setView={setView} />
              </div>
              <div className="h-screen w-10/12 m-0 overflow-auto">
                <CatergoryContent type={view} />
              </div>
            </div>
          </div>
        </div>
      )}
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
