import React from "react";
import Loader from "../../../common/Loader";
import PictureComponent from "./PictureComponent";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Props {
  data: any;
}

const MyPictures: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full">
      <div className="p-2 m-2 w-full">
        <div className="grid grid-cols-3 gap-4 w-full mb-10">
          {data ? (
            data.map((quote: any) => {
              return (
                <div className="full h-full">
                  <PictureComponent data={quote} />
                </div>
              );
            })
          ) : (
            <div>
              <Loader />
            </div>
          )}
        </div>
        {data && data.length === 0 && (
          <h1 className="font-bold text-gray-900 text-lg ">
            No pictures found :(
          </h1>
        )}
      </div>
    </div>
  );
};

export default MyPictures;
