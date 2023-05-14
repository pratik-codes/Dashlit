import { Dialog, Transition } from "@headlessui/react";
import ModalComponent from "components/common/Modal";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addMyQuotesService,
  editFavoriteService,
  updateMyQuotesService
} from "../../../../firebase/functions/QuotesActions";
import { getMyQuotesAction } from "../../../../redux/Actions/Quotes.actions";
import Button from "../../../common/button/button";
import InputComponent from "../../../common/InputComponent";

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
      <ModalComponent isOpen={isOpen} onClose={closeHandler} title={type === "add" ? "Add new quote" : "Edit quote"}>
        <InputComponent
          onChange={(e: any) => setQuotes(e.target.value)}
          value={quotes}
          type="text"
          placeholder="Add quote"
        />
        <InputComponent
          onChange={(e: any) => setAuthor(e.target.value)}
          value={author}
          type="text"
          placeholder="Add author"
        />
        <div className="flex mt-8">
          <Button
            style={{ marginRight: "10px" }}
            kind="elevated"
            className="focus:outline-none"
            onClick={addQuoteHandler}>
            Add
          </Button>
          <Button
            type="secondary"
            className="focus:outline-none"
            onClick={closeHandler}>
            Cancel
          </Button>
        </div>
      </ModalComponent>
    </div>
  );
};

export default AddQuotesModal;
