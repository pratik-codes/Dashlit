import { Popover } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addFavoriteService,
  deleteFavoriteService,
  deleteMyQuotesService
} from "../../../../firebase/functions/QuotesActions";
import { updateUserDetailsService } from "../../../../firebase/functions/UserDetailsActions";
import { setUserActiveData } from "../../../../firebase/functions/UsersActiveData";
import { getMyQuotesAction } from "../../../../Redux/Actions/Quotes.actions";
import { getSettingsList } from "../../../../Redux/Actions/User.actions";
import "../../../../styles/AntdStyles/Popover.css";
import { triggerMessage } from "../../../common/SnackBar";
import Svg from "../../../common/Svg";
import AddQuotesModal from "./AddQuotesModal";

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
    deleteFavoriteService(id);
    getFavourites();
    triggerMessage("Quote removed", "fail");
  };

  let settings_data = localStorage.getItem("user-settings");
  const settings_data_parsed = JSON.parse(settings_data || "");

  const setCurrentQuote = async (data: any) => {
    await setUserActiveData(data, "quote");
    // set the Enable public picture to false as the user want to use their own picture as background
    const settings = JSON.parse(settings_data_parsed?.settings);
    const objIndex = settings.findIndex(
      (obj: any) => obj.type === "quotes-source-settings"
    );
    if (settings[objIndex].isToggled === true) {
      settings[objIndex].isToggled = false;
      settings_data_parsed["settings"] = JSON.stringify(settings);
      if (settings_data_parsed) {
        await updateUserDetailsService(settings_data_parsed);
      }
      dispatch(getSettingsList());
    }
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
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg text-white hover:text-purple">
              Edit quote
            </h6>
            <h1
              onClick={() => deleteQuote()}
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg text-white hover:text-purple">
              Delete quote
            </h1>
          </div>
        )}
        <h1
          onClick={() => {
            setCurrentQuote({ quote: quotes, author_name: author });
          }}
          className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg text-white hover:text-purple">
          Set this quote
        </h1>
        {type === "fav_quotes" && (
          <h1
            onClick={() => removeFromFavourites()}
            className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg text-white hover:text-purple">
            Remove from favourites
          </h1>
        )}
        {type !== "fav_quotes" && (
          <div>
            <h1
              onClick={() => favouriteClickHandler()}
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg text-white hover:text-purple">
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
        <h1 className="font-bold text-md text-white ">"{quotes}"</h1>
        <h1 className="font-medium text-sm text-white ">- {author}</h1>
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
          <button className="focus:outline-none ml-2 text-white">
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
