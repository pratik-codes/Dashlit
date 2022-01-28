import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addMyQuotesService,
  editFavoriteService,
  updateMyQuotesService
} from "../../../firebase/functions/QuotesActions";
import { getMyQuotesAction } from "../../../Redux/Actions/Quotes.actions";
import Svg from "../../common/Svg";

interface Props {
  isOpen: boolean;
  closeModal: any;
  openModal: any;
  type: string;
  id?: string;
  fav?: any;
  quote?: string;
  authorName?: string;
}

const AddQuotesModal: React.FC<Props> = ({
  isOpen,
  closeModal,
  openModal,
  id,
  type,
  fav,
  quote,
  authorName
}) => {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const addQuoteHandler = async () => {
    if (type === "add") {
      addMyQuotesService(quotes, author, false);
      dispatch(getMyQuotesAction());
      closeHandler();
    }
    if (type === "edit") {
      console.log("edit", quotes);
      if (id) {
        updateMyQuotesService(id, {
          quote: quotes,
          author: author,
          favourite: fav
        });
        dispatch(getMyQuotesAction());
        editFavoriteService(id, quotes);
        closeHandler();
      }
    }
  };

  const closeHandler = () => {
    closeModal();
    setAuthor("");
    setQuotes("");
  };

  useEffect(() => {
    if (quote) setQuotes(quote);
    if (authorName) setAuthor(authorName);
  }, []);

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 rounded-lg w-full h-full"
          onClose={closeHandler}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
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
              <div className="inline-block w-4/12 p-6 my-8 text-left align-middle overflow-y-auto transition-all transform shadow-xl rounded-lg glass">
                <h1 className="font-bold text-gray-900 text-lg ">
                  {type === "add" ? "Add new quote" : "Edit quote"}
                </h1>
                <input
                  onChange={e => setQuotes(e.target.value)}
                  value={quotes}
                  type="text"
                  placeholder="Add quote"
                  className="p-2 my-2 text-gray-900 border border-gray-900 flex bg-transparent focus:outline-none w-full rounded-lg"
                />
                <input
                  onChange={e => setAuthor(e.target.value)}
                  value={author}
                  type="text"
                  placeholder="Add author"
                  className="p-2 my-2 text-gray-900 border border-gray-900 flex bg-transparent focus:outline-none w-full rounded-lg"
                />
                <div className="flex">
                  <button
                    onClick={addQuoteHandler}
                    className="mx-1 mt-4 p-2 text-indigo-900 bg-transparent border border-gray-900 rounded-lg font-bold focus:outline-none ">
                    add
                  </button>
                  <button
                    onClick={closeHandler}
                    className="mx-1 mt-4  p-2 text-red-900 bg-transparent border border-gray-900 rounded-lg font-bold focus:outline-none">
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

export default AddQuotesModal;
