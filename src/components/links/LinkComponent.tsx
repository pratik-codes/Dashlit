import { Popconfirm } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserLinksService } from "../../firebase/functions/LinksActions";
import { getLinksList } from "../../Redux/Actions/User.actions";
import Modal from "../common/Modal";
import Svg from "../common/Svg";
import EditLinkDialog from "./EditLinkDialog";

interface Props {
  id: string;
  title: string;
  url: any;
  type: string;
}

const LinkComponent: React.FC<Props> = ({ id, title, url, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [editModalIsOpen, setEditModalIsOpen] = React.useState(false);

  const dispatch = useDispatch();

  const clickHandler = () => {
    if (type === "link") window.open(`https://${url[0].link}`, "_blank");
    else
      for (let i = 0; i < url.length; i++) {
        window.open(`https://${url[i].link}`, "_blank");
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
  }

  return (
    <>
      <div className="flex glasslink p-2 w-full">
        <div onClick={() => clickHandler()} className="flex w-full">
          {type === "folder" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 ml-2 my-auto text-gray-900 w-6"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          ) : (
            <img
              style={{ borderRadius: "100%" }}
              className="h-5 ml-2 my-auto w-5"
              src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${url[0].link}`}
              alt="favicon"
            />
          )}
          <a className="block font-bold my-auto px-4 py-auto text-gray-900 text-l w-full whitespace-no-wrap">
            {title.length > 25 ? title.substring(0, 25) + "..." : title}
          </a>
        </div>
        <div onClick={() => openModal()}>
          <Svg type="edit" />
        </div>

        <Popconfirm
          title="Are you sure to delete this link/folder?"
          onConfirm={deleteHandler}
          okText="Yes"
          cancelText="No">
          <div>
            <Svg type="deleteEdited" />
          </div>
        </Popconfirm>
      </div>
      <div className="ml-14">
        {/* edit modal */}
        <Modal
          isOpen={isOpen}
          openModal={openModal}
          Children={
            <EditLinkDialog
              isOpen={isOpen}
              id={id}
              linkTitle={title}
              links={url}
              type={type}
              closeModal={closeModal}
              openModal={openModal}
            />
          }
        />
      </div>
    </>
  );
};

export default LinkComponent;
