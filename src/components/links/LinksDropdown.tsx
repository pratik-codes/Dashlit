import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getUserLinksService } from "../../firebase/functions/LinksActions";
import SvgButton from "../button/SvgButton";
import AddNewLinkDialog from "./AddNewLinkDialog";
import LinkComponent from "./LinkComponent";
import Loader from "../common/Loader";
import { useSelector } from "react-redux";
import { RootStore } from "../../Redux/Store";

const LinksDropdown: React.FC<any> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const LinksDataRedux: any = useSelector(
    (state: RootStore) => state.userLinkData
  );

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    // add "dropdown" to the first div if want to enable hover to show dialog
    <div className="inline-block relative mb-4">
      <div onClick={() => setOpenDialog(!openDialog)}>
        <SvgButton type="link" position="top-0 left-0" />
      </div>
      {openDialog && (
        <div className="dropdown-menu text-gray-700 pt-4 mt-12 ml-4 transition-all duration-200 ease-out">
          <ul className="">
            <div
              style={{
                minWidth: "24rem",
                minHeight: "10rem",
                maxHeight: "40rem",
                overflowY: "auto",
                overflowX: "hidden"
              }}
              className="glass w-full">
              {LinksDataRedux.data ? (
                LinksDataRedux.data.map((link: any) => {
                  return (
                    <li key={link.id}>
                      <LinkComponent
                        id={link.id}
                        url={link.data.links}
                        title={link.data.linkTitle}
                        type={link.data.type}
                      />
                    </li>
                  );
                })
              ) : (
                <Loader />
              )}

              {LinksDataRedux.loading === false &&
                LinksDataRedux.data.length === 0 && (
                  <div className="div flex justify-center items-center h-full">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="font-2x my-auto text-gray-900 font-bold">
                      No links found. Add new link.
                    </h1>
                  </div>
                )}
            </div>
          </ul>
          <div
            style={{
              minWidth: "24rem"
            }}
            onClick={() => openModal()}
            className="absolute glass2 p-2 flex cursor-pointer	">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-900 my-auto mx-3"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="p-1 text-gray-900 font-bold">
              {" "}
              Add a new link or folder
            </h1>
          </div>
        </div>
      )}

      {/* dialog box for adding new link */}
      <AddNewLinkDialog
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default LinksDropdown;
