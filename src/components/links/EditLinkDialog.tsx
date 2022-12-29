import { Dialog } from "@headlessui/react";
import { Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { updateUserLinksService } from "../../firebase/functions/LinksActions";
import { getLinksList } from "../../Redux/Actions/User.actions";
import Button from "../common/button/button";
import { triggerMessage } from "../common/SnackBar";
import Svg from "../common/Svg";

interface Props {
  isOpen: boolean;
  closeModal: any;
  openModal: any;
  id: string;
  linkTitle: string;
  links: any;
  type: string;
}

export interface links {
  link: string;
  id: string;
}

const EditLinkDialog: React.FC<Props> = ({
  isOpen,
  closeModal,
  openModal,
  linkTitle,
  links,
  type,
  id
}) => {
  const [title, setTitle] = useState("");
  const [urls, setUrls] = useState([]);
  const [linkAdded, setLinkAdded] = useState<any>([]);
  const [linksCount, setLinksCount] = useState(1);

  const dispatch = useDispatch();

  const editHandler = async () => {
    const data = {
      linkTitle: title,
      links: [...urls, ...linkAdded],
      type: [...urls, ...linkAdded].length > 1 ? "folder" : "link"
    };
    const res = await updateUserLinksService(id, data);
    if (res.success === true) {
      triggerMessage("Link edited successfully", "success");
      await dispatch(getLinksList());
    } else {
      triggerMessage(res.error, "fail");
    }
  };

  const inputOnchangeHandler = (inputId: string, value: string) => {
    linkAdded
      .filter((url: any) => url.id == inputId)
      .forEach((link: any) => (link.link = value.replace(/(^\w+:|^)\/\//, "")));
  };

  const inputDeleteHandler = (inputId: string) => {
    const newLinks = linkAdded.filter((link: any) => link.id !== inputId);
    setLinkAdded(newLinks);
  };

  const linksDeleteHandler = (inputId: string) => {
    const newLinks = urls.filter((link: any) => link.id !== inputId);
    setUrls(newLinks);
  };

  useEffect(() => {
    setTitle(linkTitle);
    setUrls(links);
  }, []);

  return (
    <div className="align-middle border-0 border-gray-900 glasshover inline-block max-w-md overflow-hidden p-6 rounded-lg shadow-xl text-left transform transition-all w-full">
      <Dialog.Title
        as="h3"
        className="font-bold leading-6 text-gray-900 text-xl">
        Edit link
      </Dialog.Title>
      <div className="mt-2">
        <input
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
          placeholder="Link title"
          className="bg-transparent border border-gray-900 focus:outline-none focus:ring font-bold mb-1 mt-3 outline-none p-1 placeholder-gray-900 placeholder-opacity-50 px-3 py-2 relative text-gray-900 text-lg w-full"
        />
        {urls.map((link: any) => {
          return (
            <div key={link.id}>
              <div className="bg-transparent border border-gray-900 cursor-pointer div flex justify-between mb-1 text-gray-900">
                <div
                  className="flex w-9/12"
                  onClick={() => window.open(`https://${link.link}`, "_blank")}>
                  <img
                    style={{ borderRadius: "100%" }}
                    className="h-5 ml-3 my-auto w-5"
                    src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${link.link}`}
                    alt="favicon"
                  />
                  <Tooltip title={link.link} placement="top">
                    <h1 className="border border-none border-opacity-50 break-all focus:outline-none focus:ring font-bold hover:text-blue-900 hover:underline outline-none placeholder-blueGray-300 px-3 py-2 relative rounded text-base text-blueGray-600 text-gray-900 w-full">
                      {link.link.length > 20
                        ? `${link.link.substring(0, 20)}...`
                        : link.link}
                    </h1>
                  </Tooltip>
                </div>
                <Button
                  kind="elevated"
                  className="focus:outline-none"
                  onClick={() => linksDeleteHandler(link.id)}>
                  <Svg type="deleteWhite" />
                </Button>
              </div>
            </div>
          );
        })}
        {linkAdded.length !== 0 &&
          linkAdded.map((link: any) => {
            return (
              <div
                key={link.id}
                className="bg-transparent border border-gray-900 cursor-pointer div flex justify-between mb-1 text-gray-900">
                <input
                  type="text"
                  placeholder="add new link"
                  onChange={e => inputOnchangeHandler(link.id, e.target.value)}
                  className="bg-transparent border-opacity-50 flex focus:outline-none focus:ring font-bold outline-none placeholder-gray-900 placeholder-opacity-50 px-3 py-2 relative text-gray-900 text-lg w-12/12"
                />
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
              setLinksCount(linksCount + 1);
              setLinkAdded([...linkAdded, { link: "", id: uuidv4() }]);
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
            className="focus:outline-none mr-4"
            onClick={() => {
              editHandler();
              closeModal();
            }}>
            Add
          </Button>
        </div>
        <div>
          <Button
            kind="elevated"
            className="focus:outline-none"
            onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditLinkDialog;

EditLinkDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.any,
  openModal: PropTypes.any,
  id: PropTypes.string.isRequired,
  links: PropTypes.any.isRequired,
  linkTitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
