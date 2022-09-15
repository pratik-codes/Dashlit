import React from "react";
import Svg from "../../../common/Svg";
import { Popover, Button } from "antd";
import { useDispatch } from "react-redux";

import {
  addFavoriteService,
  deleteFavoriteService,
  deleteMyQuotesService,
  updateMyQuotesService
} from "../../../../firebase/functions/QuotesActions";
import { getMyQuotesAction } from "../../../../Redux/Actions/Quotes.actions";
import AddQuotesModal from "./AddQuotesModal";
import { triggerMessage } from "../../../common/snackbar";

import "../../../../styles/AntdStyles/Popover.css";
import { setUserActiveData } from "../../../../firebase/functions/UsersActiveData";
import { getSettingsList } from "../../../../Redux/Actions/User.actions";

interface Props {
  id: string;
  quotes: string;
  author: string;
  favourite: boolean;
  type: string;
  getFavourites: any;
}

const QuotesComponents: React.FC<Props> = ({
  id,
  quotes,
  favourite,
  type,
  getFavourites,
  author
}) => {
  const [visible, setVisible] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const dispatch = useDispatch();

  const deleteQuote = async () => {
    deleteMyQuotesService(id);
    dispatch(getMyQuotesAction());
    triggerMessage("Quote was set successfully", "success");
  };

  const favouriteClickHandler = async () => {
    addFavoriteService(id, quotes, author);
  };

  const removeFromFavourites = () => {
    console.log("removing", id);
    deleteFavoriteService(id);
    getFavourites();
    triggerMessage("Quote removed", "fail");
  };

  const contentDIV = (
    deleteQuote: any,
    editQuotes: any,
    type: String,
    favouriteClickHandler: any,
    removeFromFavourites: any
  ) => {
    return (
      <div>
        {type === "my_quotes" && (
          <div>
            <h6
              onClick={() => editQuotes(true)}
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg">
              Edit quote
            </h6>
            <h1
              onClick={() => deleteQuote()}
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg ">
              Delete quote
            </h1>
          </div>
        )}
        <h1
          onClick={async () => {
            await setUserActiveData(
              { quote: quotes, author_name: author },
              "quote"
            );
            window.location.reload();
          }}
          className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg">
          Set this quote
        </h1>
        {type === "fav_quotes" && (
          <h1
            onClick={() => removeFromFavourites()}
            className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg ">
            Remove from favourites
          </h1>
        )}
        {type !== "fav_quotes" && (
          <div>
            <h1
              onClick={() => favouriteClickHandler()}
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg">
              Add to favourite
            </h1>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="glasshover flex w-full justify-between p-4 min-h-full">
      <div className="w-11/12 break-words">
        <h1 className="font-bold text-md text-gray-900 ">"{quotes}"</h1>
        <h1 className="font-medium text-sm text-gray-900 ">- {author}</h1>
      </div>
      <div
        style={{ borderRadius: "10px" }}
        className="flex justify-end ml-4 my-auto max-w-1/12">
        <Popover
          content={() =>
            contentDIV(
              deleteQuote,
              setOpenModal,
              type,
              favouriteClickHandler,
              removeFromFavourites
            )
          }
          trigger="click">
          <button className="focus:outline-none ml-2 ">
            <Svg type="dot-dot" />
          </button>
        </Popover>
      </div>
      <AddQuotesModal
        isOpen={openModal}
        openModal={() => setOpenModal(true)}
        closeModal={() => setOpenModal(false)}
        type="edit"
        id={id}
        fav={favourite}
        quote={quotes}
        authorName={author}
      />
    </div>
  );
};

export default QuotesComponents;
