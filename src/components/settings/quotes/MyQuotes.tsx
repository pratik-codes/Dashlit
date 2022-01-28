import { type } from "os";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyQuotesService } from "../../../firebase/functions/QuotesActions";
import { getMyQuotesAction } from "../../../Redux/Actions/Quotes.actions";
import { getSettingsList } from "../../../Redux/Actions/User.actions";
import { RootStore } from "../../../Redux/Store";
import Loader from "../../common/Loader";
import QuotesComponents from "./QuotesComponents";

interface Props {
  MyQuotesRedux: any;
}

const MyQuotes: React.FC<Props> = ({ MyQuotesRedux }) => {
  const [quotes, setQuotes] = useState([]);

  return (
    <div className="p-2 m-2 w-full">
      <div className="grid grid-cols-2 gap-4 w-full mb-10">
        {MyQuotesRedux.data ? (
          MyQuotesRedux.data.map((quote: any) => {
            return (
              <div className="full h-full">
                <QuotesComponents
                  id={quote.id}
                  quotes={quote.data.quote}
                  author={quote.data.author}
                  favourite={quote.data.favourite}
                  type="my_quotes"
                  getFavourites={undefined}
                />
              </div>
            );
          })
        ) : (
          <div>
            <Loader />
          </div>
        )}
        {MyQuotesRedux.data && MyQuotesRedux.data.length === 0 && (
          <div className="">
            <span className="font-bold text-gray-900 text-xl">
              No quotes found.
            </span>
            <span className="text-gray-900 ml-2 text-xl">
              Add your first quote now...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyQuotes;
