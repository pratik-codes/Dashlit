import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Svg from "../common/Svg";
import { updateUserLinksService } from "../../firebase/functions/LinksActions";
import { getLinksList } from "../../Redux/Actions/User.actions";
import { useDispatch } from "react-redux";
import SnackbarComponent from "../common/SnackbarComponent";

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
  // dialogbox state
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#1A202C");

  const dispatch = useDispatch();

  const editHandler = async () => {
    const data = {
      linkTitle: title,
      links: [...urls, ...linkAdded],
      type: [...urls, ...linkAdded].length > 1 ? "folder" : "link"
    };
    const res = await updateUserLinksService(id, data);
    if (res.success === true) {
      setSnackbar(true);
      setColor("#1A202C");
      setMessage("Link added successfully");
      await dispatch(getLinksList());
    } else {
      setMessage(res.error);
      setSnackbar(true);
      setColor("#600709");
    }
  };

  const cleanUpHandler = () => {
    closeModal();
    setLinkAdded([{ link: "", id: uuidv4() }]);
    setSnackbar(false);
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
    <div>
      <SnackbarComponent
        message={message}
        color={color}
        setOpen={snackbar}
        setSnackbarOpen={setSnackbar}
      />{" "}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={openModal}>
          <div className=" px-4 text-center ">
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform glasshover rounded-lg shadow-xl border-0 border-gray-900">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900 ">
                  Edit link.
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    placeholder="Link title"
                    className="px-3 py-2 mt-3 mb-1 border-opacity-50  placeholder-blueGray-300 text-blueGray-600 relative bg-transparent border border-gray-900 text-gray-900 rounded text-base  outline-none focus:outline-none focus:ring w-full"
                  />
                  {urls.map((link: any) => {
                    return (
                      <div key={link.id}>
                        <div className="div flex justify-between bg-transparent rounded border border-gray-900 text-gray-900 mb-1 cursor-pointer">
                          <div
                            className="flex"
                            onClick={() =>
                              window.open(`https://${link.link}`, "_blank")
                            }>
                            <img
                              style={{ borderRadius: "100%" }}
                              className="w-5 h-5 my-auto ml-3 "
                              src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${link.link}`}
                              alt="favicon"
                            />
                            <h1 className="px-3 py-2 border-2  border-opacity-50  placeholder-blueGray-300 text-blueGray-600 relative border-none rounded text-gray-900 text-base border-0 outline-none focus:outline-none focus:ring w-full">
                              {link.link.length > 45
                                ? `${link.link.substring(0, 45)}...`
                                : link.link}
                            </h1>
                          </div>
                          <div
                            onClick={() => linksDeleteHandler(link.id)}
                            className="my-auto mx-2 pb-1 flex justify-between ">
                            <Svg type="deleteWhite" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {linkAdded.length !== 0 &&
                    linkAdded.map((link: any) => {
                      return (
                        <div
                          key={link.id}
                          className="div flex justify-between bg-transparent rounded border border-gray-900 mb-1 cursor-pointer">
                          <input
                            placeholder="add new link"
                            onChange={e =>
                              inputOnchangeHandler(link.id, e.target.value)
                            }
                            className="px-3 py-2 mt-3 mb-1 border-opacity-50  placeholder-gray-900 relative bg-transparent border border-gray-900 rounded text-gray-900 text-base outline-none focus:outline-none focus:ring w-full"
                          />
                          <div
                            onClick={() => inputDeleteHandler(link.id)}
                            className="my-auto mx-2 pb-1 flex justify-between bg-transparent">
                            <Svg type="deleteWhite" />
                          </div>
                        </div>
                      );
                    })}

                  <div className="div flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-sm font-medium text-gray-900  border border-transparent rounded-lg mt-1 hover:glasshover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => {
                        setLinksCount(linksCount + 1);
                        setLinkAdded([
                          ...linkAdded,
                          { link: "", id: uuidv4() }
                        ]);
                      }}>
                      <Svg type="add" />
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="mr-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 placeholder-gray-900 bg-transparent border border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
                    onClick={() => {
                      editHandler();
                      closeModal();
                    }}>
                    edit
                  </button>
                  <button
                    type="button"
                    className="mr-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 placeholder-gray-900 bg-transparent border border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
                    onClick={() => {
                      closeModal();
                    }}>
                    cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
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
