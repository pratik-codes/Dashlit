import React from "react";
import MyQuotesComponents from "./MyQuotesComponents";

const MyQuotes = () => {
  return (
    <div className="p-2 m-2">
      <div className="grid grid-cols-2 gap-4 w-full">
        <MyQuotesComponents
          id="1"
          quotes="Enthusiasm is the great hill-climber. Enthusiasm is the great hill-climber."
          favourite={false}
        />
        <MyQuotesComponents id="2" quotes="test quotes 2" favourite={true} />
        <MyQuotesComponents id="3" quotes="test quotes 3" favourite={false} />
        <MyQuotesComponents
          id="4"
          quotes="test quotes 4"
          favourite={true}
        />{" "}
        <MyQuotesComponents id="5" quotes="test quotes 5" favourite={false} />
      </div>
    </div>
  );
};

export default MyQuotes;
