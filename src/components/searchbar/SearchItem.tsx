import React from "react";
import BookmarkIcons from "../common/BookmarkIcons";

export const SearchItem = ({ linkTitle, links, type }: any) => {
  console.log({ linkTitle, links });

  return (
    <div className="flex justify-items-end space-x-3 p-2 items-center text-white">
      <div>
        <BookmarkIcons url={links} type={type} />
      </div>

      <div className="text-lg font-bold">{linkTitle}</div>
    </div>
  );
};
