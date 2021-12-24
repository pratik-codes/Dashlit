import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import EditLinkDialog from "./EditLinkDialog";
import { Link } from "react-router-dom";
import Svg from "../common/Svg";
import {
  deleteUserLinksService,
  getUserLinksService
} from "../../firebase/functions/LinksActions";
import { useDispatch } from "react-redux";
import { getLinksList } from "../../Redux/Actions/User.actions";

interface Props {
  id: string;
  title: string;
  url: any;
  type: string;
}

const LinkComponent: React.FC<Props> = ({ id, title, url, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openUrl, setOpenUrl] = React.useState(false);
  // const [editModalIsOpen, setEditModalIsOpen] = React.useState(false);

  const dispatch = useDispatch();

  const clickHandler = () => {
    if (type === "link") {
      window.open(
        `//${url[0].link}`,
        "_blank",
        "toolbar=0,location=0,menubar=0"
      );
    } else {
      for (let i = 0; i < url.length; i++) {
        window.open(`//${url[i].link}`, "_blank");
      }
    }
  };

  const deleteHandler = async () => {
    deleteUserLinksService(id);
    await dispatch(getLinksList());
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    console.log(isOpen);
  }

  useEffect(() => {
    if (openUrl === true) {
      clickHandler();
    }
    setOpenUrl(false);
  }, []);
  return (
    <>
      <div className="flex glasslink p-2 ">
        <div onClick={() => setOpenUrl(true)} className="flex w-full">
          {type === "folder" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 my-auto ml-2 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          ) : (
            <img
              style={{ borderRadius: "100%" }}
              className="w-5 h-5 my-auto ml-2 "
              src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${url[0].link}`}
              alt="favicon"
            />
          )}
          <a className=" text-l text-gray-800 font-bold  w-full my-auto py-auto px-4 block whitespace-no-wrap">
            {title.length > 25 ? title.substring(0, 25) + "..." : title}
          </a>
        </div>
        <div onClick={() => openModal()}>
          <Svg type="edit" />
        </div>
        <div onClick={deleteHandler}>
          <Svg type="deleteEdited" />
        </div>
      </div>
      <div className="ml-14">
        {/* edit modal */}
        <EditLinkDialog
          isOpen={isOpen}
          id={id}
          linkTitle={title}
          links={url}
          type={type}
          closeModal={closeModal}
          openModal={openModal}
        />
      </div>
    </>
  );
};

export default LinkComponent;

LinkComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired
};
