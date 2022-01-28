import { data } from "autoprefixer";
import React from "react";
import Loader from "../../common/Loader";
import QuotesComponents from "./QuotesComponents";

interface Props {
  publicQuotesData: any;
}

const PublicQuotes: React.FC<Props> = ({ publicQuotesData }) => {
  return (
    <div className="w-full p-2 m-2">
      <div className="grid grid-cols-2 gap-4 w-full mb-10">
        {publicQuotesData.data ? (
          publicQuotesData.data.map((item: any) => {
            return (
              <div>
                <QuotesComponents
                  id={item.id}
                  quotes={item.data.quote}
                  author={item.data.author}
                  favourite={false}
                  type="public_quotes"
                  getFavourites={undefined}
                />
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default PublicQuotes;
