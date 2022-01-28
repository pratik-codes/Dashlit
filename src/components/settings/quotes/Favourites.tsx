import React, { useEffect } from "react";
import Loader from "../../common/Loader";
import QuotesComponents from "./QuotesComponents";

interface Props {
  favQuotesData: any;
  getFavQuotes: any;
}

const Favourites: React.FC<Props> = ({ getFavQuotes, favQuotesData }) => {
  useEffect(() => {
    getFavQuotes();
  }, [getFavQuotes]);

  return (
    <div className="w-full p-2 m-2">
      <div className="grid grid-cols-2 gap-4 w-full mb-10">
        {favQuotesData.data ? (
          favQuotesData.data.map((item: any) => {
            return (
              <div className="w-full">
                <QuotesComponents
                  id={item.id}
                  quotes={item.data.quote}
                  author={item.data.author}
                  favourite={false}
                  type="fav_quotes"
                  getFavourites={getFavQuotes}
                />
              </div>
            );
          })
        ) : (
          <Loader />
        )}
        {favQuotesData.data && favQuotesData.data.length === 0 && (
          <div className="w-full">
            <span className="font-bold text-gray-900 text-xl">
              No favorite found.
            </span>
            <span className="text-gray-900 ml-2 text-xl">
              Add quotes to you favorite list now...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
