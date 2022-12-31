import React from "react";

const BookmarkIcons = ({ url, type }: { url: string; type: string }) => {
  console.log({ url, type });
  return (
    <>
      {type === "folder" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 ml-2 my-auto text-gray-200 w-6"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ) : (
        <img
          style={{ borderRadius: "100%" }}
          className="h-5 ml-2 my-auto w-5"
          src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${url[0].link}`}
          alt="favicon"
        />
      )}
    </>
  );
};

export default BookmarkIcons;
