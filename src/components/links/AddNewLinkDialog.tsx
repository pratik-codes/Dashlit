import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addLinksService } from "../../firebase/functions/LinksActions";
import { getLinksList } from "../../Redux/Actions/User.actions";
import Button from "../common/button/button";
import { triggerMessage } from "../common/SnackBar";
import Svg from "../common/Svg";

interface Props {
  isOpen: boolean;
  closeModal: any;
  openModal: any;
}

const AddNewLinkDialog: React.FC<Props> = ({
  isOpen,
  closeModal,
  openModal
}) => {
  const [linkTitle, setLinkTitle] = useState("");
  const [links, setLinks] = useState([{ link: "", id: uuidv4() }]);
  // dialogbox state

  const dispatch = useDispatch();

  const cleanUpHandler = () => {
    closeModal();
    setLinks([{ link: "", id: uuidv4() }]);
    setLinkTitle("");
  };

  const addHandler = async () => {
    addLinksService(
      linkTitle,
      links,
      `${links.length > 1 ? "folder" : "link"}`
    );
    triggerMessage("Link added successfully", "success");
    cleanUpHandler();
    dispatch(getLinksList());
  };

  const inputOnchangeHandler = (inputId: string, value: string) => {
    links
      .filter(link => link.id == inputId)
      .forEach(link => (link.link = value.replace(/(^\w+:|^)\/\//, "")));
  };

  const inputDeleteHandler = (inputId: string) => {
    const newLinks = links.filter(link => link.id !== inputId);
    setLinks(newLinks);
  };

  return (
    <>
      <div className="align-middle border-2 border-black-900 glasshover inline-block max-w-md overflow-hidden p-6 rounded-lg shadow-xl text-left transform transition-all w-full">
        <Dialog.Title
          as="h3"
          className="font-bold leading-6 text-gray-900 text-xl">
          Add new link
        </Dialog.Title>
        <div className="mt-2">
          <input
            type="text"
            onChange={e => setLinkTitle(e.target.value)}
            placeholder="Link title"
            className="bg-transparent border border-gray-900 focus:outline-none focus:ring font-bold mb-1 mt-3 outline-none p-1 placeholder-gray-900 placeholder-opacity-50 px-3 py-2 relative text-gray-900 text-lg w-full"
          />
          <div className="flex justify-end">
            {/* <p style={{ fontSize: "0.8rem" }}>
                    {remainderTitle.length}/50
                  </p> */}
          </div>
          {links.map(link => {
            return (
              <div className="border border-gray-900 div flex justify-between mb-1">
                <div key={link.id} className="">
                  <input
                    type="text"
                    placeholder="Add link here"
                    onChange={e =>
                      inputOnchangeHandler(
                        link.id,
                        e.target.value.toLowerCase()
                      )
                    }
                    className="bg-transparent border-opacity-50 flex focus:outline-none focus:ring font-bold outline-none placeholder-gray-900 placeholder-opacity-50 px-3 py-2 relative text-gray-900 text-lg w-12/12"
                  />
                </div>
                <Button
                  kind="elevated"
                  className="focus:outline-none"
                  onClick={() => inputDeleteHandler(link.id)}>
                  <Svg type="deleteWhite" />
                </Button>
              </div>
            );
          })}

          <div className="div flex justify-end">
            <Button
              kind="elevated"
              className="focus:outline-none mr-1"
              onClick={() => {
                setLinks([...links, { link: "", id: uuidv4() }]);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 my-auto w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="flex mt-4">
          <div className="mr-2 outline-none">
            <Button
              kind="elevated"
              disabled={!(linkTitle.length > 0 && links[0]?.link?.length > 0)}
              className="focus:outline-none mr-4"
              onClick={() => {
                addHandler();
                cleanUpHandler();
              }}>
              Add
            </Button>
          </div>
          <div>
            <Button
              kind="elevated"
              className="focus:outline-none"
              onClick={() => {
                cleanUpHandler();
              }}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewLinkDialog;
