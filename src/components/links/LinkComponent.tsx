import { Popconfirm, Popover } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserLinksService } from "../../firebase/functions/LinksActions";
import { getLinksList } from "../../redux/Actions/User.actions";
import BookmarkIcons from "../common/BookmarkIcons";
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
    <div className="mx-2">
      <div className="cursor-pointer flex glasslink p-2 w-full rounded-[8px]">
        <div onClick={() => clickHandler()} className="flex w-full mx-1">
          <BookmarkIcons url={url} type={type} />
          <a className="block font-bold my-auto px-4 py-auto text-white text-l w-full whitespace-no-wrap hover:text-purple">
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </a>
        </div>

        <div className="editlink hidden">
        <Popover
          content={
          <div>
            <h6
                  onClick={() => openModal()}
                  className="font-bold cursor-pointer hover:bg-grey2 py-1 px-2 rounded-lg text-white hover:bg-grey2">
              Edit
            </h6>
            <Popconfirm
              title="Are you sure to delete this link/folder?"
              onConfirm={deleteHandler}
              okText="Yes"
              cancelText="No">
            <h1 className="font-bold cursor-pointer hover:bg-grey2 py-1 px-2 rounded-lg text-white hover:bg-grey2">
              Delete
            </h1>
            </Popconfirm>
              </div>
          }
          trigger="hover"
          >
          <button className="focus:outline-none mx-1 mt-1 text-white">
            <Svg type="dot-dot" />
          </button>
        </Popover>
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
    </div>
  );
};

export default LinkComponent;
