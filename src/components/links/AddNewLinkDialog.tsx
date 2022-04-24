import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { addLinksService } from "../../firebase/functions/LinksActions";
import SnackbarComponent from "../common/SnackbarComponent";
import { useDispatch } from "react-redux";
import { getLinksList } from "../../Redux/Actions/User.actions";
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
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#1A202C");

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
    setColor("#1A202C");
    setMessage("Link added successfully");
    setSnackbar(true);
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform glasshover rounded-lg shadow-xl border-2 border-gray-900">
                <Dialog.Title
                  as="h3"
                  className="text-xl leading-6 text-gray-900 font-bold">
                  Add new link.
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    type="text"
                    onChange={e => setLinkTitle(e.target.value)}
                    placeholder="Link title"
                    className="px-3 py-2 mt-3 mb-1 border-opacity-50  placeholder-gray-900 relative bg-transparent border border-gray-900 rounded text-gray-900 text-base outline-none focus:outline-none focus:ring w-full"
                  />
                  <div className="flex justify-end">
                    {/* <p style={{ fontSize: "0.8rem" }}>
                    {remainderTitle.length}/50
                  </p> */}
                  </div>
                  {links.map(link => {
                    return (
                      <div
                        key={link.id}
                        className="div flex justify-between mb-1 border border-gray-900 rounded">
                        <input
                          type="text"
                          placeholder="Add link here"
                          onChange={e =>
                            inputOnchangeHandler(
                              link.id,
                              e.target.value.toLowerCase()
                            )
                          }
                          className="px-3 py-2 border-opacity-50 relative bg-transparent text-gray-900 text-base outline-none focus:outline-none focus:ring w-full placeholder-gray-900"
                        />
                        <div
                          onClick={() => inputDeleteHandler(link.id)}
                          className="my-auto mx-2 pb-1 cursor-pointer">
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
                        setLinks([...links, { link: "", id: uuidv4() }]);
                      }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 my-auto"
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
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className=" mr-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 placeholder-gray-900 bg-transparent border border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
                    onClick={() => {
                      addHandler();
                      cleanUpHandler();
                    }}>
                    add
                  </button>
                  <button
                    type="button"
                    className="mr-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 placeholder-gray-900 bg-transparent border border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
                    onClick={() => {
                      cleanUpHandler();
                    }}>
                    cancel
                  </button>
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

export default AddNewLinkDialog;
